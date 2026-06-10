import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Percent, Clock } from 'lucide-react'
import { useROIStore } from '@/stores/roiStore'
import { formatCurrency } from '@/lib/roi'
import type { BusinessType } from '@/lib/roi'
import { GlassCard } from '@/components/ui/GlassCard'
import { Select } from '@/components/ui/Select'
import { Slider } from '@/components/ui/Slider'
import { Button } from '@/components/ui/Button'
import { CountUp } from '@/components/ui/CountUp'
import { RevenueChart } from './RevenueChart'

const businessOptions = [
  { value: 'takeaway', label: 'Takeaway / Kebab shop' },
  { value: 'cafe', label: 'Café' },
  { value: 'restaurant', label: 'Restaurant' },
  { value: 'convenience', label: 'Convenience store' },
  { value: 'barber', label: 'Barber / Salon' },
  { value: 'other', label: 'Other' },
]

interface MetricTileProps {
  label: string
  value: number
  format: (n: number) => string
  color: string
  icon: React.ReactNode
}

function MetricTile({ label, value, format, color, icon }: MetricTileProps) {
  return (
    <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white/60 border border-[var(--lumino-line)]">
      <div className="mb-1" style={{ color }}>{icon}</div>
      <div
        className="font-display font-bold tabular-nums leading-none mb-1"
        style={{ fontSize: '2rem', color }}
      >
        <CountUp
          to={value}
          duration={600}
          format={format}
          triggerOnView={false}
        />
      </div>
      <p className="mono-label text-[var(--lumino-ink-faint)]">{label}</p>
    </div>
  )
}

export function RoiCalculator() {
  const { inputs, output, setInputs } = useROIStore()

  return (
    <GlassCard className="!p-0 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Inputs */}
        <div className="p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-[var(--lumino-line)]">
          <h3 className="font-display font-semibold text-xl text-[var(--lumino-ink)] mb-6">
            Your shop
          </h3>

          <div className="flex flex-col gap-6">
            <Select
              label="Business type"
              options={businessOptions}
              value={inputs.businessType}
              onChange={(v) => setInputs({ businessType: v as BusinessType })}
            />

            <Slider
              label="Daily footfall (people passing)"
              min={50}
              max={2000}
              step={10}
              value={inputs.dailyFootfall}
              onChange={(v) => setInputs({ dailyFootfall: v })}
              format={(v) => v.toLocaleString('en-GB')}
            />

            <Slider
              label="Average transaction value"
              min={3}
              max={60}
              step={1}
              value={inputs.avgTransaction}
              onChange={(v) => setInputs({ avgTransaction: v })}
              format={(v) => `£${v}`}
            />

            <Slider
              label="Current conversion rate"
              min={1}
              max={15}
              step={0.5}
              value={Math.round(inputs.currentConversion * 100)}
              onChange={(v) => setInputs({ currentConversion: v / 100 })}
              format={(v) => `${v}%`}
            />
          </div>
        </div>

        {/* Output */}
        <div className="p-6 md:p-8 flex flex-col gap-6">
          <h3 className="font-display font-semibold text-xl text-[var(--lumino-ink)]">
            Your projected uplift
          </h3>

          {/* Metric tiles */}
          <div className="grid grid-cols-3 gap-3">
            <MetricTile
              label="Extra annual revenue"
              value={output.annualExtraRevenue}
              format={formatCurrency}
              color="var(--lumino-coral)"
              icon={<TrendingUp size={16} />}
            />
            <MetricTile
              label="Conversion uplift"
              value={output.upliftPercent}
              format={(n) => `+${Math.round(n)}%`}
              color="var(--lumino-teal)"
              icon={<Percent size={16} />}
            />
            <MetricTile
              label="Payback period"
              value={Math.max(0.1, output.paybackMonths)}
              format={(n) => `${n.toFixed(1)}mo`}
              color="var(--lumino-coral)"
              icon={<Clock size={16} />}
            />
          </div>

          {/* Chart */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${inputs.dailyFootfall}-${inputs.avgTransaction}-${inputs.currentConversion}-${inputs.businessType}`}
              initial={{ opacity: 0.6 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <RevenueChart data={output.chartData} />
            </motion.div>
          </AnimatePresence>

          <Link to="/contact">
            <Button variant="primary" className="w-full justify-center">
              Lock these numbers in — book my free survey <ArrowRight size={15} />
            </Button>
          </Link>
        </div>
      </div>
    </GlassCard>
  )
}
