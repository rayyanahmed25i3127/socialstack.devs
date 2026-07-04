# Social Stack

Social Stack is a digital agency offering web development, UI/UX design, social media, and app development services. This repo contains the codebase for our agency website — both frontend and backend.

## Repo Structure

```
socialstack.devs/
├── frontend/     # React + Vite + Tailwind website
├── backend/      # Node.js/Express API
├── README.md
├── CONTRIBUTING.md
└── .gitignore
```

## Tech Stack

| Layer | Choice |
|---|---|
| UI Framework | React 18.3.1 |
| Build Tool | Vite 6.3.5 |
| Styling | Tailwind CSS v4.1.12 (via `@tailwindcss/vite`) |
| Animation | Motion (Framer Motion) v12.23.24 |
| Icons | lucide-react v0.487.0 |
| Backend | Node.js + Express |
| Database | Supabase |
| Email | Resend |
| Frontend Hosting | Vercel |
| Backend Hosting | Render |
| Package Manager | pnpm |
| Language | TypeScript file extensions (`.tsx`/`.ts`), written in plain JS style — no strict type annotations |
| Component Library | None (custom-built components only) |

### Note on Tailwind v4

The frontend uses Tailwind's new v4 architecture. There is **no `tailwind.config.js`** — configuration lives in CSS via `@theme` blocks inside `frontend/src/styles/tailwind.css`. If you're used to v3, don't look for a JS config file; it doesn't exist here.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org) (LTS version)
- [pnpm](https://pnpm.io/installation) — install with `npm install -g pnpm` if you don't have it

### Frontend

```bash
cd frontend
pnpm install
```

If you see a warning about ignored build scripts on first install, run:
```bash
pnpm approve-builds
```
and approve `@tailwindcss/oxide` and `esbuild`. This is required for Tailwind to compile correctly.

```bash
pnpm dev       # start local dev server
pnpm build     # production build, outputs to frontend/dist
pnpm preview   # preview the production build locally
```

### Backend

```bash
cd backend
npm install
cp .env.example .env   # fill in your own keys, never commit .env
npm run dev             # start with auto-restart on changes
```

Health check: `GET http://localhost:5000/api/health`

## Branching & Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for our branch structure, workflow, and commit conventions.

## Team

Muhammad Rayyan Ahmed, Fatima Akhtar, Maryam Yousaf, Muznna Majid, Anas Zahid — Software Engineering students at NUCES-FAST.

## Known Notes

- The dark/light mode SVG background image in `frontend/src/imports/` is currently ~2MB and duplicated across two folders. This should be compressed/optimized before production launch.
- No component library is used by design — all UI is hand-built with Tailwind + Motion.
