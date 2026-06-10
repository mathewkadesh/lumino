import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { EyebrowPill } from '@/components/ui/EyebrowPill'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'
import { Container } from '@/components/ui/Container'

interface Installation {
  id: string
  business: string
  neighbourhood: string
  type: string
  excerpt: string
  imageSrc?: string
}

const installations: Installation[] = [
  { id: 'GAL-01', business: "Mehmet's Grill", neighbourhood: 'Easton', type: 'Kebab shop', excerpt: 'Full-window LED panel showing rotating menu and daily specials. Footfall up noticeably since installation.', imageSrc: `${import.meta.env.BASE_URL}img/gallery-kebab-easton.png` },
  { id: 'GAL-02', business: 'Harbour Café', neighbourhood: 'Stokes Croft', type: 'Café', excerpt: 'Daytime breakfast menu switches automatically to lunch at noon. No staff intervention needed.', imageSrc: `${import.meta.env.BASE_URL}img/gallery-cafe-stokes-croft.png` },
  { id: 'GAL-03', business: 'Clifton & Co', neighbourhood: 'Clifton', type: 'Boutique', excerpt: 'Vertical panel beside the door rotating seasonal product imagery for a premium boutique feel.', imageSrc: `${import.meta.env.BASE_URL}img/gallery-boutique-clifton.png` },
  { id: 'GAL-04', business: 'Gloucester Road Stores', neighbourhood: 'Gloucester Road', type: 'Convenience', excerpt: 'Weekly deal updates pushed by owner from phone. PayPoint and parcel collection visible from 30m.', imageSrc: `${import.meta.env.BASE_URL}img/gallery-convenience-store-deals.png` },
  { id: 'GAL-05', business: 'The Bedminster Room', neighbourhood: 'Bedminster', type: 'Restaurant', excerpt: 'Curved panel wrapping the corner of the shopfront. The only curved installation in the area.', imageSrc: `${import.meta.env.BASE_URL}img/gallery-restaurant-southville.png` },
  { id: 'GAL-06', business: "Paulo's Barbers", neighbourhood: 'St Pauls', type: 'Barber', excerpt: 'Price list, walk-in availability, and Instagram handle. Queue visible from the street.', imageSrc: `${import.meta.env.BASE_URL}img/gallery-barber-st-pauls.png` },
  { id: 'GAL-07', business: 'Park Street Premier', neighbourhood: 'Park Street', type: 'Premier shop', excerpt: 'Rolling promotions and chilled drinks offers. Customer dwell at the window measurably improved.', imageSrc: `${import.meta.env.BASE_URL}img/gallery-premier-gloucester-road.png` },
  { id: 'GAL-08', business: "Luca's Pizzeria", neighbourhood: 'Whiteladies Road', type: 'Pizzeria', excerpt: 'Night-time neon effect at dusk, mouth-watering pizza imagery. One of our most-photographed installs.', imageSrc: `${import.meta.env.BASE_URL}img/gallery-pizzeria-dough-day.png` },
]

function InstallationCard({ install, index, onOpen }: { install: Installation; index: number; onOpen: (i: Installation) => void }) {
  return (
    <ScrollReveal delay={index * 0.06}>
      <motion.button
        type="button"
        onClick={() => onOpen(install)}
        className="group relative w-full text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--lumino-amber)] rounded-2xl"
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        aria-label={`View ${install.business} installation in ${install.neighbourhood}`}
      >
        {/* Image */}
        <div className="overflow-hidden rounded-2xl">
          <motion.div
            className="w-full"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <PlaceholderImage
              id={install.id}
              aspect="4/3"
              alt={`LED display in the window of ${install.business} in ${install.neighbourhood}, Bristol`}
              src={install.imageSrc}
              imgClassName="scale-[1.14] translate-y-[3%] object-[center_40%]"
              className="w-full"
            />
          </motion.div>
        </div>

        {/* Label overlay — bottom-left, glass */}
        <motion.div
          className="absolute bottom-3 left-3 glass rounded-xl px-3 py-2 max-w-[80%]"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
        >
          <p className="font-display font-semibold text-[var(--lumino-ink)] text-[0.9rem] leading-tight">
            {install.business}
          </p>
          <p className="mono-label text-[var(--lumino-ink-soft)] mt-0.5">{install.neighbourhood.toUpperCase()}</p>
        </motion.div>
      </motion.button>
    </ScrollReveal>
  )
}

function Lightbox({ install, onClose }: { install: Installation; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        style={{ background: 'rgba(20,19,15,0.85)', backdropFilter: 'blur(8px)' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="bg-[var(--lumino-paper-3)] rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <PlaceholderImage
              id={install.id}
              aspect="4/3"
              alt={`LED display in the window of ${install.business} in ${install.neighbourhood}`}
              src={install.imageSrc}
              imgClassName="scale-[1.04] object-[center_42%]"
              className="rounded-none"
            />
            <button
              onClick={onClose}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[var(--lumino-ink)]/60 flex items-center justify-center text-white hover:bg-[var(--lumino-ink)] transition-colors"
              aria-label="Close lightbox"
            >
              <X size={16} />
            </button>
          </div>
          <div className="p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-display font-semibold text-xl text-[var(--lumino-ink)]">{install.business}</h3>
                <p className="mono-label text-[var(--lumino-ink-soft)] mt-0.5">{install.neighbourhood.toUpperCase()} · {install.type.toUpperCase()}</p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[var(--lumino-teal)]/10 text-[var(--lumino-teal)] mono-label text-[0.72rem]">
                INSTALLED
              </span>
            </div>
            <p className="font-body text-[var(--lumino-ink-soft)] leading-relaxed">{install.excerpt}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export function InstallationsGallerySection() {
  const [open, setOpen] = useState<Installation | null>(null)

  return (
    <>
      <SectionWrapper id="showcase" bg="var(--lumino-paper)">
        <Container>
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <ScrollReveal>
              <div>
                <EyebrowPill className="mb-5">RECENT INSTALLATIONS</EyebrowPill>
                <h2
                  className="font-display font-semibold text-[var(--lumino-ink)] tracking-[-0.02em] leading-[1.08]"
                  style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)' }}
                >
                  See it on Bristol's{' '}
                  <em className="text-[var(--lumino-amber)]" style={{ fontStyle: 'italic' }}>high streets</em>.
                </h2>
                <p className="font-body text-[var(--lumino-ink-soft)] mt-4 max-w-[48ch]">
                  Real shops, real owners, real Bristol neighbourhoods. Every one of these went from first survey to live screen in under two weeks.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="flex-shrink-0">
              <Link
                to="/under-development"
                className="inline-flex items-center gap-2 font-body font-medium text-[var(--lumino-amber)] hover:text-[var(--lumino-amber-2)] transition-colors group"
              >
                View all installations
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {installations.map((install, i) => (
              <InstallationCard key={install.id} install={install} index={i} onOpen={setOpen} />
            ))}
          </div>

          {/* Footer teaser */}
          <ScrollReveal delay={0.2} className="mt-10 text-center">
            <p className="font-body text-[var(--lumino-ink-soft)] text-sm">
              Showing 8 of 47.{' '}
              <Link
                to="/under-development"
                className="text-[var(--lumino-amber)] font-medium hover:underline"
              >
                View all installations →
              </Link>
            </p>
          </ScrollReveal>
        </Container>
      </SectionWrapper>

      {/* Lightbox */}
      {open && <Lightbox install={open} onClose={() => setOpen(null)} />}
    </>
  )
}
