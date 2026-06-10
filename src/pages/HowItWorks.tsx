import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { InstallationsGallerySection } from '@/components/sections/InstallationsGallerySection'
import { ContactSection } from '@/components/sections/ContactSection'

export function HowItWorks() {
  return (
    <>
      <div className="pt-24 pb-12 px-4 text-center bg-[var(--lumino-paper)]">
        <h1
          className="font-display font-semibold text-[var(--lumino-ink)] tracking-[-0.025em]"
          style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
        >
          From survey to live screen.
        </h1>
        <p className="font-body text-[var(--lumino-ink-soft)] mt-4 max-w-xl mx-auto">
          Here's exactly what happens from the moment you get in touch to the day we switch it on.
        </p>
      </div>
      <HowItWorksSection />
      <InstallationsGallerySection />
      <ContactSection />
    </>
  )
}
