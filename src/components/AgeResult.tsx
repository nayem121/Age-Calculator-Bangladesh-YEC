'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Calendar, Calculator, Heart, Leaf, Star, Clock, Calendar as CalendarIcon, Shield, Syringe, Scale } from 'lucide-react'
import { formatNumber, formatDate } from '@/lib/utils'

interface AgeResultProps {
  ageResult: any
  locale: string
  t: any
}

export default function AgeResult({ ageResult, locale, t }: AgeResultProps) {
  const [activeTab, setActiveTab] = useState('age')

  const tabs = [
    { id: 'age', label: locale === 'bn' ? 'বয়সের বিবরণ' : 'Age Details', icon: Clock },
    { id: 'calendars', label: locale === 'bn' ? 'ক্যালেন্ডার' : 'Calendars', icon: Calendar },
    { id: 'zodiac', label: locale === 'bn' ? 'রাশিচক্র' : 'Zodiac', icon: Star },
    { id: 'health', label: locale === 'bn' ? 'স্বাস্থ্য তথ্য' : 'Health Info', icon: Heart }
  ]

  return (
    <div className="space-y-6 animate-fade-in">
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
      <div className="card-gradient rounded-3xl p-8 shadow-strong">
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white/50 text-gray-700 hover:bg-white/70'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {activeTab === 'age' && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 text-center">
                {locale === 'bn' ? 'বিস্তারিত বয়সের তথ্য' : 'Detailed Age Information'}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-primary-600" />
                    {locale === 'bn' ? 'মোট সময়' : 'Total Time'}
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>{locale === 'bn' ? 'মোট সপ্তাহ:' : 'Total Weeks:'}</span>
                      <span className="font-medium">{formatNumber(Math.floor(ageResult.totalDays / 7), locale)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{locale === 'bn' ? 'মোট দিন:' : 'Total Days:'}</span>
                      <span className="font-medium">{formatNumber(ageResult.totalDays, locale)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{locale === 'bn' ? 'মোট ঘন্টা:' : 'Total Hours:'}</span>
                      <span className="font-medium">{formatNumber(ageResult.totalHours, locale)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{locale === 'bn' ? 'মোট মিনিট:' : 'Total Minutes:'}</span>
                      <span className="font-medium">{formatNumber(ageResult.totalMinutes, locale)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{locale === 'bn' ? 'মোট সেকেন্ড:' : 'Total Seconds:'}</span>
                      <span className="font-medium">{formatNumber(ageResult.totalSeconds, locale)}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-secondary-600" />
                    {locale === 'bn' ? 'জন্মদিনের তথ্য' : 'Birthday Information'}
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>{locale === 'bn' ? 'পরবর্তী জন্মদিন:' : 'Next Birthday:'}</span>
                      <span className="font-medium">{formatDate(ageResult.nextBirthday, locale)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{locale === 'bn' ? 'জন্মদিন পর্যন্ত দিন:' : 'Days until birthday:'}</span>
                      <span className="font-medium">{formatNumber(ageResult.daysUntilBirthday, locale)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'calendars' && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 text-center">
                {locale === 'bn' ? 'ক্যালেন্ডার রূপান্তর' : 'Calendar Conversions'}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-bengali-600" />
                    {locale === 'bn' ? 'ইসলামিক ক্যালেন্ডার' : 'Islamic Calendar'}
                  </h4>
                  <p className="text-lg font-medium text-bengali-700">
                    {ageResult.hijriDate}
                  </p>
                </div>

                <div className="bg-white/50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-accent-600" />
                    {locale === 'bn' ? 'বাংলা ক্যালেন্ডার' : 'Bengali Calendar'}
                  </h4>
                  <p className="text-lg font-medium text-accent-700">
                    {ageResult.bengaliDate}
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'zodiac' && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 text-center">
                {locale === 'bn' ? 'রাশিচক্র তথ্য' : 'Zodiac Information'}
              </h3>
              
              <div className="bg-white/50 rounded-xl p-6 text-center">
                <Star className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  {ageResult.zodiacData.name}
                </h4>
                <p className="text-gray-600">
                  {ageResult.zodiacData.description}
                </p>
              </div>
            </div>
          )}

          {activeTab === 'health' && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 text-center">
                {locale === 'bn' ? 'স্বাস্থ্য ও আইনি তথ্য' : 'Health & Legal Information'}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-primary-600" />
                    {locale === 'bn' ? 'আইনি অধিকার' : 'Legal Rights'}
                  </h4>
                  <div className="space-y-2 text-sm">
                    {ageResult.legalInfo.map((info: any, index: number) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{info}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Syringe className="h-5 w-5 mr-2 text-secondary-600" />
                    {locale === 'bn' ? 'টিকাদান সময়সূচী' : 'Vaccination Schedule'}
                  </h4>
                  <div className="space-y-2 text-sm">
                    {ageResult.vaccinationSchedule.map((vaccine: any, index: number) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-secondary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{vaccine}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}