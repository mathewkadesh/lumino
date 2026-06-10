import { Suspense, lazy } from 'react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { EyebrowPill } from '@/components/ui/EyebrowPill'
import { HandUnderline } from '@/components/ui/HandUnderline'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const ShapeGallery = lazy(() => import('@/components/three/ShapeGallery').then(m => ({ default: m.ShapeGallery })))

export function ShowcaseSection() {
  return (
    <SectionWrapper id="showcase" bg="var(--lumino-paper-2)" className="overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[40fr_60fr] gap-12 items-center">
          {/* Copy */}
          <div className="lg:sticky lg:top-32">
            <ScrollReveal>
              <EyebrowPill className="mb-6">IT BENDS, IT WRAPS, IT FITS</EyebrowPill>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2
                className="font-display font-semibold text-[var(--lumino-ink)] tracking-[-0.025em] leading-[1.1] mb-6"
                style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
              >
                One panel system.{' '}
                <em className="text-[var(--lumino-violet)]" style={{ fontStyle: 'italic' }}>Every</em>{' '}
                shape your window has.
              </h2>
              <HandUnderline color="var(--lumino-violet)" width={130} />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p
                className="font-body text-[var(--lumino-ink-soft)] leading-relaxed mt-4"
                style={{ fontSize: 'clamp(1.1rem, 1.3vw, 1.35rem)' }}
              >
                Our panels flex into any curve, wrap pillars, fit awkward shopfronts. Whatever you've got, we'll fit it.
              </p>
            </ScrollReveal>

            {/* Shape tags */}
            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-2 mt-8">
                {['Flat panel', 'Curved display', 'Pillar wrap', 'Hanging sign'].map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-full border border-[var(--lumino-line-strong)] font-body text-sm text-[var(--lumino-ink-soft)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* 3D Scene */}
          <div className="h-[420px] md:h-[560px] w-full">
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-80 h-48 rounded-2xl bg-[var(--lumino-paper)] animate-pulse" />
              </div>
            }>
              <ShapeGallery />
            </Suspense>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
