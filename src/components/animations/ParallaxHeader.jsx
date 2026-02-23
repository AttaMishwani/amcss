import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'

export default function ParallaxHeader({ children, className }) {
  const ref = useRef(null)
  const reducedMotion = usePrefersReducedMotion()

  useLayoutEffect(() => {
    if (reducedMotion || !ref.current) return

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          scrub: true,
          start: 'top top',
          end: 'bottom top',
        },
      })
    }, ref)

    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
