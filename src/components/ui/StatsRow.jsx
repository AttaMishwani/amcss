import Card from './Card'

export default function StatsRow({ items }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {items.map((item) => (
        <Card key={item.label} className="p-4 sm:p-5">
          <p className="text-3xl font-bold text-[var(--primary)]">{item.value}</p>
          <p className="mt-1 text-sm text-[var(--muted)]">{item.label}</p>
        </Card>
      ))}
    </div>
  )
}
