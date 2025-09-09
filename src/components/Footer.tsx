'use client'

import { useTranslations } from 'next-intl'
import { ExternalLink } from 'lucide-react'

interface FooterProps {
  locale: string
}

export default function Footer({ locale }: FooterProps) {
  const t = useTranslations()

  return (
    <footer className="bg-white/10 backdrop-blur-md border-t border-white/20 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* YEC Logo and Info */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              {/* Bangladesh Flag - Only show on Bengali pages */}
              {locale === 'bn' && (
                <div className="w-12 h-8 bg-green-600 rounded flex items-center justify-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                </div>
              )}
              
              {/* YEC Logo Placeholder */}
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">YEC</span>
              </div>
            </div>
            
            <div className="text-white">
              <p className="font-semibold">
                {locale === 'bn' 
                  ? 'সৌজন্যে যুব ক্ষমতায়ন কেন্দ্র - YEC'
                  : 'Powered by Youth Empowerment Center - YEC'
                }
              </p>
              <p className="text-sm text-white/95">
                {locale === 'bn' 
                  ? 'বাংলাদেশের যুবদের জন্য প্রযুক্তি সমাধান'
                  : 'Technology Solutions for Youth'
                }
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <a
              href="https://yec.org.bd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-white/90 transition-colors"
            >
              <span>YEC Website</span>
              <ExternalLink className="h-4 w-4" />
            </a>
            
            <a
              href={`/${locale}/privacy-policy`}
              className="text-white hover:text-white/90 transition-colors"
            >
              {locale === 'bn' ? 'গোপনীয়তা নীতি' : 'Privacy Policy'}
            </a>
            
            <a
              href="https://agecalculator.yec.org.bd"
              className="text-white hover:text-white/90 transition-colors"
            >
              Age Calculator
            </a>
            
            {/* Android App Promotion */}
            <a
              href="https://play.google.com/store/apps/details?id=com.yec.agecalculatorbangladesh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-700 hover:bg-green-800 focus:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 focus:ring-offset-transparent px-4 py-2 rounded-lg transition-colors"
              aria-label={locale === 'bn' ? 'Google Play Store থেকে অ্যান্ড্রয়েড অ্যাপ ডাউনলোড করুন' : 'Download Android app from Google Play Store'}
            >
              <span className="text-white font-semibold">
                {locale === 'bn' ? 'অ্যান্ড্রয়েড অ্যাপ ডাউনলোড করুন' : 'Download Android App'}
              </span>
              <ExternalLink className="h-4 w-4 text-white" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-white/20 text-center">
          <p className="text-white/90 text-sm">
            © 2025 Youth Empowerment Center (YEC). All rights reserved.
          </p>
          <p className="text-white/85 text-xs mt-2">
            {locale === 'bn' 
              ? 'এই ওয়েবসাইটটি বাংলাদেশের নাগরিকদের জন্য বিনামূল্যে বয়স গণনার সুবিধা প্রদান করে'
              : 'This website provides free age calculation services'
            }
          </p>
        </div>
      </div>
    </footer>
  )
}
