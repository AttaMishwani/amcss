import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '../../utils/cn'

export default function Accordion({ items }) {
  const [openId, setOpenId] = useState(items[0]?.id)

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const open = openId === item.id
        return (
          <div key={item.id} className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
            <button
              type="button"
              onClick={() => setOpenId(open ? null : item.id)}
              className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left font-semibold"
              aria-expanded={open}
              aria-controls={`faq-${item.id}`}
            >
              <span>{item.question}</span>
              <ChevronDown className={cn('h-5 w-5 transition-transform', open && 'rotate-180')} aria-hidden="true" />
            </button>
            <div id={`faq-${item.id}`} className={cn('grid transition-all duration-300', open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
              <p className="overflow-hidden px-5 pb-4 text-sm text-[var(--muted)]">{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
