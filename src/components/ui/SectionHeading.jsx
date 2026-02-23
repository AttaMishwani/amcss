export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">{eyebrow}</p> : null}
      <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-[var(--muted)] sm:text-lg">{description}</p> : null}
    </div>
  )
}
