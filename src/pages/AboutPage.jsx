import { Flag, HeartHandshake, Rocket, Shield, Target } from 'lucide-react'
import classroomLearning from '../assets/illustrations/classroom-learning.svg'
import libraryReading from '../assets/illustrations/library-reading.svg'
import sportsDay from '../assets/illustrations/sports-day.svg'
import artsCreativity from '../assets/illustrations/arts-creativity.svg'
import PageHeader from '../components/layout/PageHeader'
import Card from '../components/ui/Card'
import Photo from '../components/ui/Photo'
import SectionHeading from '../components/ui/SectionHeading'
import RevealOnScroll from '../components/animations/RevealOnScroll'
import usePageTitle from '../hooks/usePageTitle'

const photos = {
  classroom: 'https://images.pexels.com/photos/8423022/pexels-photo-8423022.jpeg?auto=compress&cs=tinysrgb&w=1600',
  library: 'https://images.pexels.com/photos/8926648/pexels-photo-8926648.jpeg?auto=compress&cs=tinysrgb&w=1600',
  sports: 'https://images.pexels.com/photos/8613201/pexels-photo-8613201.jpeg?auto=compress&cs=tinysrgb&w=1600',
  activity: 'https://images.pexels.com/photos/8471986/pexels-photo-8471986.jpeg?auto=compress&cs=tinysrgb&w=1600',
}
const headerImage = 'https://images.pexels.com/photos/8422206/pexels-photo-8422206.jpeg?auto=compress&cs=tinysrgb&w=2200'

const values = [
  { icon: Target, title: 'Academic Excellence', text: 'High standards in teaching, assessment, and student support.' },
  { icon: Rocket, title: 'Modern Readiness', text: 'Students prepared for future challenges with practical skills.' },
  { icon: Flag, title: 'Patriotism', text: 'A strong sense of national responsibility and civic values.' },
  { icon: HeartHandshake, title: 'Service to Mankind', text: 'Compassion, ethics, and social contribution in daily life.' },
  { icon: Shield, title: 'Character & Discipline', text: 'Respectful behavior, integrity, and personal accountability.' },
]

const gallery = [
  { label: 'Classroom', image: photos.classroom, fallback: classroomLearning },
  { label: 'Library', image: photos.library, fallback: libraryReading },
  { label: 'Sports Ground', image: photos.sports, fallback: sportsDay },
  { label: 'Activity Hall', image: photos.activity, fallback: artsCreativity },
]

export default function AboutPage() {
  usePageTitle('About')

  return (
    <>
      <PageHeader
        eyebrow="About Al Mansoor School"
        title="Mission-Driven Education for National Development"
        description="We provide enlightened education and examination services to nurture dynamic personalities ready for the modern era."
        backgroundImage={headerImage}
      />

      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-2">
          <RevealOnScroll>
            <SectionHeading eyebrow="Mission" title="What We Stand For" />
            <p className="mt-4 text-[var(--muted)]">
              Al Mansoor School is committed to enlightened education and examination services that contribute to national development through learning. We cultivate dynamic personalities through academic rigor, leadership opportunities, and strong moral foundations.
            </p>
            <p className="mt-4 text-[var(--muted)]">
              Our commitments include modern-era readiness, patriotism, and service to mankind. We encourage each student to think critically, act responsibly, and grow with confidence.
            </p>
          </RevealOnScroll>

          <RevealOnScroll>
            <Card>
              <h3 className="text-xl font-semibold">Principal's Message</h3>
              <p className="mt-3 text-[var(--muted)]">
                At Al Mansoor School, our priority is to provide a caring and disciplined environment where each child can achieve strong academic growth and sound character. We value partnership with parents and believe that together we can prepare students for meaningful futures in Pakistan and beyond.
              </p>
            </Card>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell space-y-8">
          <SectionHeading eyebrow="Core Values" title="Guiding Principles" description="Balanced values that shape responsible learners and future leaders." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <Card key={value.title}>
                  <Icon className="h-6 w-6 text-[var(--primary)]" />
                  <h3 className="mt-3 font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">{value.text}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="container-shell">
          <SectionHeading eyebrow="Gallery" title="Campus Glimpses" description="A preview of learning spaces, student activities, and school life." />
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((item) => (
              <div key={item.label} className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
                <Photo src={item.image} fallbackSrc={item.fallback} alt={`${item.label} photo with students`} className="h-36 w-full object-cover" />
                <p className="px-3 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
