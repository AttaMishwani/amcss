import { useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import useTheme from '../../hooks/useTheme'
import { cn } from '../../utils/cn'

const options = [
  { key: 'light', label: 'Light', icon: Sun },
  { key: 'dark', label: 'Dark', icon: Moon },
]

export default function ThemeToggle() {
  const [open, setOpen] = useState(false)
  const { theme, resolvedTheme, setTheme } = useTheme()

  const ActiveIcon = resolvedTheme === 'dark' ? Moon : Sun

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] transition hover:text-[var(--text)]"
        aria-label="Toggle theme"
        aria-expanded={open}
      >
        <ActiveIcon className="h-5 w-5" />
      </button>

      {open ? (
        <div className="absolute right-0 mt-2 w-36 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-1.5 shadow-soft">
          {options.map((option) => {
            const Icon = option.icon
            return (
              <button
                key={option.key}
                type="button"
                onClick={() => {
                  setTheme(option.key)
                  setOpen(false)
                }}
                className={cn(
                  'flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-sm transition',
                  theme === option.key ? 'bg-[var(--surface-alt)] font-semibold text-[var(--text)]' : 'text-[var(--muted)] hover:bg-[var(--surface-alt)]',
                )}
              >
                <Icon className="h-4 w-4" />
                {option.label}
              </button>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}

