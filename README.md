# Amaze PMS — Marketing Site

Premium marketing website for **Amaze Property Management Solutions Pvt Ltd** (a division of Action Group) — integrated facility management across Hyderabad, Bangalore, Chennai and pan-India since 2001.

Single-page experience: hero → client trust strip → services bento → why Amaze → process timeline → coverage → testimonials → tech-enabled ops → CTA → footer.

## Stack

- **Next.js (App Router)** + TypeScript strict, **pnpm**
- **Tailwind CSS v4** — CSS-first tokens via `@theme` in `src/styles/globals.css` (no `tailwind.config.js`)
- **Biome** for lint + format (`pnpm lint`, `pnpm format`)
- **shadcn/ui** primitives (button, sheet, tabs, accordion, tooltip, badge, dialog), restyled through semantic tokens
- **Animation:** [Motion](https://motion.dev) for micro-interactions and scroll reveals · **GSAP + ScrollTrigger** for the pinned process timeline and hero exit · **Lenis** for smooth scroll
- **lucide-react** icons · **Geist Sans / Geist Mono** via `next/font/google`

## Getting started

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build
pnpm lint     # biome check
```

## Structure

```
src/
├── app/            # layout (fonts, metadata, providers), page (scene composition + JSON-LD)
├── components/
│   ├── layouts/    # navbar + mega menu, mobile sheet nav, footer
│   ├── scenes/     # one folder per page section (hero, services, process, …)
│   ├── shared/     # reveal-on-scroll, marquee, magnetic button, counter, tilt, hooks
│   └── ui/         # shadcn primitives
├── data/           # all copy/content as typed data (services, stats, testimonials, site)
├── lib/            # gsap registration, cn(), service-dialog event bus
├── styles/         # globals.css — brand tokens, utilities, keyframes
└── types/          # shared interfaces
```

## Conventions

- Server Components by default; `"use client"` only where hooks/interactivity require it.
- Content lives in `src/data/*` — components never hard-code copy.
- One pinned GSAP scene only (process timeline); everything else uses Motion's `whileInView`.
- `prefers-reduced-motion` disables Lenis, GSAP pinning/scrubbing, marquee, cursor blob, magnetic pull and tilt — opacity fades remain (via `MotionConfig reducedMotion="user"` + CSS).
- Mobile (<1024px) skips GSAP pinning and the cursor-follow blob.

## Before launch

- Replace placeholder contact details (phone/address in `src/data/site.ts`) — JSON-LD must match the Google Business Profile.
- Swap placeholder client wordmarks (`src/data/clients.ts`) and representative testimonials for approved ones.
- Add a real OG image at `public/images/og.png` (1200×630) and reference it in `src/app/layout.tsx` metadata.
- Brand palette in `globals.css` is a premium interpretation — swap exact hex values if brand assets arrive.
