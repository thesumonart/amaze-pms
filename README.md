# Amaze PMS — Marketing Site

Premium marketing website for **Amaze Property Management Solutions Pvt Ltd** (a division of Action Group) — integrated facility management across Hyderabad, Bangalore, Chennai and pan-India since 2001.

Single-page experience: hero → client trust strip → services bento → why Amaze → process timeline → coverage → testimonials → tech-enabled ops → CTA → footer. Everything below the fold is `next/dynamic`-loaded; the whole site prerenders as static content (`/` and `/_not-found`, no server runtime, no data fetching).

## Stack

- **Next.js 16 (App Router, Turbopack)** + React 19, TypeScript strict, **pnpm**
- **Tailwind CSS v4** — CSS-first tokens via `@theme` in `src/styles/globals.css` (no `tailwind.config.js`)
- **Biome** for lint + import organisation (`pnpm lint`) · **Prettier** + `prettier-plugin-tailwindcss` for formatting and class sorting (see note below)
- **shadcn/ui** primitives on the unified `radix-ui` package, `radix-nova` style — button, sheet, tabs, accordion, tooltip, badge, dialog — restyled through semantic tokens
- **Animation:** [Motion](https://motion.dev) for micro-interactions and scroll reveals · **GSAP + ScrollTrigger** for the pinned process timeline · **Lenis** for smooth scroll
- **Recharts** for the tech-ops MIS dashboard · **Swiper** for the testimonials carousel
- **lucide-react** icons · **Geist Sans / Geist Mono** via `next/font/google`

> **Formatter conflict:** the source is Prettier-formatted (single quotes, per `.prettierrc`) but `biome.json` leaves Biome's own formatter enabled at its defaults (double quotes). `pnpm lint` therefore reports ~55 formatter diffs and `pnpm format` (`biome format --write`) would undo the Prettier style. No lint *rules* fail. Pick one formatter before this bites — either set `"formatter": { "enabled": false }` in `biome.json`, or align Biome's `javascript.formatter.quoteStyle` to `"single"` and drop Prettier.

## Getting started

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build
pnpm start    # serve the production build
pnpm lint     # biome check
pnpm format   # biome format --write
```

No environment variables are required — nothing reads `process.env`, there is no `.env.example`, and `next.config.ts` carries no options. All copy and contact details live in `src/data/*`.

## Structure

```
src/
├── app/            # layout (fonts, metadata, providers), page (scene composition + JSON-LD)
├── components/
│   ├── layouts/    # navbar + mega menu, mobile sheet nav, logo, footer, newsletter form
│   ├── scenes/     # one folder per page section (hero, services, process, …)
│   ├── shared/     # reveal-on-scroll, marquee, magnetic button, counter, tilt, section heading, motion tokens
│   └── ui/         # shadcn primitives
├── data/           # all copy/content as typed data (site, brand, nav, services, stats, clients, coverage, process, testimonials, hero)
├── hooks/          # lenis provider, anchor scroll, media query, mouse position, isomorphic layout effect
├── lib/            # gsap registration, cn(), service-dialog event bus
├── styles/         # globals.css — brand tokens, utilities, keyframes
└── types/          # shared interfaces
```

`public/` holds the logo (`images/logo.webp`), favicon (`icons/favicon.webp`) and twelve client wordmarks (`images/clients/client1–12.webp`).

## Conventions

- Server Components by default; `'use client'` only where hooks/interactivity require it.
- Content lives in `src/data/*` — components never hard-code copy.
- One pinned GSAP scene only (process timeline, desktop ≥1024px); everything else uses Motion's `whileInView` via `Reveal` / `RevealGroup`.
- Motion constants (easing, durations, viewport margins, shared variants) come from `src/components/shared/motion.ts` — don't inline magic curves.
- Navbar and services dialog talk through the `amaze:open-service` window event (`src/lib/service-bus.ts`) rather than shared React state.
- In-page anchors go through `useAnchorScroll`, which routes to Lenis when active and falls back to native scrolling (respecting `scroll-margin-top`) otherwise.
- `prefers-reduced-motion` disables Lenis, GSAP pinning/scrubbing, marquee, magnetic pull and the CSS keyframe animations — opacity fades remain (via `MotionConfig reducedMotion="user"` + a `@media (prefers-reduced-motion: reduce)` block in `globals.css`).
- Mobile (<1024px) skips GSAP pinning and renders the process steps as a plain vertical timeline.

## Before launch

- Replace placeholder contact details (phone/address in `src/data/site.ts`) — JSON-LD must match the Google Business Profile.
- Swap representative testimonials (`src/data/testimonials.ts`) for client-approved quotes.
- Wire `NewsletterForm` (`src/components/layouts/newsletter-form.tsx`) to the client's ESP/CRM — it currently only flips to a local success state.
- Add a real OG image at `public/images/og.png` (1200×630) and reference it in `src/app/layout.tsx` metadata — `openGraph` has no `images` entry yet, so `summary_large_image` has nothing to show.
- Supply a dark-background logo variant: `logoDark` and `logoMark` in `src/data/brand.ts` are `null`, so `Logo` falls back to a `brightness-0 invert` knockout of the light mark on dark surfaces.
- Brand palette in `globals.css` is a premium interpretation — swap exact hex values if brand assets arrive.
- Resolve the Biome/Prettier formatter conflict above so `pnpm lint` is green in CI.

## Unused modules

Present and building, but not imported anywhere — keep or prune deliberately:
`src/data/hero.ts` (`heroStats`, `heroSignals`, `CHECKPOINTS_BASELINE` — built for a hero stats/live-signal panel the current hero doesn't render), `src/components/shared/tilt-card.tsx`, `src/components/ui/tabs.tsx`, `src/hooks/use-mouse-position.ts`, `src/hooks/use-media-query.ts`, `src/hooks/use-isomorphic-layout-effect.ts`.
