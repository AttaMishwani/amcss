import { useState } from 'react'
import { Facebook, Mail, MapPin, Phone } from 'lucide-react'
import PageHeader from '../components/layout/PageHeader'
import Card from '../components/ui/Card'
import Photo from '../components/ui/Photo'
import Input from '../components/ui/Input'
import Textarea from '../components/ui/Textarea'
import Button from '../components/ui/Button'
import Toast from '../components/ui/Toast'
import SectionHeading from '../components/ui/SectionHeading'
import { schoolInfo } from '../data/site'
import usePageTitle from '../hooks/usePageTitle'
import campusVisit from '../assets/illustrations/campus-visit.svg'

const initialForm = {
  name: '',
  email: '',
  message: '',
}

const photos = {
  admissionsOffice: 'https://images.pexels.com/photos/8423071/pexels-photo-8423071.jpeg?auto=compress&cs=tinysrgb&w=1600',
}
const headerImage = 'https://images.pexels.com/photos/8471926/pexels-photo-8471926.jpeg?auto=compress&cs=tinysrgb&w=2200'

export default function ContactPage() {
  usePageTitle('Contact')

  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [showToast, setShowToast] = useState(false)

  const validate = () => {
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Name is required.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) nextErrors.email = 'Enter a valid email.'
    if (form.message.trim().length < 10) nextErrors.message = 'Please enter at least 10 characters.'
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const submit = (event) => {
    event.preventDefault()
    if (!validate()) return

    setForm(initialForm)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 2600)
  }

  return (
    <>
      <Toast message="Message sent successfully. We will get back to you soon." show={showToast} />
      <PageHeader
        eyebrow="Contact"
        title="Talk to Admissions"
        description="Reach out for admissions counseling, campus visits, or general school inquiries."
        backgroundImage={headerImage}
      />

      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Card>
            <SectionHeading title="Contact Information" />
            <ul className="mt-5 space-y-4 text-sm text-[var(--muted)]">
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-[var(--primary)]" /> {schoolInfo.location}</li>
              <li className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 text-[var(--primary)]" /> <a href={`tel:${schoolInfo.phone}`}>{schoolInfo.phone}</a></li>
              <li className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 text-[var(--primary)]" /> <a href={`mailto:${schoolInfo.email}`}>{schoolInfo.email}</a></li>
              <li className="flex items-start gap-3"><Facebook className="mt-0.5 h-4 w-4 text-[var(--primary)]" /> <a href={schoolInfo.facebook} target="_blank" rel="noreferrer">Facebook Page</a></li>
            </ul>
            <div className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--surface-alt)] p-4">
              <p className="text-sm font-semibold">Campuses</p>
              <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                {schoolInfo.campuses.map((campus) => (
                  <li key={campus.name} className="flex items-center justify-between gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2">
                    <span>{campus.name}</span>
                    {campus.isMain ? (
                      <span className="rounded-full bg-[var(--primary)]/12 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--primary)]">Main</span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--surface-alt)] p-4">
              <p className="text-sm font-semibold">Campus View</p>
              <Photo
                src={photos.admissionsOffice}
                fallbackSrc={campusVisit}
                alt="School campus and admissions office entry area"
                className="mt-3 h-44 w-full rounded-xl border border-[var(--border)] object-cover"
              />
            </div>
            <div className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--surface-alt)] p-4">
              <p className="text-sm font-semibold">Map Placeholder</p>
              <div className="mt-3 placeholder-image h-44 rounded-xl border border-[var(--border)]" aria-label="Map placeholder" />
            </div>
          </Card>

          <Card>
            <SectionHeading title="Send a Message" description="Our team will respond during working hours." />
            <form className="mt-5 space-y-4" onSubmit={submit} noValidate>
              <Input
                id="name"
                label="Name"
                value={form.name}
                error={errors.name}
                onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
              />
              <Input
                id="email"
                type="email"
                label="Email"
                value={form.email}
                error={errors.email}
                onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
              />
              <Textarea
                id="message"
                label="Message"
                rows={5}
                value={form.message}
                error={errors.message}
                onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
              />
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </Card>
        </div>
      </section>
    </>
  )
}
