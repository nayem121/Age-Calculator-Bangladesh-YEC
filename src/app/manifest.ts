import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Age Calculator Bangladesh - বয়স ক্যালকুলেটর',
    short_name: 'Age Calculator BD',
    description: 'Free age calculator app for Bangladesh people. Calculate age in Bengali and English with Islamic calendar, zodiac signs, vaccination schedule, and legal rights.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0F4C75',
    theme_color: '#0F4C75',
    icons: [
      {
        src: '/icon.webp',
        sizes: '192x192',
        type: 'image/webp',
      },
      {
        src: '/adaptive-icon.webp',
        sizes: '512x512',
        type: 'image/webp',
      },
    ],
    categories: ['utilities', 'lifestyle', 'education'],
    lang: 'en',
    dir: 'ltr',
    orientation: 'portrait',
    scope: '/',
    id: 'age-calculator-bangladesh',
  }
}
