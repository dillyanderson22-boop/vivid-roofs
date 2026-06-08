import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { business } from '@/lib/business'

export function Footer() {
  return (
    <footer className="bg-[var(--color-surface-2)] border-t border-[var(--color-line)] mt-0">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-12 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-2.5 mb-5">
            <span className="w-9 h-9 rounded-md bg-[var(--color-accent)] flex items-center justify-center font-display text-2xl text-[#0f1419] leading-none pt-1">
              V
            </span>
            <span className="font-display text-2xl tracking-wide leading-none pt-1">VIVID ROOFS</span>
          </div>
          <p className="text-[var(--color-muted)] text-sm leading-relaxed max-w-xs">
            Arizona-born roofing experts. Residential and commercial roofing built on integrity,
            top-tier materials, and 60+ years of combined experience.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-badge)] border border-[var(--color-badge)]/30 rounded px-3 py-1.5 tracking-wide">
            LICENSED · BONDED · INSURED
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-[0.2em] mb-6 text-[var(--color-muted)]">
            Explore
          </h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/about" className="hover:text-[var(--color-accent)] transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-[var(--color-accent)] transition-colors">Services</Link></li>
            <li><Link href="/services#residential" className="hover:text-[var(--color-accent)] transition-colors">Residential Roofing</Link></li>
            <li><Link href="/services#commercial" className="hover:text-[var(--color-accent)] transition-colors">Commercial Roofing</Link></li>
            <li><Link href="/work" className="hover:text-[var(--color-accent)] transition-colors">Our Work</Link></li>
            <li><Link href="/contact" className="hover:text-[var(--color-accent)] transition-colors">Free Inspection</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-[0.2em] mb-6 text-[var(--color-muted)]">
            Get In Touch
          </h4>
          <address className="not-italic text-sm space-y-3">
            <a href={business.phoneHref} className="flex items-center gap-3 hover:text-[var(--color-accent)] transition-colors">
              <Phone className="w-4 h-4 text-[var(--color-accent)]" /> {business.phoneDisplay}
            </a>
            <a href={`mailto:${business.email}`} className="flex items-center gap-3 hover:text-[var(--color-accent)] transition-colors">
              <Mail className="w-4 h-4 text-[var(--color-accent)]" /> {business.email}
            </a>
            <div className="flex items-center gap-3 text-[var(--color-muted)]">
              <MapPin className="w-4 h-4 text-[var(--color-accent)]" /> Serving {business.serviceArea}
            </div>
          </address>
          <div className="mt-5 text-xs text-[var(--color-muted)] space-y-1">
            {business.hours.map((h) => (
              <div key={h.days} className="flex justify-between max-w-[220px]">
                <span>{h.days}</span>
                <span className="tabular">{h.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--color-line)]">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-12 py-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-[var(--color-muted)]">
          <div>© {new Date().getFullYear()} Vivid Roofs. All rights reserved.</div>
          <a href="https://aydenbuilds.com" className="hover:text-[var(--color-foreground)] transition-colors">
            Built by Ayden Anderson
          </a>
        </div>
      </div>
    </footer>
  )
}
