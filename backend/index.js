import express from 'express';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Social Stack backend is running' });
});

// Contact Us form submission
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email, and message are required' });
  }

  if (!supabase || !resend) {
    return res.status(500).json({
      error: 'Server is not configured yet. Add SUPABASE_URL, SUPABASE_ANON_KEY, and RESEND_API_KEY to your .env file.',
    });
  }

  try {
    // 1. Save submission to Supabase
    const { error: dbError } = await supabase
      .from('contact_submissions')
      .insert([{ name, email, message }]);

    if (dbError) throw dbError;

    // 2. Send notification email via Resend
    await resend.emails.send({
      from: 'Social Stack <onboarding@resend.dev>', // replace with your verified domain sender
      to: 'your-team-inbox@example.com', // replace with the real inbox this should land in
      subject: `New contact form submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Contact form error:', err);
    res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
