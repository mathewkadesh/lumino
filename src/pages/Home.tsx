import { HeroSection } from '@/components/sections/HeroSection'
import { TrustedBySection } from '@/components/sections/TrustedBySection'
import { InstallationsGallerySection } from '@/components/sections/InstallationsGallerySection'
import { BenefitsTabsSection } from '@/components/sections/BenefitsTabsSection'
import { BigNumberSection } from '@/components/sections/BigNumberSection'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { CategoriesSection } from '@/components/sections/CategoriesSection'
import { RoiSection } from '@/components/sections/RoiSection'
import { BeforeAfterSection } from '@/components/sections/BeforeAfterSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { FinalCtaSection } from '@/components/sections/FinalCtaSection'
import { ContactSection } from '@/components/sections/ContactSection'

export function Home() {
  return (
    <>
      <div className="pt-[128px]">
        <HeroSection />
      </div>
      <TrustedBySection />
      <InstallationsGallerySection />
      <BenefitsTabsSection />
      <BigNumberSection />
      <HowItWorksSection />
      <CategoriesSection />
      <RoiSection />
      <BeforeAfterSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <FinalCtaSection />
      <ContactSection />
    </>
  )
}
