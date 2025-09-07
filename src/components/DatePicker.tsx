'use client'

import { useState, useEffect } from 'react'
import { Calendar, X } from 'lucide-react'

interface DatePickerProps {
  value: Date | null
  onChange: (date: Date | null) => void
  locale: string
  label: string
  placeholder?: string
  required?: boolean
  maxDate?: string
  showClearButton?: boolean
}

export default function DatePicker({ 
  value, 
  onChange, 
  locale, 
  label, 
  placeholder, 
  required = true, 
  maxDate,
  showClearButton = false
}: DatePickerProps) {
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

  const handleClear = () => {
    onChange(null)
  }

  const handleSetCurrentDate = () => {
    onChange(new Date())
  }

  return (
    <div className="space-y-2">
      <label 
        htmlFor="date-input"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
      </label>
      
      <div className="relative">
        <div className="flex items-center gap-2">
          <div className="relative flex-1 min-w-[200px] max-w-[280px]">
            <input
              id="date-input"
              type="date"
              value={value ? value.toISOString().split('T')[0] : ''}
              onChange={handleDateChange}
              max={maxDate || new Date().toISOString().split('T')[0]}
              className="w-full px-3 py-2.5 sm:px-4 sm:py-3 pr-10 sm:pr-12 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 bg-white text-sm sm:text-base transition-all duration-200 hover:border-gray-400 focus:outline-none"
              placeholder={placeholder || (locale === 'bn' ? 'তারিখ নির্বাচন করুন' : 'Select date')}
              aria-label={label}
              aria-describedby={value ? 'selected-date-info' : undefined}
              required={required}
            />
            <div 
              className="absolute inset-y-0 right-0 flex items-center pr-3 sm:pr-4"
              aria-hidden="true"
            >
              <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
          
          {showClearButton && value && (
            <button
              type="button"
              onClick={handleClear}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label={locale === 'bn' ? 'তারিখ সাফ করুন' : 'Clear date'}
            >
              <X className="h-4 w-4" />
            </button>
          )}
          
          {showClearButton && !value && (
            <button
              type="button"
              onClick={handleSetCurrentDate}
              className="px-3 py-2 text-xs text-blue-600 hover:text-blue-800 border border-blue-200 hover:border-blue-300 rounded-md transition-colors"
              aria-label={locale === 'bn' ? 'বর্তমান তারিখ ব্যবহার করুন' : 'Use current date'}
            >
              {locale === 'bn' ? 'আজ' : 'Today'}
            </button>
          )}
        </div>
        
        {value && (
          <div 
            id="selected-date-info"
            className="mt-2 text-xs sm:text-sm text-gray-600 px-1"
            role="status"
            aria-live="polite"
          >
            <span className="font-medium">
              {locale === 'bn' ? 'নির্বাচিত তারিখ:' : 'Selected date:'}
            </span>
            <span className="ml-1 font-mono" aria-label={`${displayValue} in DD/MM/YYYY format`}>
              {displayValue}
            </span>
            <span className="ml-2 text-gray-500" aria-label={`${formatDate(value)} in full date format`}>
              ({formatDate(value)})
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
