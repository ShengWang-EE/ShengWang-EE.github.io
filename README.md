# Sheng Wang Personal Website

This repository contains the Astro-based personal academic website for Sheng Wang and deploys to GitHub Pages.

## Current Stack

- Astro 5
- Tailwind CSS 4
- React components where needed
- GitHub Actions deployment from `.github/workflows/deploy.yml`

## Project Layout

```text
.
|-- public/                 # Static files copied as-is at build time
|   `-- files/              # Public PDFs, CVs, certificates, project files
|-- src/
|   |-- assets/             # Astro-managed images and fonts
|   |-- components/         # Reusable UI and layout components
|   |-- data/               # Site content and structured metadata
|   |-- layouts/            # Astro layouts
|   |-- lib/                # Config and shared utilities
|   `-- pages/              # Route entrypoints
|-- tools/
|   `-- markdown_generator/ # Historical content generation helpers
`-- legacy/                 # Archived Jekyll-era files kept for reference
```

## Main Edit Points

- Site content: `src/data/site.ts`
- Toggleable UI settings: `config.yml`
- Pages and routing: `src/pages/`
- Shared UI: `src/components/`
- Public downloadable assets: `public/files/`

## Local Development

```bash
npm install
npm run dev
```

Useful commands:

- `npm run dev` starts the local dev server
- `npm run build` creates the production build in `dist/`
- `npm run preview` previews the built site locally

## Notes

- `public/files/` is the canonical location for downloadable documents.
- The previous Jekyll site structure has been moved under `legacy/` so the active Astro app stays easy to navigate.
- `tools/markdown_generator/` is retained as a reference utility and is not part of the current Astro build pipeline.
