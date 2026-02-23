export default function Toast({ message, show }) {
  return (
    <div
      className={`fixed right-4 top-20 z-[80] rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
      }`}
      role="status"
      aria-live="polite"
    >
      {message}
    </div>
  )
}
