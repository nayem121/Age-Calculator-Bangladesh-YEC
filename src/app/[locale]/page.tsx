import { getTranslations, setRequestLocale } from 'next-intl/server'
import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Lazy load AgeCalculator to improve LCP
const AgeCalculator = dynamic(() => import('@/components/AgeCalculator'), {
  loading: () => (
    <div className="flex justify-center items-center py-12">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
    </div>
  ),
  ssr: true
})

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'metadata' })
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      locale: locale === 'bn' ? 'bn_BD' : 'en_US',
    },
  }
}

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  // Enable static rendering
  setRequestLocale(locale)
  return (
    <div className="min-h-screen gradient-bg">
      <Header locale={locale} />
      <main className="container mx-auto px-4 py-8">
        <h1 className="sr-only">
          {locale === 'bn' 
            ? 'বয়স ক্যালকুলেটর বাংলাদেশ - জন্ম তারিখ দিয়ে বয়স বের করুন' 
            : 'Age Calculator Bangladesh - Calculate Age from Date of Birth'
          }
        </h1>
        <AgeCalculator locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  )
}
