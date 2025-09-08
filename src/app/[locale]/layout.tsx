import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

const locales = ['en', 'bn']

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const baseUrl = 'https://agecalculator.yec.org.bd'
  const currentUrl = `${baseUrl}/${locale}`
  
  if (locale === 'bn') {
    return {
      title: 'বয়স ক্যালকুলেটর বাংলাদেশ - জন্ম তারিখ দিয়ে বয়স বের করুন',
      description: 'বাংলাদেশের মানুষের জন্য বিনামূল্যে বয়স ক্যালকুলেটর অ্যাপ। বাংলা ও ইংরেজিতে বয়স গণনা করুন ইসলামিক ক্যালেন্ডার, রাশিচক্র, টিকা সময়সূচী এবং আইনি অধিকার সহ। ছাত্র, অভিভাবক এবং সরকারী নথির জন্য উপযুক্ত।',
      keywords: [
        'বয়স ক্যালকুলেটর',
        'বাংলাদেশ',
        'বাংলা',
        'বাংলা ক্যালেন্ডার',
        'ইসলামিক ক্যালেন্ডার',
        'রাশিচক্র',
        'টিকা',
        'আইনি অধিকার',
        'জন্ম তারিখ ক্যালকুলেটর',
        'আমার বয়স কত',
        'বয়স বের করুন',
        'জন্মদিন কাউন্টডাউন',
        'বাংলা বয়স ক্যালকুলেটর',
        'বয়স ক্যালকুলেটর বিডি',
        'বাংলা জন্মদিন ক্যালকুলেটর',
        'অফলাইন বয়স ক্যালকুলেটর',
        'বয়স ক্যালকুলেটর'
      ],
      alternates: {
        canonical: currentUrl,
        languages: {
          'en-US': `${baseUrl}/en`,
          'bn-BD': `${baseUrl}/bn`,
        },
      },
      openGraph: {
        url: currentUrl,
        locale: 'bn_BD',
        title: 'বয়স ক্যালকুলেটর বাংলাদেশ - বয়স ক্যালকুলেটর',
        description: 'বাংলাদেশের মানুষের জন্য বিনামূল্যে বয়স ক্যালকুলেটর অ্যাপ। বাংলা ও ইংরেজিতে বয়স গণনা করুন ইসলামিক ক্যালেন্ডার, রাশিচক্র, টিকা সময়সূচী এবং আইনি অধিকার সহ।',
        siteName: 'বয়স ক্যালকুলেটর বাংলাদেশ',
      },
      twitter: {
        title: 'বয়স ক্যালকুলেটর বাংলাদেশ - বয়স ক্যালকুলেটর',
        description: 'বাংলাদেশের মানুষের জন্য বিনামূল্যে বয়স ক্যালকুলেটর অ্যাপ। বাংলা ও ইংরেজিতে বয়স গণনা করুন।',
      },
    }
  }
  
  return {
    title: 'Age Calculator - Calculate Age in Years, Months, Days, Hours, Minutes, Seconds',
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
    alternates: {
      canonical: currentUrl,
      languages: {
        'en-US': `${baseUrl}/en`,
        'bn-BD': `${baseUrl}/bn`,
      },
    },
    openGraph: {
      url: currentUrl,
      locale: 'en_US',
      title: 'Age Calculator - Calculate Age in Years, Months, Days, Hours, Minutes, Seconds',
      description: 'Free online age calculator. Calculate your exact age in years, months, weeks, days, hours, minutes, and seconds. Find your zodiac sign and convert dates across different calendar systems.',
      siteName: 'Age Calculator',
    },
    twitter: {
      title: 'Age Calculator - Calculate Age in Years, Months, Days',
      description: 'Free online age calculator. Calculate your exact age in years, months, weeks, days, hours, minutes, and seconds.',
    },
  }
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound()

  // Enable static rendering
  setRequestLocale(locale)

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <>
      {/* Locale-specific JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(locale === 'bn' ? {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "বয়স ক্যালকুলেটর বাংলাদেশ - বয়স ক্যালকুলেটর",
            "description": "বাংলাদেশের মানুষের জন্য বিনামূল্যে বয়স ক্যালকুলেটর অ্যাপ। বাংলা ও ইংরেজিতে বয়স গণনা করুন ইসলামিক ক্যালেন্ডার, রাশিচক্র, টিকা সময়সূচী এবং আইনি অধিকার সহ।",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "BDT"
            },
            "featureList": [
              "বয়স গণনা",
              "বাংলা ভাষা সমর্থন",
              "ইংরেজি ভাষা সমর্থন",
              "ইসলামিক ক্যালেন্ডার (হিজরি)",
              "রাশিচক্র",
              "টিকা সময়সূচী",
              "আইনি অধিকার তথ্য",
              "জীবনের অগ্রগতি ট্র্যাকিং",
              "জন্মদিন কাউন্টডাউন",
              "মজার তথ্য ও পরিসংখ্যান",
              "অফলাইন কার্যকারিতা",
              "তারিখ পার্থক্য ক্যালকুলেটর",
              "বছর, মাস, দিনে বয়স",
              "বাংলাদেশ-নির্দিষ্ট বৈশিষ্ট্য"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.7",
              "ratingCount": "800"
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
          } : {
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
      <NextIntlClientProvider messages={messages}>
        {children}
      </NextIntlClientProvider>
    </>
  )
}
