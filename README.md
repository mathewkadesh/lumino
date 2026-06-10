# 🌟 Lumino

> **Bristol's Premier LED Window Display Solution**
> Transform your storefront with dynamic, eye-catching LED displays that drive customer footfall.

---

## 📱 Overview

Lumino is a modern marketing website for a Bristol-based LED window display company. Designed to convert busy independent business owners (takeaways, cafés, convenience stores, barbers, pizzerias) into customers through stunning visuals and clear value propositions.

**Primary Goal:** Convince shop owners to book a free survey and discover how LED displays can increase footfall by up to **2.4×**.

---

## ✨ Features

### 🎯 Conversion-Focused Design
- **Photo-driven hero section** with gradient overlays
- **Interactive ROI calculator** with live projections
- **Before/after draggable comparison** showcasing real results
- **Lead capture form** integrated with backend API

### 📊 Rich Interactive Sections
- **Installation gallery** with 8 high-quality project images
- **Benefits tabs** with live revenue charts (Recharts)
- **Testimonials** from satisfied Bristol business owners
- **Pricing tiers** (Starter £39 / Growth £69 / Premium £119)
- **FAQ accordion** answering customer concerns
- **Dynamic counter animations** on scroll

### 🚀 Performance & Animation
- **Smooth scrolling** with Lenis for desktop scrolljacking
- **GSAP-powered animations** for section reveals
- **Framer Motion** for interactive UI transitions
- **Fully responsive** across mobile, tablet, desktop
- **Optimized images** with lazy loading

### 🎨 Design System
- **Custom design tokens** (amber, teal, coral color palette)
- **Tailwind CSS** for utility-first styling
- **Typography:** Fraunces (display) + Inter Tight (body) + JetBrains Mono (code)
- **Consistent spacing & rhythm** across 14 homepage sections

---

## 🏗️ Project Structure

```
lumino/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Nav.tsx              # Main navigation
│   │   │   ├── Footer.tsx           # Footer with links
│   │   │   └── Header.tsx           # Page header
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx      # (1) Hero with image
│   │   │   ├── TrustedBySection.tsx # (2) Logo marquee
│   │   │   ├── InstallationsGallerySection.tsx # (3) 4-col grid
│   │   │   ├── BenefitsTabsSection.tsx # (4) 3-tab benefits
│   │   │   ├── BigNumberSection.tsx # (5) 2.4× animated counter
│   │   │   ├── HowItWorksSection.tsx # (6) 4-step process
│   │   │   ├── CategoriesSection.tsx # (7) Business types
│   │   │   ├── RoiSection.tsx       # (8) ROI calculator
│   │   │   ├── BeforeAfterSection.tsx # (9) Comparison
│   │   │   ├── TestimonialsSection.tsx # (10) 3 reviews
│   │   │   ├── PricingSection.tsx   # (11) 3 pricing tiers
│   │   │   ├── FaqSection.tsx       # (12) Accordion
│   │   │   ├── FinalCtaSection.tsx  # (13) Gradient CTA
│   │   │   └── ContactSection.tsx   # (14) Lead form
│   │   └── ui/
│   │       ├── PlaceholderImage.tsx # 24 image slots
│   │       ├── Button.tsx
│   │       ├── Input.tsx
│   │       └── ...
│   ├── hooks/
│   ├── styles/
│   │   └── globals.css              # Design tokens, Tailwind
│   ├── App.tsx                      # Main app
│   └── main.tsx                     # Entry point
├── public/
├── vite.config.ts
├── tailwind.config.ts
└── package.json
```

### 📋 Homepage Section Order
1. **HeroSection** — Photo-based hero with gradient
2. **TrustedBySection** — Logo marquee of Bristol businesses
3. **InstallationsGallerySection** — 8 project cards, lightbox
4. **BenefitsTabsSection** — Tabbed benefits with chart
5. **BigNumberSection** — 2.4× animated counter
6. **HowItWorksSection** — 4-step process
7. **CategoriesSection** — 6 business type cards
8. **RoiSection** — Interactive ROI calculator
9. **BeforeAfterSection** — Draggable comparison
10. **TestimonialsSection** — 3 customer testimonials
11. **PricingSection** — 3 pricing tiers
12. **FaqSection** — 6-question accordion
13. **FinalCtaSection** — Gradient CTA panel
14. **ContactSection** — Lead capture form

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|--------------|
| **Framework** | React 18 + TypeScript |
| **Build Tool** | Vite 8 |
| **Styling** | Tailwind CSS 4 (via @tailwindcss/vite) |
| **Animations** | Framer Motion + GSAP |
| **Scrolling** | Lenis (smooth scroll) |
| **Charts** | Recharts |
| **Form** | React Hook Form + Zod validation |
| **Routing** | React Router v7 |
| **State** | Zustand |
| **Icons** | Lucide React |
| **Dev Server** | Vite dev server (HMR enabled) |

