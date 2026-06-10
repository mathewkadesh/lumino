import { cn } from '@/lib/cn'

interface SliderProps {
  label: string
  min: number
  max: number
  value: number
  step?: number
  onChange: (value: number) => void
  format?: (v: number) => string
  className?: string
}

export function Slider({ label, min, max, value, step = 1, onChange, format = String, className }: SliderProps) {
  const pct = ((value - min) / (max - min)) * 100

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <div className="flex justify-between items-center">
        <label className="font-body font-medium text-sm text-[var(--lumino-ink)]">{label}</label>
        <span className="font-mono text-sm font-medium text-[var(--lumino-amber)] mono-label">
          {format(value)}
        </span>
      </div>
      <div className="relative h-6 flex items-center">
        <div className="absolute w-full h-1.5 rounded-full bg-[var(--lumino-line-strong)]" />
        <div
          className="absolute h-1.5 rounded-full bg-[var(--lumino-amber)] transition-all"
          style={{ width: `${pct}%` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute w-full opacity-0 cursor-pointer h-6"
          aria-label={label}
        />
        <div
          className="absolute w-5 h-5 rounded-full bg-white border-2 border-[var(--lumino-amber)] shadow-sm -translate-x-1/2 transition-all"
          style={{ left: `${pct}%` }}
        />
      </div>
    </div>
  )
}
