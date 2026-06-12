# Watson & Barnard — Land Surveyors & Engineers

Marketing site for Watson & Barnard, a private land survey firm in Delta, BC.
Built with [Gatsby 5](https://www.gatsbyjs.com/) and React 18.

## Requirements

- **Node** `>=18` (the repo pins **Node 20** via `.nvmrc`)
- **Yarn** (v1 / classic) — yarn is the package manager for this project; do not use npm (there is a single `yarn.lock`)

If you use [nvm](https://github.com/nvm-sh/nvm):

```sh
nvm use      # picks up .nvmrc (Node 20)
```

## Getting started

```sh
yarn install     # install dependencies
yarn develop     # start the dev server at http://localhost:8000
```

The GraphQL explorer is available at `http://localhost:8000/___graphql`.

## Scripts

| Command        | Description                                          |
| -------------- | ---------------------------------------------------- |
| `yarn develop` | Start the hot-reloading development server           |
| `yarn build`   | Build the production site to `public/`               |
| `yarn serve`   | Serve the production build locally                   |
| `yarn clean`   | Clear the Gatsby `.cache` and `public` directories   |
| `yarn format`  | Format `src/` with Prettier                          |

## Project structure

```
src/
├── components/   Shared and page-specific UI components (Emotion-styled)
├── fonts/        Self-hosted Metropolis web fonts
├── images/       Source images (processed by gatsby-plugin-image / sharp)
├── pages/        Routes — each file maps to a URL
└── html.js       Custom HTML document (Typekit + GTM)
```

Key config lives in `gatsby-config.js` (site metadata, plugins).

## Tech notes

- **Images** use `gatsby-plugin-image` (`GatsbyImage` + `gatsbyImageData` queries),
  which outputs modern responsive WebP.
- **Styling** uses [Emotion](https://emotion.sh/) (`@emotion/react` + `@emotion/styled`).
- **SEO/meta** is currently handled with `react-helmet` (`src/components/seo.js`).
  Gatsby 5 ships a built-in [Head API](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/)
  that is the recommended modern replacement — a worthwhile future refactor.
- **Analytics:** Google Tag Manager (`GTM-T4JDVQ9`) and Bing UET are injected via
  `src/html.js` and `src/components/layout.js`. The legacy Universal Analytics
  property (`gatsby-plugin-google-analytics`) no longer collects data and should be
  migrated to GA4 when convenient.
