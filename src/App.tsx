import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LenisProvider } from '@/components/layout/LenisProvider'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { NoiseOverlay } from '@/components/ui/NoiseOverlay'
import { Home } from '@/pages/Home'
import { Pricing } from '@/pages/Pricing'
import { HowItWorks } from '@/pages/HowItWorks'
import { Contact } from '@/pages/Contact'
import { UnderDevelopment } from '@/pages/UnderDevelopment'

export default function App() {
  return (
    <BrowserRouter>
      <LenisProvider>
        <NoiseOverlay />
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/under-development" element={<UnderDevelopment />} />
            <Route path="/privacy" element={
              <div className="pt-32 px-8 max-w-3xl mx-auto pb-32">
                <h1 className="font-display text-4xl font-semibold mb-4">Privacy Policy</h1>
                <p className="font-body text-[var(--lumino-ink-soft)]">Privacy policy coming soon.</p>
              </div>
            } />
            <Route path="/terms" element={
              <div className="pt-32 px-8 max-w-3xl mx-auto pb-32">
                <h1 className="font-display text-4xl font-semibold mb-4">Terms of Service</h1>
                <p className="font-body text-[var(--lumino-ink-soft)]">Terms coming soon.</p>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </LenisProvider>
    </BrowserRouter>
  )
}
