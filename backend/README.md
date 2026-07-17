# SocialStack Backend

## Contact Form Setup

The contact form sends email through Resend.

Create a local `.env` file from `.env.example`:

```bash
cp .env.example .env
```

Required values:

```env
PORT=5000
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=ss.socialstack@gmail.com
CONTACT_FROM_EMAIL=Social Stack <onboarding@resend.dev>
```

For production, replace `CONTACT_FROM_EMAIL` with an email from a verified Resend domain.

## Run Locally

```bash
npm install
npm run dev
```

Health check:

```bash
curl http://localhost:5000/api/health
```
