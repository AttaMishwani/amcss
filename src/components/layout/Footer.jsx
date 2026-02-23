import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react'
import { schoolInfo } from '../../data/site'
import Button from '../ui/Button'

export default function Footer() {
  const socialLinks = [
    { label: 'Facebook', href: schoolInfo.facebook, icon: Facebook },
    { label: 'Instagram', href: '#', icon: Instagram },
    { label: 'YouTube', href: '#', icon: Youtube },
    { label: 'LinkedIn', href: '#', icon: Linkedin },
  ]

  return (
    <footer className="mt-20 border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">Al Mansoor School</p>
          <h3 className="mt-2 text-2xl font-extrabold">Building Knowledge, Character, and Leadership</h3>
          <p className="mt-3 text-sm text-[var(--muted)]">A trusted learning environment for families in Karachi focused on academic growth and student wellbeing.</p>
          <div className="mt-4 flex items-center gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-[var(--border)] p-2 text-[var(--muted)] hover:bg-[var(--surface-alt)] hover:text-[var(--primary)]"
                  aria-label={`${item.label} page`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--primary)]">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
            <li><Link to="/about" className="hover:text-[var(--text)]">About</Link></li>
            <li><Link to="/admissions" className="hover:text-[var(--text)]">Admissions</Link></li>
            <li><Link to="/events" className="hover:text-[var(--text)]">Events</Link></li>
            <li><Link to="/careers" className="hover:text-[var(--text)]">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--text)]">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--primary)]">Admissions Office</h4>
          <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" /> {schoolInfo.location}</li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4" /> <a href={`tel:${schoolInfo.phone}`}>{schoolInfo.phone}</a></li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4" /> <a href={`mailto:${schoolInfo.email}`}>{schoolInfo.email}</a></li>
          </ul>
          <div className="mt-5">
            <Button as={Link} to="/admissions" size="lg">Apply Now</Button>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--border)] py-4 text-center text-xs text-[var(--muted)]">Copyright {new Date().getFullYear()} Al Mansoor School. All rights reserved.</div>
    </footer>
  )
}
