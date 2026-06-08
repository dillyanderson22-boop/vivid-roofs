'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger)

export function RevealSection({
  children,
  className,
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const isMobile = window.matchMedia('(hover: none)').matches
    const dist = isMobile ? 20 : 40
    const ctx = gsap.context(() => {
      const els = ref.current!.querySelectorAll('[data-reveal]')
      els.forEach((el) => {
        gsap.fromTo(
          el,
          { y: dist, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: isMobile ? 0.8 : 1.1,
            ease: 'expo.out',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          }
        )
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} id={id} className={className}>
      {children}
    </div>
  )
}
