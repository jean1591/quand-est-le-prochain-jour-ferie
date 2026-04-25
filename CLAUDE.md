# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # ESLint
```

No test suite is configured.

## Architecture

Next.js 14 App Router site for French bank holidays. French audience, lang="fr".

**Stack:** Next.js 14, TypeScript, Tailwind CSS, date-fns, @headlessui/react. Redux is installed but unused.

**Routing:**
- `/` — Homepage (next upcoming holiday + full list)
- `/a-propos` — About page
- `/jours-feries-[filter]` — Rewrites to `/bank-holidays/[filter]` via `next.config.mjs`
- `/blog/[slug]` — Per-holiday articles

**Data:** All bank holidays are hardcoded in `src/utils/bankHolidays.ts` (static objects, 2024–2027). No database or CMS. Movable dates (Easter, Ascension, Pentecôte) are computed per year and stored statically. Adding a new year requires updating this file.

**Blog articles** are React components (not markdown) at `src/app/blog/[slug]/components/` — one component per holiday slug.

**Path alias:** `@/*` → `./src/`

**Formatting:** Prettier with Tailwind plugin — 2-space indent, no semicolons, single quotes.
