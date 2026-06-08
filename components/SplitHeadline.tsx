'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function SplitHeadline({
  text,
  className = '',
  delay = 0.2,
}: {
  text: string
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const words = text.split(' ')
    ref.current.innerHTML = words
      .map(
        (w) =>
          `<span class="inline-block overflow-hidden align-bottom mr-[0.22em]"><span class="word inline-block">${w}</span></span>`
      )
      .join('')

    const wordEls = ref.current.querySelectorAll('.word')
    const anim = gsap.fromTo(
      wordEls,
      { yPercent: 115 },
      { yPercent: 0, duration: 0.9, ease: 'expo.out', stagger: 0.06, delay }
    )
    return () => {
      anim.kill()
    }
  }, [text, delay])

  return (
    <h1 ref={ref} className={className}>
      {text}
    </h1>
  )
}
