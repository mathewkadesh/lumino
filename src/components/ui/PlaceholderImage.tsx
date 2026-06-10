import { cn } from '@/lib/cn'

type AspectRatio = '16/10' | '4/5' | '1/1' | '4/3' | '21/9'

interface PlaceholderImageProps {
  id: string
  aspect: AspectRatio
  alt: string
  className?: string
  src?: string
  imgClassName?: string
  loading?: 'eager' | 'lazy'
}

const aspectMap: Record<AspectRatio, string> = {
  '16/10': 'aspect-[16/10]',
  '4/5':   'aspect-[4/5]',
  '1/1':   'aspect-square',
  '4/3':   'aspect-[4/3]',
  '21/9':  'aspect-[21/9]',
}

export function PlaceholderImage({ id, aspect, alt, className, src, imgClassName, loading = 'lazy' }: PlaceholderImageProps) {
  if (src) {
    return (
      <div
        className={cn(
          'relative w-full overflow-hidden rounded-2xl bg-[var(--lumino-paper-2)]',
          aspectMap[aspect],
          className,
        )}
      >
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          className={cn('absolute inset-0 h-full w-full object-cover', imgClassName)}
        />
      </div>
    )
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        'relative w-full overflow-hidden rounded-2xl',
        'bg-[var(--lumino-paper-2)]',
        'border-2 border-dashed border-[var(--lumino-line-strong)]',
        aspectMap[aspect],
        className,
      )}
    >
      {/* Slot ID — top-left */}
      <span className="absolute top-3 left-3 mono-label text-[var(--lumino-ink-faint)] text-[0.7rem] tracking-wider z-10">
        {id}
      </span>

      {/* Alt text — centred */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <p className="font-body text-[0.82rem] text-[var(--lumino-ink-soft)] text-center leading-snug max-w-[26ch]">
          {alt}
        </p>
      </div>

      {/* Aspect label — bottom-right */}
      <span className="absolute bottom-3 right-3 mono-label text-[var(--lumino-ink-faint)] text-[0.65rem]">
        {aspect}
      </span>
    </div>
  )
}
