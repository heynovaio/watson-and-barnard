# Phase 0 Baseline — Gatsby 5 (local `gatsby serve`, Node 20)

Captured with Lighthouse 12.8.2 (arm64 Node), headless Chrome, against `http://localhost:9000`.
These are **local-serve** numbers (no CDN/gzip/HTTP2), so they sit below the production 95+ claim.
The migration gate is **local-vs-local**: the Next.js build must match or beat each cell below.

## Lighthouse scores (Performance / Accessibility / Best-Practices / SEO)

| Page       | Mobile                | Desktop               |
| ---------- | --------------------- | --------------------- |
| `/`        | 53 / 96 / 75 / 91     | 96 / 99 / 74 / 91     |
| `/services`| 62 / 98 / 75 / 82     | 86 / 98 / 74 / 82     |
| `/contact` | 78 / 96 / 75 / 91     | 91 / 96 / 74 / 91     |

Raw JSON reports: `migration-baseline/*.json`. Screenshots of all 15 routes: `migration-baseline/screenshots/`.

## Known failing audits (to fix or match in Next.js)

- **Best Practices (~74):** `errors-in-console`, `third-party-cookies`, `inspector-issues`
  - Console errors come from the defunct UA tag + the broken `%PUBLIC_URL%` manifest/favicon links in `src/html.js`. Dropping the dead UA tag and using a real manifest should lift this.
  - Third-party cookies / inspector issues come from GTM + Bing UET. Hard to fully zero with GTM present, but should not regress.
- **SEO (82 on /services, 91 elsewhere):** `crawlable-anchors`, `link-text`
  - From `href="#"` anchors and non-descriptive link text (the 52 pre-existing `jsx-a11y/anchor-is-valid` warnings). Use real `next/link` hrefs + descriptive text.

## Bundle sizes (Gatsby `public/`)

- Total `public/`: **7.2 MB**
- Total JS (excl. page-data): **~948 kB** across 39 files
- Largest shared chunks: `framework` 140 kB, `app` 103 kB, webpack runtime/commons ~72+40 kB
- Per-page entry: index 24 kB, about 26 kB

Target for Next.js: First Load JS shared < 100 kB.
