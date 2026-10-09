# RepliHQ — marketing site

Single-page marketing site for RepliHQ (done-for-you cold email), plus `/privacy` and `/terms`.

**Stack:** Next.js 16 (App Router, Cache Components) · TypeScript · Tailwind CSS v4 · shadcn/ui (Radix) · Motion · Lenis · Lucide · Calendly embed

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build && npm start
```

## Editing content

**All copy lives in [`src/content/site.ts`](src/content/site.ts).** Components only render it.

- Search the repo for `TODO` to find every placeholder.
- Sections with `placeholder: true` (logos, results, testimonials, legal) show a visible
  amber "Placeholder" label on the page until you set it to `false`, so unfinished content
  can't ship unnoticed.
- The booking widget reads `site.booking.url` (your Calendly event link).

## Project layout

```
src/
  app/                 routes, metadata, OG image, icons, sitemap, robots, manifest
  content/site.ts      ← all copy
  components/
    sections/          one file per landing-page section (hero, faq, …)
    site/              nav, footer, logo, shared layout primitives
    motion/            Reveal + Counter animation helpers
    ui/                shadcn/ui components (button, accordion)
  assets/fonts/        TTFs used only by the generated Open Graph image (OFL)
scripts/
  generate-favicon.mjs regenerates src/app/favicon.ico from src/app/icon.svg (npm run favicon)
```

## Design tokens

Defined once in [`src/app/globals.css`](src/app/globals.css) (shadcn naming). The single accent,
`--primary` (volt lime `#C6F24E`), is reserved for positive moments: CTAs, replies, booked meetings.
Fonts: Geist (UI/headlines), Instrument Serif italic (emphasis words), Geist Mono (labels).

## Deploy (Netlify)

Connect the repo in Netlify; `netlify.toml` sets the build command and headers, and Netlify's
Next.js runtime is applied automatically. Every route is prerendered as static
(`ensureStatic = "navigation"` in the root layout fails the build if that ever regresses).

Before launch, set `site.url` in `src/content/site.ts` to the production domain — canonical URLs,
sitemap, robots, Open Graph, and JSON-LD all derive from it.

## Accessibility & motion

- Respects `prefers-reduced-motion`: smooth scrolling is disabled and the hero demo shows a
  static, completed week.
- Skip link, semantic landmarks, visible focus rings, and AA contrast on all text tokens.
