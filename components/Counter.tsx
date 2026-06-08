'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger)

export function Counter({
  target,
  prefix = '',
  suffix = '',
}: {
  target: number
  prefix?: string
  suffix?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const obj = { val: 0 }
    const anim = gsap.to(obj, {
      val: target,
      duration: 1.8,
      ease: 'expo.out',
      onUpdate: () => {
        if (ref.current)
          ref.current.textContent = prefix + Math.floor(obj.val).toLocaleString() + suffix
      },
      scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
    })
    return () => {
      anim.scrollTrigger?.kill()
      anim.kill()
    }
  }, [target, prefix, suffix])

  return (
    <span ref={ref} className="tabular">
      {prefix}0{suffix}
    </span>
  )
}
