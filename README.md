# Social Stack

Social Stack is a digital agency offering web development, UI/UX design, social media, and app development services. This repo contains the codebase for our agency website.

# Team

Muhammad Rayyan Ahmed
Fatima Akhtar
Maryam Yousaf
Muznna Majid
Anas Zahid

## Tech Stack

| Layer | Choice |
|---|---|
| UI Framework | React 18.3.1 |
| Build Tool | Vite 6.3.5 |
| Styling | Tailwind CSS v4.1.12 (via `@tailwindcss/vite`) |
| Animation | Motion (Framer Motion) v12.23.24 |
| Icons | lucide-react v0.487.0 |
| Package Manager | pnpm |
| Language | TypeScript file extensions (`.tsx`/`.ts`), written in plain JS style — no strict type annotations |
| Component Library | None (custom-built components only) |

### Note on Tailwind v4

This project uses Tailwind's new v4 architecture. There is **no `tailwind.config.js`** — configuration lives in CSS via `@theme` blocks inside `src/styles/tailwind.css`. If you're used to v3, don't look for a JS config file; it doesn't exist here.

## Project Structure

```
src/
├── app/
│   ├── App.tsx                  # Main app component
│   └── components/
│       └── figma/
│           └── ImageWithFallback.tsx
├── imports/                     # Figma-exported components (dark/light theme SVGs, etc.)
│   ├── DFaQs-1/
│   └── LightFaQs/
├── styles/
│   ├── index.css                # Entry point, imports the rest
│   ├── tailwind.css             # Tailwind v4 config + tw-animate-css
│   ├── theme.css
│   └── fonts.css
└── main.tsx                     # React entry point
```

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org) (LTS version)
- [pnpm](https://pnpm.io/installation) — install with `npm install -g pnpm` if you don't have it

### Setup

```bash
git clone https://github.com/<your-username>/social-stack.git
cd social-stack
pnpm install
```

If you see a warning about ignored build scripts on first install, run:
```bash
pnpm approve-builds
```
and approve `@tailwindcss/oxide` and `esbuild`. This is required for Tailwind to compile correctly.

### Development

```bash
pnpm dev
```
Starts the local dev server (Vite will print the local URL, usually `http://localhost:5173`).

### Production Build

```bash
pnpm build
```
Outputs a production build to `dist/`.

```bash
pnpm preview
```
Preview the production build locally before deploying.

## Branching

- `main` — stable/production
- `develop` — integration branch
- `feature/<name>` — individual work, branched off `develop`

Open a PR into `develop` when a feature is ready; `main` is protected and only updated via reviewed merges.

## Known Notes

- The dark/light mode SVG background image is currently ~2MB and duplicated across two folders (`imports/DFaQs-1` and `imports/LightFaQs`). This should be compressed/optimized before production launch.
- No component library is used by design — all UI is hand-built with Tailwind + Motion.
