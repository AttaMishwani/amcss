import { Quote } from 'lucide-react'
import Card from './Card'

export default function TestimonialCard({ testimonial }) {
  return (
    <Card>
      <Quote className="h-6 w-6 text-[var(--primary)]" aria-hidden="true" />
      <p className="mt-4 text-[var(--muted)]">{testimonial.quote}</p>
      <div className="mt-5">
        <p className="font-semibold">{testimonial.name}</p>
        <p className="text-sm text-[var(--muted)]">{testimonial.role}</p>
      </div>
    </Card>
  )
}
