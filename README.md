# Stefan Thottunkal — Digital Health Portfolio

Personal portfolio site spanning research, policy, and industry work in
digital health, precision medicine, clinical AI, and global health.

## Tech stack

- **Framework:** [React 18](https://react.dev/)
- **Build tool:** [Vite 6](https://vitejs.dev/) with `@vitejs/plugin-react-swc`
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`) + `tailwindcss-animate`
- **Animations:** [Motion](https://motion.dev/) (Framer Motion successor)
- **3D background:** [Spline](https://spline.design/) via `@splinetool/react-spline` (lazy-loaded)
- **Routing:** [React Router 7](https://reactrouter.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** Clash Grotesk (Fontshare) + Playfair Display (Google Fonts)

## Getting started

Requires Node.js ≥ 18 and npm.

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts

| Script              | What it does                              |
| ------------------- | ----------------------------------------- |
| `npm run dev`       | Vite dev server on port 3000              |
| `npm run build`     | Production build to `dist/`               |
| `npm run typecheck` | `tsc --noEmit` — TypeScript-only check    |

## Project structure

```
src/
  App.tsx               # Router + lazy route definitions
  main.tsx              # React root mount
  index.css             # Tailwind + plugin imports
  screens/              # Top-level route components (landing, project detail)
  pages/                # Route pages (Resume, Presentations, Policy, Research, Industry)
  components/           # Reusable section + UI components
  hooks/                # Custom hooks (useWindowWidth, usePhoneLayout, ...)
  types/                # Shared types (project, role, policy)
  assets/               # Images and webp assets
  styles/               # globals.css design tokens
```

## Routes

| Path             | Page                                          |
| ---------------- | --------------------------------------------- |
| `/`              | Landing — hero, intro, three-lanes teaser, timeline, work, about |
| `/project/:id`   | Individual project case study                 |
| `/bio`           | Resume / bio                                  |
| `/presentations` | Conferences and invited talks                 |
| `/policy`        | Policy lane page                              |
| `/research`      | Research lane page                            |
| `/industry`      | Industry / ventures lane page                 |

## Deployment

Static build — deploy `dist/` to any static host (Vercel, Netlify, GitHub Pages).
