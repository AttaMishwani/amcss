import { X } from 'lucide-react'

export default function Modal({ open, title, onClose, children }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/55 p-4" role="dialog" aria-modal="true">
      <div className="w-full max-w-xl rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <button type="button" onClick={onClose} aria-label="Close modal" className="rounded-lg p-1.5 text-[var(--muted)] hover:bg-[var(--surface-alt)]">
            <X className="h-5 w-5" />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
