import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { HandUnderline } from '@/components/ui/HandUnderline'

function TrustPill({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm">
      <Check size={11} className="text-[var(--lumino-teal-2)]" />
      <span className="font-body text-[0.8rem] font-medium text-white/90">{children}</span>
    </div>
  )
}

function RatingCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20, y: 10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: 0.9, duration: 0.5 }}
      className="absolute bottom-8 right-6 md:right-8 z-20 glass rounded-2xl p-4 max-w-[200px] shadow-lg"
    >
      <div className="flex gap-0.5 mb-1.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#00B67A" aria-hidden>
            <path d="M6 0l1.35 4.15H12L8.325 6.715l1.35 4.15L6 8.3l-3.675 2.565 1.35-4.15L0 4.15h4.65z" />
          </svg>
        ))}
      </div>
      <p className="font-display font-semibold text-[var(--lumino-ink)] text-[0.9rem] leading-tight">
        5.0 on Trustpilot
      </p>
      <p className="mono-label text-[var(--lumino-ink-soft)] mt-0.5">47 Bristol reviews</p>
    </motion.div>
  )
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}img/hero-kitchen-on-north.png`}
          alt="Bristol restaurant with a bright Lumino LED window display"
          loading="eager"
          decoding="async"
          className="h-full w-full object-cover object-center"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(20,19,15,0.72) 0%, rgba(20,19,15,0.42) 50%, rgba(20,19,15,0.08) 100%)',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-6 md:px-8 lg:px-10 py-20 md:py-24">
        <div className="max-w-[600px] flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm">
              <span
                className="w-1.5 h-1.5 rounded-full bg-[var(--lumino-amber)]"
                style={{ animation: 'dot-pulse 2s ease-in-out infinite' }}
              />
              <span className="eyebrow text-white/80 text-[0.72rem]">
                BRISTOL · INDEPENDENT · MADE IN BRITAIN
              </span>
            </div>
          </motion.div>

          <div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22 }}
              className="font-display font-semibold text-white tracking-[-0.02em] leading-[1.04]"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
            >
              LED window displays for Bristol&apos;s{' '}
              <em className="text-[var(--lumino-amber)] italic">independents</em>.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75, duration: 0.4 }}
            >
              <HandUnderline color="var(--lumino-amber)" width={180} className="mt-1" />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.38 }}
            className="font-body text-white/80 leading-relaxed"
            style={{ fontSize: 'clamp(1.05rem, 1.25vw, 1.2rem)' }}
          >
            We design and fit bright digital displays in shop windows — completely free. You
            change prices, menus, and offers from your phone. One flat monthly fee. No big
            upfront cost.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            <Link to="/under-development">
              <Button variant="primary" className="text-[1rem] px-7 py-4">
                Book a free survey <ArrowRight size={16} />
              </Button>
            </Link>

            <Link to="/under-development">
              <Button variant="white" className="text-[1rem] px-7 py-4">
                See installations
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.65 }}
            className="flex flex-wrap gap-2"
          >
            <TrustPill>£0 upfront</TrustPill>
            <TrustPill>Designs done for you</TrustPill>
            <TrustPill>Local Bristol team</TrustPill>
          </motion.div>
        </div>
      </div>

      <RatingCard />
    </section>
  )
}
