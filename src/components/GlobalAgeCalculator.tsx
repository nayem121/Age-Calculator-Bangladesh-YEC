'use client'

import { useState, lazy, Suspense, useEffect } from 'react'
import { Calendar, Calculator, Globe, Clock, Star, Heart } from 'lucide-react'
import { calculateAge, formatNumber, formatDate, getZodiacSign } from '@/lib/utils'
import DatePicker from './DatePicker'

// Lazy load heavy components to improve initial render
const GlobalAgeResult = lazy(() => import('./GlobalAgeResult').then(module => ({ default: module.default })))

export default function GlobalAgeCalculator() {
  const [birthDate, setBirthDate] = useState<Date | null>(null)
  const [targetDate, setTargetDate] = useState<Date | null>(null)
  const [ageResult, setAgeResult] = useState<any>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [isClient, setIsClient] = useState(false)

  // Fix hydration mismatch by initializing dates on client side only
  useEffect(() => {
    setIsClient(true)
    if (!birthDate) {
      setBirthDate(new Date())
    }
    if (!targetDate) {
      setTargetDate(new Date())
    }
  }, [])

  const handleCalculate = async () => {
    if (!birthDate) {
      alert('Please enter your birth date to calculate age')
      return
    }

    setIsCalculating(true)
    
    // Minimal delay for better UX without blocking
    await new Promise(resolve => setTimeout(resolve, 100))

    try {
      const ageData = calculateAge(birthDate, targetDate || undefined)
      
      // Get zodiac information
      const zodiacData = getZodiacSign(birthDate, 'en')
      
      // Calendar conversions
      const gregorianDate = formatDate(birthDate, 'en')
      const hebrewDate = convertToHebrew(birthDate)
      const chineseDate = convertToChinese(birthDate)
      const hinduDate = convertToHindu(birthDate)

      setAgeResult({
        ...ageData,
        zodiacData,
        gregorianDate,
        hebrewDate,
        chineseDate,
        hinduDate,
        targetDate: targetDate ? formatDate(targetDate, 'en') : null,
        isTargetDateUsed: !!targetDate
      })
    } catch (error) {
      if (process.env.NODE_ENV !== 'production') console.error('Calculation error:', error)
      alert('An error occurred while calculating age')
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
            Age Calculator
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Calculate age in years, months, weeks, days, hours, minutes, and seconds
          </p>
        </div>
        
        {/* SEO Keywords */}
        <div className="flex flex-wrap justify-center gap-2 text-sm text-white/90">
          <span className="bg-white/20 px-3 py-1 rounded-full">
            Age Calculator
          </span>
          <span className="bg-white/20 px-3 py-1 rounded-full">
            Date of Birth
          </span>
          <span className="bg-white/20 px-3 py-1 rounded-full">
            Birthday Calculator
          </span>
          <span className="bg-white/20 px-3 py-1 rounded-full">
            Age in Years
          </span>
          <span className="bg-white/20 px-3 py-1 rounded-full">
            Age in Days
          </span>
          <span className="bg-white/20 px-3 py-1 rounded-full">
            Zodiac Sign
          </span>
          <span className="bg-white/20 px-3 py-1 rounded-full">
            Calendar Converter
          </span>
          <span className="bg-white/20 px-3 py-1 rounded-full">
            Free Calculator
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
          aria-label="Global age calculation form"
        >
          {/* Card Header */}
          <div className="flex items-center space-x-4 pb-6 border-b border-gray-200">
            <div className="bg-primary-100 p-3 rounded-xl" aria-hidden="true">
              <Globe className="h-6 w-6 text-primary-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Enter Your Birth Date
              </h2>
              <p className="text-gray-600">
                Select your birth date to calculate age across multiple calendar systems
              </p>
            </div>
          </div>

          {/* Date Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <DatePicker
                value={birthDate}
                onChange={setBirthDate}
                locale="en"
                label="Date of Birth"
                placeholder="Select your birth date"
                required={true}
                maxDate={new Date().toISOString().split('T')[0]}
                showClearButton={true}
              />
            </div>
            
            <div className="flex flex-col">
              <DatePicker
                value={targetDate}
                onChange={setTargetDate}
                locale="en"
                label="Age at the Date of"
                placeholder="Optional - Use current date"
                required={false}
                maxDate={new Date().toISOString().split('T')[0]}
                showClearButton={true}
              />
            </div>
          </div>

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
                <span>Calculating...</span>
              </>
            ) : (
              <>
                <Calculator className="h-5 w-5" aria-hidden="true" />
                <span>Calculate Age</span>
              </>
            )}
          </button>
          
          {!birthDate && (
            <p 
              id="date-required-message"
              className="text-sm text-gray-500 text-center"
              role="alert"
            >
              Birth date is required to calculate age
            </p>
          )}
        </form>
      </div>

      {/* Results */}
      {ageResult && (
        <Suspense fallback={
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
          </div>
        }>
          <GlobalAgeResult ageResult={ageResult} />
        </Suspense>
      )}

      {/* Educational Content - Like Calculator.net */}
      <div className="card-gradient rounded-3xl p-8 shadow-strong">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">How Age is Calculated</h2>
        
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Western Age System</h3>
            <p className="text-sm leading-relaxed">
              This calculator uses the most common age system where age increases on a person's birthday. 
              For example, the age of a person who has lived for 3 years and 11 months is 3, and their age 
              will increase to 4 on their next birthday one month later. Most western countries use this age system.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Different Cultural Systems</h3>
            <p className="text-sm leading-relaxed">
              In some cultures, age is expressed by counting years with or without including the current year. 
              In traditional Chinese age systems, people are born at age 1 and their age increases at the 
              Traditional Chinese New Year rather than their birthday.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Month and Day Calculations</h3>
            <p className="text-sm leading-relaxed">
              When calculating months and days, we count from the same day of the month. For example, 
              Feb. 20 to Mar. 20 is one month. For dates like Feb. 28 to Mar. 31, we consider Feb. 28 
              to Mar. 28 as one month, resulting in one month and 3 days.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <article className="card-gradient rounded-2xl p-6 text-center animate-fade-in">
          <div className="bg-primary-100 p-3 rounded-xl w-fit mx-auto mb-4" aria-hidden="true">
            <Calendar className="h-8 w-8 text-primary-600" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Multiple Calendars
          </h3>
          <p className="text-gray-600 text-sm">
            Calculate age using Gregorian, Hebrew, Chinese, and Hindu calendar systems
          </p>
        </article>

        <article className="card-gradient rounded-2xl p-6 text-center animate-fade-in">
          <div className="bg-secondary-100 p-3 rounded-xl w-fit mx-auto mb-4" aria-hidden="true">
            <Star className="h-8 w-8 text-secondary-600" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Zodiac Signs
          </h3>
          <p className="text-gray-600 text-sm">
            Discover your zodiac sign and its characteristics based on your birth date
          </p>
        </article>

        <article className="card-gradient rounded-2xl p-6 text-center animate-fade-in">
          <div className="bg-bengali-100 p-3 rounded-xl w-fit mx-auto mb-4" aria-hidden="true">
            <Clock className="h-8 w-8 text-bengali-600" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Precise Calculation
          </h3>
          <p className="text-gray-600 text-sm">
            Get exact age in years, months, weeks, days, hours, minutes, and seconds
          </p>
        </article>

        <article className="card-gradient rounded-2xl p-6 text-center animate-fade-in">
          <div className="bg-accent-100 p-3 rounded-xl w-fit mx-auto mb-4" aria-hidden="true">
            <Heart className="h-8 w-8 text-accent-600" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Free to Use
          </h3>
          <p className="text-gray-600 text-sm">
            Completely free online age calculator with no registration required
          </p>
        </article>
      </div>
    </div>
  )
}

// Helper functions for calendar conversions

function convertToHebrew(date: Date) {
  // Simplified Hebrew calendar conversion
  // In a real implementation, you'd use a proper Hebrew calendar library
  const hebrewMonths = [
    'Tishrei', 'Cheshvan', 'Kislev', 'Tevet', 'Shevat', 'Adar',
    'Nisan', 'Iyar', 'Sivan', 'Tammuz', 'Av', 'Elul'
  ]
  
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  
  // This is a simplified conversion - real Hebrew calendar is much more complex
  const hebrewYear = year + 3760 // Approximate conversion
  const hebrewMonth = hebrewMonths[month]
  
  return `${day} ${hebrewMonth} ${hebrewYear}`
}

function convertToChinese(date: Date) {
  // Simplified Chinese calendar conversion
  const chineseYears = [
    'Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake',
    'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'
  ]
  
  const chineseMonths = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  
  // Simplified Chinese year calculation
  const chineseYear = chineseYears[(year - 4) % 12]
  const chineseMonth = chineseMonths[month]
  
  return `${day} ${chineseMonth} (${chineseYear} Year)`
}

function convertToHindu(date: Date) {
  // Simplified Hindu calendar conversion
  const hinduMonths = [
    'Chaitra', 'Vaishakha', 'Jyeshtha', 'Ashadha', 'Shravana', 'Bhadrapada',
    'Kartika', 'Margashirsha', 'Pausha', 'Magha', 'Phalguna', 'Chaitra'
  ]
  
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  
  // Simplified Hindu year calculation
  const hinduYear = year - 78 // Approximate conversion to Vikram Samvat
  const hinduMonth = hinduMonths[month]
  
  return `${day} ${hinduMonth} ${hinduYear} (Vikram Samvat)`
}
