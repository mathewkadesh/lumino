import { cn } from '@/lib/cn'
import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  hint?: string
}

export function Input({ label, error, hint, className, id, ...props }: InputProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={inputId} className="font-body font-medium text-sm text-[var(--lumino-ink)]">
        {label}
      </label>
      <input
        id={inputId}
        className={cn(
          'w-full px-4 py-3 rounded-xl border-2 bg-white font-body text-[var(--lumino-ink)] text-sm',
          'transition-all duration-150 outline-none',
          'border-[var(--lumino-line-strong)] placeholder:text-[var(--lumino-ink-faint)]',
          'focus:border-[var(--lumino-amber)] focus:ring-4 focus:ring-[var(--lumino-amber)]/15',
          error && 'border-[var(--lumino-danger)] focus:border-[var(--lumino-danger)] focus:ring-[var(--lumino-danger)]/15',
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-[var(--lumino-danger)] font-body">{error}</p>}
      {hint && !error && <p className="text-xs text-[var(--lumino-ink-faint)] font-body">{hint}</p>}
    </div>
  )
}
