// ============================================================
// Single source of truth for NAP (Name / Address / Phone).
// Used by Nav, Footer, Contact page AND the LocalBusiness schema
// so they always match — Google penalizes inconsistency.
//
// ⚠️  PLACEHOLDERS marked TODO must be confirmed with Vivid Roofs
//     before going live. The current site does not publish a phone
//     number, email, or street address (it's a service-area business),
//     so these are best-guess placeholders.
// ============================================================

export const business = {
  name: "Vivid Roofs",
  tagline: "Arizona's Clear Choice",
  // TODO: confirm real phone with client. Display + tel: link both use this.
  phoneDisplay: "(480) 555-0123",
  phoneHref: "tel:+14805550123",
  // TODO: confirm real email with client.
  email: "info@vividroofs.com",
  // Service-area business — no public storefront address on the current site.
  serviceArea: "Greater Phoenix & the Valley",
  city: "Phoenix",
  region: "AZ",
  regionLong: "Arizona",
  url: "https://vividroofs.aydenbuilds.com",
  owners: ["Craig Lunt", "Spencer Applegate", "Brad White"],
  // Cities served (used on contact page for local SEO).
  cities: [
    "Phoenix", "Scottsdale", "Mesa", "Tempe", "Chandler",
    "Gilbert", "Glendale", "Peoria", "Surprise", "Paradise Valley",
  ],
  hours: [
    { days: "Monday – Friday", time: "7:00 AM – 6:00 PM" },
    { days: "Saturday", time: "8:00 AM – 2:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
}

// Real Vivid Roofs photos served from their existing site for this review
// build. Swap to /photos/* local paths before production deploy.
const ASSET = "https://vividroofs.com/assets/images"
export const photos = {
  hero: `${ASSET}/hero-42967235.jpeg`,        // aerial AZ neighborhood
  darkShingle: `${ASSET}/roof2-0450c4d4.jpeg`,  // crew installing dark shingles
  terracotta: `${ASSET}/roof1-13230b30.jpeg`,   // terracotta tile
  community: `${ASSET}/v1.jpeg`,                 // community / charity
  tileMountain: `${ASSET}/vivid-b378f012.jpeg`,  // clay tile w/ mountains
  metalCrew: `${ASSET}/c13-3e84b10f.jpeg`,       // crew metal panels
  redTileAerial: `${ASSET}/c14-19e631c4.jpeg`,   // aerial red tile
}
