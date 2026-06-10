import { cn } from '@/lib/cn'
import type { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div className={cn(
      'glass rounded-2xl p-6 md:p-8',
      className
    )}>
      {children}
    </div>
  )
}
