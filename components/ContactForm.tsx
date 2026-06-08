'use client'
import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

// NOTE FOR DEPLOY: wire `action` to a real handler before going live.
// Easiest path: create a free Formspree form and set FORM_ENDPOINT below,
// then uncomment the fetch in handleSubmit. Until then this shows a local
// confirmation so the UX is reviewable.
const FORM_ENDPOINT = '' // e.g. 'https://formspree.io/f/xxxxxxx'

const inputBase =
  'w-full bg-[var(--color-background)] border border-[var(--color-line)] rounded-md px-4 py-3.5 text-[var(--color-foreground)] placeholder-[var(--color-muted)] outline-none focus:border-[var(--color-accent)] transition-colors'

export function ContactForm() {
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    if (FORM_ENDPOINT) {
      try {
        const data = new FormData(e.currentTarget)
        await fetch(FORM_ENDPOINT, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      } catch {
        /* ignore for review build */
      }
    }
    setSubmitting(false)
    setSent(true)
  }

  if (sent) {
    return (
      <div className="rounded-xl border border-[var(--color-accent)]/40 bg-[var(--color-surface)] p-10 text-center">
        <div className="w-14 h-14 mx-auto rounded-full bg-[var(--color-accent)] flex items-center justify-center">
          <Check className="w-7 h-7 text-[#0f1419]" strokeWidth={3} />
        </div>
        <h3 className="mt-5 font-display text-3xl">Thanks — We&apos;ll Be In Touch</h3>
        <p className="mt-2 text-[var(--color-muted)]">
          We&apos;ll reach out shortly to schedule your free inspection.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm text-[var(--color-muted)] mb-2">Name</label>
          <input id="name" name="name" required placeholder="Your name" className={inputBase} />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm text-[var(--color-muted)] mb-2">Phone</label>
          <input id="phone" name="phone" type="tel" placeholder="(480) 555-0123" className={inputBase} />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm text-[var(--color-muted)] mb-2">Email</label>
        <input id="email" name="email" type="email" required placeholder="you@email.com" className={inputBase} />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm text-[var(--color-muted)] mb-2">How can we help?</label>
        <textarea id="message" name="message" rows={5} placeholder="Tell us about your roof — repair, replacement, inspection, or a question." className={`${inputBase} resize-none`} />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-[#0f1419] font-semibold rounded-md hover:bg-[var(--color-accent-deep)] transition-colors text-lg disabled:opacity-60"
      >
        {submitting ? 'Sending…' : 'Request My Free Inspection'}
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  )
}
