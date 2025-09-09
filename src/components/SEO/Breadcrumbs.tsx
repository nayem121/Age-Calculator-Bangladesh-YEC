'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  name: string
  href: string
  current?: boolean
}

interface BreadcrumbsProps {
  locale: string
  items?: BreadcrumbItem[]
}

export default function Breadcrumbs({ locale, items = [] }: BreadcrumbsProps) {
  const isEnglish = locale === 'en'
  
  // Default breadcrumb items
  const defaultItems: BreadcrumbItem[] = [
    {
      name: isEnglish ? 'Home' : 'হোম',
      href: `/${locale}`,
      current: true
    }
  ]

  const breadcrumbItems = items.length > 0 ? items : defaultItems

  return (
    <nav 
      className="flex items-center space-x-2 text-sm text-white/90 mb-6" 
      aria-label={isEnglish ? 'Breadcrumb navigation' : 'ব্রেডক্রাম্ব নেভিগেশন'}
    >
      <ol className="flex items-center space-x-2">
        {breadcrumbItems.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="h-4 w-4 text-white/60 mx-2" aria-hidden="true" />
            )}
            
            {item.current ? (
              <span 
                className="text-white font-medium flex items-center"
                aria-current="page"
              >
                {index === 0 && <Home className="h-4 w-4 mr-1" aria-hidden="true" />}
                {item.name}
              </span>
            ) : (
              <Link 
                href={item.href}
                className="text-white/90 hover:text-white transition-colors flex items-center"
              >
                {index === 0 && <Home className="h-4 w-4 mr-1" aria-hidden="true" />}
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
