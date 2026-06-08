import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-fallback">
      <span className="text-xs font-semibold tracking-[0.25em] text-[var(--color-accent)] uppercase">
        404 — Page Not Found
      </span>
      <h1 className="font-display text-[clamp(90px,18vw,280px)] leading-[0.85] mt-4">
        OFF THE ROOF
      </h1>
      <p className="mt-6 text-lg text-[var(--color-muted)] max-w-md">
        Looks like this page slid off somewhere. Let&apos;s get you back on solid ground.
      </p>
      <Link
        href="/"
        className="group mt-10 inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-[#0f1419] font-semibold rounded-md hover:bg-[var(--color-accent-deep)] transition-colors text-lg"
      >
        <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
        Back Home
      </Link>
    </section>
  )
}
