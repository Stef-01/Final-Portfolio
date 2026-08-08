# Stefan Thottunkal — Digital Health Portfolio

Personal portfolio site spanning research, policy, and industry work in
digital health, precision medicine, clinical AI, and global health.

## Tech stack

- **Framework:** [React 18](https://react.dev/)
- **Build tool:** [Vite 6](https://vitejs.dev/) with `@vitejs/plugin-react-swc`
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`) + `tailwindcss-animate`
- **Animations:** [Motion](https://motion.dev/) (Framer Motion successor) — tokens in `src/motion/tokens.ts`, reduced-motion parity throughout
- **3D background:** [Spline](https://spline.design/) via `@splinetool/react-spline` (lazy-loaded; never boots on phones or under data-saver)
- **Routing:** [React Router 7](https://reactrouter.com/) — every route lazy-loaded
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** Clash Grotesk (Fontshare CDN, loaded async so the CDN can never block first paint) + Playfair Display italic (self-hosted via `@fontsource`)
- **Analytics:** Vercel Analytics with custom events (process-flow steps, accordion opens, contact and file clicks)

## Getting started

Requires Node.js ≥ 18 and npm.

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts

| Script              | What it does                                                    |
| ------------------- | --------------------------------------------------------------- |
| `npm run dev`       | Vite dev server on port 3000                                     |
| `npm run build`     | Vite build, then static shells + sitemap, then AI content        |
| `npm run typecheck` | `tsc --noEmit` — TypeScript-only check                           |
| `npm run lint`      | ESLint over the repo                                             |

The build runs two post-build steps (both plain Node — the Vercel build
image has no browser, so nothing here needs one):

1. `scripts/generate-static-shells.mjs` — writes `dist/<route>/index.html`
   for every non-home route with per-route title, meta description,
   canonical, OG tags, and a `<noscript>` summary, and emits `sitemap.xml`
   from the same manifest. Vercel serves these files before the SPA
   rewrite, so non-JS crawlers get real per-URL metadata.
2. `scripts/generate-ai-content.mjs` — bundles the real data modules with
   esbuild (`scripts/ai-content-entry.ts`; asset imports stubbed) and
   writes `dist/llms-full.txt` (every case study, role, and publication as
   markdown) plus static JSON-LD into the shells (CreativeWork +
   BreadcrumbList per project, the ScholarlyArticle list on `/research`).

Note: `vite preview` does not resolve `dist/<route>/index.html` for
`/<route>` the way Vercel does — verify shells with
`npx http-server dist` instead.

## SEO & AI discoverability

The app is client-rendered, so everything a non-JS crawler needs is
generated statically at build time:

- `public/robots.txt` — all crawlers allowed, with explicit sections for AI
  crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, et al.)
- `public/llms.txt` — [llmstxt.org](https://llmstxt.org/)-format index for
  AI assistants; links `llms-full.txt` (generated) for the complete content
- Static per-route shells + `sitemap.xml` (generated, see above)
- `Person` + `WebSite` JSON-LD in `index.html`; per-route JSON-LD both
  injected at runtime (`useJsonLd`) and baked into the shells
- Per-route titles/descriptions/canonicals via `src/hooks/usePageMeta.ts`

**Adding a route or project:** add the page + `usePageMeta` call, then add
the matching entry to the manifest in `scripts/generate-static-shells.mjs`.
The sitemap, shells, JSON-LD, and `llms-full.txt` regenerate from source on
the next build. Update `public/llms.txt` if the new page deserves an index
entry.

## CI

`.github/workflows/lighthouse.yml` runs Lighthouse on every PR against the
built site (4 routes, mobile emulation) with thresholds from
`lighthouserc.json`: accessibility and SEO fail below 0.98, best-practices
below 0.9, performance warns below 0.6. Best-practices reads 96 off-Vercel
because the analytics script only exists on Vercel.

## Project structure

```
src/
  App.tsx               # Router + lazy route definitions + route transitions
  main.tsx              # React root mount
  screens/              # Top-level route components (landing, project detail)
  pages/                # Route pages (Resume, Presentations, Policy, Research, Industry, Education)
  components/           # Reusable section + UI components
  motion/               # Motion tokens (easing, durations, springs)
  hooks/                # Custom hooks (usePageMeta, useJsonLd, usePhoneLayout, ...)
  types/                # Data modules (projects, roles, publications)
  assets/               # Images (WebP-first)
  styles/               # globals.css design tokens
scripts/                # Post-build generators (shells, sitemap, AI content)
docs/superpowers/specs/ # Design + overhaul roadmap documents
```

## Routes

| Path             | Page                                          |
| ---------------- | --------------------------------------------- |
| `/`              | Landing — hero, intro, three-lanes teaser, timeline, work, about |
| `/project/:id`   | Individual project case study                 |
| `/bio`           | Bio / resume                                  |
| `/presentations` | Conferences and invited talks                 |
| `/policy`        | Policy lane page                              |
| `/research`      | Research lane page                            |
| `/industry`      | Industry / ventures lane page                 |
| `/education`     | Education & teaching lane page                |

## Deployment

Static build — `dist/` deploys to Vercel (`vercel.json` holds the SPA
rewrite, immutable caching for hashed assets, and security headers). Any
static host that serves `/<route>/index.html` for `/<route>` before a SPA
fallback works the same way.
