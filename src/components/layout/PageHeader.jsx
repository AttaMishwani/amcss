import ParallaxHeader from '../animations/ParallaxHeader'
import Badge from '../ui/Badge'
import { cn } from '../../utils/cn'

export default function PageHeader({ eyebrow, title, description, backgroundImage }) {
  const hasBackground = Boolean(backgroundImage)

  return (
    <ParallaxHeader
      className={cn(
        'border-b border-[var(--border)] py-16 sm:py-20',
        hasBackground ? 'relative overflow-hidden' : 'hero-gradient',
      )}
    >
      {hasBackground ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-slate-950/65" aria-hidden />
        </>
      ) : null}

      <div className={cn('container-shell', hasBackground && 'relative z-10')}>
        {eyebrow ? (
          <Badge className={hasBackground ? 'border-white/35 bg-white/10 text-white' : ''}>{eyebrow}</Badge>
        ) : null}
        <h1 className={cn('mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl', hasBackground && 'text-white')}>{title}</h1>
        <p className={cn('mt-4 max-w-2xl text-[var(--muted)] sm:text-lg', hasBackground && 'text-white/85')}>{description}</p>
      </div>
    </ParallaxHeader>
  )
}
