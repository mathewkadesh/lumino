import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { EyebrowPill } from '@/components/ui/EyebrowPill'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { BeforeAfterSlider } from '@/components/widgets/BeforeAfterSlider'

export function BeforeAfterSection() {
  return (
    <SectionWrapper id="before-after" bg="var(--lumino-paper)">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="text-center mb-12">
          <EyebrowPill className="mx-auto mb-6">THE DIFFERENCE</EyebrowPill>
          <h2
            className="font-display font-semibold text-[var(--lumino-ink)] tracking-[-0.025em] leading-[1.1] mx-auto"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', maxWidth: '20ch' }}
          >
            Drag to see the{' '}
            <em className="text-[var(--lumino-coral)]" style={{ fontStyle: 'italic' }}>difference</em>.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <BeforeAfterSlider />
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
