import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/cn'
import type { ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  className?: string
  once?: boolean
}

export function ScrollReveal({ children, delay = 0, className, once = true }: ScrollRevealProps) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 })
  const reduced = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      initial={reduced ? false : { opacity: 0, y: 40 }}
      animate={inView || !once ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
