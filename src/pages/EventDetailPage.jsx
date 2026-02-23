import { Link, useParams } from 'react-router-dom'
import { CalendarClock, MapPin } from 'lucide-react'
import { mockEvents } from '../data/mockEvents'
import PageHeader from '../components/layout/PageHeader'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Photo from '../components/ui/Photo'
import SectionHeading from '../components/ui/SectionHeading'
import usePageTitle from '../hooks/usePageTitle'
import { formatDate } from '../utils/date'
const headerImage = 'https://images.pexels.com/photos/8613201/pexels-photo-8613201.jpeg?auto=compress&cs=tinysrgb&w=2200'

export default function EventDetailPage() {
  const { id } = useParams()

  const event = mockEvents.find((item) => item.id === id)
  const related = mockEvents.filter((item) => item.id !== id).slice(0, 3)

  usePageTitle(event ? event.title : 'Event Not Found')

  if (!event) {
    return (
      <section className="section-space">
        <div className="container-shell">
          <Card>
            <h1 className="text-2xl font-bold">Event not found</h1>
            <p className="mt-2 text-[var(--muted)]">The event you are looking for is unavailable.</p>
            <Button as={Link} to="/events" className="mt-4">Back to Events</Button>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <>
      <PageHeader
        eyebrow={event.category}
        title={event.title}
        description={`${formatDate(event.date)} | ${event.time} | ${event.location}`}
        backgroundImage={headerImage}
      />

      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Photo src={event.image} fallbackSrc={event.fallbackImage} alt={`${event.title} detailed event photo`} className="h-72 w-full rounded-3xl border border-[var(--border)] object-cover" />
            <div className="mt-6 space-y-4 text-[var(--muted)]">
              <p>{event.description}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2"><CalendarClock className="h-4 w-4 text-[var(--primary)]" /> {event.time}</span>
                <span className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2"><MapPin className="h-4 w-4 text-[var(--primary)]" /> {event.location}</span>
              </div>
            </div>
            <Button as={Link} to="/events" variant="secondary" className="mt-6">Back to Events</Button>
          </div>

          <div>
            <SectionHeading title="Related Events" />
            <div className="mt-4 space-y-3">
              {related.map((item) => (
                <Card key={item.id}>
                  <Photo src={item.image} fallbackSrc={item.fallbackImage} alt={`${item.title} photo`} className="mb-3 h-28 w-full rounded-xl border border-[var(--border)] object-cover" />
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">{item.category}</p>
                  <h3 className="mt-1 font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-[var(--muted)]">{formatDate(item.date)}</p>
                  <Link to={`/events/${item.id}`} className="mt-2 inline-flex text-sm font-semibold text-[var(--primary)]">Read more</Link>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
