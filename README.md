# Imran Ahmed Siddiqui · Portfolio (Next.js)

One-page portfolio for a Lead SQA Automation Engineer. Built with **Next.js 15 (App Router) + React 19 + TypeScript**. No UI library: one global stylesheet with design tokens and light/dark themes.

## Quick start

```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_SITE_URL
npm run dev                  # http://localhost:3000
npm run build && npm start   # production build
```

Requires Node 18.18+ (tested on Node 22).

## Before going live

| What | Where |
| --- | --- |
| Real domain (used by canonical, Open Graph, sitemap, robots, JSON-LD) | `NEXT_PUBLIC_SITE_URL` in `.env.local` / hosting env vars |
| LinkedIn URL (adds a Contact row and JSON-LD `sameAs` when filled) | `profile.linkedin` in `src/data/profile.ts` |
| Google Search Console verification (optional) | add `verification: { google: '…' }` to `metadata` in `src/app/layout.tsx` |

Deploy: push to GitHub and import in Vercel (zero config), or any Node host with `npm run build && npm start`.

## Editing content

**All text lives in `src/data/profile.ts`**: profile, stats, highlights, skills, jobs, projects and SEO title/description/keywords. Components only render that data, so content changes never need component edits.

## Structure

```
src/
  app/
    layout.tsx            fonts (next/font), metadata, viewport, no-flash theme script
    page.tsx              composes the sections
    globals.css           tokens, light/dark themes, all component styles, responsive rules
    sitemap.ts            /sitemap.xml
    robots.ts             /robots.txt
    manifest.ts           /manifest.webmanifest
    opengraph-image.tsx   generated 1200×630 social preview image
    icon.tsx, apple-icon.tsx   generated favicons
  components/
    Nav.tsx               sticky nav, active-section highlight, photo avatar   (client)
    ThemeToggle.tsx       light/dark switch, saved in localStorage             (client)
    Hero.tsx + TestConsole.tsx   hero and the animated pytest console      (console = client)
    Impact.tsx + SkillFinder.tsx stats, highlights, recruiter keyword search (finder = client)
    Skills.tsx, Experience.tsx (+ CareerTrack, CurrentDuration), Projects.tsx, About.tsx, Contact.tsx (+ CopyButton), Footer.tsx
    SectionHead.tsx       shared section header with illustration slot
    illustrations/        5 animated line SVGs (SMIL), theme-aware via CSS classes
    JsonLd.tsx            schema.org ProfilePage + Person structured data
    MotionGuard.tsx       pauses SVG animations for prefers-reduced-motion   (client)
  data/profile.ts         ALL content + SEO copy
public/imran.webp         profile photo
```

Server components by default; only interactive pieces use `'use client'`. The page is fully static (`○ Static` in the build output).

## SEO included

- `metadata` API: title, description, keywords, canonical, robots and googleBot directives, Open Graph (`profile` type), Twitter `summary_large_image`
- Generated OG image, favicon and Apple touch icon
- `sitemap.xml`, `robots.txt`, web manifest
- JSON-LD `ProfilePage` → `Person` (jobTitle, worksFor, alumniOf, knowsAbout, address, contact)
- Semantic HTML: one `h1`, labelled sections, `nav`, `address`, `time`, `dl` for stats, ordered lists for the timeline
- Self-hosted fonts via `next/font` (no layout shift), `next/image` for the avatar, static prerender

## Accessibility & UX

- Skip link, visible focus rings, 44px touch targets, ARIA labels on icon buttons
- Light and dark themes follow the system setting until the visitor uses the toggle; the choice is applied before first paint (no flash)
- `prefers-reduced-motion`: CSS animations off, SVG animations paused, console shows the finished run
- Responsive from 320px to wide desktop with no horizontal scroll; breakpoints at 960 / 900 / 820 / 760 / 640 / 480 / 440px
- Print styles hide interactive-only UI

## Notes

- The keyword finder searches every element with the class `f` and groups matches by the nearest `[data-name]` section. Add `className="f"` to any new text that should be searchable.
- The console run in the hero is illustrative (captioned as such); the numbers in it (650 tests, 24 suites) are real.
