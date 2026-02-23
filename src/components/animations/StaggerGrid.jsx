import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'

export default function StaggerGrid({ children, className }) {
  const ref = useRef(null)
  const reducedMotion = usePrefersReducedMotion()

  useLayoutEffect(() => {
    if (!ref.current || reducedMotion) return

    const items = ref.current.querySelectorAll('[data-stagger-item]')
    if (!items.length) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 82%',
            once: true,
          },
        },
      )
    }, ref)

    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
