import { motion } from 'framer-motion'
import {
  Utensils, Coffee, ShoppingBag, Store, Scissors, Pizza,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { EyebrowPill } from '@/components/ui/EyebrowPill'
import { HandUnderline } from '@/components/ui/HandUnderline'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

interface WhoCard {
  title: string
  description: string
  accent: string
  icon: LucideIcon
}

const cards: WhoCard[] = [
  {
    title: 'Kebab shops & takeaways',
    description: 'Flash your daily specials, combo deals, and late-night menus without touching a printer.',
    accent: 'var(--lumino-sunshine)',
    icon: Utensils,
  },
  {
    title: 'Cafés & restaurants',
    description: 'Rotate your breakfast, lunch, and dinner menus automatically. Update specials in seconds.',
    accent: 'var(--lumino-coral)',
    icon: Coffee,
  },
  {
    title: 'Convenience & corner shops',
    description: 'Promote offers, scratch cards, and phone top-ups with a display that earns its keep 24/7.',
    accent: 'var(--lumino-cobalt)',
    icon: ShoppingBag,
  },
  {
    title: 'Premier & high-street retail',
    description: 'Your window is your best salesperson. Make it work as hard as you do.',
    accent: 'var(--lumino-violet)',
    icon: Store,
  },
  {
    title: 'Barbers & salons',
    description: 'Show your services, price list, and before/after work. Pull people in off the street.',
    accent: 'var(--lumino-mint)',
    icon: Scissors,
  },
  {
    title: 'Pizzerias & chippies',
    description: 'Bold, vibrant menus that change at teatime. Perfect for the Friday-night rush.',
    accent: 'var(--lumino-magenta)',
    icon: Pizza,
  },
]

function MiniDisplay({ accent }: { accent: string }) {
  return (
    <div
      className="mt-4 rounded-xl overflow-hidden h-12 flex items-center px-3 gap-1"
      style={{ background: 'rgba(0,0,0,0.25)' }}
    >
      {[0.9, 0.6, 0.8, 0.5, 0.7].map((op, i) => (
        <div
          key={i}
          className="flex-1 h-2 rounded-full"
          style={{
            background: accent,
            opacity: op,
            animation: `shimmer ${1.2 + i * 0.2}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  )
}

export function WhoSection() {
  return (
    <SectionWrapper id="who" bg="var(--lumino-paper-2)">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-14">
          <EyebrowPill className="mx-auto mb-6">WHO IT'S FOR</EyebrowPill>
          <h2
            className="font-display font-semibold text-[var(--lumino-ink)] tracking-[-0.025em] leading-[1.1] mx-auto"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', maxWidth: '22ch' }}
          >
            If people walk past your window,{' '}
            <em className="text-[var(--lumino-coral)]" style={{ fontStyle: 'italic' }}>this is for you</em>.
          </h2>
          <div className="flex justify-center mt-2">
            <HandUnderline color="var(--lumino-coral)" width={200} />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map(({ title, description, accent, icon: Icon }, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6, rotate: 0.5, transition: { duration: 0.2 } }}
                className="rounded-2xl p-6 h-full cursor-default"
                style={{ background: accent }}
              >
                <div className="mb-4 p-2.5 rounded-xl inline-flex bg-white/20">
                  <Icon size={22} className="text-white" />
                </div>
                <h4 className="font-display font-semibold text-xl text-white mb-2 leading-snug">
                  {title}
                </h4>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  {description}
                </p>
                <MiniDisplay accent="rgba(255,255,255,0.6)" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
