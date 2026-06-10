import { Marquee } from '@/components/ui/Marquee'

const items = [
  'FREE INSTALL',
  'DESIGNED FOR YOU',
  'UPDATE IN MINUTES',
  'NO REPRINTING',
  'BRIGHT IN DAYLIGHT',
  'FLEXIBLE PANELS',
  'BRISTOL LOCAL',
  'NO UPFRONT COST',
  '24/7 SUPPORT',
]

function Star() {
  return (
    <span
      className="text-[var(--lumino-sunshine)] mx-4 inline-block"
      style={{ animation: 'star-rotate 8s linear infinite', display: 'inline-block' }}
      aria-hidden
    >
      ✦
    </span>
  )
}

export function TickerSection() {
  return (
    <section
      className="py-0 overflow-hidden"
      style={{ background: 'var(--lumino-ink)', height: '64px' }}
      aria-label="Feature highlights"
    >
      <div className="h-full flex items-center">
        <Marquee>
          {items.map((item, i) => (
            <span key={i} className="inline-flex items-center">
              <Star />
              <span className="mono-label text-[var(--lumino-paper)] tracking-[0.08em]">
                {item}
              </span>
            </span>
          ))}
          <Star />
        </Marquee>
      </div>
    </section>
  )
}
