import { getTranslations, setRequestLocale } from 'next-intl/server'
import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Lazy load components to improve LCP
const AgeCalculator = dynamic(() => import('@/components/AgeCalculator'), {
  loading: () => (
    <div className="flex justify-center items-center py-12">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
    </div>
  ),
  ssr: true
})

const GlobalAgeCalculator = dynamic(() => import('@/components/GlobalAgeCalculator'), {
  loading: () => (
    <div className="flex justify-center items-center py-12">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
    </div>
  ),
  ssr: true
})

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const isEnglish = locale === 'en'
  
  if (isEnglish) {
    return {
      title: 'Age Calculator - Calculate Age in Years, Months, Days, Hours, Minutes, Seconds',
      description: 'Free online age calculator. Calculate your exact age in years, months, weeks, days, hours, minutes, and seconds. Find your zodiac sign and convert dates across different calendar systems.',
      keywords: 'age calculator, date of birth calculator, birthday calculator, age in years, age in days, age in months, age in hours, age in minutes, age in seconds, zodiac sign, calendar converter, free calculator, online calculator, age calculation, birth date calculator, how old am i, calculate age, age finder, birthday finder',
      openGraph: {
        title: 'Age Calculator - Calculate Age in Years, Months, Days',
        description: 'Free online age calculator. Calculate your exact age in years, months, weeks, days, hours, minutes, and seconds.',
        locale: 'en_US',
      },
    }
  }
  
  const t = await getTranslations({ locale, namespace: 'metadata' })
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      locale: 'bn_BD',
    },
  }
}

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  // Enable static rendering
  setRequestLocale(locale)
  
  // Use global calculator for English, Bangladesh-specific for Bengali
  const isEnglish = locale === 'en'
  
  return (
    <div className="min-h-screen gradient-bg">
      <Header locale={locale} />
      <main className="container mx-auto px-4 py-8">
        <h1 className="sr-only">
          {isEnglish 
            ? 'Age Calculator - Calculate Age in Years, Months, Days, Hours, Minutes, Seconds' 
            : 'বয়স ক্যালকুলেটর বাংলাদেশ - জন্ম তারিখ দিয়ে বয়স বের করুন'
          }
        </h1>
        {isEnglish ? <GlobalAgeCalculator /> : <AgeCalculator locale={locale} />}
      </main>
      <Footer locale={locale} />
    </div>
  )
}
