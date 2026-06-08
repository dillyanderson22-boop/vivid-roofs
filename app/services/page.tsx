import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, Home as HomeIcon, Building2, Search, Users } from 'lucide-react'
import { RevealSection } from '@/components/RevealSection'
import { SplitHeadline } from '@/components/SplitHeadline'
import { photos, business } from '@/lib/business'

export const metadata = {
  title: 'Roofing Services',
  description:
    'Residential roofing, commercial roofing, and free roof inspections across Greater Phoenix, AZ. Tile, metal, and high-grade shingle systems built for the desert climate.',
}

const serviceSections = [
  {
    id: 'residential',
    icon: HomeIcon,
    label: 'For Arizona Homes',
    title: 'Residential Roofing in Phoenix, AZ',
    photo: photos.darkShingle,
    body: 'Expert roofing installation, replacement, and repair for Arizona homes — durable systems that protect what matters most. From tile and metal to high-grade asphalt shingles, we recommend the right material for your home, your climate, and your budget.',
    includes: [
      'New roof installation & full replacement',
      'Leak detection and storm/monsoon damage repair',
      'Tile, metal, and premium asphalt shingle systems',
      'Insurance claim documentation & support',
    ],
    flip: false,
  },
  {
    id: 'commercial',
    icon: Building2,
    label: 'For Arizona Businesses',
    title: 'Commercial Roofing in the Valley',
    photo: photos.metalCrew,
    body: 'Reliable roofing solutions for Arizona businesses — installation, maintenance, and repair that keep your business moving and your property safe and professional. We minimize disruption and deliver results that protect and enhance your property value.',
    includes: [
      'Flat & low-slope commercial roof systems',
      'Preventative maintenance programs',
      'Fast-response repairs to limit downtime',
      'Scheduling built around your operations',
    ],
    flip: true,
  },
  {
    id: 'inspections',
    icon: Search,
    label: 'No Cost, No Pressure',
    title: 'Free Roof Inspections',
    photo: photos.tileMountain,
    body: 'Get a free roof assessment today. Our experts spot issues early — saving you money and preventing costly future damage. There&apos;s no obligation and no sales pressure; we believe in building trust through transparency, not tactics.',
    includes: [
      'Thorough condition assessment, inside and out',
      'Honest recommendations — repair vs. replace',
      'Written findings with photos',
      'Pre-monsoon inspections recommended annually',
    ],
    flip: false,
  },
]

const clients = [
  { n: '01', t: 'Arizona Homeowners', b: 'We protect Valley families with durable roofing that withstands our desert climate — from repairs to full replacements.' },
  { n: '02', t: 'Business Owners', b: 'Reliable commercial roofing that minimizes disruption and enhances your property’s value and appearance.' },
  { n: '03', t: 'Real Estate Agents', b: 'Fast, quality work that helps close deals and satisfies buyers with professional roofing solutions.' },
  { n: '04', t: 'General Contractors', b: 'Dependable subcontracting that delivers on-time, quality roofing and keeps your construction schedule on track.' },
]

const faqs = [
  { q: 'How long does a roof installation take?', a: 'Most residential installations take 1–3 days depending on the size and complexity of your home. Commercial projects vary by square footage. We provide a detailed timeline during your free inspection and work efficiently to minimize disruption — without ever compromising quality.' },
  { q: 'Do you work with insurance?', a: 'Absolutely. We handle all insurance documentation and work directly with your provider to make sure you receive fair coverage for repairs or replacement.' },
  { q: 'What roofing material is best for Arizona?', a: 'For Arizona’s intense sun and monsoon seasons, we recommend tile, metal, or high-grade asphalt shingles built for desert climates. Tile offers exceptional durability and heat resistance; metal reflects heat for better energy efficiency. We’ll recommend the best fit during your inspection.' },
  { q: 'Are your roof inspections really free?', a: 'Yes — completely free with no obligation. We assess your roof’s condition, identify issues, and give honest recommendations. There’s no pressure to move forward.' },
  { q: 'How often should I have my roof inspected?', a: 'At least once a year, ideally before monsoon season. Arizona’s extreme UV, monsoons, and occasional hail cause gradual damage that’s easy to miss. Annual inspections catch small issues early and extend your roof’s lifespan.' },
]

