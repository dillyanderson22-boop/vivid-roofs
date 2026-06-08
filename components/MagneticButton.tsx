'use client'
import { useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'

// A CTA that "pulls" toward the cursor on desktop. Use sparingly —
// hero primary CTA and the nav contact button only.
export function MagneticButton({
  children,
  href,
  className = '',
}: {
  children: React.ReactNode
  href: string
  className?: string
}) {
  const ref = useRef<HTMLAnchorElement>(null)

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current || window.matchMedia('(hover: none)').matches) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    gsap.to(ref.current, { x: x * 0.3, y: y * 0.3, duration: 0.5, ease: 'expo.out' })
  }

  const onLeave = () => {
    if (!ref.current) return
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.4)' })
  }

  const external = href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('http')

  if (external) {
    return (
      <a ref={ref} href={href} onMouseMove={onMove} onMouseLeave={onLeave} className={className}>
        {children}
      </a>
    )
  }
  return (
    <Link ref={ref} href={href} onMouseMove={onMove} onMouseLeave={onLeave} className={className}>
      {children}
    </Link>
  )
}
