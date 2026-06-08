import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ShieldCheck, Phone, Star, Home as HomeIcon, Building2, Search } from 'lucide-react'
import { SplitHeadline } from '@/components/SplitHeadline'
import { RevealSection } from '@/components/RevealSection'
import { Counter } from '@/components/Counter'
import { MagneticButton } from '@/components/MagneticButton'
import { business, photos } from '@/lib/business'

const services = [
  {
    icon: HomeIcon,
    title: 'Residential Roofing',
    body: 'Installation, replacement, and repair for Arizona homes — durable systems built for desert sun and monsoon season.',
    href: '/services#residential',
    photo: photos.darkShingle,
    featured: true,
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    body: 'Reliable roofing for Arizona businesses. Installation, maintenance, and repair that keeps your property safe and professional.',
    href: '/services#commercial',
  },
  {
    icon: Search,
    title: 'Free Roof Inspections',
    body: 'A no-obligation assessment from experts who spot issues early — saving you money and preventing costly damage.',
    href: '/services#inspections',
  },
]

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-[var(--color-background)]">
        <Image
          src={photos.hero}
          alt="Aerial view of an Arizona residential neighborhood with a mountain backdrop"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover"
        />
        <div className="hero-overlay absolute inset-0 z-[1]" aria-hidden />

        <div className="relative z-10 h-full max-w-[1400px] mx-auto px-5 lg:px-12 flex flex-col justify-end pb-16 md:pb-24">
          <div className="inline-flex items-center gap-2 self-start mb-6 text-xs font-semibold tracking-[0.18em] text-[var(--color-badge)] uppercase">
            <span className="w-8 h-px bg-[var(--color-badge)]" />
            {business.tagline}
          </div>

          <SplitHeadline
            text="Roofing Arizona Trusts"
            className="font-display text-white text-[clamp(52px,11vw,150px)] leading-[0.92] tracking-tight max-w-[14ch]"
          />

          <p className="mt-6 max-w-xl text-lg md:text-xl text-white/85 font-light leading-snug">
            Residential and commercial roofing across {business.serviceArea}. Top-tier materials,
            craftsmanship you can trust, and integrity over profit — every single job.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <MagneticButton
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-[var(--color-accent)] text-[#0f1419] font-semibold rounded-md hover:bg-[var(--color-accent-deep)] transition-colors duration-300 text-lg"
            >
              Get a Free Inspection
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </MagneticButton>
            <a
              href={business.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-white/25 text-white font-medium rounded-md hover:bg-white/10 transition-colors duration-300 text-lg"
            >
              <Phone className="w-5 h-5" /> {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* ============ TRUST STRIP ============ */}
      <RevealSection className="border-y border-[var(--color-line)] bg-[var(--color-surface-2)]">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-12 py-6 flex flex-wrap items-center justify-center md:justify-between gap-x-10 gap-y-3 text-sm font-medium">
          {[
            'Licensed · Bonded · Insured',
            'Arizona-Owned & Operated',
            'Free, No-Pressure Inspections',
            'Premium Materials Only',
          ].map((t) => (
            <span key={t} data-reveal className="inline-flex items-center gap-2 text-[var(--color-foreground)]/85">
              <ShieldCheck className="w-4 h-4 text-[var(--color-accent)]" /> {t}
            </span>
          ))}
        </div>
      </RevealSection>

      {/* ============ BY THE NUMBERS (signature counter) ============ */}
      <RevealSection className="py-24 lg:py-32 px-5 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span data-reveal className="text-xs font-semibold tracking-[0.2em] text-[var(--color-accent)] uppercase">
                The Track Record
              </span>
              <h2 data-reveal className="font-display text-5xl md:text-7xl leading-[0.95] mt-3 max-w-xl">
                Decades of Doing It Right
              </h2>
            </div>
            <p data-reveal className="text-[var(--color-muted)] max-w-sm">
              Vivid Roofs was founded by three lifelong Arizonans who built this company on one
              principle: integrity over profit.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-line)] rounded-xl overflow-hidden">
            {[
              { n: 60, suffix: '+', label: 'Years Combined Experience' },
              { n: 20, suffix: '+', label: 'Years Per Owner' },
              { n: 3, suffix: '', label: 'Owner-Operators' },
              { n: 6, suffix: '', label: 'Core Values We Live By' },
            ].map((s) => (
              <div key={s.label} data-reveal className="bg-[var(--color-surface)] p-8 lg:p-10">
                <div className="font-display text-6xl lg:text-7xl text-white leading-none">
                  <Counter target={s.n} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-sm text-[var(--color-muted)]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ============ WHAT WE DO ============ */}
      <RevealSection className="py-24 lg:py-32 px-5 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span data-reveal className="text-xs font-semibold tracking-[0.2em] text-[var(--color-accent)] uppercase">
                What We Do
              </span>
              <h2 data-reveal className="font-display text-5xl md:text-7xl leading-[0.95] mt-3 max-w-2xl">
                Quality Roofing, Start to Finish
              </h2>
            </div>
            <Link
              data-reveal
              href="/services"
              className="group inline-flex items-center gap-2 text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors whitespace-nowrap"
            >
              All Services
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-12 gap-5">
            {/* Featured */}
            <Link
              data-reveal
              href={services[0].href}
              className="md:col-span-7 group rounded-xl overflow-hidden bg-[var(--color-surface)] border border-[var(--color-line)] hover:border-[var(--color-accent)]/50 transition-colors"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={services[0].photo!}
                  alt="Vivid Roofs crew installing dark shingles on a residential roof"
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 ease-[var(--ease-out-quint)] group-hover:scale-105"
                />
              </div>
              <div className="p-7 lg:p-9">
                <HomeIcon className="w-7 h-7 text-[var(--color-accent)] mb-4" />
                <h3 className="font-display text-3xl lg:text-4xl">{services[0].title}</h3>
                <p className="mt-3 text-[var(--color-muted)] max-w-md">{services[0].body}</p>
              </div>
            </Link>

            <div className="md:col-span-5 flex flex-col gap-5">
              {services.slice(1).map((s) => (
                <Link
                  key={s.title}
                  data-reveal
                  href={s.href}
                  className="group flex-1 rounded-xl p-7 lg:p-8 bg-[var(--color-surface)] border border-[var(--color-line)] hover:border-[var(--color-accent)]/50 transition-colors flex flex-col justify-between"
                >
                  <s.icon className="w-7 h-7 text-[var(--color-accent)] mb-4" />
                  <div>
                    <h3 className="font-display text-3xl">{s.title}</h3>
                    <p className="mt-2 text-[var(--color-muted)]">{s.body}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ============ WHY US (dark contrast) ============ */}
      <RevealSection className="py-24 lg:py-32 px-5 lg:px-12 bg-[var(--color-surface-2)] border-y border-[var(--color-line)]">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span data-reveal className="text-xs font-semibold tracking-[0.2em] text-[var(--color-accent)] uppercase">
              Why Vivid Roofs
            </span>
            <h2 data-reveal className="font-display text-5xl md:text-7xl leading-[0.95] mt-3">
              Not Just Another Roofing Company
            </h2>
            <p data-reveal className="mt-6 text-lg text-[var(--color-foreground)]/80 leading-relaxed max-w-lg">
              As Arizona natives with deep community roots, we understand the Valley&apos;s harsh
              climate and unique roofing challenges. Premium materials, experienced craftsmanship,
              and honest business practices mean you get exceptional results every time.
            </p>
            <div data-reveal className="mt-8">
              <MagneticButton
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-4 bg-[var(--color-accent)] text-[#0f1419] font-semibold rounded-md hover:bg-[var(--color-accent-deep)] transition-colors duration-300"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </MagneticButton>
            </div>
          </div>

          <div className="space-y-px bg-[var(--color-line)] rounded-xl overflow-hidden">
            {[
              {
                t: 'Top-Tier Materials Only',
                b: 'We exclusively use premium roofing brands that withstand Arizona’s intense sun and monsoons — so your investment lasts decades.',
              },
              {
                t: '20+ Years of Proven Expertise',
                b: 'Each owner brings over two decades of business success, giving you confidence in our reliability every single day.',
              },
              {
                t: 'Deep Community Commitment',
                b: 'Born and raised in the Valley, we’re invested in our neighbors’ success and stand behind every roof we install.',
              },
            ].map((r, i) => (
              <div key={r.t} data-reveal className="bg-[var(--color-background)] p-7 lg:p-8 flex gap-5">
                <span className="font-display text-3xl text-[var(--color-accent)] leading-none pt-1 tabular">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-2xl">{r.t}</h3>
                  <p className="mt-2 text-[var(--color-muted)]">{r.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ============ RECENT WORK ============ */}
      <RevealSection className="py-24 lg:py-32 px-5 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span data-reveal className="text-xs font-semibold tracking-[0.2em] text-[var(--color-accent)] uppercase">
                Our Work
              </span>
              <h2 data-reveal className="font-display text-5xl md:text-7xl leading-[0.95] mt-3">
                Quality Roofing in Action
              </h2>
            </div>
            <Link data-reveal href="/work" className="group inline-flex items-center gap-2 hover:text-[var(--color-accent)] transition-colors whitespace-nowrap">
              View Full Gallery
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: photos.redTileAerial, alt: 'Aerial view of red tile roofs on Arizona homes', big: true },
              { src: photos.metalCrew, alt: 'Roofing crew installing dark metal panels' },
              { src: photos.terracotta, alt: 'Terracotta tile rooftops' },
              { src: photos.tileMountain, alt: 'Clay tile roofs with a mountain backdrop' },
              { src: photos.darkShingle, alt: 'Contractors installing dark shingles' },
            ].map((p, i) => (
              <div
                key={i}
                data-reveal
                className={`relative overflow-hidden rounded-xl group ${
                  p.big ? 'col-span-2 md:row-span-2 aspect-square' : 'aspect-[4/3]'
                }`}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-[var(--ease-out-quint)] group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ============ COMMUNITY — LIFE BEHIND HANDLEBARS ============ */}
      <RevealSection className="relative overflow-hidden border-y border-[var(--color-line)]">
        <div className="absolute inset-0">
          <Image src={photos.community} alt="Vivid Roofs community event" fill sizes="100vw" className="object-cover" />
          <div className="img-overlay absolute inset-0" />
          <div className="absolute inset-0 bg-[var(--color-background)]/55" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-12 py-24 lg:py-32">
          <div className="max-w-2xl">
            <span data-reveal className="text-xs font-semibold tracking-[0.2em] text-[var(--color-badge)] uppercase">
              Community Support
            </span>
            <h2 data-reveal className="font-display text-5xl md:text-7xl leading-[0.95] mt-3">
              Life Behind Handlebars
            </h2>
            <p data-reveal className="mt-6 text-lg text-white/85 leading-relaxed">
              We started this initiative to support young men transitioning from recovery back into
              society — getting them outdoors on mountain bikes and living life &ldquo;behind
              handlebars&rdquo; as a healthy alternative to the &ldquo;life behind bars&rdquo; of
              addiction. All for one, one for all.
            </p>
            <Link
              data-reveal
              href="/about#community"
              className="group mt-8 inline-flex items-center gap-2 text-[var(--color-badge)] font-semibold hover:gap-3 transition-all"
            >
              Join the Ride
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </RevealSection>

      {/* ============ TESTIMONIAL ============ */}
      <RevealSection className="py-24 lg:py-32 px-5 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <div data-reveal className="flex justify-center gap-1 mb-7 text-[var(--color-accent)]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <blockquote data-reveal className="font-display text-3xl md:text-5xl leading-tight">
            &ldquo;Vivid Roofs replaced our entire roof professionally and efficiently. The crew was
            respectful, clean, and finished on schedule. Brad personally followed up to make sure
            everything was perfect.&rdquo;
          </blockquote>
          <cite data-reveal className="block mt-8 not-italic text-[var(--color-muted)]">
            — Maria R., Homeowner
          </cite>
        </div>
      </RevealSection>

      {/* ============ FINAL CTA ============ */}
      <RevealSection className="px-5 lg:px-12 pb-24 lg:pb-32">
        <div className="max-w-[1400px] mx-auto rounded-2xl bg-[var(--color-accent)] text-[#0f1419] px-8 py-16 lg:p-20 text-center">
          <h2 data-reveal className="font-display text-5xl md:text-7xl leading-[0.95]">
            Ready to Talk About Your Roof?
          </h2>
          <p data-reveal className="mt-4 text-lg font-medium max-w-xl mx-auto text-[#0f1419]/80">
            Free inspection, a fair quote, or just a question — we&apos;re here to help with your
            Arizona roofing needs.
          </p>
          <div data-reveal className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={business.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0f1419] text-white font-semibold rounded-md hover:bg-[#0f1419]/90 transition-colors text-lg"
            >
              <Phone className="w-5 h-5" /> {business.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#0f1419]/30 font-semibold rounded-md hover:bg-[#0f1419]/10 transition-colors text-lg"
            >
              Book Online <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </RevealSection>
    </>
  )
}
