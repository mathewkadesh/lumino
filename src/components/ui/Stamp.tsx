import { cn } from '@/lib/cn'

interface StampProps {
  children: React.ReactNode
  variant?: 'light' | 'dark'
  className?: string
}

export function Stamp({ children, variant = 'light', className }: StampProps) {
  return (
    <span className={cn(
      'mono-label inline-block px-2 py-1 rounded border-2',
      variant === 'light'
        ? 'border-[var(--lumino-line-strong)] text-[var(--lumino-ink-faint)]'
        : 'border-[var(--lumino-ink-soft)] text-[var(--lumino-ink-soft)]',
      className
    )}>
      {children}
    </span>
  )
}
