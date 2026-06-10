import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

interface RevenueChartProps {
  data: { month: number; without: number; with: number }[]
}

function formatGBP(n: number): string {
  if (n >= 1000) return `£${(n / 1000).toFixed(0)}k`
  return `£${Math.round(n)}`
}

function CustomTooltip({ active, payload, label }: {
  active?: boolean
  payload?: { name: string; value: number; color: string }[]
  label?: number
}) {
  if (!active || !payload?.length) return null

  return (
    <div className="glass rounded-xl px-4 py-3 text-sm font-body border border-[var(--lumino-line)]">
      <p className="mono-label text-[var(--lumino-ink-faint)] mb-1">Month {label}</p>
      {payload.map((p, i) => (
        <p key={i} className="font-medium" style={{ color: p.color }}>
          {p.name === 'with' ? 'With Lumino' : 'Without'}: {formatGBP(p.value)}
        </p>
      ))}
    </div>
  )
}

export function RevenueChart({ data }: RevenueChartProps) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="withGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#F26419" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#F26419" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="withoutGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#14130F" stopOpacity={0.1} />
            <stop offset="95%" stopColor="#14130F" stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="3 3" stroke="var(--lumino-line)" />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 11, fontFamily: 'JetBrains Mono', fill: 'var(--lumino-ink-faint)' }}
          tickFormatter={(v) => v === 0 ? 'Start' : `M${v}`}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 11, fontFamily: 'JetBrains Mono', fill: 'var(--lumino-ink-faint)' }}
          tickFormatter={formatGBP}
          width={48}
        />
        <Tooltip content={<CustomTooltip />} />

        <Area
          type="monotone"
          dataKey="without"
          stroke="var(--lumino-ink-faint)"
          strokeWidth={2}
          fill="url(#withoutGrad)"
          strokeDasharray="4 2"
          dot={false}
          name="without"
        />
        <Area
          type="monotone"
          dataKey="with"
          stroke="var(--lumino-amber)"
          strokeWidth={2.5}
          fill="url(#withGrad)"
          dot={false}
          name="with"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
