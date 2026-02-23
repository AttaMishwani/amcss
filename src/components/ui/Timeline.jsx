export default function Timeline({ items }) {
  return (
    <ol className="space-y-4">
      {items.map((item, index) => (
        <li key={item.title} className="relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 pl-11">
          <span className="absolute left-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--primary)] text-xs font-bold text-white">
            {index + 1}
          </span>
          <p className="font-semibold">{item.title}</p>
          <p className="text-sm text-[var(--muted)]">{item.date}</p>
        </li>
      ))}
    </ol>
  )
}
