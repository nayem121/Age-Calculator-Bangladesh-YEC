'use client'

import { useState, useCallback } from 'react'
import { useTranslations } from 'next-intl'
import { Calendar, Globe, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface HeaderProps {
  locale: string
}

export default function Header({ locale }: HeaderProps) {
  const t = useTranslations()
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const switchLanguage = useCallback(() => {
    const newLocale = locale === 'en' ? 'bn' : 'en'
    router.push(`/${newLocale}`)
  }, [locale, router])

  return (
    <header className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50" role="banner">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-2 rounded-lg" aria-hidden="true">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">
                {locale === 'en' ? 'Global Age Calculator' : t('ageCalculator')}
              </h1>
              <p className="text-sm text-white/95 hidden sm:block">
                {locale === 'bn' 
                  ? 'বাংলাদেশের জন্য বিশেষায়িত বয়স ক্যালকুলেটর'
                  : 'Calculate Age Across Multiple Calendar Systems'
                }
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6" role="navigation" aria-label={locale === 'bn' ? 'প্রধান নেভিগেশন' : 'Main navigation'}>
            <Link 
              href={`/${locale}`}
              className="text-white hover:text-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white/70 rounded"
            >
              {t('ageCalculator')}
            </Link>
            <button
              onClick={switchLanguage}
              className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label={locale === 'bn' ? 'ভাষা পরিবর্তন করুন ইংরেজিতে' : 'Switch language to Bengali'}
            >
              <Globe className="h-4 w-4" aria-hidden="true" />
              <span className="text-white font-medium">
                {locale === 'bn' ? 'EN' : 'বাং'}
              </span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
            aria-label={isMenuOpen ? (locale === 'bn' ? 'মেনু বন্ধ করুন' : 'Close menu') : (locale === 'bn' ? 'মেনু খুলুন' : 'Open menu')}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4"
            role="navigation"
            aria-label={locale === 'bn' ? 'মোবাইল নেভিগেশন' : 'Mobile navigation'}
          >
            <nav className="flex flex-col space-y-4">
              <Link 
                href={`/${locale}`}
                className="text-white hover:text-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white/70 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('ageCalculator')}
              </Link>
              <button
                onClick={() => {
                  switchLanguage()
                  setIsMenuOpen(false)
                }}
                className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors w-fit focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label={locale === 'bn' ? 'ভাষা পরিবর্তন করুন ইংরেজিতে' : 'Switch language to Bengali'}
              >
                <Globe className="h-4 w-4" aria-hidden="true" />
                <span className="text-white font-medium">
                  {locale === 'bn' ? 'EN' : 'বাং'}
                </span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
