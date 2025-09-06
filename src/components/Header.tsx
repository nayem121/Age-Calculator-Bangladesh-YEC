'use client'

import { useState } from 'react'
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

  const switchLanguage = () => {
    const newLocale = locale === 'en' ? 'bn' : 'en'
    router.push(`/${newLocale}`)
  }

  return (
    <header className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">
                {t('ageCalculator')}
              </h1>
              <p className="text-sm text-white/80 hidden sm:block">
                {locale === 'bn' 
                  ? 'বাংলাদেশের জন্য বিশেষায়িত বয়স ক্যালকুলেটর'
                  : 'Specialized Age Calculator for Bangladesh People'
                }
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href={`/${locale}`}
              className="text-white hover:text-white/80 transition-colors"
            >
              {t('ageCalculator')}
            </Link>
            <button
              onClick={switchLanguage}
              className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
            >
              <Globe className="h-4 w-4" />
              <span className="text-white font-medium">
                {locale === 'bn' ? 'EN' : 'বাং'}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href={`/${locale}`}
                className="text-white hover:text-white/80 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('ageCalculator')}
              </Link>
              <button
                onClick={() => {
                  switchLanguage()
                  setIsMenuOpen(false)
                }}
                className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors w-fit"
              >
                <Globe className="h-4 w-4" />
                <span className="text-white font-medium">
                  {locale === 'bn' ? 'EN' : 'বাং'}
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
