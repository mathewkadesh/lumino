import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { EyebrowPill } from '@/components/ui/EyebrowPill'
import { HandUnderline } from '@/components/ui/HandUnderline'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { RoiCalculator } from '@/components/widgets/RoiCalculator'

export function RoiSection() {
  return (
    <SectionWrapper
      id="roi"
      bg="var(--lumino-paper-2)"
    >
      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="text-center mb-12">
          <EyebrowPill className="mx-auto mb-6">THE NUMBERS</EyebrowPill>
          <h2
            className="font-display font-semibold text-[var(--lumino-ink)] tracking-[-0.025em] leading-[1.1] mx-auto"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', maxWidth: '22ch' }}
          >
            See what a Lumino window{' '}
            <em className="text-[var(--lumino-amber)]" style={{ fontStyle: 'italic' }}>earns you back</em>.
          </h2>
          <div className="flex justify-center mt-2 mb-4">
            <HandUnderline color="var(--lumino-amber)" width={220} />
          </div>
          <p
            className="font-body text-[var(--lumino-ink-soft)] mx-auto"
            style={{ fontSize: 'clamp(1.1rem, 1.3vw, 1.35rem)', maxWidth: '36ch' }}
          >
            Drag the sliders. Watch your projected revenue lift over 12 months.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <RoiCalculator />
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
