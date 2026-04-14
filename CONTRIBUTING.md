# Contributing to Saairahfeed

## Requirements
- Node.js + npm installed (LTS recommended)
- Git

## Setup
1. Install deps: `npm install`
2. Run dev server: `npm run dev`
3. Build check before pushing: `npm run build`

## Collaboration rules
- **Do not commit** `node_modules/` (it’s ignored via `.gitignore`).
- **Do commit** `package-lock.json` (keeps installs reproducible).
- Keep changes focused to the task you’re working on; avoid drive-by refactors.
- If you add environment variables, also add a safe stub to `.env.example` (never commit real secrets).

## Branch / PR hygiene
- Use feature branches: `feat/...`, `fix/...`, `chore/...`
- Prefer small PRs that are easy to review.

