'use client'

import SchemaMarkup from './SchemaMarkup'
import SEOMetadata from './SEOMetadata'
import Breadcrumbs from './Breadcrumbs'

interface SEOHeadProps {
  locale: string
  pageType: 'home' | 'privacy'
  ageResult?: any
  breadcrumbItems?: Array<{
    name: string
    href: string
    current?: boolean
  }>
}

export default function SEOHead({ 
  locale, 
  pageType, 
  ageResult, 
  breadcrumbItems 
}: SEOHeadProps) {
  return (
    <>
      <SEOMetadata locale={locale} pageType={pageType} ageResult={ageResult} />
      <SchemaMarkup locale={locale} pageType={pageType} ageResult={ageResult} />
      <Breadcrumbs locale={locale} items={breadcrumbItems} />
    </>
  )
}
