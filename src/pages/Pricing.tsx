import { PricingSection } from '@/components/sections/PricingSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { ContactSection } from '@/components/sections/ContactSection'

export function Pricing() {
  return (
    <>
      <div className="pt-24 pb-12 px-4 text-center bg-[var(--lumino-paper)]">
        <h1
          className="font-display font-semibold text-[var(--lumino-ink)] tracking-[-0.025em]"
          style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
        >
          Simple, honest pricing.
        </h1>
        <p className="font-body text-[var(--lumino-ink-soft)] mt-4 max-w-xl mx-auto">
          No hidden fees. Installation always free. Cancel after 12 months with 30 days' notice.
        </p>
      </div>
      <PricingSection />
      <FaqSection />
      <ContactSection />
    </>
  )
}
