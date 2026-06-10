import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/cn'
import type { ReactNode } from 'react'

interface MarqueeProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function Marquee({ children, className }: MarqueeProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return (
      <div className={cn('overflow-hidden whitespace-nowrap', className)}>
        <span className="inline-flex gap-8">{children}</span>
      </div>
    )
  }

  return (
    <div className={cn('overflow-hidden whitespace-nowrap', className)} aria-hidden>
      <div className="inline-flex marquee-track">
        <span className="inline-flex items-center gap-0 flex-shrink-0">{children}</span>
        <span className="inline-flex items-center gap-0 flex-shrink-0" aria-hidden>{children}</span>
      </div>
    </div>
  )
}
