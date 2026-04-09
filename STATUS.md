# STATUS: MarTech + AdTech Academy
_Last updated: 2026-04-10 06:51 AEST by Loki_

## 🔖 RESUME FROM HERE
- **Next action:** Nissan review PR #6 and merge if approved.
- **Waiting on:** Nissan PR review for `feat/full-module-content-expansion`.
- **Last discussed:** PR #6 is open with E2E fully green (10/10).

## 📍 Current Phase
**Phase:** Phase 2 — Prototype Delivered (Research + Curriculum + App)  
**Status:** 🟢 Active  
**Target date:** 2026-04-09

## 🗂️ Key Files
- Status: `projects/martech-adtech-academy/STATUS.md`
- Research synthesis: `projects/martech-adtech-academy/RESEARCH_SYNTHESIS.md`
- Syllabus: `projects/martech-adtech-academy/SYLLABUS.md`
- App: `projects/martech-adtech-academy/app/`
- Plan: `projects/martech-adtech-academy/BUILD_PLAN.md`
- Repo: `https://github.com/nissan/martech-adtech-academy`

## 🧠 Key Decisions (immutable log)
- 2026-04-10: Opened PR #6 (`feat: full module content expansion + E2E stabilization`) from `feat/full-module-content-expansion` after revalidation; includes expanded curriculum/quizzes/real-cases plus fixed BDD flows. URL: https://github.com/nissan/martech-adtech-academy/pull/6
- 2026-04-10: Fixed the 2 failing Playwright tests by aligning BDD flows to current UI behavior (completion checkbox toggles into status state, quiz submit requires selected answers first). Local `pnpm -C app test:e2e` is now 10/10 passing.
- 2026-04-10: Full 10-module content expansion landed on branch `feat/full-module-content-expansion` (curriculum, quizzes, real cases, rubric, BDD selector updates). Local build passes; E2E at 8/10 so PR is intentionally held until 2 failing tests are fixed.
- 2026-04-09: Corrected scope drift: removed Solana video-augmentation work from MarTech app and moved implementation into dedicated `projects/solana-academy`.
- 2026-04-09: Implemented Phase 1 UX refresh pass (design tokens, premium shell styling, hero/CTA hierarchy, onboarding banner polish, module card hierarchy, module step cues, quiz option affordances)
- 2026-04-09: Resolved PR #4 rebase conflicts against latest `main`; reran validations successfully (`pnpm -C app build`, `pnpm -C app test:e2e` 7/7)
- 2026-04-09: Security patch applied: upgraded Next.js from 15.2.2 to 16.2.1 and revalidated build + BDD E2E before PR
- 2026-04-09: Added first-time onboarding tracking (`localStorage`) with homepage onboarding prompt, dismiss/seen persistence, and `/onboarding` path; BDD suite expanded for first-run behavior
- 2026-04-09: Added GitHub Actions CI gate (`academy-ci`) to enforce app build + BDD E2E on PR/main; updated README deploy flow
- 2026-04-09: PR #1 merged to `main`; post-merge local smoke passed (`pnpm -C app build` + `pnpm -C app test:e2e` 4/4)
- 2026-04-09: Added BDD deployment gate with Playwright E2E (feature + executable scenarios) and opened PR #1 for review
- 2026-04-09: Repo ownership transferred; all future changes must be feature-branch + PR for Nissan approval before merge/deploy
- 2026-04-09: Completed content QA pass: converted module case prompts/discussion questions to cold-call Harvard format in syllabus + app curriculum; build re-validated
- 2026-04-09: Project conversation migrated to Telegram group `-5206481545`; context handoff posted and group set as primary continuation thread
- 2026-04-09: Added real-world case pack (`CASE_STUDIES.md`) and module-level real-company exercises (Booking.com, Airbnb, Netflix, HubSpot ecosystem, NYT/IAB standards, Snowplow, Amazon Ads)
- 2026-04-09: Localhost smoke test completed (`pnpm dev` + route checks for `/`, `/module/industry-map`, `/module/measurement`)
- 2026-04-09: Phase 2 shipped — added checkpoint quizzes and local case memo workspace with markdown export per module
- 2026-04-09: Live deploy attempt blocked by missing/invalid CLI auth tokens (Vercel/Fly); app is build-verified locally
- 2026-04-09: GitHub repo created `reddinft/martech-adtech-academy`; Nissan (`github.com/nissan`) invited as admin collaborator
- 2026-04-09: Standalone Next.js app implemented with 10 modules, Harvard-case sections, and local progress tracking
- 2026-04-09: Research and syllabus delivered in markdown artifacts (`RESEARCH_SYNTHESIS.md`, `SYLLABUS.md`)
- 2026-04-09: New project created to deliver deep MarTech/AdTech upskilling with practical implementation
- 2026-04-09: Delivery format chosen: Harvard-style case modules + standalone Next.js guided learning app

## ⚠️ Blockers & Flags
- [ ] Waiting on PR review/merge: https://github.com/nissan/martech-adtech-academy/pull/6
- [ ] Deployment blocked until auth is refreshed: Vercel token invalid (`vercel --yes` failed)
- [ ] Optional fallback: Fly token missing (`flyctl auth whoami` failed)

## 📋 Agent Notes
- **Loki:** Reverted accidental Solana-related MarTech changes; resumed clean MarTech project scope.
