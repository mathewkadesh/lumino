import { cn } from '@/lib/cn'
import type { CSSProperties, ReactNode } from 'react'

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  id?: string
  bg?: string
  noPad?: boolean
  style?: CSSProperties
}

export function SectionWrapper({ children, className, id, bg, noPad, style }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn('relative w-full', !noPad && 'py-20 md:py-28 px-4 md:px-8', className)}
      style={{ ...style, ...(bg ? { background: bg } : {}) }}
    >
      {children}
    </section>
  )
}
