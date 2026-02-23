import { cn } from '../../utils/cn'

const variants = {
  primary: 'bg-[var(--primary)] text-white shadow-[0_10px_28px_rgba(15,95,168,0.28)] hover:bg-[var(--primary-strong)]',
  secondary: 'bg-[var(--surface-alt)] text-[var(--text)] border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)]',
  outline: 'bg-transparent border border-[var(--border)] text-[var(--text)] hover:border-[var(--primary)] hover:bg-[var(--surface-alt)]',
}

const sizes = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-sm sm:text-base',
}

export default function Button({
  as: Tag = 'button',
  className,
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  ...props
}) {
  return (
    <Tag
      type={Tag === 'button' ? type : undefined}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] disabled:pointer-events-none disabled:opacity-60',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
