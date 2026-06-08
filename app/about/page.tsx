import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Heart, Award, HandHeart, Mountain } from 'lucide-react'
import { RevealSection } from '@/components/RevealSection'
import { SplitHeadline } from '@/components/SplitHeadline'
import { business, photos } from '@/lib/business'

export const metadata = {
  title: 'About Us',
  description:
    'Vivid Roofs was founded by three lifelong Arizonans — Craig Lunt, Spencer Applegate, and Brad White — with 60+ years of combined business experience and an integrity-first approach.',
}

const values = [
  { t: 'Integrity First, Always', b: 'We prioritize doing what’s right over maximizing profit — building lasting relationships through honest, transparent service.' },
  { t: 'Impact Through Giving', b: 'We invest our time, talent, and treasure back into the Arizona community that raised us.' },
  { t: 'Extreme Ownership', b: 'We stand behind every roof we install. If something’s not right, we make it right.' },
  { t: 'Good Vibes Only', b: 'A respectful, clean, positive crew on every job site — start to finish.' },
  { t: 'Better Today, Greater Tomorrow', b: 'We hold ourselves to high standards and keep raising the bar on our craft.' },
  { t: 'One For All, All For One', b: 'We win as a team — with our crew, our customers, and our community.' },
]

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[78vh] flex items-end overflow-hidden">
        <Image src={photos.tileMountain} alt="Clay tile roofs with an Arizona mountain backdrop" fill priority sizes="100vw" className="object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-5 lg:px-12 pb-16 md:pb-24 w-full">
          <span className="text-xs font-semibold tracking-[0.2em] text-[var(--color-badge)] uppercase">Who We Are</span>
          <SplitHeadline
            text="Arizona Born, Community Driven"
            className="mt-4 font-display text-white text-[clamp(48px,9vw,140px)] leading-[0.92] tracking-tight max-w-[15ch]"
          />
        </div>
      </section>

      {/* STORY */}
      <RevealSection className="py-24 lg:py-32 px-5 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <p data-reveal className="font-display text-3xl md:text-4xl leading-tight mb-10">
            Valley natives with over 20 years of business experience each, committed to serving our
            Arizona community.
          </p>
          <div className="space-y-6 text-lg text-[var(--color-foreground)]/80 leading-relaxed">
            <p data-reveal>
              Vivid Roofs was founded by <strong className="text-white">Craig Lunt</strong>,{' '}
              <strong className="text-white">Spencer Applegate</strong>, and{' '}
              <strong className="text-white">Brad White</strong> — lifelong Arizonans who understand
              our unique climate and community needs.
            </p>
            <p data-reveal>
              With decades of combined experience in contracting and business, we built this company
              on strong principles: integrity over profit, impact through giving, extreme ownership,
              good vibes only, better today — greater tomorrow, and one for all, all for one.
            </p>
            <p data-reveal>
              Our three owners bring proven expertise from running successful Arizona businesses —
              over 60 combined years — ensuring quality you can trust every time.
            </p>
          </div>
        </div>
      </RevealSection>

      {/* OWNERS */}
      <RevealSection className="py-20 lg:py-28 px-5 lg:px-12 bg-[var(--color-surface-2)] border-y border-[var(--color-line)]">
        <div className="max-w-[1400px] mx-auto">
          <h2 data-reveal className="font-display text-4xl md:text-6xl leading-[0.95] mb-12 text-center">
            The Owners
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {business.owners.map((name) => (
              <div key={name} data-reveal className="rounded-xl bg-[var(--color-surface)] border border-[var(--color-line)] p-8 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-[var(--color-accent)] flex items-center justify-center font-display text-3xl text-[#0f1419] leading-none pt-1">
                  {name.split(' ').map((p) => p[0]).join('')}
                </div>
                <h3 className="mt-5 font-display text-3xl">{name}</h3>
                <p className="mt-1 text-[var(--color-muted)] text-sm">Owner · 20+ Years Experience</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* VALUES */}
      <RevealSection className="py-24 lg:py-32 px-5 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-14">
            <span data-reveal className="text-xs font-semibold tracking-[0.2em] text-[var(--color-accent)] uppercase">Our Foundation</span>
            <h2 data-reveal className="font-display text-5xl md:text-7xl leading-[0.95] mt-3 max-w-2xl">
              Built on Integrity, Driven by Community Values
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-line)] rounded-xl overflow-hidden">
            {values.map((v, i) => (
              <div key={v.t} data-reveal className="bg-[var(--color-surface)] p-8">
                <span className="font-display text-2xl text-[var(--color-accent)] tabular">0{i + 1}</span>
                <h3 className="mt-3 font-display text-2xl">{v.t}</h3>
                <p className="mt-2 text-[var(--color-muted)]">{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* MISSION + EXPERTISE */}
      <RevealSection className="px-5 lg:px-12 pb-24 lg:pb-28">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-5">
          <div data-reveal className="rounded-xl bg-[var(--color-surface)] border border-[var(--color-line)] p-9">
            <Heart className="w-8 h-8 text-[var(--color-accent)] mb-4" />
            <h3 className="font-display text-3xl">Our Mission</h3>
            <p className="mt-3 text-[var(--color-muted)]">
              Serve our Arizona community with integrity-first, honest business practices — using
              top-quality materials and craftsmanship that prioritize customer satisfaction over
              profit margins.
            </p>
          </div>
          <div data-reveal className="rounded-xl bg-[var(--color-surface)] border border-[var(--color-line)] p-9">
            <Award className="w-8 h-8 text-[var(--color-accent)] mb-4" />
            <h3 className="font-display text-3xl">Our Expertise</h3>
            <p className="mt-3 text-[var(--color-muted)]">
              Over 60 combined years of business success, including 20+ years in general contracting
              and proven leadership in Arizona&apos;s competitive business landscape.
            </p>
          </div>
        </div>
      </RevealSection>

      {/* COMMUNITY */}
      <RevealSection id="community" className="relative overflow-hidden border-y border-[var(--color-line)]">
        <div className="absolute inset-0">
          <Image src={photos.community} alt="Vivid Roofs Life Behind Handlebars community event" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[var(--color-background)]/70" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-12 py-24 lg:py-32">
          <div className="max-w-2xl">
            <span data-reveal className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[var(--color-badge)] uppercase">
              <Mountain className="w-4 h-4" /> Community Support
            </span>
            <h2 data-reveal className="font-display text-5xl md:text-7xl leading-[0.95] mt-3">
              Life Behind Handlebars
            </h2>
            <div className="mt-6 space-y-5 text-lg text-white/85 leading-relaxed">
              <p data-reveal>
                We started this initiative after seeing a real gap in support for young adults
                transitioning from rehab back into society. Our mission: get men outdoors and give
                them a healthy outlet riding mountain bikes — living &ldquo;life behind
                handlebars&rdquo; as a constructive alternative to the &ldquo;life behind bars&rdquo;
                of incarceration and addiction.
              </p>
              <p data-reveal>
                We mentor men in recovery to live with high standards, helping them buy homes and
                build healthy, successful lives. Our group rides welcome everyone — not just men in
                recovery — because we all have a lot to offer each other. We actively donate full
                suspension mountain bikes and essential gear to programs like the John Volken Academy.
              </p>
            </div>
            <Link data-reveal href="/contact" className="group mt-8 inline-flex items-center gap-2 text-[var(--color-badge)] font-semibold hover:gap-3 transition-all">
              Join the Ride <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </RevealSection>

      {/* CTA */}
      <RevealSection className="py-24 lg:py-28 px-5 lg:px-12 text-center">
        <HandHeart data-reveal className="w-10 h-10 text-[var(--color-accent)] mx-auto mb-6" />
        <h2 data-reveal className="font-display text-5xl md:text-7xl leading-[0.95]">Let&apos;s Work Together</h2>
        <p data-reveal className="mt-4 text-lg text-[var(--color-muted)] max-w-md mx-auto">
          Whether it&apos;s your roof or our next ride, we&apos;d love to hear from you.
        </p>
        <Link
          data-reveal
          href="/contact"
          className="mt-9 inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-[#0f1419] font-semibold rounded-md hover:bg-[var(--color-accent-deep)] transition-colors text-lg"
        >
          Get In Touch <ArrowRight className="w-5 h-5" />
        </Link>
      </RevealSection>
    </>
  )
}
