import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/cn'

interface SelectOption {
  value: string
  label: string
}

interface SelectProps {
  label: string
  options: SelectOption[]
  value: string
  onChange: (value: string) => void
  error?: string
  className?: string
}

export function Select({ label, options, value, onChange, error, className }: SelectProps) {
  const id = label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="font-body font-medium text-sm text-[var(--lumino-ink)]">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cn(
            'w-full px-4 py-3 rounded-xl border-2 bg-white font-body text-[var(--lumino-ink)] text-sm',
            'transition-all duration-150 outline-none appearance-none cursor-pointer',
            'border-[var(--lumino-line-strong)]',
            'focus:border-[var(--lumino-amber)] focus:ring-4 focus:ring-[var(--lumino-amber)]/15',
            error && 'border-[var(--lumino-danger)]',
            className
          )}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <ChevronDown
          size={16}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--lumino-ink-faint)] pointer-events-none"
        />
      </div>
      {error && <p className="text-xs text-[var(--lumino-danger)] font-body">{error}</p>}
    </div>
  )
}
