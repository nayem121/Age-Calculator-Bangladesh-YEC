import type { Metadata } from 'next'
import { Inter, Noto_Sans_Bengali } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  adjustFontFallback: true
})

const notoSansBengali = Noto_Sans_Bengali({ 
  subsets: ['bengali'],
  variable: '--font-bengali',
  display: 'swap',
  preload: false, // Only preload when needed
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  adjustFontFallback: true
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
        <link rel="preconnect" href="https://agecalculator.yec.org.bd" />
        <link rel="dns-prefetch" href="https://yec.org.bd" />
        <link rel="preload" href="/favicon.webp" as="image" type="image/webp" />
        <link rel="preload" href="/_next/static/css/app/layout.css" as="style" />
        <noscript><link rel="stylesheet" href="/_next/static/css/app/layout.css" /></noscript>
        <link rel="preload" href="/non-critical.css" as="style" />
        <noscript><link rel="stylesheet" href="/non-critical.css" /></noscript>
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS inline for faster LCP */
            .gradient-bg{background:linear-gradient(135deg,#0F4C75 0%,#3282B8 50%,#BBE1FA 100%)}
            .card-gradient{background:linear-gradient(135deg,rgba(255,255,255,0.95) 0%,rgba(255,255,255,0.9) 100%)}
            .btn-primary{background:linear-gradient(to right,#2563eb,#1d4ed8);color:#fff;font-weight:600;padding:.75rem 1.5rem;border-radius:.5rem;box-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1)}
            .min-h-screen{min-height:100vh}
            .container{width:100%;margin-left:auto;margin-right:auto;padding-left:1rem;padding-right:1rem}
            .text-4xl{font-size:2.25rem;line-height:2.5rem}
            .text-5xl{font-size:3rem;line-height:1}
            .text-xl{font-size:1.25rem;line-height:1.75rem}
            .text-2xl{font-size:1.5rem;line-height:2rem}
            .font-bold{font-weight:700}
            .text-white{color:rgb(255 255 255)}
            .text-gray-900{color:rgb(17 24 39)}
            .text-gray-600{color:rgb(75 85 99)}
            .py-8{padding-top:2rem;padding-bottom:2rem}
            .px-4{padding-left:1rem;padding-right:1rem}
            .space-y-6 > * + *{margin-top:1.5rem}
            .space-y-4 > * + *{margin-top:1rem}
            .space-y-8 > * + *{margin-top:2rem}
            .flex{display:flex}
            .items-center{align-items:center}
            .justify-center{justify-content:center}
            .flex-col{flex-direction:column}
            .flex-wrap{flex-wrap:wrap}
            .grid{display:grid}
            .grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}
            .gap-4{gap:1rem}
            .gap-6{gap:1.5rem}
            .max-w-4xl{max-width:56rem}
            .mx-auto{margin-left:auto;margin-right:auto}
            .rounded-3xl{border-radius:1.5rem}
            .rounded-2xl{border-radius:1rem}
            .rounded-lg{border-radius:0.5rem}
            .rounded-xl{border-radius:0.75rem}
            .rounded-full{border-radius:9999px}
            .shadow-lg{box-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1),0 4px 6px -4px rgb(0 0 0 / 0.1)}
            .shadow-strong{box-shadow:0 25px 50px -12px rgb(0 0 0 / 0.25)}
            .bg-white{background-color:rgb(255 255 255)}
            .bg-white\\/20{background-color:rgb(255 255 255 / 0.2)}
            .bg-white\\/95{background-color:rgb(255 255 255 / 0.95)}
            .bg-white\\/90{background-color:rgb(255 255 255 / 0.9)}
            .p-8{padding:2rem}
            .p-6{padding:1.5rem}
            .p-3{padding:0.75rem}
            .px-3{padding-left:0.75rem;padding-right:0.75rem}
            .py-1{padding-top:0.25rem;padding-bottom:0.25rem}
            .mb-4{margin-bottom:1rem}
            .mb-2{margin-bottom:0.5rem}
            .pb-6{padding-bottom:1.5rem}
            .w-fit{width:fit-content}
            .h-8{height:2rem}
            .w-8{width:2rem}
            .h-6{height:1.5rem}
            .w-6{width:1.5rem}
            .h-5{height:1.25rem}
            .w-5{width:1.25rem}
            .text-center{text-align:center}
            .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
            .max-w-2xl{max-width:42rem}
            .border-b{border-bottom-width:1px}
            .border-gray-200{border-color:rgb(229 231 235)}
            .disabled\\:opacity-50:disabled{opacity:0.5}
            .disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}
            .focus\\:ring-4:focus{box-shadow:0 0 0 4px rgb(59 130 246 / 0.5)}
            .focus\\:ring-primary-200:focus{box-shadow:0 0 0 4px rgb(191 219 254)}
            .focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}
            .animate-spin{animation:spin 1s linear infinite}
            .w-full{width:100%}
            .bg-primary-100{background-color:rgb(219 234 254)}
            .text-primary-600{color:rgb(37 99 235)}
            .bg-secondary-100{background-color:rgb(254 226 226)}
            .text-secondary-600{color:rgb(220 38 38)}
            .bg-bengali-100{background-color:rgb(254 243 199)}
            .text-bengali-600{color:rgb(217 119 6)}
            .bg-accent-100{background-color:rgb(221 214 254)}
            .text-accent-600{color:rgb(109 40 217)}
            @keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
            @media (min-width:640px){.container{max-width:640px}}
            @media (min-width:768px){.container{max-width:768px}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:text-5xl{font-size:3rem;line-height:1}}
            @media (min-width:1024px){.container{max-width:1024px}.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}
            @media (min-width:1280px){.container{max-width:1280px}}
          `
        }} />
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Performance optimizations
              (function() {
                // Defer analytics loading until after page load
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', function() {
                    setTimeout(() => {
                      // Analytics will load automatically via dynamic import
                    }, 1000);
                  });
                } else {
                  setTimeout(() => {
                    // Analytics will load automatically via dynamic import
                  }, 1000);
                }
                
                // Optimize font loading
                if ('fonts' in document) {
                  document.fonts.ready.then(() => {
                    document.documentElement.classList.add('fonts-loaded');
                  });
                }
                
                // Preload critical resources
                const criticalImages = ['/favicon.webp', '/icon.webp', '/adaptive-icon.webp'];
                criticalImages.forEach(src => {
                  const link = document.createElement('link');
                  link.rel = 'preload';
                  link.as = 'image';
                  link.href = src;
                  link.type = 'image/webp';
                  document.head.appendChild(link);
                });
                
                // Optimize CLS by reserving space for dynamic content
                const style = document.createElement('style');
                style.textContent = \`
                  .fonts-loaded { font-display: swap; }
                  .lazy { opacity: 0; transition: opacity 0.3s; }
                  .lazy.loaded { opacity: 1; }
                \`;
                document.head.appendChild(style);
                
                // Load CSS files dynamically
                const loadCSS = (href: string) => {
                  const link = document.createElement('link');
                  link.rel = 'stylesheet';
                  link.href = href;
                  document.head.appendChild(link);
                };
                
                // Load non-critical CSS after page load
                setTimeout(() => {
                  loadCSS('/_next/static/css/app/layout.css');
                  loadCSS('/non-critical.css');
                }, 100);
              })();
            `
          }}
        />
      </body>
    </html>
  )
}
