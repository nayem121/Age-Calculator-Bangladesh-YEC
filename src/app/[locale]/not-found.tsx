import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

export default async function NotFound({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'common' })
  
  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-4">
          {locale === 'bn' ? 'পেজ পাওয়া যায়নি' : 'Page Not Found'}
        </h2>
        <p className="text-white/90 mb-8">
          {locale === 'bn' 
            ? 'আপনি যে পেজটি খুঁজছেন তা বিদ্যমান নেই।' 
            : 'The page you are looking for doesn\'t exist.'
          }
        </p>
        <Link 
          href={`/${locale}`}
          className="btn-primary"
        >
          {locale === 'bn' ? 'হোমে যান' : 'Go Home'}
        </Link>
      </div>
    </div>
  )
}
