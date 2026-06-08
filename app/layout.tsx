import type { Metadata } from 'next'
import { Bebas_Neue, Inter } from 'next/font/google'
import { SmoothScroll } from '@/components/SmoothScroll'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { business } from '@/lib/business'
import './globals.css'

const display = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const body = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: 'Vivid Roofs | Roofing Contractor in Phoenix, AZ',
    template: '%s | Vivid Roofs — Phoenix, AZ',
  },
  description:
    'Vivid Roofs delivers residential & commercial roofing across Greater Phoenix. Arizona-born experts, top-tier materials, free roof inspections. Licensed & insured.',
  keywords: [
    'roofing Phoenix AZ', 'roof repair Phoenix', 'roof replacement Arizona',
    'commercial roofing Phoenix', 'residential roofing', 'free roof inspection',
  ],
  openGraph: {
    title: 'Vivid Roofs | Roofing Contractor in Phoenix, AZ',
    description:
      'Arizona-born roofing experts. Residential & commercial roofing built on integrity and 60+ years of combined experience.',
    url: business.url,
    siteName: 'Vivid Roofs',
    type: 'website',
    images: ['/og.jpg'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'RoofingContractor',
  name: business.name,
  image: `${business.url}/og.jpg`,
  url: business.url,
  telephone: business.phoneHref.replace('tel:', ''),
  email: business.email,
  priceRange: '$$',
  areaServed: business.cities.map((c) => ({ '@type': 'City', name: `${c}, AZ` })),
  address: {
    '@type': 'PostalAddress',
    addressLocality: business.city,
    addressRegion: business.region,
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 33.4484, longitude: -112.074 },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '18:00',
    },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '14:00' },
  ],
  founder: business.owners.map((n) => ({ '@type': 'Person', name: n })),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>
        <SmoothScroll>
          <Nav />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
