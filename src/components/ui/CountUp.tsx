import { useEffect, useRef, useState } from 'react'
import { useInView } from '@/hooks/useInView'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/cn'

interface CountUpProps {
  to: number
  from?: number
  duration?: number
  format?: (n: number) => string
  triggerOnView?: boolean
  className?: string
}

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

export function CountUp({
  to,
  from = 0,
  duration = 1200,
  format = (n) => String(Math.round(n)),
  triggerOnView = true,
  className,
}: CountUpProps) {
  const [ref, inView] = useInView<HTMLSpanElement>({ threshold: 0.5 })
  const [value, setValue] = useState(triggerOnView ? from : to)
  const reduced = useReducedMotion()
  const rafRef = useRef<number>(0)
  const startRef = useRef<number | null>(null)
  const hasStarted = useRef(false)

  useEffect(() => {
    if (reduced) { setValue(to); return }
    if (!triggerOnView || (inView && !hasStarted.current)) {
      hasStarted.current = true
      startRef.current = null

      const animate = (ts: number) => {
        if (startRef.current === null) startRef.current = ts
        const elapsed = ts - startRef.current
        const progress = Math.min(elapsed / duration, 1)
        const eased = easeOutExpo(progress)
        setValue(from + (to - from) * eased)
        if (progress < 1) rafRef.current = requestAnimationFrame(animate)
      }

      rafRef.current = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(rafRef.current)
    }
  }, [inView, to, from, duration, triggerOnView, reduced])

  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      {format(value)}
    </span>
  )
}
