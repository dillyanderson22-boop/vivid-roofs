import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'
import { RevealSection } from '@/components/RevealSection'
import { SplitHeadline } from '@/components/SplitHeadline'
import { photos, business } from '@/lib/business'

export const metadata = {
  title: 'Our Work',
  description:
    'See quality roofing in action across Greater Phoenix — tile, metal, and shingle systems installed by the Vivid Roofs crew. Real work, real Arizona homes and businesses.',
}

const gallery = [
  { src: photos.redTileAerial, alt: 'Aerial view of red tile roofs on Arizona homes', type: 'Tile Roofing', area: 'Greater Phoenix', big: true },
  { src: photos.darkShingle, alt: 'Crew installing dark shingles on a residential roof', type: 'Residential Shingle', area: 'The Valley' },
  { src: photos.metalCrew, alt: 'Roofing crew installing dark metal panels', type: 'Metal Roofing', area: 'Commercial' },
  { src: photos.terracotta, alt: 'Terracotta tile rooftops', type: 'Tile Restoration', area: 'Arizona' },
  { src: photos.tileMountain, alt: 'Clay tile roofs with a mountain backdrop', type: 'Clay Tile Install', area: 'East Valley' },
  { src: photos.hero, alt: 'Aerial view of an Arizona residential neighborhood', type: 'Neighborhood Replacement', area: 'Greater Phoenix' },
]

const reviews = [
  { q: 'Vivid Roofs replaced our entire roof professionally and efficiently. The crew was respectful, clean, and finished on schedule. Brad personally followed up to make sure everything was perfect. Highly recommend their integrity-driven approach.', n: 'Maria R.', c: 'Homeowner' },
  { q: 'We manage multiple commercial properties and Vivid Roofs handles all our roofing needs. Their response time is incredible and quality is consistently excellent. Craig’s team truly understands commercial requirements and deadlines.', n: 'James C.', c: 'Phoenix' },
  { q: 'I recommend Vivid Roofs to all my clients. They provide honest assessments, fair pricing, and exceptional workmanship. They walked me through every detail and delivered exactly as promised. True professionals.', n: 'Sarah T.', c: 'Tempe' },
]

export default function Work() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[58vh] flex items-end overflow-hidden">
        <Image src={photos.metalCrew} alt="Vivid Roofs crew installing metal roofing panels" fill priority sizes="100vw" className="object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-5 lg:px-12 pb-16 md:pb-20 w-full">
          <span className="text-xs font-semibold tracking-[0.2em] text-[var(--color-badge)] uppercase">Our Work</span>
          <SplitHeadline text="Quality You Can See" className="mt-4 font-display text-white text-[clamp(48px,10vw,150px)] leading-[0.92] tracking-tight" />
        </div>
      </section>

      {/* GALLERY */}
      <RevealSection className="py-20 lg:py-28 px-5 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <p data-reveal className="text-[var(--color-muted)] max-w-xl mb-12 text-lg">
            From desert tile to commercial metal, here&apos;s the standard of craftsmanship we bring
            to every Arizona roof.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((p, i) => (
              <div
                key={i}
                data-reveal
                className={`group relative overflow-hidden rounded-xl ${p.big ? 'col-span-2 md:row-span-2 aspect-square' : 'aspect-[4/3]'}`}
              >
                <Image src={p.src} alt={p.alt} fill sizes="(max-width:768px) 50vw, 33vw" className="object-cover transition-transform duration-700 ease-[var(--ease-out-quint)] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="font-display text-2xl text-white leading-none">{p.type}</div>
                  <div className="text-xs text-[var(--color-badge)] mt-1 tracking-wide uppercase">{p.area}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* REVIEWS */}
      <RevealSection className="py-24 lg:py-32 px-5 lg:px-12 bg-[var(--color-surface-2)] border-y border-[var(--color-line)]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-14">
            <span data-reveal className="text-xs font-semibold tracking-[0.2em] text-[var(--color-accent)] uppercase">Client Stories</span>
            <h2 data-reveal className="font-display text-5xl md:text-7xl leading-[0.95] mt-3">What Our Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <div key={r.n} data-reveal className="rounded-xl bg-[var(--color-surface)] border border-[var(--color-line)] p-8 flex flex-col">
                <div className="flex gap-1 text-[var(--color-accent)] mb-5">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-[var(--color-foreground)]/85 leading-relaxed flex-1">&ldquo;{r.q}&rdquo;</p>
                <div className="mt-6 pt-5 border-t border-[var(--color-line)]">
                  <div className="font-display text-2xl">{r.n}</div>
                  <div className="text-sm text-[var(--color-muted)]">{r.c}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* CTA */}
      <RevealSection className="py-24 lg:py-28 px-5 lg:px-12 text-center">
        <h2 data-reveal className="font-display text-5xl md:text-7xl leading-[0.95]">Your Roof Could Be Next</h2>
        <p data-reveal className="mt-4 text-lg text-[var(--color-muted)] max-w-md mx-auto">
          Start with a free inspection and see the Vivid Roofs difference for yourself.
        </p>
        <Link data-reveal href="/contact" className="mt-9 inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-[#0f1419] font-semibold rounded-md hover:bg-[var(--color-accent-deep)] transition-colors text-lg">
          Get a Free Inspection <ArrowRight className="w-5 h-5" />
        </Link>
      </RevealSection>
    </>
  )
}
