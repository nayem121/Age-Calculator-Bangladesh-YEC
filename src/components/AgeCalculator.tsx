'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Calendar, Calculator, Heart, Leaf, Star, Clock, Calendar as CalendarIcon } from 'lucide-react'
import { calculateAge, formatNumber, formatDate, convertToHijri, convertToBengali, getZodiacSign } from '@/lib/utils'
import { bangladeshData } from '@/data/country-data'
import AgeResult from './AgeResult'
import DatePicker from './DatePicker'

interface AgeCalculatorProps {
  locale: string
}

export default function AgeCalculator({ locale }: AgeCalculatorProps) {
  const t = useTranslations()
  const [birthDate, setBirthDate] = useState<Date | null>(null)
  const [ageResult, setAgeResult] = useState<any>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const handleCalculate = async () => {
    if (!birthDate) {
      // Use a more accessible alert method
      const errorMessage = t('pleaseEnterBirthDate')
      // For better accessibility, we could use a toast notification instead of alert
      alert(errorMessage)
      return
    }

    setIsCalculating(true)
    
    // Reduced delay for better performance while maintaining UX
    await new Promise(resolve => setTimeout(resolve, 200))

    try {
      const ageData = calculateAge(birthDate)
      
      // Get zodiac information
      const zodiacData = getZodiacSign(birthDate, locale)
      
      // Get legal info and vaccination schedule
      const legalInfo = bangladeshData.legalInfo(ageData.years)
      const vaccinationSchedule = bangladeshData.vaccinationSchedule(ageData.totalWeeks, ageData.years)
      
      // Life expectancy and milestones
      const lifeExpectancy = bangladeshData.lifeExpectancy
      const yearsLeft = Math.max(0, lifeExpectancy - ageData.years)
      const lifeProgress = (ageData.years / lifeExpectancy) * 100

      // Calendar conversions
      const hijriDate = convertToHijri(birthDate, locale)
      const bengaliDate = convertToBengali(birthDate, locale)

      setAgeResult({
        ...ageData,
        zodiacData,
        legalInfo,
        vaccinationSchedule,
        yearsLeft,
        lifeProgress,
        hijriDate,
        bengaliDate,
        nextBirthday: new Date(new Date().getFullYear(), birthDate.getMonth(), birthDate.getDate())
      })
    } catch (error) {
      console.error('Calculation error:', error)
      alert(t('error'))
    } finally {
      setIsCalculating(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      
      {/* Hero Section */}
      <div className="text-center space-y-6 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {t('ageCalculator')}
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            {t('calculateAgeDescription')}
          </p>
        </div>
        
        {/* SEO Keywords */}
        <div className="flex flex-wrap justify-center gap-2 text-sm text-white/90">
          <span className="bg-white/20 px-3 py-1 rounded-full">
            {locale === 'bn' ? 'বয়স ক্যালকুলেটর' : 'Age Calculator'}
          </span>
          <span className="bg-white/20 px-3 py-1 rounded-full">
            {locale === 'bn' ? 'জন্ম তারিখ দিয়ে বয়স বের করুন' : 'Date of Birth Calculator'}
          </span>
          <span className="bg-white/20 px-3 py-1 rounded-full">
            {locale === 'bn' ? 'ইসলামিক ক্যালেন্ডার' : 'Islamic Calendar'}
          </span>
          <span className="bg-white/20 px-3 py-1 rounded-full">
            {locale === 'bn' ? 'বাংলা ক্যালেন্ডার' : 'Bengali Calendar'}
          </span>
          <span className="bg-white/20 px-3 py-1 rounded-full">
            {locale === 'bn' ? 'রাশিচক্র' : 'Zodiac Signs'}
          </span>
        </div>
      </div>

      {/* Input Card */}
      <div className="card-gradient rounded-3xl p-8 shadow-strong animate-slide-up">
        <form 
          onSubmit={(e) => {
            e.preventDefault()
            handleCalculate()
          }}
          className="space-y-6"
          aria-label={locale === 'bn' ? 'বয়স গণনার ফর্ম' : 'Age calculation form'}
        >
          {/* Card Header */}
          <div className="flex items-center space-x-4 pb-6 border-b border-gray-200">
            <div className="bg-primary-100 p-3 rounded-xl" aria-hidden="true">
              <Calendar className="h-6 w-6 text-primary-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {t('enterBirthDate')}
              </h2>
              <p className="text-gray-600">
                {t('selectCountryAndDate')}
              </p>
            </div>
          </div>

          {/* Date Input */}
          <div className="space-y-4">
            <DatePicker
              value={birthDate}
              onChange={setBirthDate}
              locale={locale}
              label={t('birthDate')}
            />

            {/* Calculate Button */}
            <button
              type="submit"
              disabled={!birthDate || isCalculating}
              className="w-full btn-primary flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-4 focus:ring-primary-200 focus:outline-none"
              aria-describedby={!birthDate ? 'date-required-message' : undefined}
            >
              {isCalculating ? (
                <>
                  <div 
                    className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"
                    aria-hidden="true"
                  ></div>
                  <span>{locale === 'bn' ? 'গণনা হচ্ছে...' : 'Calculating...'}</span>
                </>
              ) : (
                <>
                  <Calculator className="h-5 w-5" aria-hidden="true" />
                  <span>{t('calculateAge')}</span>
                </>
              )}
            </button>
            
            {!birthDate && (
              <p 
                id="date-required-message"
                className="text-sm text-gray-500 text-center"
                role="alert"
              >
                {locale === 'bn' ? 'বয়স গণনা করতে জন্ম তারিখ প্রয়োজন' : 'Birth date is required to calculate age'}
              </p>
            )}
          </div>
        </form>
      </div>

      {/* Results */}
      {ageResult && (
        <AgeResult 
          ageResult={ageResult} 
          locale={locale} 
          t={t}
        />
      )}

      {/* Features Section */}
      <section 
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        aria-label={locale === 'bn' ? 'বয়স ক্যালকুলেটরের বৈশিষ্ট্য' : 'Age calculator features'}
      >
        <article className="card-gradient rounded-2xl p-6 text-center space-y-4 animate-fade-in">
          <div className="bg-islamic-100 p-4 rounded-xl w-fit mx-auto" aria-hidden="true">
            <CalendarIcon className="h-8 w-8 text-islamic-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">
            {t('islamicCalendar')}
          </h3>
          <p className="text-gray-600 text-sm">
            {locale === 'bn' 
              ? 'হিজরি ক্যালেন্ডার অনুযায়ী জন্ম তারিখ দেখুন'
              : 'View Birthday date according to Hijri calendar'
            }
          </p>
        </article>

        <article className="card-gradient rounded-2xl p-6 text-center space-y-4 animate-fade-in">
          <div className="bg-bengali-100 p-4 rounded-xl w-fit mx-auto" aria-hidden="true">
            <CalendarIcon className="h-8 w-8 text-bengali-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">
            {t('bengaliCalendar')}
          </h3>
          <p className="text-gray-600 text-sm">
            {locale === 'bn' 
              ? 'বাংলা ক্যালেন্ডার অনুযায়ী জন্ম তারিখ দেখুন'
              : 'View Birthday date according to Bengali calendar'
            }
          </p>
        </article>

        <article className="card-gradient rounded-2xl p-6 text-center space-y-4 animate-fade-in">
          <div className="bg-accent-100 p-4 rounded-xl w-fit mx-auto" aria-hidden="true">
            <Star className="h-8 w-8 text-accent-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">
            {locale === 'bn' ? 'রাশিচক্র' : 'Zodiac Signs'}
          </h3>
          <p className="text-gray-600 text-sm">
            {locale === 'bn' 
              ? 'আপনার রাশিচক্র এবং ব্যক্তিত্ব জানুন'
              : 'Discover your zodiac sign and personality'
            }
          </p>
        </article>

        <article className="card-gradient rounded-2xl p-6 text-center space-y-4 animate-fade-in">
          <div className="bg-primary-100 p-4 rounded-xl w-fit mx-auto" aria-hidden="true">
            <Heart className="h-8 w-8 text-primary-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">
            {locale === 'bn' ? 'মজার তথ্য' : 'Fun Facts'}
          </h3>
          <p className="text-gray-600 text-sm">
            {locale === 'bn' 
              ? 'হৃদস্পন্দন, শ্বাস-প্রশ্বাসের সংখ্যা দেখুন'
              : 'See heartbeats, breaths, and more'
            }
          </p>
        </article>
      </section>
    </div>
  )
}
