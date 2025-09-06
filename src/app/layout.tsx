import type { Metadata } from 'next'
import { Inter, Noto_Sans_Bengali } from 'next/font/google'
import './globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const notoSansBengali = Noto_Sans_Bengali({ 
  subsets: ['bengali'],
  variable: '--font-bengali',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Age Calculator Bangladesh - বয়স ক্যালকুলেটর | Calculate Age in Bengali & English',
    template: '%s | Age Calculator Bangladesh'
  },
  description: 'Free age calculator app for Bangladesh people. Calculate age in Bengali and English with Islamic calendar, zodiac signs, vaccination schedule, and legal rights. Perfect for students, parents, and official documents.',
  keywords: [
    'age calculator',
    'বয়স ক্যালকুলেটর',
    'Bangladesh',
    'Bengali',
    'Bengali calendar',
    'বাংলা ক্যালেন্ডার',
    'Islamic calendar',
    'zodiac',
    'vaccination',
    'legal rights',
    'date of birth calculator',
    'how old am I',
    'DOB to age calculator',
    'calculate my age',
    'age checker',
    'birthday countdown',
    'date difference calculator',
    'Bangla age calculator',
    'Age Calculator BD',
    'Bengali birthday calculator',
    'offline age calculator',
    'Boyos Calculator'
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
      siteName: 'Age Calculator Bangladesh',
      title: 'Age Calculator Bangladesh - বয়স ক্যালকুলেটর',
      description: 'Free age calculator app for Bangladesh people. Calculate age in Bengali and English with Islamic calendar, zodiac signs, vaccination schedule, and legal rights.',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Age Calculator Bangladesh - বয়স ক্যালকুলেটর',
        },
      ],
    },
  twitter: {
    card: 'summary_large_image',
    title: 'Age Calculator Bangladesh - বয়স ক্যালকুলেটর',
    description: 'Free age calculator app for Bangladesh people. Calculate age in Bengali and English with Islamic calendar, zodiac signs, vaccination schedule, and legal rights.',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Age Calculator Bangladesh - বয়স ক্যালকুলেটর",
              "description": "Free age calculator app for Bangladesh people. Calculate age in Bengali and English with Islamic calendar, zodiac signs, vaccination schedule, and legal rights.",
              "applicationCategory": "UtilityApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "BDT"
              },
              "featureList": [
                "Age Calculation",
                "Bengali Language Support",
                "English Language Support", 
                "Islamic Calendar (Hijri)",
                "Zodiac Signs",
                "Vaccination Schedule",
                "Legal Rights Information",
                "Life Progress Tracking",
                "Birthday Countdown",
                "Fun Facts & Statistics",
                "Offline Functionality",
                "Date Difference Calculator",
                "Age in Years, Months, Days",
                "Bangladesh-Specific Features"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.5",
                "ratingCount": "500"
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
      </body>
    </html>
  )
}
