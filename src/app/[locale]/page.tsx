import { getTranslations, setRequestLocale } from 'next-intl/server'
import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SEOHead from '@/components/SEO/SEOHead'

// Lazy load components to improve LCP - only load when needed
const AgeCalculator = dynamic(() => import('@/components/AgeCalculator'), {
  loading: () => (
    <div className="flex justify-center items-center py-12">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
    </div>
  ),
  ssr: false // Disable SSR for better performance
})

const GlobalAgeCalculator = dynamic(() => import('@/components/GlobalAgeCalculator'), {
  loading: () => (
    <div className="flex justify-center items-center py-12">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
    </div>
  ),
  ssr: false // Disable SSR for better performance
})

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const isEnglish = locale === 'en'
  
  if (isEnglish) {
    return {
      title: 'Age Calculator - Calculate Age in Years, Months, Days, Hours, Minutes, Seconds',
      description: 'Free online age calculator. Calculate your exact age in years, months, weeks, days, hours, minutes, and seconds. Find your zodiac sign and convert dates across different calendar systems including Hebrew, Chinese, and Hindu calendars.',
      keywords: 'age calculator, date of birth calculator, birthday calculator, age in years, age in days, age in months, age in hours, age in minutes, age in seconds, zodiac sign, calendar converter, free calculator, online calculator, age calculation, birth date calculator, how old am i, calculate age, age finder, birthday finder, hebrew calendar, chinese calendar, hindu calendar, gregorian calendar',
      openGraph: {
        title: 'Age Calculator - Calculate Age in Years, Months, Days, Hours, Minutes, Seconds',
        description: 'Free online age calculator. Calculate your exact age in years, months, weeks, days, hours, minutes, and seconds. Find your zodiac sign and convert dates across different calendar systems.',
        locale: 'en_US',
      },
    }
  }
  
  // Bengali version
  return {
    title: 'বয়স ক্যালকুলেটর বাংলাদেশ - জন্ম তারিখ দিয়ে বয়স বের করুন',
    description: 'বাংলাদেশের মানুষের জন্য বিনামূল্যে বয়স ক্যালকুলেটর অ্যাপ। বাংলা ও ইংরেজিতে বয়স গণনা করুন ইসলামিক ক্যালেন্ডার, রাশিচক্র, টিকা সময়সূচী এবং আইনি অধিকার সহ। ছাত্র, অভিভাবক এবং সরকারী নথির জন্য উপযুক্ত।',
    keywords: 'বয়স ক্যালকুলেটর, বাংলাদেশ, বাংলা, বাংলা ক্যালেন্ডার, ইসলামিক ক্যালেন্ডার, রাশিচক্র, টিকা, আইনি অধিকার, জন্ম তারিখ ক্যালকুলেটর, আমার বয়স কত, বয়স বের করুন, জন্মদিন কাউন্টডাউন, বাংলা বয়স ক্যালকুলেটর, বয়স ক্যালকুলেটর বিডি, বাংলা জন্মদিন ক্যালকুলেটর, অফলাইন বয়স ক্যালকুলেটর, বয়স ক্যালকুলেটর',
    openGraph: {
      title: 'বয়স ক্যালকুলেটর বাংলাদেশ - বয়স ক্যালকুলেটর',
      description: 'বাংলাদেশের মানুষের জন্য বিনামূল্যে বয়স ক্যালকুলেটর অ্যাপ। বাংলা ও ইংরেজিতে বয়স গণনা করুন ইসলামিক ক্যালেন্ডার, রাশিচক্র, টিকা সময়সূচী এবং আইনি অধিকার সহ।',
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
      <SEOHead locale={locale} pageType="home" />
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
