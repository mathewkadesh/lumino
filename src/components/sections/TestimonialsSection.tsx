import { Star } from 'lucide-react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { EyebrowPill } from '@/components/ui/EyebrowPill'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "Within three weeks of the screen going in, I had regulars asking about deals they'd seen in the window. I've never had that with paper menus.",
    stat: '+£840/mo extra trade',
    name: 'Mehmet K.',
    location: 'Easton',
    initial: 'M',
    accent: 'var(--lumino-coral)',
  },
  {
    quote: "We used to spend £200 a month on printing alone. Now that's gone, and the screen looks absolutely brilliant — much better than the chains down the road.",
    stat: '£200/mo saved on print',
    name: 'Priya S.',
    location: 'Bedminster',
    initial: 'P',
    accent: 'var(--lumino-amber)',
  },
  {
    quote: "Lumino fitted everything in one afternoon. The team designed our menu exactly how we wanted it. I updated the breakfast prices from my phone in about 20 seconds.",
    stat: 'Live in one afternoon',
    name: 'James T.',
    location: 'Clifton',
    initial: 'J',
    accent: 'var(--lumino-teal)',
  },
]

export function TestimonialsSection() {
  return (
    <SectionWrapper
      id="testimonials"
      bg="var(--lumino-ink)"
      className="relative overflow-hidden"
    >
      {/* Giant quotation mark bg */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 font-display font-black text-[var(--lumino-coral)] select-none pointer-events-none leading-none"
        style={{ fontSize: '32rem', opacity: 0.06, top: '-8rem' }}
        animate={{ y: [-15, 0, -15], rotate: [-3, 0, -3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      >
        "
      </motion.div>

      <div className="max-w-7xl mx-auto relative">
        <ScrollReveal className="text-center mb-14">
          <EyebrowPill className="mx-auto mb-6 border-white/20 bg-white/10 text-[var(--lumino-paper)]/60">
            REAL STORIES
          </EyebrowPill>
          <h2
            className="font-display font-semibold text-[var(--lumino-paper)] tracking-[-0.025em] leading-[1.1] mx-auto"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', maxWidth: '20ch' }}
          >
            Bristol shops, real results.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, stat, name, location, initial, accent }, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="rounded-2xl p-7 bg-white/5 border border-white/10 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={14} fill="var(--lumino-amber)" stroke="none" />
                  ))}
                </div>

                <blockquote className="font-display font-medium text-[var(--lumino-paper)] leading-relaxed flex-1 mb-6"
                  style={{ fontSize: '1.15rem', fontStyle: 'italic' }}>
                  "{quote}"
                </blockquote>

                {/* Stat tag */}
                <div className="mb-4">
                  <span className="mono-label px-3 py-1.5 rounded-full" style={{ background: `${accent}22`, color: accent }}>
                    {stat}
                  </span>
                </div>

                {/* Avatar */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-sm text-white flex-shrink-0"
                    style={{ background: accent }}
                  >
                    {initial}
                  </div>
                  <div>
                    <p className="font-body font-medium text-sm text-[var(--lumino-paper)]">{name}</p>
                    <p className="mono-label text-[var(--lumino-paper)]/40">· {location}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
