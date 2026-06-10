import { ContactSection } from '@/components/sections/ContactSection'

export function Contact() {
  return (
    <>
      <div className="pt-24 pb-12 px-4 text-center bg-[var(--lumino-paper)]">
        <h1
          className="font-display font-semibold text-[var(--lumino-ink)] tracking-[-0.025em]"
          style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
        >
          Get in touch.
        </h1>
        <p className="font-body text-[var(--lumino-ink-soft)] mt-4 max-w-xl mx-auto">
          Book your free no-obligation window survey. We'll reply within a few hours.
        </p>
      </div>
      <ContactSection />
    </>
  )
}
