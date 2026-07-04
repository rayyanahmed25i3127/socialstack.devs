# Contributing to Social Stack

This doc explains how we branch, commit, and merge work on this repo. Follow it so we don't overwrite each other's code.

## Branch Structure

- **`main`** — stable, production-ready code. Protected. Nobody pushes here directly.
- **`develop`** — integration branch. Everyone's work gets merged here first.
- **`rayyan`** — Rayyan's personal working branch.
- **`anas`** — Anas's personal working branch.
- **`muznna`** — Muznna's personal working branch.

Each person works on their own branch, off of `develop`, and opens a Pull Request (PR) back into `develop` when their work is ready.

```
main
 └── develop
      ├── rayyan
      ├── anas
      └── muznna
```

## First-Time Setup

```bash
git clone https://github.com/rayyanahmed25i3127/socialstack.devs.git
cd socialstack.devs

# frontend
cd frontend
pnpm install
cd ..

# backend
cd backend
npm install
cp .env.example .env   # fill in your own keys
cd ..
```

If this is your first `pnpm install` in `frontend/` and you see a warning about ignored build scripts, run:
```bash
pnpm approve-builds
```
and approve `@tailwindcss/oxide` and `esbuild`.

Then switch to your personal branch:
```bash
git checkout develop
git pull
git checkout -b <your-name>
git push -u origin <your-name>
```
(replace `<your-name>` with `rayyan`, `anas`, or `muznna`)

## Daily Workflow

1. **Make sure you're on your own branch:**
   ```bash
   git branch
   ```
   The branch with the `*` next to it is your current branch. If you're not on yours:
   ```bash
   git checkout <your-name>
   ```

2. **Before starting new work, pull the latest `develop` into your branch** (so you're not working on stale code):
   ```bash
   git checkout develop
   git pull
   git checkout <your-name>
   git merge develop
   ```

3. **Code, then commit normally:**
   ```bash
   git add .
   git commit -m "short description of what you did"
   git push
   ```

4. **When your feature/fix is ready, open a Pull Request** on GitHub from `<your-name>` into `develop`. Don't merge directly — let at least one other teammate glance at it first if possible, especially for anything touching shared files (routing, shared components, API calls).

5. **Once `develop` is stable and tested, a PR is opened from `develop` into `main`.**

## Commit Message Style

Keep it short and descriptive. Prefix with a type if it helps:
- `feat: add contact form validation`
- `fix: broken nav link on mobile`
- `style: adjust hero spacing`
- `chore: update dependencies`

## Rules

- **Never push directly to `main`.** It's protected and PR-only.
- **Don't force-push (`git push -f`)** to shared branches (`main`, `develop`) — this can wipe out others' commits.
- **Pull before you push.** If your push is rejected, run `git pull` first to merge in remote changes, resolve any conflicts, then push again.
- **If you're touching a file someone else is likely working on** (e.g. shared components, `App.tsx`, routing), give a heads-up in the group chat before merging into `develop`.

## Project Setup Reference

- Frontend package manager: **pnpm** (not npm or yarn — mixing lockfiles breaks installs)
- Backend package manager: **npm**
- Run frontend dev server: `cd frontend && pnpm dev`
- Build frontend for production: `cd frontend && pnpm build`
- Run backend dev server: `cd backend && npm run dev`

See `README.md` for the full tech stack and repo structure.
