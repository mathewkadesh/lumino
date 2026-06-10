import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'
import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  accentColor?: string
  tilt?: number
  hover?: boolean
  breathe?: boolean
}

export function Card({ children, className, accentColor, tilt = 0, hover = true, breathe = false }: CardProps) {
  return (
    <motion.div
      initial={{ rotate: tilt }}
      whileHover={hover ? {
        y: -8,
        boxShadow: `0 20px 60px ${accentColor ? accentColor + '33' : 'rgba(20,19,15,0.15)'}`,
        transition: { duration: 0.2, ease: 'easeOut' },
      } : undefined}
      animate={breathe ? {
        scale: [1, 1.015, 1],
        transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
      } : { rotate: tilt }}
      className={cn(
        'rounded-2xl p-6 border border-[var(--lumino-line)] bg-white',
        'transition-shadow duration-200',
        className
      )}
      style={accentColor ? { borderColor: accentColor } : undefined}
    >
      {children}
    </motion.div>
  )
}
