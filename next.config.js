/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    // Real Vivid Roofs photos are loaded from their existing site for this review
    // build. Before production deploy, download them into /public/photos and
    // switch the <Image> src values to local paths.
    remotePatterns: [
      { protocol: 'https', hostname: 'vividroofs.com' },
    ],
  },
}
