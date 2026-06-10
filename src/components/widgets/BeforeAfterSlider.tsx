import { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'

function ShopWindowBefore() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#F5EFE0] overflow-hidden">
      {/* Window frame */}
      <div className="w-full h-full relative flex items-center justify-center px-8">
        <div className="w-full max-w-sm bg-[#E8D8B0] rounded-lg p-4 border-2 border-[#C8B880] relative overflow-hidden">
          {/* Sun bleach effect */}
          <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/30 -translate-y-8 translate-x-8 blur-xl" />
          {/* Paper content */}
          <div className="space-y-2">
            <div className="h-5 bg-[#8A6040]/50 rounded w-3/4 mx-auto" />
            <div className="border-t border-[#A08060]/30 pt-2 space-y-1.5">
              {['CHICKEN BURGER £5.50', 'CHIPS £2.00', 'BURGER MEAL £7.00', 'FISH £6.50'].map((item) => (
                <div key={item} className="flex justify-between text-[#6A4A2A]/60 text-xs font-mono">
                  <span>{item.split(' ').slice(0, -1).join(' ')}</span>
                  <span>{item.split(' ').at(-1)}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Tape corners */}
          <div className="absolute top-0 left-0 w-6 h-6 bg-[#D4C88080] rounded-br-lg" />
          <div className="absolute top-0 right-0 w-6 h-6 bg-[#D4C88080] rounded-bl-lg" />
          {/* Curled corner */}
          <div
            className="absolute bottom-0 right-0 w-8 h-8"
            style={{ background: 'linear-gradient(135deg, transparent 50%, #C8B060 50%)' }}
          />
        </div>
      </div>
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 mono-label px-3 py-1 rounded-full"
        style={{ background: 'rgba(20,19,15,0.06)', color: 'var(--lumino-ink-faint)' }}
      >
        BEFORE
      </div>
    </div>
  )
}

function ShopWindowAfter() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0A0908] overflow-hidden">
      {/* LED glow ambience */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, #FF5A4E15 0%, transparent 60%)' }} />
      {/* LED display */}
      <div className="w-full h-full relative flex items-center justify-center px-8">
        <div
          className="w-full max-w-sm rounded-xl overflow-hidden"
          style={{ background: '#0A0908', border: '1px solid rgba(255,90,78,0.3)', boxShadow: '0 0 40px rgba(255,90,78,0.2)' }}
        >
          {/* Simulated LED matrix */}
          <div className="p-4 space-y-2">
            <div className="text-center mb-3">
              <div className="font-mono text-xs text-[#FF5A4E]/80 animate-pulse">● DAILY MENU ●</div>
            </div>
            {[
              { name: 'CHICKEN BURGER', price: '£5.50', color: '#FFC83D' },
              { name: 'CHIPS', price: '£2.00', color: '#34D399' },
              { name: 'BURGER MEAL', price: '£7.00', color: '#FF5A4E' },
              { name: 'FISH & CHIPS', price: '£7.50', color: '#06B6D4' },
            ].map((item, i) => (
              <div
                key={item.name}
                className="flex justify-between font-mono text-xs"
                style={{
                  color: item.color,
                  opacity: 0.9,
                  animation: `shimmer ${1.5 + i * 0.2}s ease-in-out infinite`,
                }}
              >
                <span>{item.name}</span>
                <span>{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 mono-label px-3 py-1 rounded-full"
        style={{ background: 'var(--lumino-coral)', color: 'white' }}
      >
        AFTER
      </div>
    </div>
  )
}

export function BeforeAfterSlider() {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const pct = Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100))
    setPosition(pct)
  }, [])

  const onMouseDown = () => { dragging.current = true }
  const onMouseMove = (e: React.MouseEvent) => { if (dragging.current) updatePosition(e.clientX) }
  const onMouseUp = () => { dragging.current = false }
  const onTouchMove = (e: React.TouchEvent) => { updatePosition(e.touches[0].clientX) }

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-2xl overflow-hidden select-none cursor-ew-resize border border-[var(--lumino-line)]"
      style={{ height: '340px' }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchMove={onTouchMove}
      role="slider"
      aria-label="Before and after comparison. Drag to compare."
      aria-valuenow={Math.round(position)}
      aria-valuemin={5}
      aria-valuemax={95}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') setPosition(p => Math.max(5, p - 5))
        if (e.key === 'ArrowRight') setPosition(p => Math.min(95, p + 5))
      }}
    >
      {/* Before (full) */}
      <ShopWindowBefore />

      {/* After (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <ShopWindowAfter />
      </div>

      {/* Divider handle */}
      <div
        className="absolute top-0 bottom-0 flex items-center justify-center pointer-events-none"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        <div className="w-0.5 h-full bg-white/60" />
        <motion.div
          className="absolute w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 1.5, repeat: 2, ease: 'easeInOut', delay: 0.5 }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M5 8L2 5m0 0l3-3M2 5h12M11 8l3-3m0 0l-3-3M14 5v6" stroke="var(--lumino-ink)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>
    </div>
  )
}
