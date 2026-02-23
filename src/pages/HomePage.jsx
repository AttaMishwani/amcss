import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, CalendarClock, CheckCircle2, GraduationCap, ShieldCheck, Sparkles, Users } from 'lucide-react'
import { mockEvents } from '../data/mockEvents'
import { testimonials } from '../data/testimonials'
import { schoolInfo } from '../data/site'
import usePageTitle from '../hooks/usePageTitle'
import heroFallback from '../assets/illustrations/hero-students.svg'
import campusFallback from '../assets/illustrations/campus-visit.svg'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Photo from '../components/ui/Photo'
import SectionHeading from '../components/ui/SectionHeading'
import StatsRow from '../components/ui/StatsRow'
import TestimonialCard from '../components/ui/TestimonialCard'
import Timeline from '../components/ui/Timeline'
import RevealOnScroll from '../components/animations/RevealOnScroll'
import StaggerGrid from '../components/animations/StaggerGrid'
import { formatDate } from '../utils/date'

const photos = {
  hero: 'https://images.pexels.com/photos/8422206/pexels-photo-8422206.jpeg?auto=compress&cs=tinysrgb&w=2000',
  campusVisit: 'https://images.pexels.com/photos/8423071/pexels-photo-8423071.jpeg?auto=compress&cs=tinysrgb&w=1600',
}

const highlights = ['Proven Excellence', 'Professional Teachers', 'Growth Oriented']

const features = [
  {
    icon: ShieldCheck,
    title: 'Safe, Disciplined Campus',
    text: 'A secure environment where students learn with confidence and consistent routines.',
  },
  {
    icon: GraduationCap,
    title: 'Strong Academic Direction',
    text: 'Structured lessons, regular assessments, and focused support at every grade level.',
  },
  {
    icon: Users,
    title: 'Parent-School Partnership',
    text: 'Clear communication and responsive faculty collaboration for long-term student success.',
  },
]

const lifeItems = [
  'Debate, coding, reading, and science clubs for curiosity-driven learning.',
  'Sports training in football, athletics, and teamwork-based competitions.',
  'Arts enrichment through drawing, calligraphy, stage activity, and design.',
  'Student leadership through prefect roles, assemblies, and service activities.',
  'Educational trips that connect class concepts with practical understanding.',
]

const deadlines = [
  { title: 'Application', date: '15 August' },
  { title: 'Test', date: '25 August' },
  { title: 'Interview', date: '1 September' },
  { title: 'Fee Deadline', date: '10 September' },
]

