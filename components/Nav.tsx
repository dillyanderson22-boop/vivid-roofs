'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Phone, Menu, X } from 'lucide-react'
import { business } from '@/lib/business'

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Contact', href: '/contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500 ease-[var(--ease-out-quint)] border-b ${
        scrolled
          ? 'bg-[var(--color-background)]/90 backdrop-blur-md border-[var(--color-line)]'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-12 h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="Vivid Roofs home">
          <span className="w-9 h-9 rounded-md bg-[var(--color-accent)] flex items-center justify-center font-display text-2xl text-[#0f1419] leading-none pt-1">
            V
          </span>
          <span className="font-display text-2xl tracking-wide leading-none pt-1">
            VIVID ROOFS
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-9 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative tracking-wide transition-colors duration-300 hover:text-white ${
                pathname === l.href ? 'text-[var(--color-accent)]' : 'text-[var(--color-foreground)]/80'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={business.phoneHref}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-accent)] text-[#0f1419] font-semibold rounded-md hover:bg-[var(--color-accent-deep)] transition-colors duration-300"
          >
            <Phone className="w-4 h-4" strokeWidth={2.5} />
            {business.phoneDisplay}
          </a>
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-white"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`md:hidden fixed inset-0 top-[72px] bg-[var(--color-background)] transition-[opacity,transform] duration-400 ease-[var(--ease-out-quint)] ${
          open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col px-6 pt-8 gap-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-display text-4xl tracking-wide py-2 border-b border-[var(--color-line)]"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={business.phoneHref}
            className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-4 bg-[var(--color-accent)] text-[#0f1419] font-semibold rounded-md text-lg"
          >
            <Phone className="w-5 h-5" strokeWidth={2.5} />
            {business.phoneDisplay}
          </a>
        </div>
      </div>
    </nav>
  )
}
