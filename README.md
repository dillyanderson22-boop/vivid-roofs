# Vivid Roofs — Website

Premium multi-page site for Vivid Roofs (roofing contractor, Greater Phoenix, AZ).
Next.js 14 · Tailwind v4 · GSAP + Lenis smooth scroll · Trades Industrial style frame.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Pages

- `/` — Home (hero, by-the-numbers counters, services, why us, work preview, community, testimonial, CTA)
- `/about` — Story, owners, 6 core values, mission/expertise, Life Behind Handlebars
- `/services` — Residential, Commercial, Free Inspections (deep sections + FAQ)
- `/work` — Photo gallery + client reviews
- `/contact` — Contact form, info, hours, service area
- 404 — designed not-found page

---

## ⚠️ Before going live — fill these in

Everything below is marked in code so it's easy to find.

1. **NAP (phone / email)** — `lib/business.ts`. The current Vivid Roofs site doesn't
   publish a phone number or email, so I used placeholders (`(480) 555-0123`,
   `info@vividroofs.com`). Replace with the real values. They flow automatically to the
   nav, footer, contact page, and the LocalBusiness schema, so you only edit one file.

2. **Photos** — `next.config.js` + `lib/business.ts`. Right now the real Vivid Roofs photos
   load from `vividroofs.com` so you can review immediately. For production, download them
   into `/public/photos/` and switch the `photos` object in `lib/business.ts` to local paths
   (faster + won't break if the old site goes down).

3. **Contact form** — `components/ContactForm.tsx`. Set `FORM_ENDPOINT` to a free
   Formspree URL (or similar) so submissions actually get emailed. Until then the form shows
   a local confirmation.

4. **Open Graph image** — add `/public/og.jpg` (1200×630). Referenced by the metadata + schema.

5. **Domain** — `lib/business.ts` `url` is set to `https://vividroofs.aydenbuilds.com`.
   Update if you deploy elsewhere (also drives sitemap.ts + robots.ts).

## Notes on content

All copy and review quotes are pulled from the existing vividroofs.com. The counters
(60+ combined years, 20+ per owner, 3 owners, 6 core values) are all real facts from the
site — no invented job counts or fake stats.
