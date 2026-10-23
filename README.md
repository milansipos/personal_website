# My personal website

My portfolio website, built with React + TypeScript and Vite.
Live at [milansipos.de](https://milansipos.de), hosted on GitHub Pages.

## Development

```bash
npm install
npm run dev       # dev server with hot reload on http://localhost:5173
npm run build     # production build into dist/
npm run preview   # serve the production build on http://localhost:4173
npm run lint
```

## Editing content

- `src/data/personalInfo.ts`: the JSON that gets typed out in the About section
- `src/data/projects.ts`: the project cards
- `src/sections/`: the sections of the main page (Hero, About, Projects, Contact)
- `src/pages/`: Impressum, Datenschutz and the 404 page

## Structure

The site has several HTML entry points (Vite multi-page setup, see `vite.config.ts`):

- `index.html`: the main page (`src/main.tsx`)
- `impressum/index.html`, `datenschutz/index.html`, `404.html`: extra pages sharing `src/subpages.tsx`

## Deployment

Every push to `main` builds and deploys the site via GitHub Actions (`.github/workflows/deploy.yml`).
