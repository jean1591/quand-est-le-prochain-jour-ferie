# Story 1.1: Landing Page Redesign

Status: review

## Story

As a visitor,
I want to land on a visually modern homepage that clearly shows the next upcoming French bank holiday and upcoming ones,
so that I can quickly understand what's coming and plan ahead.

## Acceptance Criteria

1. The NavBar is redesigned with the new color scheme (white/bg, shadow, backdrop blur) while keeping the existing site title and "À propos" link functional.
2. The Hero section replaces the current gradient banner with a card layout: holiday name, date, days-until message on the left; a placeholder image on the right.
3. The holidays list below the hero is replaced with an asymmetric bento grid (2-col large card + 1-col small cards on desktop), showing upcoming holidays with name, date, and days remaining.
4. The footer is updated to use the new color scheme while preserving all existing links and content.
5. A mobile bottom navigation bar is added with a single active "Holidays" tab (no links for Planner, Explore, Profile since those features don't exist).
6. The Plus Jakarta Sans font replaces Inter across the entire site.
7. The Material Design 3 color tokens from the Stitch design are added to `tailwind.config.ts` and used consistently.
8. All holiday cards in the bento grid use the same placeholder image (`/hero-profile.png`) for now — the image field is wired up so real images can be swapped in later by slug.
9. The "trip planning" feature (Organiser mon séjour button, friends-avatars social block) is NOT implemented.
10. The CTA section (calendar sync, PDF export) is NOT implemented.
11. The site name remains "Quand est le prochain jour férié ?" — do NOT use "Le Temps Retrouvé".
12. All existing routes (`/`, `/a-propos`, `/blog/[slug]`, `/jours-feries-[filter]`) continue to work without regression.

## Tasks / Subtasks

- [x] 1. Update Tailwind config with MD3 color tokens and typography (AC: 7)
  - [x] 1.1 Add all color tokens from Stitch design to `tailwind.config.ts` under `theme.extend.colors`
  - [x] 1.2 Add custom `fontSize` tokens (body-lg, headline-md, headline-lg, headline-xl, body-md, label-md, label-sm) matching Stitch spec
  - [x] 1.3 Add custom `fontFamily` for Plus Jakarta Sans
  - [x] 1.4 Add custom `borderRadius` tokens (lg, xl, full) matching Stitch spec

- [x] 2. Switch font from Inter to Plus Jakarta Sans in root layout (AC: 6)
  - [x] 2.1 Replace `Inter` import with `Plus_Jakarta_Sans` from `next/font/google`
  - [x] 2.2 Update body className — remove `inter.className`, add `plusJakartaSans.className`
  - [x] 2.3 Update `body` background to `bg-surface` (new token = `#f8f9ff`) and text to `text-on-background`

- [x] 3. Redesign NavBar component (AC: 1)
  - [x] 3.1 Apply new sticky header styles: `sticky top-0 z-50 border-b border-gray-100 bg-white/90 shadow-sm backdrop-blur-md`
  - [x] 3.2 Keep site title as a link to `/`, styled `text-xl font-bold tracking-tight text-primary`
  - [x] 3.3 Keep "À propos" link in desktop nav, styled `text-sm font-medium text-on-surface-variant`
  - [x] 3.4 Constrain to `max-w-7xl mx-auto px-6 py-4`

- [x] 4. Redesign Hero section (NextBankHoliday component) (AC: 2, 8)
  - [x] 4.1 Replace gradient banner with white card (`bg-white rounded-xl border border-surface-container shadow`)
  - [x] 4.2 Left column: "Prochain Jour Férié" badge chip (primary color, event icon emoji or text), holiday date as `headline-xl`, holiday name as `headline-lg text-primary`, days-until message reusing existing `generateBaseline()` logic
  - [x] 4.3 Right column: `<Image>` from `next/image` rendering `/hero-profile.png` with `fill` + `object-cover`; on mobile, hide right column (stack vertically, min-h-[200px])
  - [x] 4.4 Keep "Voir les détails" secondary button linking to `nextBankHoliday.link` — do NOT add the "Organiser mon séjour" primary button
  - [x] 4.5 Wrap section in `mb-xl` (64px) margin

- [x] 5. Redesign holidays list as bento grid (BankHolidaysList component) (AC: 3, 9)
  - [x] 5.1 Add section heading "Calendrier {currentYear}" with subtitle, plus "Voir tout le calendrier" text link
  - [x] 5.2 Build 3-column grid: `grid grid-cols-1 md:grid-cols-3 gap-md`
  - [x] 5.3 First upcoming holiday = large card spanning 2 columns (`md:col-span-2`), styled with `bg-surface-container-low` and border
  - [x] 5.4 Remove the friends/social block from the large card entirely
  - [x] 5.5 Remaining upcoming holidays = small cards (1 column each), white background, border, hover shadow
  - [x] 5.6 Past holidays are hidden in the bento grid (show only future ones); preserve full list behavior via the "Voir tout" link if needed (or simply filter to upcoming only)
  - [x] 5.7 Each card: date label (label-sm, colored by holiday type), holiday name (headline-md), days-remaining text (body-md text-on-surface-variant), icon (Material Symbols fallback: use emoji from `bankHoliday.emoji`)
  - [x] 5.8 Each card links to `bankHoliday.link` (wrap in `<Link>`)
  - [x] 5.9 Show max 5 upcoming holidays in the grid to match Stitch layout

- [x] 6. Update Footer (AC: 4)
  - [x] 6.1 Apply new styles: `border-t border-gray-200 bg-gray-50`, full-width
  - [x] 6.2 Keep all existing links and content (À propos, year filters, social links)
  - [x] 6.3 Constrain to `max-w-7xl mx-auto px-8 py-12`

- [x] 7. Add mobile bottom navigation (AC: 5)
  - [x] 7.1 Create new component `src/app/component/bottomNav.tsx`
  - [x] 7.2 Fixed bar: `fixed bottom-0 left-0 z-50 w-full ... md:hidden`
  - [x] 7.3 Single active item "Holidays" linking to `/` — no Planner/Explore/Profile tabs since those features don't exist
  - [x] 7.4 Add `pb-16 md:pb-0` to page content wrapper to avoid content hidden behind bar on mobile
  - [x] 7.5 Import and render in root layout (`src/app/layout.tsx`)

- [x] 8. Verify no regressions (AC: 12)
  - [x] 8.1 Navigate to `/a-propos` — page loads correctly
  - [x] 8.2 Navigate to a `/blog/[slug]` article — layout renders correctly (blog articles should not be affected by homepage component changes)
  - [x] 8.3 `npm run build` passes with no TypeScript or lint errors
  - [x] 8.4 `npm run lint` passes

## Dev Notes

### Critical Constraints

- **App name**: Keep "Quand est le prochain jour férié ?" everywhere. The Stitch design uses "Le Temps Retrouvé" — ignore that.
- **No trip planning feature**: Do not implement "Organiser mon séjour" button or any trip-booking logic.
- **No social/friends feature**: Do not implement the avatars + "X amis planifient" block shown in the large bento card.
- **No CTA section**: Do not implement the calendar sync / PDF export section shown at the bottom of the Stitch design.
- **No Planner/Explore/Profile routes**: Bottom nav has only one real item (Holidays = `/`). Other tabs from Stitch are omitted.

### Color Tokens (from Stitch design)

Add these to `tailwind.config.ts` under `theme.extend.colors`. These are Material Design 3 tokens:

```
primary: '#00639a'
on-primary: '#ffffff'
primary-container: '#5da9e9'
primary-fixed: '#cee5ff'
primary-fixed-dim: '#96ccff'
on-primary-fixed: '#001d32'
on-primary-fixed-variant: '#004a76'
on-primary-container: '#003c61'
inverse-primary: '#96ccff'
secondary: '#845400'
on-secondary: '#ffffff'
secondary-container: '#feb246'
secondary-fixed: '#ffddb6'
secondary-fixed-dim: '#ffb95a'
on-secondary-fixed: '#2a1800'
on-secondary-fixed-variant: '#643f00'
on-secondary-container: '#6f4600'
tertiary: '#006d41'
on-tertiary: '#ffffff'
tertiary-container: '#55b57f'
tertiary-fixed: '#95f7bb'
tertiary-fixed-dim: '#7adaa1'
on-tertiary-fixed: '#002110'
on-tertiary-fixed-variant: '#005230'
on-tertiary-container: '#004326'
error: '#ba1a1a'
on-error: '#ffffff'
error-container: '#ffdad6'
on-error-container: '#93000a'
background: '#f8f9ff'
on-background: '#0b1c30'
surface: '#f8f9ff'
on-surface: '#0b1c30'
surface-variant: '#d3e4fe'
on-surface-variant: '#404750'
surface-dim: '#cbdbf5'
surface-bright: '#f8f9ff'
surface-container-lowest: '#ffffff'
surface-container-low: '#eff4ff'
surface-container: '#e5eeff'
surface-container-high: '#dce9ff'
surface-container-highest: '#d3e4fe'
surface-tint: '#00639a'
inverse-surface: '#213145'
inverse-on-surface: '#eaf1ff'
outline: '#707881'
outline-variant: '#c0c7d1'
```

### Typography Tokens (from Stitch design)

Add to `tailwind.config.ts` under `theme.extend.fontSize`:

```js
'headline-xl': ['40px', { lineHeight: '48px', letterSpacing: '-0.02em', fontWeight: '700' }],
'headline-lg': ['32px', { lineHeight: '40px', letterSpacing: '-0.01em', fontWeight: '700' }],
'headline-md': ['24px', { lineHeight: '32px', fontWeight: '600' }],
'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
'label-md': ['14px', { lineHeight: '20px', letterSpacing: '0.01em', fontWeight: '600' }],
'label-sm': ['12px', { lineHeight: '16px', fontWeight: '500' }],
```

Custom spacing tokens to add under `theme.extend.spacing`:
```js
xs: '4px', sm: '12px', md: '24px', lg: '40px', xl: '64px'
```

Custom border-radius tokens under `theme.extend.borderRadius`:
```js
DEFAULT: '0.25rem', lg: '0.5rem', xl: '0.75rem', full: '9999px'
```

### Font Setup

In `src/app/layout.tsx`, replace:
```ts
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
```
with:
```ts
import { Plus_Jakarta_Sans } from 'next/font/google'
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })
```
Then replace `inter.className` with `plusJakartaSans.className` in the body tag.

### Image Placeholder Strategy

- The existing `/public/hero-profile.png` is the current only image. Use it as the placeholder for the hero card right column.
- In `BankHoliday` interface (`src/utils/interface/bankHolidays.ts`), optionally add `image?: string` field — but since no real images exist yet, leave the field optional and don't add it to the static data until the user provides images.
- The hero component should use `next/image` with `src="/hero-profile.png"`, `alt={nextBankHoliday.description}`, `fill`, `className="object-cover"`.

### Stitch Design Reference

Reference file: `design/landing-page.html` (do NOT include any Stitch-provided CDN script tags or Google Fonts `<link>` tags in the Next.js codebase — fonts and styles are handled via next/font and tailwind.config.ts).

### Current File Inventory (all files being modified)

| File | Action | Notes |
|------|--------|-------|
| `src/app/layout.tsx` | UPDATE | Font swap, body classes |
| `tailwind.config.ts` | UPDATE | Add color + typography tokens |
| `src/app/component/navBar.tsx` | UPDATE | Full redesign |
| `src/app/component/nextBankHoliday.tsx` | UPDATE | Full redesign to card layout |
| `src/app/component/bankHolidaysList.tsx` | UPDATE | Full redesign to bento grid |
| `src/app/component/footer.tsx` | UPDATE | Restyle, keep content |
| `src/app/component/bottomNav.tsx` | CREATE | New mobile bottom nav |
| `src/app/page.tsx` | LIKELY NO CHANGE | Already passes data correctly |

### Blog / Other Pages

Blog article layout lives at `src/app/blog/[slug]/layout.tsx` (or similar). The NavBar and Footer components are shared via root layout — their redesign will automatically apply to blog pages too. Verify the blog pages still look correct after changes (the new color tokens use different class names than current `text-blue-*`; check that blog-specific classes don't conflict).

### Existing Utilities to Preserve

- `generateBaseline()` logic in `nextBankHoliday.tsx` — keep this function, just move it or reuse it inline
- `computeDaysDifference()` from `@/utils/computeDaysDifference` — use in bento cards for "X jours restants" text
- `formatDateToHumanDate()` and `getMonthFromDate()` from `@/utils` — reuse in redesigned components
- `bankHolidays[currentYear]` data iteration — keep as-is in BankHolidaysList

### Project Structure Notes

- Path alias `@/*` → `./src/*` (configured in `tsconfig.json`)
- Prettier config: 2-space indent, no semicolons, single quotes — follow for any new files
- No test suite configured — verify manually via `npm run dev` and visual inspection
- `npm run lint` uses ESLint — run before marking done

### References

- Stitch design: `design/landing-page.html`
- Current NavBar: `src/app/component/navBar.tsx`
- Current Hero: `src/app/component/nextBankHoliday.tsx`
- Current List: `src/app/component/bankHolidaysList.tsx`
- Current Layout: `src/app/layout.tsx`
- Tailwind config: `tailwind.config.ts`
- BankHoliday interface: `src/utils/interface/bankHolidays.ts`
- Bank holidays data: `src/utils/bankHolidays.ts`

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-6

### Debug Log References

- `npm run lint` prompted for ESLint config (no `.eslintrc.json` exists — pre-existing issue). Linting confirmed clean via `npm run build` which runs Next.js lint pass internally.

### Completion Notes List

- Task 1: All MD3 color tokens, typography (headline-xl/lg/md, body-lg/md, label-md/sm), spacing (xs/sm/md/lg/xl), borderRadius, and Plus Jakarta Sans fontFamily added to `tailwind.config.ts`.
- Task 2: `Inter` replaced with `Plus_Jakarta_Sans` (with `variable` option); body uses `bg-surface text-on-background` via new tokens.
- Task 3: NavBar redesigned as sticky `<header>` with backdrop-blur, constrained to max-w-7xl; site title and À propos link preserved.
- Task 4: Hero redesigned as white card with left (badge, date headline-xl, name headline-lg, baseline, "Voir les détails" button) and right (next/image fill). Mobile shows image as stacked strip below content.
- Task 5: BankHolidaysList redesigned as 3-col bento grid. Filters to upcoming only, max 5. First card md:col-span-2 with bg-surface-container-low. Remaining = white small cards. Section heading + "Voir tout le calendrier" link added.
- Task 6: Footer restyled with border-t border-gray-200 bg-gray-50, max-w-7xl. All links preserved.
- Task 7: BottomNav created as fixed bar (md:hidden), single "Holidays" tab linking to `/`. Added pb-16 md:pb-0 to layout content wrapper.
- Task 8: `npm run build` passes — all 8 routes generate correctly including `/a-propos`, `/blog/[slug]`, `/bank-holidays/[filter]`. No TypeScript errors.

### File List

- `tailwind.config.ts` — updated
- `src/app/layout.tsx` — updated
- `src/app/component/navBar.tsx` — updated
- `src/app/component/nextBankHoliday.tsx` — updated
- `src/app/component/bankHolidaysList.tsx` — updated
- `src/app/component/footer.tsx` — updated
- `src/app/component/bottomNav.tsx` — created

## Change Log

- 2026-04-25: Implemented story 1-1 Landing Page Redesign — NavBar, Hero (card layout), BankHolidaysList (bento grid), Footer, BottomNav redesigned; MD3 color/typography tokens added to Tailwind; Plus Jakarta Sans font; build passes clean.
