import { cn } from '@/lib/cn'
import type { LucideIcon } from 'lucide-react'

interface TagProps {
  children: React.ReactNode
  icon?: LucideIcon
  className?: string
}

export function Tag({ children, icon: Icon, className }: TagProps) {
  return (
    <span className={cn(
      'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium font-body',
      'bg-[var(--lumino-paper-2)] text-[var(--lumino-ink-soft)] border border-[var(--lumino-line)]',
      className
    )}>
      {Icon && <Icon size={12} />}
      {children}
    </span>
  )
}
