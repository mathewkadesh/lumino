import { cn } from '@/lib/cn'
import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  narrow?: boolean  // max-w-[800px] for single-column content
}

export function Container({ children, className, narrow }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-6 md:px-8 lg:px-10',
        narrow ? 'max-w-[800px]' : 'max-w-[1240px]',
        className,
      )}
    >
      {children}
    </div>
  )
}
