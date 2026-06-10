import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { EyebrowPill } from '@/components/ui/EyebrowPill'
import { CountUp } from '@/components/ui/CountUp'
import { HandUnderline } from '@/components/ui/HandUnderline'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const stats = [
  { value: 218, label: 'recall', prefix: '+', suffix: '%' },
  { value: 94, label: 'engagement', prefix: '+', suffix: '%' },
  { value: 47, label: 'footfall lift', prefix: '+', suffix: '%' },
]

export function BigNumberSection() {
  return (
    <SectionWrapper
      id="proof"
      className="text-center overflow-hidden"
      bg="var(--lumino-paper-2)"
    >
      {/* Subtle cream tint blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob absolute -top-32 left-1/4 w-96 h-96" style={{ background: 'radial-gradient(circle, var(--lumino-cream) 0%, transparent 70%)', opacity: 0.28 }} />
        <div className="blob absolute -bottom-32 right-1/4 w-80 h-80" style={{ background: 'radial-gradient(circle, var(--lumino-cream) 0%, transparent 70%)', opacity: 0.2 }} />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <ScrollReveal>
          <EyebrowPill className="mx-auto mb-8">THE INDUSTRY DATA</EyebrowPill>
        </ScrollReveal>

        <div className="mb-6">
          <div
            className="font-display font-black text-[var(--lumino-amber)] leading-none tracking-[-0.03em] tabular-nums"
            style={{ fontSize: 'clamp(6rem, 22vw, 18rem)', fontStyle: 'italic' }}
          >
            <CountUp
              to={2.4}
              duration={1200}
              format={(n) => `${n.toFixed(1)}×`}
              triggerOnView
            />
          </div>
        </div>

        <ScrollReveal delay={0.1}>
          <p
            className="font-body font-semibold text-[var(--lumino-ink)] mx-auto mb-3"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.4rem)', maxWidth: '36rem' }}
          >
            more dwell time at digital windows than printed posters
          </p>
          <div className="flex justify-center">
            <HandUnderline color="var(--lumino-amber)" width={340} />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mono-label text-[var(--lumino-ink-faint)] mb-10 mt-4">
            Source: UK Retail Digital Signage Council, 2024
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {stats.map(({ value, label, prefix, suffix }, i) => (
              <div key={i} className="text-center">
                <div className="font-display font-bold text-[var(--lumino-ink)] text-3xl md:text-4xl tabular-nums">
                  <CountUp
                    to={value}
                    duration={1000}
                    format={(n) => `${prefix}${Math.round(n)}${suffix}`}
                    triggerOnView
                  />
                </div>
                <div className="mono-label text-[var(--lumino-ink-faint)] mt-1">{label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
