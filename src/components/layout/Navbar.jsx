import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ChevronDown, Menu, Phone, X } from 'lucide-react'
import { navLinks, schoolInfo } from '../../data/site'
import Button from '../ui/Button'
import ThemeToggle from './ThemeToggle'
import { cn } from '../../utils/cn'
import schoolLogo from '../../assets/school-logo.svg'

const linkClass = ({ isActive }) =>
  cn(
    'rounded-lg px-2.5 py-1.5 text-sm font-semibold transition',
    isActive ? 'bg-[var(--surface-alt)] text-[var(--primary)]' : 'text-[var(--muted)] hover:bg-[var(--surface-alt)] hover:text-[var(--text)]',
  )

export default function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] glass">
      <div className="container-shell flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={schoolLogo}
            alt="Al Mansoor School logo"
            className="h-9 w-9 rounded-xl border border-[var(--border)] object-cover"
          />
          <span>
            <span className="block text-sm font-bold uppercase tracking-[0.12em] text-[var(--primary)]">Al Mansoor</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex" aria-label="Primary">
          {navLinks.slice(0, 4).map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClass} end={link.path === '/'}>
              {link.label}
            </NavLink>
          ))}

          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setOpenDropdown(true)}
            onMouseLeave={() => setOpenDropdown(false)}
          >
            <button
              type="button"
              onClick={() => setOpenDropdown((prev) => !prev)}
              className="flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-sm font-semibold text-[var(--muted)] transition hover:bg-[var(--surface-alt)] hover:text-[var(--text)]"
              aria-expanded={openDropdown}
              aria-haspopup="menu"
              aria-controls="desktop-more-menu"
            >
              More <ChevronDown className={cn('h-4 w-4 transition-transform', openDropdown && 'rotate-180')} />
            </button>
            {openDropdown ? (
              <div id="desktop-more-menu" className="absolute left-0 mt-2 w-44 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-2 shadow-soft" role="menu">
                <NavLink onClick={() => setOpenDropdown(false)} to="/careers" className="block rounded-lg px-3 py-2 text-sm font-medium text-[var(--muted)] hover:bg-[var(--surface-alt)] hover:text-[var(--text)]">Careers</NavLink>
                <NavLink onClick={() => setOpenDropdown(false)} to="/contact" className="block rounded-lg px-3 py-2 text-sm font-medium text-[var(--muted)] hover:bg-[var(--surface-alt)] hover:text-[var(--text)]">Contact</NavLink>
              </div>
            ) : null}
          </div>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a href={`tel:${schoolInfo.phone}`} className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border)] px-3 py-2 text-xs font-bold text-[var(--muted)] hover:text-[var(--text)]">
            <Phone className="h-3.5 w-3.5" /> Admissions
          </a>
          <Button as={Link} to="/admissions">Apply Now</Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpenDrawer(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)]"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {openDrawer ? (
        <div className="fixed inset-0 z-[60] bg-slate-950/45 lg:hidden" role="dialog" aria-modal="true">
          <div className="ml-auto h-full w-80 max-w-[90%] overflow-auto border-l border-[var(--border)] bg-[var(--surface)] p-5">
            <div className="mb-6 flex items-center justify-between">
              <p className="font-semibold">Menu</p>
              <button type="button" onClick={() => setOpenDrawer(false)} aria-label="Close menu" className="rounded-lg p-1.5 hover:bg-[var(--surface-alt)]">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setOpenDrawer(false)}
                  className={({ isActive }) =>
                    cn('block rounded-lg px-3 py-2 text-sm font-semibold', isActive ? 'bg-[var(--surface-alt)] text-[var(--primary)]' : 'text-[var(--muted)]')
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-[var(--border)] bg-[var(--surface-alt)] p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--primary)]">Admissions Helpline</p>
              <a href={`tel:${schoolInfo.phone}`} className="mt-2 flex items-center gap-2 font-semibold">
                <Phone className="h-4 w-4" /> {schoolInfo.phone}
              </a>
              <Button as={Link} to="/admissions" onClick={() => setOpenDrawer(false)} className="mt-4 w-full">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
