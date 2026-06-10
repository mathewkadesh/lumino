import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { EyebrowPill } from '@/components/ui/EyebrowPill'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'
import { Container } from '@/components/ui/Container'

interface Category {
  id: string
  title: string
  description: string
  filterSlug: string
  imageSrc?: string
}

const categories: Category[] = [
  {
    id: 'CAT-01',
    title: 'Takeaways & kebab shops',
    description: 'Glowing menus that beat any laminated print.',
    filterSlug: 'takeaway',
    imageSrc: '/img/gallery-kebab-easton.png',
  },
  {
    id: 'CAT-02',
    title: 'Cafés & restaurants',
    description: 'Auto-switching breakfast, lunch and dinner menus.',
    filterSlug: 'cafe',
    imageSrc: '/img/gallery-cafe-stokes-croft.png',
  },
  {
    id: 'CAT-03',
    title: 'Convenience stores',
    description: 'Weekly deals, PayPoint, parcels — visible from the pavement.',
    filterSlug: 'convenience',
    imageSrc: '/img/gallery-convenience-store-deals.png',
  },
  {
    id: 'CAT-04',
    title: 'Premier & retail',
    description: 'Rolling offers that pull footfall off the street.',
    filterSlug: 'premier',
    imageSrc: '/img/gallery-premier-gloucester-road.png',
  },
  {
    id: 'CAT-05',
    title: 'Barbers & salons',
    description: 'Live walk-in availability and price lists.',
    filterSlug: 'barber',
    imageSrc: '/img/gallery-barber-st-pauls.png',
  },
  {
    id: 'CAT-06',
    title: 'Pizzerias & chippies',
    description: 'Mouth-watering visuals that beat any chalkboard.',
    filterSlug: 'pizza',
    imageSrc: '/img/gallery-pizzeria-dough-evening.png',
  },
]

const altTexts: Record<string, string> = {
  'CAT-01': 'Takeaway window with a kebab menu on a Lumino display',
  'CAT-02': 'Café interior at the counter with a Lumino menu display visible from outside',
  'CAT-03': 'Corner shop window with weekly deals and PayPoint signage on Lumino',
  'CAT-04': 'Independent retailer with a vertical Lumino panel beside the door',
  'CAT-05': 'Barber shop window with price list and Instagram handle on a Lumino panel',
  'CAT-06': 'Pizzeria window at dusk with a vibrant Lumino menu visible from outside',
}

function CategoryCard({ cat, index }: { cat: Category; index: number }) {
  return (
    <ScrollReveal delay={index * 0.07}>
      <motion.div
        className="group flex flex-col"
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {/* Image */}
        <div className="overflow-hidden rounded-2xl mb-4">
          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <PlaceholderImage
              id={cat.id}
              aspect="4/3"
              alt={altTexts[cat.id]}
              src={cat.imageSrc}
              imgClassName="scale-[1.14] translate-y-[3%] object-[center_40%]"
              className="w-full"
            />
          </motion.div>
        </div>

        {/* Copy */}
        <h3 className="font-display font-semibold text-[var(--lumino-ink)] text-[1.1rem] leading-snug mb-1">
          {cat.title}
        </h3>
        <p className="font-body text-[var(--lumino-ink-soft)] text-[0.9rem] flex-1 mb-3">
          {cat.description}
        </p>
        <Link
          to="/under-development"
          className="inline-flex items-center gap-1.5 font-body font-medium text-[0.85rem] text-[var(--lumino-amber)] hover:text-[var(--lumino-amber-2)] transition-colors group"
        >
          See examples
          <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </motion.div>
    </ScrollReveal>
  )
}

export function CategoriesSection() {
  return (
    <SectionWrapper id="categories" bg="var(--lumino-paper-2)">
      <Container>
        <ScrollReveal className="text-center mb-12">
          <EyebrowPill className="mx-auto mb-5">MADE FOR BRISTOL</EyebrowPill>
          <h2
            className="font-display font-semibold text-[var(--lumino-ink)] tracking-[-0.02em] leading-[1.08] mx-auto"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', maxWidth: '24ch' }}
          >
            If people walk past your window,{' '}
            <em className="text-[var(--lumino-amber)]" style={{ fontStyle: 'italic' }}>this is for you</em>.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.id} cat={cat} index={i} />
          ))}
        </div>
      </Container>
    </SectionWrapper>
  )
}
