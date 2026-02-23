import useGsapReveal from '../../hooks/useGsapReveal'

export default function RevealOnScroll({ children, className, y, start }) {
  const ref = useGsapReveal({ y, start })
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