export default function Services() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[62vh] flex items-end overflow-hidden">
        <Image src={photos.redTileAerial} alt="Aerial view of tile roofs across an Arizona neighborhood" fill priority sizes="100vw" className="object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-5 lg:px-12 pb-16 md:pb-20 w-full">
          <span className="text-xs font-semibold tracking-[0.2em] text-[var(--color-badge)] uppercase">What We Offer</span>
          <SplitHeadline text="Roofing Services" className="mt-4 font-display text-white text-[clamp(52px,10vw,150px)] leading-[0.92] tracking-tight" />
          <p className="mt-5 max-w-xl text-lg text-white/85 font-light">
            Residential and commercial roofing for {business.serviceArea} — backed by premium
            materials and 60+ years of combined experience.
          </p>
        </div>
      </section>

      {/* SERVICE SECTIONS */}
      {serviceSections.map((s) => (
        <RevealSection
          key={s.id}
          id={s.id}
          className="py-20 lg:py-28 px-5 lg:px-12 scroll-mt-24 border-b border-[var(--color-line)]"
        >
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div data-reveal className={`relative aspect-[4/3] rounded-2xl overflow-hidden ${s.flip ? 'lg:order-2' : ''}`}>
              <Image src={s.photo} alt={s.title} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className={s.flip ? 'lg:order-1' : ''}>
              <span data-reveal className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[var(--color-accent)] uppercase">
                <s.icon className="w-4 h-4" /> {s.label}
              </span>
              <h2 data-reveal className="font-display text-4xl md:text-6xl leading-[0.95] mt-3">{s.title}</h2>
              <p data-reveal className="mt-5 text-lg text-[var(--color-foreground)]/80 leading-relaxed">{s.body}</p>
              <ul className="mt-6 space-y-3">
                {s.includes.map((item) => (
                  <li key={item} data-reveal className="flex items-start gap-3 text-[var(--color-foreground)]/85">
                    <Check className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link data-reveal href="/contact" className="group mt-8 inline-flex items-center gap-2 px-6 py-3.5 bg-[var(--color-accent)] text-[#0f1419] font-semibold rounded-md hover:bg-[var(--color-accent-deep)] transition-colors">
                Get a Free Quote <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </RevealSection>
      ))}

      {/* WHO WE SERVE */}
      <RevealSection className="py-24 lg:py-32 px-5 lg:px-12 bg-[var(--color-surface-2)] border-b border-[var(--color-line)]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-14">
            <span data-reveal className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[var(--color-accent)] uppercase">
              <Users className="w-4 h-4" /> Who We Serve
            </span>
            <h2 data-reveal className="font-display text-5xl md:text-7xl leading-[0.95] mt-3 max-w-2xl">
              Trusted Roofing Partners Across Arizona
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-line)] rounded-xl overflow-hidden">
            {clients.map((c) => (
              <div key={c.t} data-reveal className="bg-[var(--color-surface)] p-8">
                <span className="font-display text-3xl text-[var(--color-accent)] tabular">{c.n}</span>
                <h3 className="mt-3 font-display text-2xl">{c.t}</h3>
                <p className="mt-2 text-[var(--color-muted)] text-sm">{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* FAQ */}
      <RevealSection className="py-24 lg:py-32 px-5 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <span data-reveal className="text-xs font-semibold tracking-[0.2em] text-[var(--color-accent)] uppercase">FAQ</span>
          <h2 data-reveal className="font-display text-5xl md:text-7xl leading-[0.95] mt-3 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="divide-y divide-[var(--color-line)] border-t border-[var(--color-line)]">
            {faqs.map((f) => (
              <details key={f.q} data-reveal className="group py-6">
                <summary className="flex items-center justify-between cursor-pointer list-none font-display text-2xl md:text-3xl">
                  {f.q}
                  <span className="text-[var(--color-accent)] text-3xl transition-transform duration-300 group-open:rotate-45 leading-none">+</span>
                </summary>
                <p className="mt-4 text-[var(--color-muted)] leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* CTA */}
      <RevealSection className="px-5 lg:px-12 pb-24 lg:pb-32">
        <div className="max-w-[1400px] mx-auto rounded-2xl bg-[var(--color-accent)] text-[#0f1419] px-8 py-16 lg:p-20 text-center">
          <h2 data-reveal className="font-display text-5xl md:text-7xl leading-[0.95]">Get Your Free Inspection</h2>
          <p data-reveal className="mt-4 text-lg font-medium max-w-xl mx-auto text-[#0f1419]/80">
            No cost, no obligation. Find out exactly what your roof needs — from a team that tells you the truth.
          </p>
          <Link data-reveal href="/contact" className="mt-9 inline-flex items-center gap-2 px-8 py-4 bg-[#0f1419] text-white font-semibold rounded-md hover:bg-[#0f1419]/90 transition-colors text-lg">
            Book My Inspection <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </RevealSection>
    </>
  )
}