export default function HomePage() {
  usePageTitle('Home')

  const upcoming = [...mockEvents].sort((a, b) => new Date(a.date) - new Date(b.date)).slice(0, 3)

  return (
    <>
      <section className="hero-gradient border-b border-[var(--border)]">
        <div className="container-shell grid gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <RevealOnScroll>
            <Badge>Admissions Open - Seats Limited</Badge>
            <h1 className="mt-4 max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              A School Experience Built for Academic and Character Growth
            </h1>
            <p className="mt-4 text-lg font-bold text-[var(--primary)]">{schoolInfo.slogan}</p>
            <p className="mt-4 max-w-xl text-[var(--muted)] sm:text-lg">
              Al Mansoor School supports students with disciplined instruction, caring mentorship, and opportunities to lead with confidence.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button as={Link} to="/admissions" size="lg">Apply Now</Button>
              <Button as={Link} to="/contact" size="lg" variant="secondary">Visit Campus</Button>
              <Button as="a" href={`tel:${schoolInfo.phone}`} size="lg" variant="outline">Call Admissions</Button>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {highlights.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)] shadow-[0_22px_60px_rgba(8,18,36,0.14)]">
              <Photo
                src={photos.hero}
                fallbackSrc={heroFallback}
                alt="School students learning in classroom"
                className="h-[360px] w-full object-cover object-center sm:h-[420px]"
              />
              <div className="grid grid-cols-3 gap-3 border-t border-[var(--border)] bg-[var(--surface-alt)] p-4">
                <div>
                  <p className="text-xl font-extrabold text-[var(--primary)]">20+</p>
                  <p className="text-xs font-medium text-[var(--muted)]">Years of Focus</p>
                </div>
                <div>
                  <p className="text-xl font-extrabold text-[var(--primary)]">30+</p>
                  <p className="text-xs font-medium text-[var(--muted)]">Professional Teachers</p>
                </div>
                <div>
                  <p className="text-xl font-extrabold text-[var(--primary)]">90%</p>
                  <p className="text-xs font-medium text-[var(--muted)]">Parent Trust Score</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell space-y-8">
          <SectionHeading eyebrow="Why Choose Us" title="Trusted by Families Across Karachi" description="A focused learning model that combines strong academics with values and student wellbeing." />
          <StaggerGrid className="grid gap-5 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} data-stagger-item className="relative overflow-hidden">
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[var(--surface-alt)]" />
                  <Icon className="relative h-8 w-8 text-[var(--primary)]" />
                  <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">{feature.text}</p>
                </Card>
              )
            })}
          </StaggerGrid>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell grid gap-8 lg:grid-cols-2">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="About Snapshot"
              title="Balanced Learning for Real Growth"
              description="Students grow through academics, character education, creativity, and extracurricular participation."
            />
            <p className="mt-4 text-[var(--muted)]">
              Teachers mentor each child toward critical thinking, disciplined behavior, and leadership readiness. We keep parent communication clear at every stage.
            </p>
          </RevealOnScroll>
          <RevealOnScroll>
            <StatsRow
              items={[
                { label: 'Years of Academic Focus', value: '20+' },
                { label: 'Active Clubs & Activities', value: '15+' },
                { label: 'Student Engagement Rate', value: '90%' },
              ]}
            />
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell grid gap-8 rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 lg:grid-cols-[1fr_0.9fr]">
          <RevealOnScroll>
            <SectionHeading eyebrow="Admissions" title="Simple Process, Clear Deadlines" description="Start early and secure your child's place for the upcoming session." />
            <ul className="mt-6 space-y-3 text-sm text-[var(--muted)]">
              <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-[var(--primary)]" />Submit application form with student and guardian details.</li>
              <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-[var(--primary)]" />Provide required documents and attend the admission test.</li>
              <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-[var(--primary)]" />Complete interview and fee submission before the due date.</li>
            </ul>
            <div className="mt-6">
              <Button as={Link} to="/admissions">Start Application</Button>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <Timeline items={deadlines} />
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell space-y-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Upcoming Events" title="Learning Beyond the Classroom" description="Academic, cultural, and sports events that keep students active and engaged." />
            <Button as={Link} to="/events" variant="outline">All Events <ArrowRight className="h-4 w-4" /></Button>
          </div>

          <StaggerGrid className="grid gap-5 md:grid-cols-3">
            {upcoming.map((event) => (
              <Card key={event.id} data-stagger-item className="p-0 overflow-hidden">
                <Photo
                  src={event.image}
                  fallbackSrc={event.fallbackImage}
                  alt={`${event.title} student activity photo`}
                  className="h-44 w-full object-cover"
                />
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--primary)]">{event.category}</p>
                  <h3 className="mt-1 text-lg font-bold">{event.title}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">{event.excerpt}</p>
                  <p className="mt-3 text-xs font-semibold text-[var(--muted)]">{formatDate(event.date)}</p>
                  <Link to={`/events/${event.id}`} className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[var(--primary)]">
                    View details <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell space-y-8">
          <SectionHeading eyebrow="Parent Testimonials" title="Why Parents Recommend Al Mansoor School" description="Families value our academic guidance, responsiveness, and student care." />
          <StaggerGrid className="grid gap-5 md:grid-cols-2">
            {testimonials.map((item) => (
              <div key={item.id} data-stagger-item>
                <TestimonialCard testimonial={item} />
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell grid gap-8 lg:grid-cols-2">
          <RevealOnScroll>
            <SectionHeading eyebrow="Student Life" title="A Vibrant Campus Experience" description="School life that builds confidence, creativity, teamwork, and leadership." />
            <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
              {lifeItems.map((item) => (
                <li key={item} className="flex gap-2"><Sparkles className="mt-0.5 h-4 w-4 text-[var(--accent)]" />{item}</li>
              ))}
            </ul>
          </RevealOnScroll>
          <RevealOnScroll>
            <Card className="hero-gradient overflow-hidden p-0">
              <Photo
                src={photos.campusVisit}
                fallbackSrc={campusFallback}
                alt="Parents and students on a campus visit"
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <BookOpen className="h-8 w-8 text-[var(--primary)]" />
                <h3 className="mt-4 text-2xl font-extrabold">Plan Your Campus Visit</h3>
                <p className="mt-3 text-[var(--muted)]">Meet our admissions team, tour classrooms, and discuss the right learning path for your child.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button as={Link} to="/contact">Visit Campus</Button>
                  <Button as={Link} to="/events" variant="secondary">Explore Events</Button>
                </div>
              </div>
            </Card>
          </RevealOnScroll>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="container-shell">
          <div className="cta-band rounded-[28px] px-6 py-8 text-white sm:px-8 sm:py-10 lg:flex lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/75">Ready to Begin?</p>
              <h2 className="mt-2 text-3xl font-extrabold">Take the Next Step for Your Child</h2>
              <p className="mt-2 text-sm text-white/85 sm:text-base">Apply today, contact admissions, or schedule a campus visit.</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-3 lg:mt-0">
              <Button as={Link} to="/admissions" className="!bg-white !text-[var(--primary)] hover:!bg-white/90"><CalendarClock className="h-4 w-4" /> Apply</Button>
              <Button as={Link} to="/contact" variant="outline" className="border-white/70 text-white hover:bg-white/15">Contact</Button>
              <Button as="a" href={`tel:${schoolInfo.phone}`} variant="outline" className="border-white/70 text-white hover:bg-white/15">Visit / Call</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
