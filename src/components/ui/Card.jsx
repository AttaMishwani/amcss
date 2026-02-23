import { cn } from '../../utils/cn'

export default function Card({ className, children }) {
  return (
    <article
      className={cn(
        'rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_8px_24px_rgba(15,23,42,0.05)] sm:p-6 card-hover',
        className,
      )}
    >
      {children}
    </article>
  )
}
