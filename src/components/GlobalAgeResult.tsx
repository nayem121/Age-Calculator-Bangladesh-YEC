'use client'

import { useState } from 'react'
import { Calendar, Clock, Star, Globe, Heart, Leaf } from 'lucide-react'
import { formatNumber } from '@/lib/utils'

interface GlobalAgeResultProps {
  ageResult: any
}

export default function GlobalAgeResult({ ageResult }: GlobalAgeResultProps) {
  const [activeTab, setActiveTab] = useState('age')

  const tabs = [
    { id: 'age', label: 'Age Details', icon: Clock },
    { id: 'calendars', label: 'Calendars', icon: Calendar },
    { id: 'zodiac', label: 'Zodiac', icon: Star },
    { id: 'milestones', label: 'Milestones', icon: Heart }
  ]

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="card-gradient rounded-3xl p-8 shadow-strong">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Age Calculation Result</h2>
          
          {/* Target Date Information */}
          {ageResult.isTargetDateUsed && ageResult.targetDate && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
              <div className="flex items-center justify-center space-x-2 text-blue-800">
                <Calendar className="h-5 w-5" />
                <span className="font-medium">
                  Age calculated as of: {ageResult.targetDate}
                </span>
              </div>
            </div>
          )}
          
          {/* Age Grid - Comprehensive like Calculator.net */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            <div className="bg-white/50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-primary-600">{ageResult.years}</div>
              <div className="text-sm text-gray-600">Years</div>
            </div>
            <div className="bg-white/50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-primary-600">{ageResult.months}</div>
              <div className="text-sm text-gray-600">Months</div>
            </div>
            <div className="bg-white/50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-primary-600">{Math.floor(ageResult.totalDays / 7)}</div>
              <div className="text-sm text-gray-600">Weeks</div>
            </div>
            <div className="bg-white/50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-primary-600">{ageResult.days}</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="bg-white/50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-primary-600">{formatNumber(ageResult.totalHours)}</div>
              <div className="text-sm text-gray-600">Hours</div>
            </div>
            <div className="bg-white/50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-primary-600">{formatNumber(ageResult.totalMinutes)}</div>
              <div className="text-sm text-gray-600">Minutes</div>
            </div>
            <div className="bg-white/50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-primary-600">{formatNumber(ageResult.totalSeconds)}</div>
              <div className="text-sm text-gray-600">Seconds</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-2">
        {tabs.map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                activeTab === tab.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-white/20 text-gray-700 hover:bg-white/30'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          )
        })}
      </div>

      {/* Tab Content */}
      <div className="card-gradient rounded-3xl p-8 shadow-strong">
        {activeTab === 'age' && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Detailed Age Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white/50 rounded-xl p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <Clock className="h-5 w-5 text-primary-600" />
                    <h4 className="font-semibold text-gray-900">Time Breakdown</h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Total Hours:</span>
                      <span className="font-medium">{formatNumber(ageResult.totalHours)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Minutes:</span>
                      <span className="font-medium">{formatNumber(ageResult.totalMinutes)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Seconds:</span>
                      <span className="font-medium">{formatNumber(ageResult.totalSeconds)}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/50 rounded-xl p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <Calendar className="h-5 w-5 text-primary-600" />
                    <h4 className="font-semibold text-gray-900">Birthday Information</h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Next Birthday:</span>
                      <span className="font-medium">
                        {ageResult.nextBirthday ? new Date(ageResult.nextBirthday).toLocaleDateString() : 'N/A'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Days Until Birthday:</span>
                      <span className="font-medium">{ageResult.daysUntilBirthday || 0}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white/50 rounded-xl p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <Heart className="h-5 w-5 text-primary-600" />
                    <h4 className="font-semibold text-gray-900">Life Statistics</h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Total Weeks:</span>
                      <span className="font-medium">{formatNumber(ageResult.totalWeeks)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Age in Months:</span>
                      <span className="font-medium">{formatNumber(ageResult.totalMonths)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Leap Years:</span>
                      <span className="font-medium">{ageResult.leapYears || 0}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'calendars' && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Calendar Systems</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Globe className="h-6 w-6 text-primary-600" />
                  <h4 className="text-lg font-semibold text-gray-900">Gregorian Calendar</h4>
                </div>
                <p className="text-gray-700 text-sm mb-2">Standard international calendar</p>
                <p className="font-medium text-primary-600">{ageResult.gregorianDate}</p>
              </div>

              <div className="bg-white/50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Star className="h-6 w-6 text-secondary-600" />
                  <h4 className="text-lg font-semibold text-gray-900">Hebrew Calendar</h4>
                </div>
                <p className="text-gray-700 text-sm mb-2">Jewish calendar system</p>
                <p className="font-medium text-secondary-600">{ageResult.hebrewDate}</p>
              </div>

              <div className="bg-white/50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="h-6 w-6 text-accent-600" />
                  <h4 className="text-lg font-semibold text-gray-900">Chinese Calendar</h4>
                </div>
                <p className="text-gray-700 text-sm mb-2">Traditional Chinese calendar</p>
                <p className="font-medium text-accent-600">{ageResult.chineseDate}</p>
              </div>

              <div className="bg-white/50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Leaf className="h-6 w-6 text-bengali-600" />
                  <h4 className="text-lg font-semibold text-gray-900">Hindu Calendar</h4>
                </div>
                <p className="text-gray-700 text-sm mb-2">Traditional Hindu calendar</p>
                <p className="font-medium text-bengali-600">{ageResult.hinduDate}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'zodiac' && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Zodiac Information</h3>
            
            <div className="bg-white/50 rounded-xl p-8 text-center">
              <div className="space-y-4">
                <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                  <Star className="h-10 w-10 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    {ageResult.zodiacData?.name}
                  </h4>
                  <p className="text-gray-600 text-lg">
                    {ageResult.zodiacData?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'milestones' && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Life Milestones</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Age Milestones</h4>
                <div className="space-y-3">
                  {[
                    { age: 18, milestone: 'Legal Adult' },
                    { age: 21, milestone: 'Drinking Age (US)' },
                    { age: 25, milestone: 'Car Rental Age' },
                    { age: 30, milestone: 'Thirties' },
                    { age: 40, milestone: 'Forties' },
                    { age: 50, milestone: 'Half Century' },
                    { age: 65, milestone: 'Retirement Age' },
                    { age: 100, milestone: 'Century' }
                  ].map((milestone) => (
                    <div key={milestone.age} className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">{milestone.milestone}</span>
                      <span className={`text-sm font-medium ${
                        ageResult.years >= milestone.age ? 'text-green-600' : 'text-gray-400'
                      }`}>
                        {milestone.age} years
                        {ageResult.years >= milestone.age ? ' ✓' : ''}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Fun Facts</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Heart Beats:</span>
                    <span className="font-medium">~{formatNumber(ageResult.totalDays * 100000)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Breaths Taken:</span>
                    <span className="font-medium">~{formatNumber(ageResult.totalDays * 20000)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sleep Hours:</span>
                    <span className="font-medium">~{formatNumber(ageResult.totalDays * 8)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Meals Eaten:</span>
                    <span className="font-medium">~{formatNumber(ageResult.totalDays * 3)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
