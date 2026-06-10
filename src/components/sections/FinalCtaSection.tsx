import { ArrowRight, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Container } from '@/components/ui/Container'

export function FinalCtaSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-8 lg:px-10" aria-label="Final call to action">
      <Container>
        <div
          className="rounded-[24px] overflow-hidden relative"
          style={{
            background: 'linear-gradient(135deg, var(--lumino-amber) 0%, var(--lumino-coral) 55%, var(--lumino-cream) 100%)',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] items-center">
            {/* Left — text */}
            <ScrollReveal className="p-10 md:p-14 lg:p-16">
              <p
                className="eyebrow text-white/60 mb-5"
                style={{ fontSize: '0.72rem' }}
              >
                READY?
              </p>
              <h2
                className="font-display font-semibold text-white tracking-[-0.02em] leading-[1.04] mb-5"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)' }}
              >
                Let's{' '}
                <em style={{ fontStyle: 'italic' }}>light up</em>{' '}
                your window.
              </h2>
              <p className="font-body text-white/80 leading-relaxed mb-8 max-w-[42ch]">
                Free survey, no obligation, anywhere in Bristol. We'll come out, measure your window, and tell you honestly what would work best — even if that means a different size or shape than you expected.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/under-development"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[var(--lumino-ink)] font-body font-semibold text-[0.95rem] hover:bg-[var(--lumino-paper)] transition-colors"
                >
                  Book my free survey <ArrowRight size={16} />
                </Link>
                <Link
                  to="/under-development"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-white/40 text-white font-body font-semibold text-[0.95rem] hover:border-white transition-colors"
                >
                  <Phone size={16} />
                  Call 0117 XXX XXXX
                </Link>
              </div>
            </ScrollReveal>

            {/* Right — illustration */}
            <div className="relative hidden lg:block p-8 pl-0">
              <motion.div
                animate={{ opacity: [0.82, 1, 0.82] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <PlaceholderImage
                  id="CTA-01"
                  aspect="21/9"
                  alt="Stylised illustration of a Bristol high-street row with multiple shops, one window glowing in Lumino amber"
                  src={`${import.meta.env.BASE_URL}img/process-fitting-pizzeria-display.png`}
                  imgClassName="scale-[1.04] object-[center_44%]"
                  className="rounded-2xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
