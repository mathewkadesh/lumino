import { cn } from '@/lib/cn'

interface EyebrowPillProps {
  children: React.ReactNode
  showDot?: boolean
  dotColor?: string
  className?: string
}

export function EyebrowPill({ children, showDot = false, dotColor = 'var(--lumino-amber)', className }: EyebrowPillProps) {
  return (
    <div className={cn(
      'inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--lumino-line-strong)] bg-white/60',
      'eyebrow text-[var(--lumino-ink-soft)]',
      className
    )}>
      {showDot && (
        <span
          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
          style={{
            backgroundColor: dotColor,
            animation: 'dot-pulse 2s ease-in-out infinite',
          }}
        />
      )}
      {children}
    </div>
  )
}
