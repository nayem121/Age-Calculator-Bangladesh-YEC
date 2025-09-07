'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function Error({
  error,
  reset,
  params: { locale }
}: {
  error: Error & { digest?: string }
  reset: () => void
  params: { locale: string }
}) {
  const t = useTranslations('common')
  
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">500</h1>
        <h2 className="text-2xl font-semibold text-white mb-4">
          {locale === 'bn' ? 'কিছু ভুল হয়েছে!' : 'Something went wrong!'}
        </h2>
        <p className="text-white/90 mb-8">
          {locale === 'bn' 
            ? 'একটি অপ্রত্যাশিত ত্রুটি ঘটেছে। দয়া করে আবার চেষ্টা করুন।' 
            : 'An unexpected error occurred. Please try again.'
          }
        </p>
        <div className="space-x-4">
          <button
            onClick={reset}
            className="btn-primary"
          >
            {locale === 'bn' ? 'আবার চেষ্টা করুন' : 'Try again'}
          </button>
          <Link 
            href={`/${locale}`}
            className="btn-secondary"
          >
            {locale === 'bn' ? 'হোমে যান' : 'Go Home'}
          </Link>
        </div>
      </div>
    </div>
  )
}
