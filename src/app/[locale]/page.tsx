import { getTranslations, setRequestLocale } from 'next-intl/server'
import AgeCalculator from '@/components/AgeCalculator'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
        <AgeCalculator locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  )
}
