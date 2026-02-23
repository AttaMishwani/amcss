import { useState } from 'react'
import { FileText, Files, Handshake, PenSquare, ReceiptText } from 'lucide-react'
import PageHeader from '../components/layout/PageHeader'
import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'
import Photo from '../components/ui/Photo'
import Timeline from '../components/ui/Timeline'
import Accordion from '../components/ui/Accordion'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import Toast from '../components/ui/Toast'
import usePageTitle from '../hooks/usePageTitle'
import classroomLearning from '../assets/illustrations/classroom-learning.svg'
import campusVisit from '../assets/illustrations/campus-visit.svg'

const steps = [
  { icon: FileText, title: 'Application Form', text: 'Complete the admissions application with student and guardian details.' },
  { icon: Files, title: 'Required Documents', text: 'Submit all listed documents for verification and record completion.' },
  { icon: PenSquare, title: 'Admission Test', text: 'Student appears in a grade-appropriate admission assessment.' },
  { icon: Handshake, title: 'Interview', text: 'Parents and student meet school leadership for final interaction.' },
  { icon: ReceiptText, title: 'Fee Submission', text: 'Confirm seat by completing fee submission before deadline.' },
]

const documents = ['Previous academic certificates', 'CNIC/B-Form', '4 passport-size photos', 'Admission form receipt']

const deadlines = [
  { title: 'Application', date: '15 August' },
  { title: 'Test', date: '25 August' },
  { title: 'Interview', date: '1 September' },
  { title: 'Fee deadline', date: '10 September' },
]

const photos = {
  admissionsDesk: 'https://images.pexels.com/photos/8422206/pexels-photo-8422206.jpeg?auto=compress&cs=tinysrgb&w=1600',
  orientation: 'https://images.pexels.com/photos/8471830/pexels-photo-8471830.jpeg?auto=compress&cs=tinysrgb&w=2200',
}
const headerImage = 'https://images.pexels.com/photos/8471830/pexels-photo-8471830.jpeg?auto=compress&cs=tinysrgb&w=2200'

const faqs = [
  { id: 'fees', question: 'What is the monthly fee structure?', answer: 'Fee varies by grade level. Admissions office shares complete fee details and payment schedule during counseling.' },
  { id: 'transport', question: 'Is transport available?', answer: 'Yes, transport routes are available in selected Karachi areas, subject to seat and route capacity.' },
  { id: 'timings', question: 'What are school timings?', answer: 'Timings differ by section. Morning shifts are communicated with the annual session and admissions pack.' },
  { id: 'uniform', question: 'How can we get uniforms?', answer: 'Uniform details and authorized vendors are shared after admission confirmation.' },
  { id: 'test', question: 'What is the admission test format?', answer: 'The test includes age-appropriate English, Mathematics, and general understanding sections.' },
]

const initialForm = {
  studentName: '',
  grade: '',
  guardianName: '',
  phone: '',
  email: '',
}

export default function AdmissionsPage() {
  usePageTitle('Admissions')

  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [showToast, setShowToast] = useState(false)

  const validate = () => {
    const nextErrors = {}

    if (!form.studentName.trim()) nextErrors.studentName = 'Student name is required.'
    if (!form.grade.trim()) nextErrors.grade = 'Grade is required.'
    if (!form.guardianName.trim()) nextErrors.guardianName = 'Guardian name is required.'
    if (!/^\+?[\d\s-]{7,}$/.test(form.phone.trim())) nextErrors.phone = 'Enter a valid phone number.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) nextErrors.email = 'Enter a valid email.'

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!validate()) return

    setShowToast(true)
    setForm(initialForm)
    setTimeout(() => setShowToast(false), 2600)
  }

  return (
    <>
      <Toast message="Application request recorded. Admissions team will contact you shortly." show={showToast} />
      <PageHeader
        eyebrow="Admissions"
        title="Join Al Mansoor School"
        description="A clear admissions pathway designed for parents: apply, submit documents, test, interview, and secure your seat."
        backgroundImage={headerImage}
      />

      <section className="section-space">
        <div className="container-shell space-y-8">
          <SectionHeading title="Admissions Steps" description="Simple and transparent process for new applicants." />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <Card key={step.title}>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">Step {index + 1}</p>
                  <Icon className="mt-3 h-6 w-6 text-[var(--primary)]" />
                  <h3 className="mt-3 font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">{step.text}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <Card>
            <SectionHeading title="Required Documents" />
            <Photo
              src={photos.admissionsDesk}
              fallbackSrc={classroomLearning}
              alt="Admissions desk support for parents and students"
              className="mt-4 h-44 w-full rounded-xl border border-[var(--border)] object-cover"
            />
            <ul className="mt-5 space-y-3 text-sm text-[var(--muted)]">
              {documents.map((item) => (
                <li key={item} className="rounded-xl border border-[var(--border)] bg-[var(--surface-alt)] px-4 py-3">{item}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <SectionHeading title="Deadlines" description="Admissions Open - Seats Limited" />
            <Photo
              src={photos.orientation}
              fallbackSrc={campusVisit}
              alt="Student orientation session in school"
              className="mt-4 h-44 w-full rounded-xl border border-[var(--border)] object-cover"
            />
            <div className="mt-5">
              <Timeline items={deadlines} />
            </div>
          </Card>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeading title="Frequently Asked Questions" />
            <div className="mt-5">
              <Accordion items={faqs} />
            </div>
          </div>

          <Card>
            <SectionHeading title="Start Application" description="Submit your details and our team will guide your next step." />
            <form className="mt-5 space-y-4" onSubmit={handleSubmit} noValidate>
              <Input
                id="student-name"
                label="Student Name"
                value={form.studentName}
                error={errors.studentName}
                onChange={(event) => setForm((prev) => ({ ...prev, studentName: event.target.value }))}
              />
              <Input
                id="grade"
                label="Applying Grade"
                value={form.grade}
                error={errors.grade}
                onChange={(event) => setForm((prev) => ({ ...prev, grade: event.target.value }))}
              />
              <Input
                id="guardian"
                label="Guardian Name"
                value={form.guardianName}
                error={errors.guardianName}
                onChange={(event) => setForm((prev) => ({ ...prev, guardianName: event.target.value }))}
              />
              <Input
                id="phone"
                label="Phone"
                value={form.phone}
                error={errors.phone}
                onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
              />
              <Input
                id="email"
                type="email"
                label="Email"
                value={form.email}
                error={errors.email}
                onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
              />
              <Button type="submit" className="w-full">Submit Request</Button>
            </form>
          </Card>
        </div>
      </section>
    </>
  )
}
