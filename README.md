Pest Control Mumbai — Vite / Vercel deployment

This branch contains a Vite-ready frontend prepared for deployment to Vercel.

Quick start (local)

1. Install dependencies:
   - npm install

2. Run development server:
   - npm run dev

3. Build for production:
   - npm run build

4. Preview production build locally:
   - npm run preview

Vercel deployment

- Build command: npm run build
- Output directory: dist

If you want to deploy on Vercel:
1. Push this branch to GitHub (already pushed as `vite-ready`).
2. In Vercel, import the repository and select the `vite-ready` branch.
3. Confirm Build Command and Output Directory as above.

Notes & changes made

- Replaced Vite alias resolution to use `path.resolve(__dirname, "src")` so imports like `@/components/...` resolve correctly in Vercel.
- Added `vercel.json` to force static-build and route all requests to `index.html` (single-page app client-side routing).
- Kept original project layout; did not move files. If assets are referenced with absolute filesystem paths, make them relative or move to `public/`.

If you want a zipped copy of this branch, download:
https://github.com/zotingsujal/pest-control/archive/refs/heads/vite-ready.zip

If you want me to also:
- Move runtime packages from devDependencies -> dependencies for a cleaner install on Vercel
- Remove Replit-only files (pnpm-workspace.yaml, replit.md) from the production branch
- Run a build here and fix any build-time errors

Tell me which of the above to proceed with and I'll continue.
