# Watson & Barnard — Land Surveyors & Engineers

Marketing site for Watson & Barnard, a private land survey firm in Delta, BC.
Built with [Next.js 15](https://nextjs.org/) (App Router) and exported as a static
site. Deploys to Netlify as plain HTML/CSS/JS with no server runtime.

## Requirements

- **Node** `>=18` (the repo pins **Node 20** via `.nvmrc`)
- **Yarn** (v1 / classic) — single `yarn.lock`, do not use npm

```sh
nvm use        # Node 20
yarn install
```

## Getting started

```sh
yarn dev       # dev server at http://localhost:3000
yarn build     # static export to out/ (runs the image optimizer)
yarn serve     # serve the exported out/ locally
```

## Scripts

| Command       | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| `yarn dev`    | Next dev server (hot reload)                                 |
| `yarn build`  | `next build` + `next-image-export-optimizer` → static `out/` |
| `yarn serve`  | Serve the exported `out/` directory                          |
| `yarn format` | Format `src/` with Prettier                                  |

## Project structure

```
src/
├── app/                 App Router — one folder per route + page.jsx
│   ├── layout.jsx       Root shell: metadata, Typekit, GTM/Bing, Footer
│   ├── globals.css      Reset + self-hosted @font-face (Metropolis)
│   ├── sitemap.js       /sitemap.xml
│   ├── robots.js        /robots.txt
│   ├── manifest.js      /manifest.webmanifest
│   └── <route>/page.jsx Routes (about, services, services/*, contact, …)
└── components/          UI components, each with a co-located *.module.css
public/
├── images/              Source images (optimized to WebP at build time)
└── fonts/               Self-hosted Metropolis (woff2)
```

## Architecture notes

- **Styling**: CSS Modules (`*.module.css`) co-located with each component.
  Components are React Server Components by default; only `Header`, `Feed`,
  `ContactFeed`, and `ConsultButton` are client components (interactivity).
- **Images**: `next/image` via
  [`next-image-export-optimizer`](https://github.com/Niels-IO/next-image-export-optimizer)
  (static export builds WebP at multiple sizes). Static imports give intrinsic
  width/height → no layout shift.
- **SEO**: per-page `metadata` exports (App Router Metadata API). Sitemap, robots
  and manifest are generated metadata routes.
- **Fonts**: self-hosted Metropolis via `@font-face` (`font-display: swap`,
  woff2 only); Astoria from Adobe Typekit, loaded non-render-blocking.
- **Icons**: inline SVG (`src/components/icons.jsx`) — no icon-font runtime.
- **Analytics**: Google Tag Manager (`GTM-T4JDVQ9`) + Bing UET via `next/script`.
  The legacy Universal Analytics property was dropped (UA is defunct); add GA4
  via `@next/third-parties/google` with a measurement ID when ready.
- **Calendly**: lazy-loaded on click (`ConsultButton`), kept out of the initial bundle.

## Deployment (Netlify)

`netlify.toml` builds with `yarn build` and publishes `out/`. The contact form
uses **Netlify Forms** (`data-netlify`, honeypot, hidden `form-name`) and redirects
to `/contact-thank-you/` on submit.

## Migration

This site was migrated from Gatsby 2 → Next.js. Lighthouse baselines and the
migration prompt live under `migration-baseline/` (raw reports are gitignored; the
summary is in `migration-baseline/BASELINE.md`).

## Content & copy
 
Most page copy lives directly in each component, but the **team roster** and the
**per-service detail pages** are data-driven so non-layout edits don't require
touching JSX. Both read from a single content module:
 
```
src/components/content.js   (default: @/src/components/content)
```
 
### Team members (About page)
 
`content.js` exports a `team` object with three groups — `leadership`,
`technical`, and `field`. Each group is `{ heading, subtitle, members }`, and
each member is:
 
```js
{ name, position, credentials, image?, href? }
```
 
Add, remove, or reorder people by editing the `members` arrays. Empty groups
render nothing. `image` is optional (falls back to a placeholder); omit `href`
unless a member has a destination.
 
### Service detail pages
 
The seven service pages share one `<ServiceDetail />` template. Their copy lives
in the `services` object in `content.js`, keyed by slug (`topographic`,
`construction`, `drone`, `strata`, `laser`, …). Each entry is spread straight
into the component:
 
```js
{
  title,
  intro,
  overview,
  detailImg,                 // optional hero/detail image import
  details: [{ title, body }],
  applications: { intro, items: [string] },
  projects: { intro, items: [{ name, body, image? }] },
}
```
 
Counts follow the data — a service with five application items renders five, no
JSX change needed. Each route's `page.jsx` just imports its slug and spreads it,
and the page `metadata.title` is derived from `title` so it can't drift.
 
> **Note:** several entries still contain placeholder text from the migration.
> Anything reading `"Position" / "John Doe"` or empty `intro`/`overview` strings
> is awaiting real copy — that's the SEO/content pass. Fill these in `content.js`
> rather than in the components.