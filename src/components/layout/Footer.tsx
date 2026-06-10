import { Link } from 'react-router-dom'
import { Phone, Mail, ExternalLink } from 'lucide-react'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[var(--lumino-ink)] text-[var(--lumino-paper)] pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <span className="font-display font-semibold text-2xl tracking-tight block mb-2">Lumino</span>
            <p className="text-[var(--lumino-paper)]/60 font-body text-sm leading-relaxed mb-4">
              Your window, working harder.
            </p>
            <p className="mono-label text-[var(--lumino-paper)]/40">
              Bristol, England
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="eyebrow text-[var(--lumino-paper)]/40 mb-4">Navigation</p>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              {[
                { to: '/#why', label: 'Why Lumino' },
                { to: '/how-it-works', label: 'How it works' },
                { to: '/pricing', label: 'Pricing' },
                { to: '/#faq', label: 'FAQ' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="font-body text-sm text-[var(--lumino-paper)]/70 hover:text-[var(--lumino-paper)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="eyebrow text-[var(--lumino-paper)]/40 mb-4">Get in touch</p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+441173001234"
                className="flex items-center gap-2 font-body text-sm text-[var(--lumino-paper)]/70 hover:text-[var(--lumino-paper)] transition-colors"
              >
                <Phone size={14} />
                0117 300 1234
              </a>
              <a
                href="mailto:hello@lumino.co.uk"
                className="flex items-center gap-2 font-body text-sm text-[var(--lumino-paper)]/70 hover:text-[var(--lumino-paper)] transition-colors"
              >
                <Mail size={14} />
                hello@lumino.co.uk
              </a>
              <a
                href="https://instagram.com/luminobristol"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-sm text-[var(--lumino-paper)]/70 hover:text-[var(--lumino-paper)] transition-colors"
              >
                <ExternalLink size={14} />
                @luminobristol
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="mono-label text-[var(--lumino-paper)]/30 text-center md:text-left">
            © {year} Lumino Display Ltd. Company No. 15234567. ICO registered.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="mono-label text-[var(--lumino-paper)]/30 hover:text-[var(--lumino-paper)]/60 transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="mono-label text-[var(--lumino-paper)]/30 hover:text-[var(--lumino-paper)]/60 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
