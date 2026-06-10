import { Marquee } from '@/components/ui/Marquee'

const logos = [
  "Mehmet's Grill",
  'Harbour Café',
  'Gloucester Road Stores',
  'Clifton & Co',
  'The Bedminster Room',
  'Easton Kebab',
  "Paulo's Barbers",
  "Luca's Pizzeria",
  'Park Street Premier',
  'Stokes Croft Store',
]

function Separator() {
  return (
    <span
      className="mx-6 text-[var(--lumino-ink-faint)] inline-block select-none"
      style={{ fontSize: '0.5rem' }}
      aria-hidden
    >
      ●
    </span>
  )
}

export function TrustedBySection() {
  return (
    <section
      className="overflow-hidden py-5 border-y border-[var(--lumino-line)]"
      style={{ background: 'var(--lumino-paper-3)' }}
      aria-label="Trusted by Bristol businesses"
    >
      <p className="eyebrow text-[var(--lumino-ink-faint)] text-center text-[0.7rem] mb-4 tracking-[0.16em]">
        TRUSTED BY BRISTOL'S INDEPENDENT BUSINESSES
      </p>
      <Marquee>
        {logos.map((name, i) => (
          <span key={i} className="inline-flex items-center">
            <span
              className="font-display font-semibold text-[var(--lumino-ink-faint)] tracking-wide select-none"
              style={{ fontSize: '1rem', opacity: 0.55 }}
            >
              {name}
            </span>
            <Separator />
          </span>
        ))}
      </Marquee>
    </section>
  )
}
