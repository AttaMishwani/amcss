import { cn } from '../../utils/cn'

export default function Badge({ className, children }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[var(--primary)]',
        className,
      )}
    >
      {children}
    </span>
  )
}
