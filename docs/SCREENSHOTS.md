# 📸 Taking Screenshots for Lumino README

This guide explains how to capture and optimize screenshots for the README.

---

## 🎯 Screenshots to Capture

1. **Hero Section** (HERO-01)
   - Full viewport screenshot
   - Shows hero image with gradient overlay
   - Main heading and CTA button visible

2. **Installation Gallery** (GAL-01 to GAL-08)
   - 4-column grid layout
   - Lightbox preview (click one image)
   - Multiple project cards

3. **ROI Calculator** (RoiSection)
   - Sliders for business type and footfall
   - Live Recharts visualization
   - Results projection

4. **Testimonials & Pricing**
   - Testimonial cards
   - Pricing tiers (Starter, Growth, Premium)
   - Feature comparison

5. **Before/After Comparison**
   - Draggable slider showing comparison
   - Two images side-by-side

---

## 📸 How to Capture Screenshots

### Desktop Screenshots
```bash
# Start dev server
npm run dev

# Use browser DevTools
# Press F12 → Cmd+Shift+P → "Screenshot"
# Or use a tool like:
# - macOS: Cmd+Shift+4
# - Windows: Win+Shift+S
```

### Mobile Screenshots
```bash
# In browser DevTools, press Cmd+Shift+M
# Select iPhone 12 or iPhone 14 Pro
# Screenshot mobile view
```

### Using Third-Party Tools
- **macOS:** Screenshot app or Cmd+Shift+5
- **Windows:** Snipping Tool (Win+Shift+S)
- **Cross-platform:** Firefox DevTools right-click → "Take Screenshot"

---

## 🖼️ Recommended Dimensions

| Section | Desktop | Mobile |
|---------|---------|--------|
| Hero | 1400×600px | 375×800px |
| Gallery | 1400×500px | 375×800px |
| Pricing | 1400×600px | 375×900px |
| ROI Calc | 1200×500px | 375×600px |

---

## 💾 Save Screenshots

Place screenshots in:
```
docs/screenshots/
├── hero-section.png
├── gallery-section.png
├── roi-calculator.png
├── pricing-section.png
├── before-after-section.png
└── testimonials-section.png
```

---

## 🎨 Optimize for Web

Use ImageOptim or similar to reduce file size:

```bash
# macOS with ImageOptim
open docs/screenshots/*.png

# Or use command-line tools
optipng -o2 docs/screenshots/*.png
```

Keep file sizes under 500KB for faster README loading.

---

## 📝 Caption Guidelines

When adding to README, use descriptive captions:

```markdown
### Homepage Hero Section
![Hero Section with LED display showcase](./docs/screenshots/hero-section.png)
*Eye-catching hero with gradient overlay and call-to-action button*
```

---

## 🔄 Update Screenshots

Screenshot-taking steps:
1. Make changes to components
2. Test in `npm run dev`
3. Capture new screenshots
4. Replace old images in `docs/screenshots/`
5. Commit and push

```bash
git add docs/screenshots/
git commit -m "Update README screenshots"
git push
```

---

<div align="center">

[← Back to Deploy Guide](./DEPLOY.md)

</div>
