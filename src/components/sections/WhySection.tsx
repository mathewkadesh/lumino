import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { EyebrowPill } from '@/components/ui/EyebrowPill'
import { HandUnderline } from '@/components/ui/HandUnderline'
import { Stamp } from '@/components/ui/Stamp'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const oldWay = [
  'Reprint every time prices change',
  'Fades in weeks of direct sunlight',
  'Looks dated next to digital chains',
  'Takes days to design and deliver',
  'Tape marks and curled corners',
]

const newWay = [
  'Update prices from your phone in 30s',
  'Full brightness even in direct sun',
  'Turns heads like no poster can',
  'We design everything for you',
  'Fitted free, no mess, no fuss',
]

export function WhySection() {
  return (
    <SectionWrapper id="why" bg="var(--lumino-paper)">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <EyebrowPill className="mx-auto mb-6">WHY LUMINO</EyebrowPill>
          <h2
            className="font-display font-semibold text-[var(--lumino-ink)] tracking-[-0.025em] leading-[1.1] mx-auto"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', maxWidth: '20ch' }}
          >
            Printed posters cost you{' '}
            <em className="text-[var(--lumino-sunshine)]" style={{ fontStyle: 'italic' }}>twice</em>.
          </h2>
          <div className="flex justify-center mt-2 mb-4">
            <HandUnderline color="var(--lumino-sunshine)" width={160} />
          </div>
          <p
            className="font-body text-[var(--lumino-ink-soft)] mx-auto"
            style={{ fontSize: 'clamp(1.1rem, 1.3vw, 1.35rem)', maxWidth: '42ch' }}
          >
            Once at the print shop — and again every time your prices change and you can't be bothered to reprint. A bright digital display fixes both, and looks ten times better doing it.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Old way */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-2xl p-8 border border-[var(--lumino-line)] bg-[var(--lumino-paper-2)]">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <Stamp variant="light">THE OLD WAY</Stamp>
                  <h3 className="font-display font-semibold text-2xl text-[var(--lumino-ink)] mt-3">
                    Paper & chalkboards
                  </h3>
                </div>
                {/* Faded poster illustration */}
                <div className="w-16 h-20 rounded bg-[#F0E8D0] border border-[#D4C8A0] flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 100%)' }} />
                  <div className="space-y-1 px-2">
                    <div className="h-1.5 bg-[#B0A080]/60 rounded-full w-full" />
                    <div className="h-1 bg-[#B0A080]/40 rounded-full w-3/4" />
                    <div className="h-1 bg-[#B0A080]/40 rounded-full w-5/6" />
                    <div className="h-1 bg-[#B0A080]/30 rounded-full w-2/3" />
                  </div>
                  {/* Curled corner */}
                  <div className="absolute bottom-0 right-0 w-4 h-4" style={{ background: 'linear-gradient(135deg, transparent 50%, #D4C8A0 50%)' }} />
                </div>
              </div>

              <ul className="space-y-3">
                {oldWay.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-body text-[var(--lumino-ink-soft)]">
                    <X size={16} className="text-[var(--lumino-danger)] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Lumino way */}
          <ScrollReveal delay={0.2}>
            <motion.div
              animate={{ scale: [1, 1.015, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="rounded-2xl p-8 border-2 border-[var(--lumino-sunshine)] bg-[var(--lumino-ink)]"
              style={{ rotate: '1.5deg' }}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <Stamp variant="dark" className="border-[var(--lumino-sunshine)]/50 text-[var(--lumino-sunshine)]">
                    THE BRIGHT WAY
                  </Stamp>
                  <h3 className="font-display font-semibold text-2xl text-[var(--lumino-paper)] mt-3">
                    A Lumino window
                  </h3>
                </div>
                {/* Mini LED display illustration */}
                <div className="w-16 h-20 rounded-lg bg-[var(--lumino-ink)] border border-[var(--lumino-sunshine)]/30 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <div className="space-y-1.5 px-2 w-full">
                    <div className="h-1.5 rounded-full w-full" style={{ background: 'var(--lumino-sunshine)', opacity: 0.9 }} />
                    <div className="h-1 rounded-full w-3/4" style={{ background: 'var(--lumino-coral)', opacity: 0.8 }} />
                    <div className="h-1 rounded-full w-full" style={{ background: 'var(--lumino-mint)', opacity: 0.7 }} />
                    <div className="h-1 rounded-full w-2/3" style={{ background: 'var(--lumino-cobalt)', opacity: 0.8 }} />
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {newWay.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-body text-[var(--lumino-paper)]/80">
                    <Check size={16} className="text-[var(--lumino-mint)] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </SectionWrapper>
  )
}
