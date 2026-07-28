import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const contactToEmail = process.env.CONTACT_TO_EMAIL || "ss.socialstack@gmail.com";
const contactFromEmail = process.env.CONTACT_FROM_EMAIL || "Social Stack <onboarding@resend.dev>";
const crmLeadsApiUrl = process.env.CRM_LEADS_API_URL || "";
const crmIntakeSecret = process.env.CRM_INTAKE_SECRET || "";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function clean(value) {
  return String(value || "").trim();
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const fullName = clean(req.body?.fullName);
  const contactNumber = clean(req.body?.contactNumber);
  const email = clean(req.body?.email).toLowerCase();
  const businessName = clean(req.body?.businessName);
  const businessType = clean(req.body?.businessType);
  const message = clean(req.body?.message);

  if (!fullName || !contactNumber || !email || !businessName || !businessType || !message) {
    return res.status(400).json({
      error: "Please fill in your full name, contact number, email, business details, and message.",
    });
  }

  if (!/^[A-Za-z\s]+$/.test(fullName)) {
    return res.status(400).json({ error: "Full name can only contain alphabets and spaces." });
  }

  if (!/^\d+$/.test(contactNumber)) {
    return res.status(400).json({ error: "Contact number can only contain digits." });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }

  if (!resend) {
    return res.status(500).json({
      error: "Server is not configured yet. Add RESEND_API_KEY in Vercel environment variables.",
    });
  }

  const emailText = [
    "New SocialStack Contact Submission",
    "",
    `Full Name: ${fullName}`,
    `Contact Number: ${contactNumber}`,
    `Email: ${email}`,
    `Business Name: ${businessName}`,
    `Business Type: ${businessType}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    if (crmLeadsApiUrl) {
      const crmRes = await fetch(crmLeadsApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: "https://www.social-stack.dev",
          ...(crmIntakeSecret ? { "x-crm-intake-secret": crmIntakeSecret } : {}),
        },
        body: JSON.stringify({
          fullName,
          contactNumber,
          email,
          businessName,
          businessType,
          message,
          source: "website",
        }),
      });

      if (!crmRes.ok) {
        const crmError = await crmRes.json().catch(() => null);
        console.error("CRM lead intake error:", crmError || crmRes.statusText);
        return res.status(502).json({
          error: "We could not save your inquiry right now. Please try again later.",
        });
      }
    }

    await resend.emails.send({
      from: contactFromEmail,
      to: contactToEmail,
      subject: `New contact form submission from ${fullName}`,
      text: emailText,
      replyTo: email,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return res.status(500).json({ error: "Something went wrong. Please try again later." });
  }
}
