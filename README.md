# Avanzora

Editable React, TypeScript, and Vite frontend for the imported Avanzora Framer site. The original exports stay under `imports/`; the app uses the cleaned assets in `public/` and the editable code in `src/`.

## Local development

```sh
npm install
npm run dev
```

The restored routes are `/`, `/about-us`, `/contact-us`, `/projects`, `/projects/:slug`, `/blog`, `/blog/:slug`, `/career`, `/career/:slug`, `/legal-pages/privacy-policy`, and `/legal-pages/terms-of-service`. Framer reference exports remain read-only under `imports/`; the app uses local editable components and assets.

## Sanity CMS

1. Create a Sanity project with a **public** dataset.
2. Copy `.env.example` to `.env.local` and set `VITE_SANITY_PROJECT_ID` and (if needed) `VITE_SANITY_DATASET`.
3. Add the local and production frontend origins to the dataset's CORS origins in the Sanity project settings.
4. Restart Vite and open `/studio` to edit the `homePage`, `aboutPage`, `project`, and `blogPost` documents. Project case-study paragraphs and blog author, categories, and reading time are optional fields.

The public website uses only published, publicly readable Sanity content. Do not put a Sanity write token in any `VITE_` variable; Vite variables are shipped to browsers. If Sanity is not configured, the site uses the local source copy and asset library. A CMS request error is logged and that source content remains visible.

## Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `dist`
- Set `VITE_SANITY_PROJECT_ID`, `VITE_SANITY_DATASET`, and optionally `VITE_SANITY_API_VERSION` as Pages build environment variables.

The `wrangler.toml` file declares the Pages output directory. `public/_redirects` enables client-side routing for all app routes and the Studio.
