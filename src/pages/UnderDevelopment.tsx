import { Link } from 'react-router-dom'

export function UnderDevelopment() {
  return (
    <div className="min-h-screen bg-[var(--lumino-paper)] px-6 pt-32 pb-20 flex items-center justify-center">
      <div className="max-w-xl text-center">
        <p className="eyebrow text-[var(--lumino-amber)] mb-4">UNDER DEVELOPMENT</p>
        <h1
          className="font-display font-semibold text-[var(--lumino-ink)] leading-[1.05] mb-5"
          style={{ fontSize: 'clamp(2.4rem, 6vw, 4.6rem)' }}
        >
          This page is coming soon.
        </h1>
        <p className="font-body text-[var(--lumino-ink-soft)] mb-8">
          We are still wiring this part of Lumino.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-full bg-[var(--lumino-amber)] px-6 py-3.5 font-body font-semibold text-white"
        >
          Back to home
        </Link>
      </div>
    </div>
  )
}
