import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle, XCircle, X } from 'lucide-react'
import { cn } from '@/lib/cn'

interface ToastProps {
  message: string
  type: 'success' | 'error'
  visible: boolean
  onClose: () => void
}

export function Toast({ message, type, visible, onClose }: ToastProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className={cn(
            'fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-2xl shadow-xl',
            'max-w-sm font-body text-sm',
            type === 'success' ? 'bg-[var(--lumino-success)] text-white' : 'bg-[var(--lumino-danger)] text-white'
          )}
        >
          {type === 'success' ? <CheckCircle size={18} /> : <XCircle size={18} />}
          <span className="flex-1">{message}</span>
          <button onClick={onClose} className="opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
