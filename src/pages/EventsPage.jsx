import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/layout/PageHeader'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Photo from '../components/ui/Photo'
import SectionHeading from '../components/ui/SectionHeading'
import StaggerGrid from '../components/animations/StaggerGrid'
import { mockEvents } from '../data/mockEvents'
import { formatDate } from '../utils/date'
import usePageTitle from '../hooks/usePageTitle'

const filters = ['All', 'Academics', 'Sports', 'Culture']
const headerImage = 'https://images.pexels.com/photos/8471830/pexels-photo-8471830.jpeg?auto=compress&cs=tinysrgb&w=2200'

export default function EventsPage() {
  usePageTitle('Events')

  const [activeFilter, setActiveFilter] = useState('All')
  const sorted = [...mockEvents].sort((a, b) => new Date(a.date) - new Date(b.date))
  const featured = sorted.slice(0, 3)
  const remaining = sorted.slice(3)
  const filtered = activeFilter === 'All' ? remaining : remaining.filter((event) => event.category === activeFilter)

  return (
    <>
      <PageHeader
        eyebrow="School Events"
        title="Academic, Sports, and Cultural Calendar"
        description="Stay updated with activities that strengthen student learning and community engagement."
        backgroundImage={headerImage}
      />

      <section className="section-space">
        <div className="container-shell space-y-8">
          <SectionHeading title="Upcoming Highlights" description="Featured events for families and prospective parents." />
          <StaggerGrid className="grid gap-4 md:grid-cols-3">
            {featured.map((event) => (
              <Card key={event.id} data-stagger-item>
                <Photo src={event.image} fallbackSrc={event.fallbackImage} alt={`${event.title} school activity photo`} className="h-40 w-full rounded-xl border border-[var(--border)] object-cover" />
                <Badge className="mt-4">{event.category}</Badge>
                <h3 className="mt-2 text-xl font-semibold">{event.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{event.excerpt}</p>
                <p className="mt-3 text-sm text-[var(--muted)]">{formatDate(event.date)} | {event.time}</p>
                <p className="text-sm text-[var(--muted)]">{event.location}</p>
                <Button as={Link} to={`/events/${event.id}`} className="mt-4">View Details</Button>
              </Card>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="container-shell space-y-6">
          <SectionHeading title="More Events" />
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-3 py-1.5 text-sm font-medium transition ${
                  activeFilter === filter
                    ? 'border-[var(--primary)] bg-[var(--primary)] text-white'
                    : 'border-[var(--border)] bg-[var(--surface)] text-[var(--muted)]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <StaggerGrid className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filtered.length ? (
              filtered.map((event) => (
                <Card key={event.id} data-stagger-item>
                  <Photo src={event.image} fallbackSrc={event.fallbackImage} alt={`${event.title} student event photo`} className="h-32 w-full rounded-xl border border-[var(--border)] object-cover" />
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">{event.category}</p>
                  <h3 className="mt-1 text-lg font-semibold">{event.title}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">{event.excerpt}</p>
                  <p className="mt-3 text-xs text-[var(--muted)]">{formatDate(event.date)}</p>
                  <Link to={`/events/${event.id}`} className="mt-3 inline-flex text-sm font-semibold text-[var(--primary)]">View details</Link>
                </Card>
              ))
            ) : (
              <p className="text-sm text-[var(--muted)]">No events found for this category.</p>
            )}
          </StaggerGrid>
        </div>
      </section>
    </>
  )
}
