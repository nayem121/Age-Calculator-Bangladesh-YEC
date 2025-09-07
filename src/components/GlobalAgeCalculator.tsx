'use client'

import { useState } from 'react'
import { Calendar, Calculator, Globe, Clock, Star, Heart } from 'lucide-react'
import { calculateAge, formatNumber, formatDate } from '@/lib/utils'
import GlobalAgeResult from './GlobalAgeResult'
import DatePicker from './DatePicker'

export default function GlobalAgeCalculator() {
  const [birthDate, setBirthDate] = useState<Date | null>(new Date())
  const [targetDate, setTargetDate] = useState<Date | null>(new Date())
  const [ageResult, setAgeResult] = useState<any>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const handleCalculate = async () => {
    if (!birthDate) {
      alert('Please enter your birth date to calculate age')
      return
    }

    setIsCalculating(true)
    
    // Reduced delay for better performance while maintaining UX
    await new Promise(resolve => setTimeout(resolve, 200))

    try {
      const ageData = calculateAge(birthDate, targetDate || undefined)
      
      // Get zodiac information
      const zodiacData = getZodiacSign(birthDate)
      
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
      console.error('Calculation error:', error)
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
            Global Age Calculator
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Calculate your age across different calendar systems and discover your zodiac sign
          </p>
        </div>
        
        {/* SEO Keywords */}
        <div className="flex flex-wrap justify-center gap-2 text-sm text-white/90">
          <span className="bg-white/20 px-3 py-1 rounded-full">
            Age Calculator
          </span>
          <span className="bg-white/20 px-3 py-1 rounded-full">
            Date of Birth Calculator
          </span>
          <span className="bg-white/20 px-3 py-1 rounded-full">
            Gregorian Calendar
          </span>
          <span className="bg-white/20 px-3 py-1 rounded-full">
            Hebrew Calendar
          </span>
          <span className="bg-white/20 px-3 py-1 rounded-full">
            Chinese Calendar
          </span>
          <span className="bg-white/20 px-3 py-1 rounded-full">
            Hindu Calendar
          </span>
          <span className="bg-white/20 px-3 py-1 rounded-full">
            Zodiac Signs
          </span>
          <span className="bg-white/20 px-3 py-1 rounded-full">
            Birthday Calculator
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
        <GlobalAgeResult ageResult={ageResult} />
      )}

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
            Get exact age in years, months, days, hours, minutes, and seconds
          </p>
        </article>

        <article className="card-gradient rounded-2xl p-6 text-center animate-fade-in">
          <div className="bg-accent-100 p-3 rounded-xl w-fit mx-auto mb-4" aria-hidden="true">
            <Heart className="h-8 w-8 text-accent-600" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Global Access
          </h3>
          <p className="text-gray-600 text-sm">
            Works for people from all countries and cultural backgrounds worldwide
          </p>
        </article>
      </div>
    </div>
  )
}

// Helper functions for calendar conversions
function getZodiacSign(birthDate: Date) {
  const month = birthDate.getMonth() + 1
  const day = birthDate.getDate()
  
  const zodiacSigns = [
    { name: 'Capricorn', start: [12, 22], end: [1, 19] },
    { name: 'Aquarius', start: [1, 20], end: [2, 18] },
    { name: 'Pisces', start: [2, 19], end: [3, 20] },
    { name: 'Aries', start: [3, 21], end: [4, 19] },
    { name: 'Taurus', start: [4, 20], end: [5, 20] },
    { name: 'Gemini', start: [5, 21], end: [6, 20] },
    { name: 'Cancer', start: [6, 21], end: [7, 22] },
    { name: 'Leo', start: [7, 23], end: [8, 22] },
    { name: 'Virgo', start: [8, 23], end: [9, 22] },
    { name: 'Libra', start: [9, 23], end: [10, 22] },
    { name: 'Scorpio', start: [10, 23], end: [11, 21] },
    { name: 'Sagittarius', start: [11, 22], end: [12, 21] }
  ]
  
  for (const sign of zodiacSigns) {
    const [startMonth, startDay] = sign.start
    const [endMonth, endDay] = sign.end
    
    if (
      (month === startMonth && day >= startDay) ||
      (month === endMonth && day <= endDay) ||
      (startMonth > endMonth && (month > startMonth || month < endMonth))
    ) {
      return {
        name: sign.name,
        description: getZodiacDescription(sign.name)
      }
    }
  }
  
  return { name: 'Unknown', description: 'Unable to determine zodiac sign' }
}

function getZodiacDescription(sign: string) {
  const descriptions: { [key: string]: string } = {
    'Aries': 'Bold, ambitious, and confident leader',
    'Taurus': 'Reliable, patient, and practical',
    'Gemini': 'Versatile, expressive, and curious',
    'Cancer': 'Loyal, emotional, and intuitive',
    'Leo': 'Dramatic, creative, and self-confident',
    'Virgo': 'Analytical, kind, and hardworking',
    'Libra': 'Diplomatic, fair, and social',
    'Scorpio': 'Passionate, resourceful, and brave',
    'Sagittarius': 'Adventurous, independent, and philosophical',
    'Capricorn': 'Responsible, disciplined, and self-controlled',
    'Aquarius': 'Progressive, independent, and humanitarian',
    'Pisces': 'Compassionate, artistic, and intuitive'
  }
  return descriptions[sign] || 'Unique and special'
}

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
