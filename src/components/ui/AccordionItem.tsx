import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/cn'
import type { ReactNode } from 'react'

interface AccordionItemProps {
  question: string
  answer: ReactNode
  isOpen: boolean
  onToggle: () => void
  className?: string
}

export function AccordionItem({ question, answer, isOpen, onToggle, className }: AccordionItemProps) {
  return (
    <div className={cn('border-b border-[var(--lumino-line)]', className)}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left gap-4 cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="font-display font-semibold text-lg text-[var(--lumino-ink)]">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 text-[var(--lumino-ink-soft)]"
        >
          <Plus size={20} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="pb-5 text-[var(--lumino-ink-soft)] font-body leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
