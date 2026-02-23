import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import usePageTitle from '../hooks/usePageTitle'

export default function NotFoundPage() {
  usePageTitle('Page Not Found')

  return (
    <section className="section-space">
      <div className="container-shell">
        <Card className="mx-auto max-w-xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">404</p>
          <h1 className="mt-2 text-3xl font-bold">Page not found</h1>
          <p className="mt-3 text-[var(--muted)]">The requested page does not exist. Return to home and continue your admissions journey.</p>
          <Button as={Link} to="/" className="mt-6">
            Back to Home
          </Button>
        </Card>
      </div>
    </section>
  )
}
