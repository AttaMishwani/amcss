import { useState } from 'react'
import PageHeader from '../components/layout/PageHeader'
import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'
import Photo from '../components/ui/Photo'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Textarea from '../components/ui/Textarea'
import Modal from '../components/ui/Modal'
import Toast from '../components/ui/Toast'
import { careers } from '../data/careers'
import usePageTitle from '../hooks/usePageTitle'
import classroomLearning from '../assets/illustrations/classroom-learning.svg'
import artsCreativity from '../assets/illustrations/arts-creativity.svg'

const initialState = {
  fullName: '',
  email: '',
  message: '',
}

const photos = {
  teaching: 'https://images.pexels.com/photos/8471986/pexels-photo-8471986.jpeg?auto=compress&cs=tinysrgb&w=1600',
  teamwork: 'https://images.pexels.com/photos/8423071/pexels-photo-8423071.jpeg?auto=compress&cs=tinysrgb&w=1600',
}
const headerImage = 'https://images.pexels.com/photos/8471830/pexels-photo-8471830.jpeg?auto=compress&cs=tinysrgb&w=2200'

export default function CareersPage() {
  usePageTitle('Careers')

  const [activeRole, setActiveRole] = useState(null)
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [showToast, setShowToast] = useState(false)

  const validate = () => {
    const nextErrors = {}
    if (!form.fullName.trim()) nextErrors.fullName = 'Full name is required.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) nextErrors.email = 'Enter a valid email.'
    if (form.message.trim().length < 15) nextErrors.message = 'Please include at least 15 characters.'
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const closeModal = () => {
    setActiveRole(null)
    setForm(initialState)
    setErrors({})
  }

  const submit = (event) => {
    event.preventDefault()
    if (!validate()) return

    closeModal()
    setShowToast(true)
    setTimeout(() => setShowToast(false), 2500)
  }

  return (
    <>
      <Toast message="Career application submitted. HR will review your profile." show={showToast} />
      <PageHeader
        eyebrow="Careers"
        title="Teach and Lead at Al Mansoor School"
        description="We welcome dedicated educators who can inspire students and contribute to a disciplined, growth-oriented learning culture."
        backgroundImage={headerImage}
      />

      <section className="section-space">
        <div className="container-shell space-y-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <Photo
              src={photos.teaching}
              fallbackSrc={classroomLearning}
              alt="Teacher engaging students in classroom learning"
              className="h-48 w-full rounded-2xl border border-[var(--border)] object-cover"
            />
            <Photo
              src={photos.teamwork}
              fallbackSrc={artsCreativity}
              alt="School staff collaboration session"
              className="h-48 w-full rounded-2xl border border-[var(--border)] object-cover"
            />
          </div>
          <SectionHeading title="Open Positions" description="Current opportunities in teaching and student development." />
          <div className="grid gap-4 lg:grid-cols-3">
            {careers.map((role) => (
              <Card key={role.id}>
                <h2 className="text-xl font-semibold">{role.title}</h2>

                <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--primary)]">Responsibilities</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">
                  {role.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--primary)]">Requirements</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">
                  {role.requirements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <Button className="mt-5" onClick={() => setActiveRole(role)}>
                  Apply
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Modal open={Boolean(activeRole)} title={activeRole ? `Apply: ${activeRole.title}` : ''} onClose={closeModal}>
        <form className="space-y-4" onSubmit={submit} noValidate>
          <Input
            id="career-name"
            label="Full Name"
            value={form.fullName}
            error={errors.fullName}
            onChange={(event) => setForm((prev) => ({ ...prev, fullName: event.target.value }))}
          />
          <Input
            id="career-email"
            type="email"
            label="Email"
            value={form.email}
            error={errors.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
          />
          <Textarea
            id="career-message"
            label="Why are you a good fit?"
            rows={4}
            value={form.message}
            error={errors.message}
            onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          />
          <Button type="submit" className="w-full">Send Application</Button>
        </form>
      </Modal>
    </>
  )
}
