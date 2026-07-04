# michalszczepkowski.dev — Personal Portfolio

Bilingual (EN / PL) portfolio site of **Michał Szczepkowski**, Data Scientist.

**Live site:** deployed on Netlify from the `main` branch.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router) + TypeScript
- Tailwind CSS with a custom dark design system
- Framer Motion (scroll-driven reveals, hero animation)
- Three.js (WebGL shader hero background)

## Architecture

The site is fully **data-driven**: all content lives in typed files under
`portfolio/data/` (`profile.ts`, `projects.ts`, `experience.ts`,
`education.ts`). Pages are templates that render this data — adding a project
means appending one object, with no component changes.

Every text field is stored as `{ en, pl }`; a client-side language context
(`portfolio/lib/i18n/`) switches the entire UI instantly and persists the
choice, while structural data (routes, tech stacks, metrics) stays
single-source so the two languages can never drift.

## Development

```bash
cd portfolio
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Deployment

Pushes to `main` trigger a Netlify build (config in `netlify.toml`;
base directory `portfolio/`, official Next.js runtime).