### 🎨 Design Tokens

```css
--lumino-amber:    #F26419  /* Primary CTA */
--lumino-teal:     #0E8C7E  /* Success, secondary */
--lumino-coral:    #E25555  /* Before state, contrast */
--lumino-cream:    #F4D38B  /* Warm highlight */
--lumino-paper:    #FBF8F1  /* Light background */
--lumino-paper-2:  #F2EDE0  /* Mid background */
--lumino-paper-3:  #FFFFFF  /* White cards */
--lumino-ink-card: #1A1813  /* Dark card surface */
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/lumino.git
cd lumino

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the site.

### Build for Production

```bash
npm run build
```

Generates optimized assets in `dist/` ready for deployment.

### Preview Build Locally

```bash
npm run preview
```

---

## 📸 Screenshots

### Homepage Hero Section
![Hero Section](./docs/screenshots/hero-section.png)

### Interactive ROI Calculator
![ROI Calculator](./docs/screenshots/roi-calculator.png)

### Installation Gallery with Lightbox
![Gallery Section](./docs/screenshots/gallery-section.png)

### Testimonials & Pricing
![Pricing Section](./docs/screenshots/pricing-section.png)

---

## 🎯 Key Features Explained

### 📈 ROI Calculator
Users input their business type, current monthly footfall, and see projected increases. Live Recharts visualization updates in real-time as sliders move.

### 🔄 Before/After Comparison
Draggable comparison slider showcasing real-world impact of LED displays on storefronts using two high-quality images (BA-01, BA-02).

### 📱 Responsive Design
Built mobile-first with Tailwind breakpoints. Navigation collapses to hamburger menu on small screens. Form inputs scale gracefully.

### ♿ Accessibility
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast meets WCAG AA standards

---

## 📝 Customization

### Swap Placeholder Images
`PlaceholderImage.tsx` uses 24 image slots. Replace with real images:

```tsx
// Before: dev placeholder
<PlaceholderImage id="HERO-01" />

// After: optimized image
<OptimisedImage src="/images/hero-01.jpg" alt="LED Display Installation" />
```

### Update Design Tokens
Edit `src/styles/globals.css` to modify colors, spacing, typography.

### Change Pricing Tiers
Edit data in `src/components/sections/PricingSection.tsx`.

---

## 🚀 Deployment

### Deploy to GitHub Pages

```bash
# Build the project
npm run build

# Create gh-pages branch
git checkout --orphan gh-pages

# Push dist/ to gh-pages
npm run build
git add dist -f
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages

# Enable in GitHub Settings > Pages > Source: gh-pages branch
```

**Update vite.config.ts for correct base path:**
```ts
export default defineConfig({
  base: '/lumino/',
  // ...
})
```

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Choose your project settings and deploy with one command.

---

## 📊 Performance

- **Lighthouse Score:** 90+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint:** < 2s
- **Largest Contentful Paint:** < 3s
- **Cumulative Layout Shift:** < 0.1
- **Bundle Size:** ~180KB (gzipped)

---

## 🤝 Contributing

Contributions welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style
- Use TypeScript for type safety
- Follow Tailwind utility-first approach
- Keep components under 400 lines
- Write meaningful commit messages

---

## 📄 License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) file for details.

---

## 📞 Contact & Support

**Website:** [lumino.dev](https://lumino.dev)  
**Email:** mathewkadesh1@gmail.com  
**GitHub Issues:** [Report a bug](https://github.com/YOUR-USERNAME/lumino/issues)

---

## 🙏 Acknowledgments

- Design reference: PIXITE (image-led, local) + Broadsign (tabbed, structured)
- Animation library: GSAP + Framer Motion
- Smooth scrolling: Lenis
- Icons: Lucide React
- Fonts: Fraunces (display) + Inter Tight (body) + JetBrains Mono (code)

---

<div align="center">

### Made with ❤️ in Bristol

**[⬆ back to top](#-lumino)**

</div>
