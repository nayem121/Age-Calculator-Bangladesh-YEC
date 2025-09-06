'use client'

import { useState } from 'react'
import { Smartphone, Download, X, ExternalLink } from 'lucide-react'

interface AndroidAppBannerProps {
  locale: string
}

export default function AndroidAppBanner({ locale }: AndroidAppBannerProps) {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <aside 
      className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4 rounded-2xl shadow-lg mb-6 animate-slide-up"
      role="complementary"
      aria-label={locale === 'bn' ? 'অ্যান্ড্রয়েড অ্যাপ ডাউনলোডের বিজ্ঞাপন' : 'Android app download advertisement'}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="bg-white/20 p-3 rounded-xl" aria-hidden="true">
            <Smartphone className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold">
              {locale === 'bn' 
                ? 'অ্যান্ড্রয়েড অ্যাপ ডাউনলোড করুন' 
                : 'Download Our Android App'
              }
            </h3>
            <p className="text-sm opacity-90">
              {locale === 'bn' 
                ? 'অফলাইন ব্যবহারের জন্য আমাদের অ্যান্ড্রয়েড অ্যাপটি ডাউনলোড করুন'
                : 'Download our Android app for offline usage and better experience'
              }
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <a
            href="https://play.google.com/store/apps/details?id=com.yec.agecalculatorbangladesh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-white text-green-700 hover:bg-green-50 px-4 py-2 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label={locale === 'bn' ? 'Google Play Store থেকে অ্যান্ড্রয়েড অ্যাপ ডাউনলোড করুন' : 'Download Android app from Google Play Store'}
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            <span>{locale === 'bn' ? 'ডাউনলোড' : 'Download'}</span>
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
          
          <button
            onClick={() => setIsVisible(false)}
            className="text-white/80 hover:text-white transition-colors p-1 focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
            aria-label={locale === 'bn' ? 'ব্যানার বন্ধ করুন' : 'Close banner'}
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </aside>
  )
}
