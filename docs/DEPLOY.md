# 🚀 Lumino GitHub Pages Deployment Guide

This repo is **already set up** for GitHub Pages — this guide covers what's already in place and the one-time setup left to do.

---

## ✅ Already configured

- **`vite.config.ts`** sets `base: '/lumino/'`, so built asset URLs resolve correctly at `https://mathewkadesh.github.io/lumino/`
- **`.github/workflows/deploy.yml`** runs on every push to `main`: installs deps, runs `npm run build`, and uploads `dist/` as a Pages artifact
- **`origin`** remote is already set to `https://github.com/mathewkadesh/lumino.git`

So for day-to-day changes, deployment is just: **commit → push to `main`**. No manual build step required.

---

## 🛠️ One-time setup

### 1. Commit and push your changes

```bash
git add .
git commit -m "Update site"
git push origin main
```

### 2. Enable GitHub Pages (Actions source)

1. Go to your repo on GitHub → **Settings** → **Pages**
2. Under **"Build and deployment" → Source**, select **GitHub Actions**
3. Save

That's it — GitHub will run the workflow automatically. Watch progress under the **Actions** tab.

### 3. Visit your site

```
https://mathewkadesh.github.io/lumino/
```

---

## 🔄 Ongoing workflow

Every push to `main` triggers a rebuild + redeploy automatically:

```bash
git add .
git commit -m "Update hero section"
git push origin main
```

Check the **Actions** tab to monitor the build/deploy status.

---

## 🧭 SPA routing note

This site uses `react-router-dom`'s `BrowserRouter`. GitHub Pages serves static files, so a hard refresh or direct link to a route like `/pricing` can 404 (there's no `pricing/index.html`). The homepage (`/lumino/`) and in-app navigation work fine. If direct deep-links need to work too, the common fix is adding a `404.html` that redirects back to `index.html` (SPA fallback) — ask if you'd like this added.

---

## 🗂️ Alternative: manual `gh-pages` branch deploy

`package.json` also has a `deploy` script that builds and force-pushes `dist/` to a `gh-pages` branch:

```bash
npm run deploy
```

⚠️ This is an **alternative** to the GitHub Actions workflow above, not a complement — only use one approach. If you use this, set Pages **Source** to "Deploy from a branch" → `gh-pages` instead of "GitHub Actions". Note `dist/` is in `.gitignore`, so this script force-adds it; the GitHub Actions approach above doesn't require committing `dist/` at all.

---

## 🐛 Troubleshooting

### Blank page / assets 404 on the live site
- Confirm `base: '/lumino/'` in `vite.config.ts` matches your repo name exactly
- Hard refresh / clear cache, and wait 1-2 minutes for the Pages CDN to update

### Workflow doesn't run
- Confirm the push was to `main`
- Check **Settings → Pages → Source** is set to **GitHub Actions**
- Check the **Actions** tab for failed runs and logs

### Build fails
- Run `npm run build` locally first to catch TypeScript/lint errors before pushing

---

<div align="center">

[← Back to README](../README.md)

</div>
