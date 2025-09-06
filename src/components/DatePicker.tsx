'use client'

import { useState, useEffect } from 'react'
import { Calendar } from 'lucide-react'

interface DatePickerProps {
  value: Date | null
  onChange: (date: Date | null) => void
  locale: string
  label: string
}

export default function DatePicker({ value, onChange, locale, label }: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [displayValue, setDisplayValue] = useState('')

  // Format date to DD/MM/YYYY for display
  const formatDateToDDMMYYYY = (date: Date) => {
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear().toString()
    return `${day}/${month}/${year}`
  }

  // Update display value when value changes
  useEffect(() => {
    if (value) {
      setDisplayValue(formatDateToDDMMYYYY(value))
    } else {
      setDisplayValue('')
    }
  }, [value])

  const formatDate = (date: Date) => {
    if (locale === 'bn') {
      const months = ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর']
      return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
    }
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  const formatNumber = (num: number) => {
    if (locale === 'bn') {
      const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯']
      return num.toString().replace(/\d/g, (digit) => bengaliDigits[parseInt(digit)])
    }
    return num.toString()
  }

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dateValue = event.target.value
    if (dateValue) {
      onChange(new Date(dateValue))
    } else {
      onChange(null)
    }
  }

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      
      <div className="relative">
        <div className="relative">
          <input
            type="date"
            value={value ? value.toISOString().split('T')[0] : ''}
            onChange={handleDateChange}
            max={new Date().toISOString().split('T')[0]}
            className="w-full px-3 py-2.5 sm:px-4 sm:py-3 pr-10 sm:pr-12 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 bg-white text-sm sm:text-base transition-all duration-200 hover:border-gray-400 focus:outline-none"
            placeholder={locale === 'bn' ? 'তারিখ নির্বাচন করুন' : 'Select date'}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 sm:pr-4">
            <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
        
        {value && (
          <div className="mt-2 text-xs sm:text-sm text-gray-600 px-1">
            <span className="font-medium">
              {locale === 'bn' ? 'নির্বাচিত তারিখ:' : 'Selected date:'}
            </span>
            <span className="ml-1 font-mono">{displayValue}</span>
            <span className="ml-2 text-gray-500">({formatDate(value)})</span>
          </div>
        )}
      </div>
    </div>
  )
}
