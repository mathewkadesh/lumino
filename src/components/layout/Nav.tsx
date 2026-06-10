import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Marquee } from '@/components/ui/Marquee'
import { cn } from '@/lib/cn'

const navLinks = [
  { to: '/#why', label: 'Why Lumino' },
  { to: '/how-it-works', label: 'How it works' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/#faq', label: 'FAQ' },
]

const offerItems = [
  'Seasonal offer: £0 upfront LED display installation',
  'Free Bristol window survey this month',
  'Menu designs and price updates included',
  'Limited summer install slots now open',
]

function LuminoLogo() {
  // 4×4 grid: columns 1 and 2 (zero-indexed) lit in amber, outer columns faint
  const rows = [0, 1, 2, 3]
  const cols = [0, 1, 2, 3]

  return (
    <Link to="/" className="flex items-center gap-2.5 focus-visible:outline-none group" aria-label="Lumino home">
      <div className="grid gap-[2.5px]" style={{ gridTemplateColumns: 'repeat(4, 7px)' }} aria-hidden>
        {rows.map((r) =>
          cols.map((c) => {
            const lit = c === 1 || c === 2
            return (
              <div
                key={`${r}-${c}`}
                className="w-[7px] h-[7px] rounded-[2px]"
                style={{
                  backgroundColor: lit ? 'var(--lumino-amber)' : 'var(--lumino-ink-faint)',
                  opacity: lit ? 1 : 0.35,
                  animation: lit ? `shimmer ${1.6 + r * 0.25}s ease-in-out infinite` : 'none',
                }}
              />
            )
          })
        )}
      </div>
      <span
        className="font-display font-semibold text-[1.35rem] tracking-[-0.02em] text-[var(--lumino-ink)]"
        style={{ fontVariationSettings: '"opsz" 48' }}
      >
        Lumino
      </span>
    </Link>
  )
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 h-[88px] overflow-hidden transition-all duration-300 flex items-center',
          scrolled
            ? 'bg-[var(--lumino-paper)]/95 backdrop-blur-md border-b border-[var(--lumino-line)]'
            : 'bg-[var(--lumino-paper)]/95 backdrop-blur-md'
        )}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <LuminoLogo />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="px-4 py-2 rounded-lg font-body font-medium text-[0.9rem] text-[var(--lumino-ink-soft)] hover:text-[var(--lumino-ink)] transition-colors duration-150"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button variant="primary" className="text-sm px-5 py-2.5">
              <Link to="/contact" className="contents">Book free survey</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-[var(--lumino-ink)] cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden bg-[var(--lumino-paper)] border-b border-[var(--lumino-line)]"
            >
              <nav className="px-4 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 rounded-lg font-body font-medium text-[var(--lumino-ink)] hover:bg-[var(--lumino-paper-2)] transition-colors"
                  >
                    {link.label}
                  </NavLink>
                ))}
                <div className="pt-3 border-t border-[var(--lumino-line)]">
                  <Link to="/contact" onClick={() => setMobileOpen(false)}>
                    <Button variant="primary" className="w-full justify-center">
                      Book free survey
                    </Button>
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <div className="fixed top-[88px] left-0 right-0 z-40 h-10 overflow-hidden bg-[var(--lumino-ink)] text-white shadow-sm">
        <Marquee className="h-full">
          {offerItems.map((item) => (
            <span
              key={item}
              className="inline-flex h-10 items-center gap-3 px-8 font-body text-sm font-semibold"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--lumino-amber)]" aria-hidden />
              {item}
            </span>
          ))}
        </Marquee>
      </div>
    </>
  )
}
