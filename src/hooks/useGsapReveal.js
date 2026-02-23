import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import usePrefersReducedMotion from './usePrefersReducedMotion'

export default function useGsapReveal(options = {}) {
  const ref = useRef(null)
  const reducedMotion = usePrefersReducedMotion()

  useLayoutEffect(() => {
    if (reducedMotion || !ref.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        {
          autoAlpha: 0,
          y: options.y ?? 28,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: options.duration ?? 0.85,
          ease: options.ease ?? 'power2.out',
          scrollTrigger: {
            trigger: ref.current,
            start: options.start ?? 'top 82%',
            once: options.once ?? true,
          },
        },
      )
    }, ref)

    return () => {
      ctx.revert()
      ScrollTrigger.refresh()
    }
  }, [options.duration, options.ease, options.once, options.start, options.y, reducedMotion])

  return ref
}
