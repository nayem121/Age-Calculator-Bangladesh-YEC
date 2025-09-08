import type { Metadata } from 'next'
import { Inter, Noto_Sans_Bengali } from 'next/font/google'
import './globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'

// Lazy load analytics to improve LCP
const Analytics = dynamic(() => import('@vercel/analytics/react').then(mod => ({ default: mod.Analytics })), {
  ssr: false
})

const SpeedInsights = dynamic(() => import('@vercel/speed-insights/next').then(mod => ({ default: mod.SpeedInsights })), {
  ssr: false
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: false
})

const notoSansBengali = Noto_Sans_Bengali({ 
  subsets: ['bengali'],
  variable: '--font-bengali',
  display: 'swap',
  preload: false, // Only preload when needed
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: false
})

export const metadata: Metadata = {
  title: {
    default: 'Age Calculator - Calculate Age in Years, Months, Days, Hours, Minutes, Seconds',
    template: '%s | Age Calculator'
  },
  description: 'Free online age calculator. Calculate your exact age in years, months, weeks, days, hours, minutes, and seconds. Find your zodiac sign and convert dates across different calendar systems.',
  keywords: [
    'age calculator',
    'date of birth calculator',
    'how old am I',
    'DOB to age calculator',
    'calculate my age',
    'age checker',
    'birthday countdown',
    'date difference calculator',
    'age in years',
    'age in days',
    'age in months',
    'age in hours',
    'age in minutes',
    'age in seconds',
    'zodiac sign',
    'calendar converter',
    'free calculator',
    'online calculator',
    'age calculation',
    'birth date calculator',
    'age finder',
    'birthday finder'
  ],
  authors: [{ name: 'Youth Empowerment Center (YEC)' }],
  creator: 'Youth Empowerment Center (YEC)',
  publisher: 'Youth Empowerment Center (YEC)',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://agecalculator.yec.org.bd'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'bn-BD': '/bn',
    },
  },
      openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://agecalculator.yec.org.bd',
      siteName: 'Age Calculator',
      title: 'Age Calculator - Calculate Age in Years, Months, Days, Hours, Minutes, Seconds',
      description: 'Free online age calculator. Calculate your exact age in years, months, weeks, days, hours, minutes, and seconds. Find your zodiac sign and convert dates across different calendar systems.',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Age Calculator - Calculate Age in Years, Months, Days',
        },
      ],
    },
  twitter: {
    card: 'summary_large_image',
    title: 'Age Calculator - Calculate Age in Years, Months, Days',
    description: 'Free online age calculator. Calculate your exact age in years, months, weeks, days, hours, minutes, and seconds.',
    images: ['/og-image.jpg'],
    creator: '@YEC_BD',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

const locales = ['en', 'bn']

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html lang="en" className={`${inter.variable} ${notoSansBengali.variable}`}>
      <head>
        <link rel="icon" href="/favicon.webp" type="image/webp" />
        <link rel="apple-touch-icon" sizes="180x180" href="/adaptive-icon.webp" />
        <link rel="icon" type="image/webp" sizes="192x192" href="/icon.webp" />
        <link rel="icon" type="image/webp" sizes="512x512" href="/adaptive-icon.webp" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0F4C75" />
        <meta name="msapplication-TileColor" content="#0F4C75" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://vitals.vercel-insights.com" />
        <link rel="dns-prefetch" href="https://v.vercel-insights.com" />
        <link rel="preload" href="/favicon.webp" as="image" type="image/webp" />
        <link rel="modulepreload" href="/_next/static/chunks/webpack.js" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Age Calculator - Calculate Age in Years, Months, Days, Hours, Minutes, Seconds",
              "description": "Free online age calculator. Calculate your exact age in years, months, weeks, days, hours, minutes, and seconds. Find your zodiac sign and convert dates across different calendar systems.",
              "applicationCategory": "UtilityApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "featureList": [
                "Age Calculation",
                "Multi-Language Support",
                "Zodiac Signs",
                "Calendar Conversions",
                "Birthday Countdown",
                "Fun Facts & Statistics",
                "Date Difference Calculator",
                "Age in Years, Months, Days, Hours, Minutes, Seconds",
                "Global Calendar Support",
                "Hebrew Calendar",
                "Chinese Calendar",
                "Hindu Calendar"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1000"
              },
              "author": {
                "@type": "Organization",
                "name": "Youth Empowerment Center (YEC)",
                "url": "https://yec.org.bd"
              },
              "publisher": {
                "@type": "Organization", 
                "name": "Youth Empowerment Center (YEC)",
                "url": "https://yec.org.bd"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
