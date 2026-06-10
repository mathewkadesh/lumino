# 🚀 Lumino GitHub Pages Deployment Guide

This guide walks you through deploying Lumino to GitHub Pages.

---

## 📋 Prerequisites

- Git installed locally
- GitHub account with a repository named `lumino`
- Node.js 18+ installed

---

## 🛠️ Step 1: Initialize Git & Configure Vite

Update your `vite.config.ts` to set the correct base path for GitHub Pages:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/lumino/',  // ← Change to your repo name
})
```

---

## 📦 Step 2: Build the Project

```bash
npm run build
```

This creates a `dist/` folder with optimized production assets.

---

## 🌐 Step 3: Push to GitHub

### Option A: Using GitHub CLI (Recommended)

```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit: Lumino marketing site"

# Create GitHub repo
gh repo create lumino --public --source=. --remote=origin --push
```

### Option B: Manual GitHub Setup

```bash
# Add files
git add .
git commit -m "Initial commit: Lumino marketing site"

# Add remote
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/lumino.git
git push -u origin main
```

---

## 📤 Step 4: Deploy to gh-pages Branch

### Option A: Automated with GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Then push this file:
```bash
git add .github/
git commit -m "Add GitHub Actions deployment"
git push
```

### Option B: Manual Deploy

```bash
# Build the project
npm run build

# Create gh-pages branch from dist folder
git checkout --orphan gh-pages
git rm -rf .
cp -r dist/* .
echo "# Lumino - Live Site" > README.md
git add .
git commit -m "Deploy Lumino to GitHub Pages"
git push origin gh-pages --force
```

---

## ⚙️ Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **Deploy from a branch**
4. Select branch: **gh-pages**
5. Select folder: **/ (root)**
6. Click **Save**

GitHub will now build and deploy your site. Check the "Deployments" section for status.

---

## 🔗 Step 6: Access Your Live Site

Your site will be available at:

```
https://YOUR-USERNAME.github.io/lumino/
```

Example: `https://mathewkadesh.github.io/lumino/`

---

## 📝 Update Custom Domain (Optional)

If you have a custom domain:

1. Go to **Settings** → **Pages**
2. Enter your domain in "Custom domain"
3. Click **Save**
4. Add DNS records pointing to GitHub (GitHub will show instructions)

Example: If you own `lumino.dev`, you can point it to GitHub Pages.

---

## 🔄 Continuous Deployment Workflow

Once GitHub Actions is set up, the deployment is automatic:

```bash
# Make changes
git add .
git commit -m "Update hero section"
git push origin main  # ← Automatically triggers deployment
```

Check the **Actions** tab on GitHub to monitor the build.

---

## 🐛 Troubleshooting

### Site Shows 404 Error
- Check `base: '/lumino/'` in `vite.config.ts`
- Clear browser cache
- Wait 1-2 minutes for GitHub to redeploy

### GitHub Pages Not Enabled
- Go to Settings → Pages
- Ensure "gh-pages" branch is selected
- Click Save again

### Build Fails
- Run `npm run build` locally to check for errors
- Check GitHub Actions logs for error details

---

## 📊 Deployment Checklist

- [ ] Updated `vite.config.ts` with correct base path
- [ ] Created `.github/workflows/deploy.yml` (if using Actions)
- [ ] Pushed main branch to GitHub
- [ ] Enabled GitHub Pages from Settings → Pages
- [ ] Verified site is live at `https://YOUR-USERNAME.github.io/lumino/`
- [ ] Tested all interactive features on live site
- [ ] Added custom domain (if applicable)

---

## 📖 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)
- [Actions Gh-Pages Action](https://github.com/peaceiris/actions-gh-pages)

---

<div align="center">

**Happy deploying! 🎉**

[← Back to README](../README.md)

</div>
