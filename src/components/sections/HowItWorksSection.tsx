import { Search, Palette, Wrench, Smartphone } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { EyebrowPill } from '@/components/ui/EyebrowPill'
import { HandUnderline } from '@/components/ui/HandUnderline'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { motion } from 'framer-motion'

interface Step {
  number: string
  title: string
  description: string
  accent: string
  icon: LucideIcon
  image: string
}

const steps: Step[] = [
  {
    number: '01',
    title: 'We survey your window',
    description: 'A quick visit to measure up and figure out exactly what will work best in your space.',
    accent: 'var(--lumino-amber)',
    icon: Search,
    image: `${import.meta.env.BASE_URL}img/hero-kitchen-on-north.png`,
  },
  {
    number: '02',
    title: 'We design your menus',
    description: 'Our designers build your menu, promos, and posters. You approve them before anything goes live.',
    accent: 'var(--lumino-coral)',
    icon: Palette,
    image: `${import.meta.env.BASE_URL}img/process-designing-menu-content.png`,
  },
  {
    number: '03',
    title: 'We install it free',
    description: 'We fit the panel, run the cabling, and make sure everything is perfect. Zero cost to you.',
    accent: 'var(--lumino-teal)',
    icon: Wrench,
    image: `${import.meta.env.BASE_URL}img/process-fitting-pizzeria-display.png`,
  },
  {
    number: '04',
    title: 'You control it from your phone',
    description: 'Update prices, swap menus, run specials — all from an app on your phone in under a minute.',
    accent: 'var(--lumino-teal-2)',
    icon: Smartphone,
    image: `${import.meta.env.BASE_URL}img/process-phone-price-update.png`,
  },
]

export function HowItWorksSection() {
  return (
    <SectionWrapper id="how" bg="var(--lumino-paper)">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <EyebrowPill className="mx-auto mb-6">HOW IT WORKS</EyebrowPill>
          <h2
            className="font-display font-semibold text-[var(--lumino-ink)] tracking-[-0.025em] leading-[1.1] mx-auto"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', maxWidth: '20ch' }}
          >
            From survey to live screen in{' '}
            <em className="text-[var(--lumino-teal)]" style={{ fontStyle: 'italic' }}>a week</em>.
          </h2>
          <div className="flex justify-center mt-2 mb-4">
            <HandUnderline color="var(--lumino-teal)" width={120} />
          </div>
          <p
            className="font-body text-[var(--lumino-ink-soft)] mx-auto"
            style={{ fontSize: 'clamp(1.1rem, 1.3vw, 1.35rem)', maxWidth: '42ch' }}
          >
            You don't lift a finger. We handle the kit, the fitting, and the design. You just tell us what to put on it.
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-px" aria-hidden>
            <svg width="100%" height="1" className="overflow-visible">
              <line
                x1="10%"
                y1="0"
                x2="90%"
                y2="0"
                stroke="var(--lumino-line-strong)"
                strokeWidth="1.5"
                strokeDasharray="6 4"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map(({ number, title, description, accent, icon: Icon, image }, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl p-6 border border-[var(--lumino-line)] relative"
                >
                  <img
                    src={image}
                    alt=""
                    loading="lazy"
                    className="h-40 w-full rounded-xl object-cover mb-5"
                  />
                  <div
                    className="font-display font-black text-6xl leading-none mb-4 tabular-nums"
                    style={{ color: accent, opacity: 0.9 }}
                  >
                    {number}
                  </div>
                  <div className="mb-4 p-2.5 rounded-xl inline-flex" style={{ background: `${accent}18` }}>
                    <Icon size={22} style={{ color: accent }} />
                  </div>
                  <h4 className="font-display font-semibold text-xl text-[var(--lumino-ink)] mb-2 leading-snug">
                    {title}
                  </h4>
                  <p className="font-body text-sm text-[var(--lumino-ink-soft)] leading-relaxed">
                    {description}
                  </p>

                  {/* Accent border bottom */}
                  <div
                    className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full"
                    style={{ background: accent, opacity: 0.4 }}
                  />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
