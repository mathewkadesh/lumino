import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
} from 'recharts'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { EyebrowPill } from '@/components/ui/EyebrowPill'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'
import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/cn'

type Tab = 'footfall' | 'updates' | 'energy'

const tabs: { id: Tab; label: string }[] = [
  { id: 'footfall', label: 'Footfall' },
  { id: 'updates', label: 'Updates' },
  { id: 'energy', label: 'Energy & cost' },
]

const costData = [
  { label: 'Menu reprints\n(annual)', value: 2400, color: 'var(--lumino-coral)' },
  { label: 'Lumino fee\n(annual)', value: 828, color: 'var(--lumino-teal)' },
  { label: 'Saved staff\nhours (annual)', value: 560, color: 'var(--lumino-amber)' },
]

function StatPill({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center px-5 py-4 rounded-xl bg-[var(--lumino-paper-2)] border border-[var(--lumino-line)]">
      <span
        className="font-display font-bold text-[var(--lumino-amber)] tabular-nums leading-none"
        style={{ fontSize: '1.6rem' }}
      >
        {value}
      </span>
      <span className="mono-label text-[var(--lumino-ink-faint)] mt-1 text-center">{label}</span>
    </div>
  )
}

function CostTooltip({ active, payload }: { active?: boolean; payload?: { payload: { label: string; value: number } }[] }) {
  if (!active || !payload?.length) return null
  return (
    <div className="glass rounded-xl px-3 py-2 text-sm font-body border border-[var(--lumino-line)]">
      <p className="mono-label text-[var(--lumino-ink-faint)]">£{payload[0].payload.value.toLocaleString()}</p>
    </div>
  )
}

function FootfallTab() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div>
        <h3
          className="font-display font-semibold text-[var(--lumino-ink)] tracking-[-0.02em] leading-[1.1] mb-4"
          style={{ fontSize: 'clamp(1.5rem, 2.4vw, 2rem)' }}
        >
          Pull people off the pavement.
        </h3>
        <p className="font-body text-[var(--lumino-ink-soft)] leading-relaxed mb-8">
          A bright digital window display catches 2.4× more eye-time than a printed poster. We design rotating content that gives passers-by a reason to stop, look, and step inside — whether that's a lunch deal at noon or a sold-out warning at 7pm.
        </p>
        <div className="grid grid-cols-3 gap-3">
          <StatPill value="+47%" label="dwell time" />
          <StatPill value="+38%" label="recall" />
          <StatPill value="+22%" label="footfall lift" />
        </div>
      </div>
      <div>
        <PlaceholderImage
          id="CAT-02"
          aspect="4/3"
          alt="Café interior at the counter with a Lumino menu display visible from outside"
          src="/img/gallery-cafe-stokes-croft.png"
          imgClassName="scale-[1.08] object-[center_42%]"
        />
      </div>
    </div>
  )
}

function UpdatesTab() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div>
        <h3
          className="font-display font-semibold text-[var(--lumino-ink)] tracking-[-0.02em] leading-[1.1] mb-4"
          style={{ fontSize: 'clamp(1.5rem, 2.4vw, 2rem)' }}
        >
          Change anything in under a minute.
        </h3>
        <p className="font-body text-[var(--lumino-ink-soft)] leading-relaxed">
          Sold out of pastries? Tap once and they disappear. Coffee gone up 20p? Type the new price. Tonight's special needs pushing? Done. Every change goes live across your window in seconds — no calling, no waiting, no reprinting.
        </p>
      </div>
      <div>
        <PlaceholderImage
          id="HOW-04"
          aspect="4/3"
          alt="Shop owner holding a smartphone showing the Lumino dashboard, updating a price"
          src="/img/process-phone-price-update.png"
          imgClassName="object-[center_42%]"
        />
      </div>
    </div>
  )
}

function EnergyTab() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div>
        <h3
          className="font-display font-semibold text-[var(--lumino-ink)] tracking-[-0.02em] leading-[1.1] mb-4"
          style={{ fontSize: 'clamp(1.5rem, 2.4vw, 2rem)' }}
        >
          Cheaper than reprinting your menu.
        </h3>
        <p className="font-body text-[var(--lumino-ink-soft)] leading-relaxed">
          Our displays use 25% less energy than older signage and shut themselves off outside your trading hours. Most owners spend more on a single laminated menu reprint than they do on a whole month of running a Lumino.
        </p>
      </div>
      <div>
        <div className="bg-[var(--lumino-paper-3)] rounded-2xl p-6 border border-[var(--lumino-line)] shadow-sm">
          <p className="mono-label text-[var(--lumino-ink-faint)] mb-4">ANNUAL COST COMPARISON</p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={costData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--lumino-line)" vertical={false} />
              <XAxis
                dataKey="label"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 10, fontFamily: 'JetBrains Mono', fill: 'var(--lumino-ink-faint)' }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 10, fontFamily: 'JetBrains Mono', fill: 'var(--lumino-ink-faint)' }}
                tickFormatter={(v) => `£${(v / 1000).toFixed(0)}k`}
              />
              <Tooltip content={<CostTooltip />} cursor={{ fill: 'var(--lumino-line)' }} />
              <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                {costData.map((d, i) => (
                  <Cell key={i} fill={d.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <p className="mono-label text-[var(--lumino-ink-faint)] text-[0.68rem] mt-3">
            Lumino Growth plan (£69/mo). Average Bristol takeaway reprint cost.
          </p>
        </div>
      </div>
    </div>
  )
}

export function BenefitsTabsSection() {
  const [active, setActive] = useState<Tab>('footfall')

  return (
    <SectionWrapper id="why" bg="var(--lumino-paper)">
      <Container>
        <ScrollReveal className="text-center mb-12">
          <EyebrowPill className="mx-auto mb-5">WHY LUMINO</EyebrowPill>
          <h2
            className="font-display font-semibold text-[var(--lumino-ink)] tracking-[-0.02em] leading-[1.08] mx-auto"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', maxWidth: '22ch' }}
          >
            It pays for itself in three{' '}
            <em className="text-[var(--lumino-amber)]" style={{ fontStyle: 'italic' }}>simple ways</em>.
          </h2>
        </ScrollReveal>

        {/* Tab bar */}
        <ScrollReveal delay={0.1} className="flex justify-center mb-10">
          <div
            className="inline-flex gap-1 p-1 rounded-full border border-[var(--lumino-line-strong)] bg-[var(--lumino-paper-2)]"
            role="tablist"
            aria-label="Benefits"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={active === tab.id}
                onClick={() => setActive(tab.id)}
                className={cn(
                  'px-5 py-2 rounded-full font-body font-medium text-[0.9rem] transition-all duration-200 cursor-pointer',
                  active === tab.id
                    ? 'bg-[var(--lumino-amber)] text-white shadow-sm'
                    : 'text-[var(--lumino-ink-soft)] hover:text-[var(--lumino-ink)]',
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Tab content */}
        <div role="tabpanel">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              {active === 'footfall' && <FootfallTab />}
              {active === 'updates' && <UpdatesTab />}
              {active === 'energy' && <EnergyTab />}
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </SectionWrapper>
  )
}
