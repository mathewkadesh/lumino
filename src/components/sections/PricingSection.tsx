import { Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { EyebrowPill } from '@/components/ui/EyebrowPill'
import { HandUnderline } from '@/components/ui/HandUnderline'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

interface Plan {
  name: string
  price: number
  description: string
  features: string[]
  accent: string
  popular?: boolean
  cta: string
}

const plans: Plan[] = [
  {
    name: 'Starter',
    price: 39,
    description: 'Perfect for a single window display.',
    features: [
      'One LED panel fitted free',
      'Up to 8 content slides',
      'Email content updates',
      'Monthly design refresh',
      'Standard brightness panel',
    ],
    accent: 'var(--lumino-teal)',
    cta: 'Start with Starter',
  },
  {
    name: 'Growth',
    price: 69,
    description: 'For busy shops that want total control.',
    features: [
      'Up to two panels fitted free',
      'Unlimited content slides',
      'App-based instant updates',
      'Weekly design updates included',
      'High-brightness outdoor panel',
    ],
    accent: 'var(--lumino-amber)',
    popular: true,
    cta: 'Get Growth',
  },
  {
    name: 'Premium',
    price: 119,
    description: 'Multiple displays, maximum impact.',
    features: [
      'Up to four panels fitted free',
      'Unlimited content & slides',
      'Priority design team access',
      'Custom animations & video',
      'Premium ultra-bright panels',
    ],
    accent: 'var(--lumino-teal)',
    cta: 'Go Premium',
  },
]

export function PricingSection() {
  return (
    <SectionWrapper id="pricing" bg="var(--lumino-paper)">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-14">
          <EyebrowPill className="mx-auto mb-6">PRICING</EyebrowPill>
          <h2
            className="font-display font-semibold text-[var(--lumino-ink)] tracking-[-0.025em] leading-[1.1] mx-auto"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', maxWidth: '20ch' }}
          >
            No big bill.{' '}
            <em className="text-[var(--lumino-amber)]" style={{ fontStyle: 'italic' }}>No surprises</em>.
          </h2>
          <div className="flex justify-center mt-2 mb-4">
            <HandUnderline color="var(--lumino-amber)" width={140} />
          </div>
          <p
            className="font-body text-[var(--lumino-ink-soft)] mx-auto"
            style={{ fontSize: 'clamp(1.1rem, 1.3vw, 1.35rem)', maxWidth: '42ch' }}
          >
            Installation is always free. Pick the plan that fits — your screen pays for itself in saved printing alone.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {plans.map(({ name, price, description, features, accent, popular, cta }, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{
                  y: -8,
                  boxShadow: `0 20px 60px ${accent}30`,
                  transition: { duration: 0.2 },
                }}
                animate={popular ? {
                  scale: [1, 1.015, 1],
                  transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                } : {}}
                className={`rounded-2xl border-2 p-7 bg-white relative ${popular ? 'md:scale-[1.04] shadow-xl' : ''}`}
                style={{ borderColor: popular ? accent : 'var(--lumino-line)' }}
              >
                {popular && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-body font-semibold text-white"
                    style={{ background: accent }}
                  >
                    Most popular
                  </div>
                )}

                <div className="mb-5">
                  <h3 className="font-display font-semibold text-2xl text-[var(--lumino-ink)] mb-1">{name}</h3>
                  <p className="font-body text-sm text-[var(--lumino-ink-soft)]">{description}</p>
                </div>

                <div className="mb-1">
                  <span className="font-display font-bold text-[3.5rem] leading-none text-[var(--lumino-ink)] tabular-nums">
                    £{price}
                  </span>
                  <span className="font-body text-[var(--lumino-ink-soft)]">/mo</span>
                </div>
                <p className="mono-label text-[var(--lumino-ink-faint)] mb-7">+VAT · 12-month term</p>

                <ul className="space-y-3 mb-8">
                  {features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-2.5 font-body text-sm text-[var(--lumino-ink-soft)]">
                      <Check size={15} className="mt-0.5 flex-shrink-0" style={{ color: accent }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link to="/contact">
                  <Button
                    variant={popular ? 'primary' : 'ghost'}
                    className="w-full justify-center"
                  >
                    {cta}
                  </Button>
                </Link>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <p className="text-center mono-label text-[var(--lumino-ink-faint)] mt-10">
            Prefer to own it outright? Ask about our one-off buyout from £399.
          </p>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
