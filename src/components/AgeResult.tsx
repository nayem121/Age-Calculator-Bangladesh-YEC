'use client'

import { useState } from 'react'
import { 
  Calendar, 
  Clock, 
  Heart, 
  Leaf, 
  Star, 
  Share2, 
  ThumbsUp,
  Moon,
  Flower,
  Shield,
  TrendingUp
} from 'lucide-react'
import { formatNumber, formatDate } from '@/lib/utils'

interface AgeResultProps {
  ageResult: any
  locale: string
  t: any
}

export default function AgeResult({ ageResult, locale, t }: AgeResultProps) {
  const [activeTab, setActiveTab] = useState('age')

  const shareResult = async () => {
    const message = locale === 'bn' 
      ? `আমার বয়স: ${formatNumber(ageResult.years, locale)} বছর ${formatNumber(ageResult.months, locale)} মাস ${formatNumber(ageResult.days, locale)} দিন | ধন্যবাদ বয়স ক্যালকুলেটর বাংলাদেশ ব্যবহার করার জন্য। অ্যান্ড্রয়েড অ্যাপ ডাউনলোড করুন: https://play.google.com/store/apps/details?id=com.yec.agecalculatorbangladesh | ওয়েবসাইট: https://agecalculator.yec.org.bd`
      : `My age: ${ageResult.years} years ${ageResult.months} months ${ageResult.days} days | Thanks for using Age Calculator Bangladesh. Download Android app: https://play.google.com/store/apps/details?id=com.yec.agecalculatorbangladesh | Website: https://agecalculator.yec.org.bd`
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: t('ageCalculator'),
          text: message,
          url: 'https://agecalculator.yec.org.bd'
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(message)
      alert(locale === 'bn' ? 'লিংক কপি করা হয়েছে!' : 'Link copied to clipboard!')
    }
  }

  const tabs = [
    { id: 'age', label: locale === 'bn' ? 'বয়স' : 'Age', icon: Calendar },
    { id: 'details', label: locale === 'bn' ? 'ক্যালেন্ডার রূপান্তর' : 'Calender Conversion', icon: Clock },
    { id: 'zodiac', label: locale === 'bn' ? 'রাশিচক্র' : 'Zodiac', icon: Star },
    { id: 'legal', label: locale === 'bn' ? 'আইনি' : 'Legal', icon: Shield },
    { id: 'health', label: locale === 'bn' ? 'স্বাস্থ্য' : 'Health', icon: Heart }
  ]

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Main Age Display */}
      <div className="card-gradient rounded-3xl p-8 shadow-strong">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            {t('ageCalculationResult')}
          </h2>
          
          {/* Target Date Information */}
          {ageResult.isTargetDateUsed && ageResult.targetDate && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
              <div className="flex items-center justify-center space-x-2 text-blue-800">
                <Calendar className="h-5 w-5" />
                <span className="font-medium">
                  {locale === 'bn' 
                    ? `বয়স গণনা করা হয়েছে: ${ageResult.targetDate}` 
                    : `Age calculated as of: ${ageResult.targetDate}`
                  }
                </span>
              </div>
            </div>
          )}
          
          {/* Age Grid - Responsive with proper spacing for large numbers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-primary-50 p-4 sm:p-6 rounded-2xl min-w-0">
              <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-primary-600 mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-bold text-primary-900 break-words">
                {formatNumber(ageResult.years, locale)}
              </div>
              <div className="text-xs sm:text-sm text-primary-700 font-medium mt-1">
                {t('years')}
              </div>
            </div>
            
            <div className="bg-secondary-50 p-4 sm:p-6 rounded-2xl min-w-0">
              <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-secondary-600 mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-bold text-secondary-900 break-words">
                {formatNumber(ageResult.months, locale)}
              </div>
              <div className="text-xs sm:text-sm text-secondary-700 font-medium mt-1">
                {t('months')}
              </div>
            </div>
            
            <div className="bg-bengali-50 p-4 sm:p-6 rounded-2xl min-w-0">
              <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-bengali-600 mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-bold text-bengali-900 break-words">
                {formatNumber(ageResult.days, locale)}
              </div>
              <div className="text-xs sm:text-sm text-bengali-700 font-medium mt-1">
                {t('days')}
              </div>
            </div>
            
            <div className="bg-accent-50 p-4 sm:p-6 rounded-2xl min-w-0">
              <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-accent-600 mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-bold text-accent-900 break-words">
                {formatNumber(ageResult.daysUntilBirthday, locale)}
              </div>
              <div className="text-xs sm:text-sm text-accent-700 font-medium mt-1">
                {t('daysUntilBirthday')}
              </div>
            </div>
          </div>

          {/* Life Progress */}
          <div className="bg-gray-50 p-6 rounded-2xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {locale === 'bn' ? 'জীবনের অগ্রগতি' : 'Life Progress'}
            </h3>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
              <div 
                className="bg-gradient-to-r from-primary-500 to-secondary-500 h-3 rounded-full transition-all duration-1000"
                style={{ width: `${Math.min(ageResult.lifeProgress, 100)}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600">
              {locale === 'bn' 
                ? `বিশ্বব্যাংকের গড় আয়ুর তথ্য অনুযায়ী ${formatNumber(ageResult.yearsLeft, locale)} বছর বাকি`
                : `World Bank average life expectancy data ${formatNumber(ageResult.yearsLeft, locale)} years remaining`
              }
            </p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="card-gradient rounded-2xl p-2 shadow-medium">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="font-medium">{tab.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div className="card-gradient rounded-3xl p-8 shadow-strong">
        {activeTab === 'age' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {locale === 'bn' ? 'বিস্তারিত সময়' : 'Detailed Time lived'}
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-xl text-center">
                <Clock className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-900">
                  {formatNumber(ageResult.secondsLived, locale)}
                </div>
                <div className="text-sm text-blue-700">
                  {locale === 'bn' ? 'সেকেন্ড' : 'Seconds'}
                </div>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-xl text-center">
                <Clock className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-900">
                  {formatNumber(ageResult.minutesLived, locale)}
                </div>
                <div className="text-sm text-purple-700">
                  {locale === 'bn' ? 'মিনিট' : 'Minutes'}
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-xl text-center">
                <Clock className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-900">
                  {formatNumber(ageResult.hoursLived, locale)}
                </div>
                <div className="text-sm text-green-700">
                  {locale === 'bn' ? 'ঘন্টা' : 'Hours'}
                </div>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-xl text-center">
                <Calendar className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-900">
                  {formatNumber(ageResult.totalDays, locale)}
                </div>
                <div className="text-sm text-orange-700">
                  {t('totalDays')}
                </div>
              </div>
              
              <div className="bg-pink-50 p-4 rounded-xl text-center">
                <Calendar className="h-6 w-6 text-pink-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-pink-900">
                  {formatNumber(ageResult.totalWeeks, locale)}
                </div>
                <div className="text-sm text-pink-700">
                  {t('totalWeeks')}
                </div>
              </div>
              
              <div className="bg-indigo-50 p-4 rounded-xl text-center">
                <Calendar className="h-6 w-6 text-indigo-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-indigo-900">
                  {formatNumber(ageResult.totalMonths, locale)}
                </div>
                <div className="text-sm text-indigo-700">
                  {t('totalMonths')}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'details' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {locale === 'bn' ? 'হিজরি ও বাংলা ক্যালেন্ডারে জন্ম তারিখ' : 'Birth date in Hijri and Bangla Calendar'}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Islamic Calendar */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl">
                <div className="flex items-center space-x-3 mb-4">
                  <Moon className="h-6 w-6 text-purple-600" />
                  <h4 className="text-lg font-semibold text-purple-900">
                    {t('islamicCalendar')}
                  </h4>
                </div>
                <div className="text-2xl font-bold text-purple-900">
                  {formatNumber(ageResult.hijriDate.day, locale)} {ageResult.hijriDate.month} {formatNumber(ageResult.hijriDate.year, locale)} {locale === 'bn' ? 'হিজরি' : 'Hijri'}
                </div>
              </div>
              
              {/* Bengali Calendar */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
                <div className="flex items-center space-x-3 mb-4">
                  <Flower className="h-6 w-6 text-green-600" />
                  <h4 className="text-lg font-semibold text-green-900">
                    {t('bengaliCalendar')}
                  </h4>
                </div>
                <div className="text-2xl font-bold text-green-900">
                  {formatNumber(ageResult.bengaliDate.day, locale)} {ageResult.bengaliDate.month} {formatNumber(ageResult.bengaliDate.year, locale)} {locale === 'bn' ? 'বাংলা সন' : 'Bengali Era'}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'zodiac' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {locale === 'bn' ? 'রাশিচক্র তথ্য' : 'Zodiac Information'}
            </h2>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-100 p-6 rounded-2xl">
              <div className="text-center space-y-4">
                <div className="text-4xl">{ageResult.zodiacData.info.symbol}</div>
                <h4 className="text-2xl font-bold text-orange-900">
                  {ageResult.zodiacData.info.name} {locale === 'bn' ? 'রাশি' : 'Sign'}
                </h4>
                <div className="text-lg text-orange-800">
                  {locale === 'bn' ? 'উপাদান' : 'Element'}: {ageResult.zodiacData.info.element}
                </div>
                <p className="text-orange-900 leading-relaxed">
                  {ageResult.zodiacData.info.personality}
                </p>
                <div className="bg-orange-200 p-4 rounded-xl">
                  <p className="text-orange-900 font-medium">
                    <span className="font-bold">
                      {locale === 'bn' ? 'মূল বৈশিষ্ট্য: ' : 'Key Traits: '}
                    </span>
                    {ageResult.zodiacData.info.traits}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'legal' && Object.keys(ageResult.legalInfo).length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {t('legalRights')}
            </h2>
            
            <div className="space-y-4">
              {Object.entries(ageResult.legalInfo).map(([key, value]: [string, any], index: number) => (
                <div key={key} className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-500">
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">
                    {t(key)}
                  </h4>
                  <p className="text-blue-800 leading-relaxed">
                    {value[locale]}
                  </p>
                  {value.constitutionalReference && (
                    <div className="mt-3 bg-blue-100 p-3 rounded-lg">
                      <p className="text-sm text-blue-700 italic">
                        {value.constitutionalReference[locale]}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'health' && ageResult.vaccinationSchedule.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {t('vaccinations')}
            </h2>
            
            <div className="space-y-4">
              {ageResult.vaccinationSchedule.map((vaccine: any, index: number) => (
                <div key={index} className="bg-green-50 p-6 rounded-2xl border-l-4 border-green-500">
                  <h4 className="text-lg font-semibold text-green-900 mb-2">
                    {vaccine[locale]}
                  </h4>
                  <p className="text-green-800 text-sm mb-2">
                    {t('age')}: {vaccine.age}
                  </p>
                  <p className="text-green-700 leading-relaxed">
                    {vaccine.guidance[locale]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={shareResult}
          className="flex-1 btn-primary flex items-center justify-center space-x-3"
        >
          <Share2 className="h-5 w-5" />
          <span>{locale === 'bn' ? 'শেয়ার করুন' : 'Share Result'}</span>
        </button>
        
        <button
          onClick={() => window.location.reload()}
          className="flex-1 btn-secondary flex items-center justify-center space-x-3"
        >
          <ThumbsUp className="h-5 w-5" />
          <span>{locale === 'bn' ? 'নতুন গণনা' : 'New Calculation'}</span>
        </button>
      </div>
    </div>
  )
}
