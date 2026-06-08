import Image from 'next/image'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { RevealSection } from '@/components/RevealSection'
import { SplitHeadline } from '@/components/SplitHeadline'
import { ContactForm } from '@/components/ContactForm'
import { business, photos } from '@/lib/business'

export const metadata = {
  title: 'Contact',
  description:
    'Contact Vivid Roofs for a free roof inspection or quote in Greater Phoenix, AZ. Call, email, or send us a message — Arizona’s clear choice for residential & commercial roofing.',
}

export default function Contact() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[48vh] flex items-end overflow-hidden">
        <Image src={photos.terracotta} alt="Terracotta tile rooftops in Arizona" fill priority sizes="100vw" className="object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-5 lg:px-12 pb-14 md:pb-20 w-full">
          <span className="text-xs font-semibold tracking-[0.2em] text-[var(--color-badge)] uppercase">Get In Touch</span>
          <SplitHeadline text="Let's Talk About Your Roof" className="mt-4 font-display text-white text-[clamp(42px,8vw,120px)] leading-[0.92] tracking-tight max-w-[16ch]" />
        </div>
      </section>

      {/* CONTACT GRID */}
      <RevealSection className="py-20 lg:py-28 px-5 lg:px-12">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-14">
          {/* Info */}
          <div>
            <h2 data-reveal className="font-display text-4xl md:text-5xl leading-[0.95]">
              Free Inspections. Honest Answers.
            </h2>
            <p data-reveal className="mt-4 text-[var(--color-muted)] text-lg max-w-md">
              Reach out for a free inspection, a fair quote, or to ask any questions. We&apos;re here
              to help with your Arizona roofing needs.
            </p>

            <div className="mt-10 space-y-5">
              <a data-reveal href={business.phoneHref} className="flex items-center gap-4 group">
                <span className="w-12 h-12 rounded-md bg-[var(--color-surface)] border border-[var(--color-line)] flex items-center justify-center text-[var(--color-accent)] group-hover:border-[var(--color-accent)] transition-colors">
                  <Phone className="w-5 h-5" />
                </span>
                <span>
                  <span className="block text-xs text-[var(--color-muted)] uppercase tracking-wide">Call Us</span>
                  <span className="font-display text-2xl">{business.phoneDisplay}</span>
                </span>
              </a>
              <a data-reveal href={`mailto:${business.email}`} className="flex items-center gap-4 group">
                <span className="w-12 h-12 rounded-md bg-[var(--color-surface)] border border-[var(--color-line)] flex items-center justify-center text-[var(--color-accent)] group-hover:border-[var(--color-accent)] transition-colors">
                  <Mail className="w-5 h-5" />
                </span>
                <span>
                  <span className="block text-xs text-[var(--color-muted)] uppercase tracking-wide">Email</span>
                  <span className="font-display text-2xl">{business.email}</span>
                </span>
              </a>
              <div data-reveal className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-md bg-[var(--color-surface)] border border-[var(--color-line)] flex items-center justify-center text-[var(--color-accent)]">
                  <MapPin className="w-5 h-5" />
                </span>
                <span>
                  <span className="block text-xs text-[var(--color-muted)] uppercase tracking-wide">Service Area</span>
                  <span className="font-display text-2xl">{business.serviceArea}</span>
                </span>
              </div>
            </div>

            {/* Hours */}
            <div data-reveal className="mt-10 rounded-xl bg-[var(--color-surface)] border border-[var(--color-line)] p-6 max-w-sm">
              <div className="flex items-center gap-2 text-[var(--color-accent)] mb-4">
                <Clock className="w-5 h-5" />
                <span className="font-display text-xl tracking-wide">Hours</span>
              </div>
              <ul className="space-y-2 text-sm">
                {business.hours.map((h) => (
                  <li key={h.days} className="flex justify-between">
                    <span className="text-[var(--color-muted)]">{h.days}</span>
                    <span className="tabular">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div data-reveal>
            <ContactForm />
          </div>
        </div>
      </RevealSection>

      {/* SERVICE AREA */}
      <RevealSection className="px-5 lg:px-12 pb-24 lg:pb-32">
        <div className="max-w-[1400px] mx-auto rounded-2xl bg-[var(--color-surface-2)] border border-[var(--color-line)] p-8 lg:p-12">
          <h2 data-reveal className="font-display text-3xl md:text-4xl">Proudly Serving the Valley</h2>
          <p data-reveal className="mt-3 text-[var(--color-muted)] max-w-2xl">
            Vivid Roofs provides residential and commercial roofing across Greater Phoenix and the
            surrounding Arizona communities, including:
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {business.cities.map((c) => (
              <span key={c} data-reveal className="px-4 py-2 rounded-full bg-[var(--color-surface)] border border-[var(--color-line)] text-sm">
                {c}, AZ
              </span>
            ))}
          </div>
        </div>
      </RevealSection>
    </>
  )
}
