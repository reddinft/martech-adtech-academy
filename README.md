# MarTech + AdTech Academy

Research + curriculum + standalone Next.js learning app.

## Contents
- `RESEARCH_SYNTHESIS.md` — deep research summary
- `SYLLABUS.md` — module syllabus (theory + practical + case)
- `app/` — standalone learning experience

## Run locally
```bash
cd app
pnpm install
pnpm dev
```
Open http://localhost:3000

## Quality gates
From `app/`:

```bash
pnpm build
pnpm test:e2e
```

BDD acceptance specs are in `app/tests/bdd/features/`.

## Deploy flow (PR-only)
1. Create feature branch
2. Open PR to `main`
3. CI must pass (`academy-ci`: build + BDD E2E)
4. Nissan approves + merges
5. Vercel auto-deploys from `main`

If Vercel CLI is needed locally:

```bash
cd app
vercel login
vercel link
```

## Learning format
Each module includes:
1. Theory concepts
2. Practical operator lab
3. Harvard-style case with options and discussion prompts

## Git workflow
This project is tracked with milestone commits for:
- research synthesis
- syllabus and curriculum model
- app scaffold and module experience
- CI-enforced PR quality gate before merge to main
