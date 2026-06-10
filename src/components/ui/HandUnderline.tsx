import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface HandUnderlineProps {
  color?: string
  width?: number
  className?: string
}

export function HandUnderline({ color = 'var(--lumino-amber)', width = 200, className }: HandUnderlineProps) {
  const [ref, inView] = useInView<SVGSVGElement>({ threshold: 0.5 })
  const reduced = useReducedMotion()

  return (
    <svg
      ref={ref}
      width={width}
      height={12}
      viewBox={`0 0 ${width} 12`}
      fill="none"
      className={className}
      aria-hidden
    >
      <motion.path
        d={`M4,8 C${width * 0.2},4 ${width * 0.6},10 ${width - 4},6`}
        stroke={color}
        strokeWidth={3}
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: reduced ? 0 : 0.8, ease: 'easeOut', delay: 0.2 }}
      />
    </svg>
  )
}
