import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'
import type { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'ghost' | 'dark' | 'white'

interface ButtonProps {
  variant?: ButtonVariant
  children: ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  href?: string
}

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-[var(--lumino-amber)] text-white hover:bg-[#e8640e] border-2 border-[var(--lumino-amber)]',
  ghost: 'bg-transparent text-[var(--lumino-ink)] border-2 border-[var(--lumino-line-strong)] hover:border-[var(--lumino-ink)]',
  dark: 'bg-[var(--lumino-ink)] text-[var(--lumino-paper)] border-2 border-[var(--lumino-ink)]',
  white: 'bg-white text-[var(--lumino-ink)] border-2 border-white hover:bg-[var(--lumino-paper)]',
}

export function Button({
  variant = 'primary',
  children,
  onClick,
  type = 'button',
  disabled,
  className,
}: ButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      className={cn(
        'inline-flex items-center gap-2 px-6 py-3 rounded-full font-body font-600 text-[0.95rem] leading-none',
        'transition-colors duration-150 cursor-pointer select-none',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        className
      )}
    >
      {children}
    </motion.button>
  )
}
