'use client'

interface SEOMetadataProps {
  locale: string
  pageType: 'home' | 'privacy'
  ageResult?: any
}

export default function SEOMetadata({ locale, pageType, ageResult }: SEOMetadataProps) {
  const isEnglish = locale === 'en'
  
  // Keywords for different markets
  const globalKeywords = [
    'age calculator', 'date of birth calculator', 'birthday calculator',
    'age in years', 'age in days', 'age in months', 'age in weeks',
    'age in hours', 'age in minutes', 'age in seconds', 'zodiac sign',
    'calendar converter', 'gregorian calendar', 'islamic calendar',
    'hebrew calendar', 'chinese calendar', 'hindu calendar',
    'life expectancy', 'free calculator', 'online calculator',
    'age calculation tool', 'birth date calculator', 'age finder',
    'age counter', 'age tracker', 'birthday countdown',
    'age calculator online', 'calculate age', 'how old am i',
    'age in different units', 'precise age calculator'
  ]

  const bengaliKeywords = [
    'বয়স ক্যালকুলেটর', 'জন্ম তারিখ ক্যালকুলেটর', 'বয়স বের করুন',
    'বছরে বয়স', 'দিনে বয়স', 'মাসে বয়স', 'সপ্তাহে বয়স',
    'ঘন্টায় বয়স', 'মিনিটে বয়স', 'সেকেন্ডে বয়স', 'রাশিচক্র',
    'ক্যালেন্ডার কনভার্টার', 'ইসলামিক ক্যালেন্ডার', 'বাংলা ক্যালেন্ডার',
    'হিজরি ক্যালেন্ডার', 'জীবনকাল', 'বিনামূল্যে ক্যালকুলেটর',
    'অনলাইন ক্যালকুলেটর', 'বয়স গণনা সরঞ্জাম', 'জন্ম তারিখ দিয়ে বয়স',
    'বয়স খুঁজুন', 'বয়স গণনা', 'কত বছর বয়স', 'বয়স কত',
    'সঠিক বয়স গণনা', 'বাংলাদেশ বয়স ক্যালকুলেটর'
  ]

  const keywords = isEnglish ? globalKeywords : bengaliKeywords

  // Meta descriptions
  const metaDescriptions = {
    home: {
      en: "Free online age calculator - Calculate your exact age in years, months, weeks, days, hours, minutes, and seconds. Supports multiple calendar systems including Islamic, Hebrew, Chinese, and Hindu calendars. Get zodiac signs and life expectancy data. No registration required!",
      bn: "বিনামূল্যে অনলাইন বয়স ক্যালকুলেটর - বছর, মাস, সপ্তাহ, দিন, ঘন্টা, মিনিট এবং সেকেন্ডে আপনার সঠিক বয়স গণনা করুন। ইসলামিক, হিব্রু, চীনা এবং হিন্দু ক্যালেন্ডার সহ একাধিক ক্যালেন্ডার সিস্টেম সমর্থন করে। রাশিচক্র এবং জীবনকালের তথ্য পান। নিবন্ধনের প্রয়োজন নেই!"
    },
    privacy: {
      en: "Privacy Policy for Age Calculator - Learn how we protect your data and privacy when using our free online age calculation tool. No personal data collection, secure and private.",
      bn: "বয়স ক্যালকুলেটরের গোপনীয়তা নীতি - আমাদের বিনামূল্যে অনলাইন বয়স গণনা সরঞ্জাম ব্যবহার করার সময় আমরা কীভাবে আপনার ডেটা এবং গোপনীয়তা রক্ষা করি তা জানুন। কোনো ব্যক্তিগত ডেটা সংগ্রহ নেই, নিরাপদ এবং গোপন।"
    }
  }

  const title = isEnglish 
    ? "Age Calculator - Free Online Age Calculation Tool | Calculate Age in Years, Months, Days"
    : "বয়স ক্যালকুলেটর - বিনামূল্যে অনলাইন বয়স গণনা সরঞ্জাম | বছর, মাস, দিনে বয়স গণনা করুন"

  const description = metaDescriptions[pageType][isEnglish ? 'en' : 'bn']

  return (
    <>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={isEnglish ? "YEC - Youth Empowerment Center" : "যুব ক্ষমতায়ন কেন্দ্র - YEC"} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Language and Locale */}
      <meta name="language" content={isEnglish ? "English" : "Bengali"} />
      <meta name="locale" content={isEnglish ? "en_US" : "bn_BD"} />
      <meta name="geo.region" content={isEnglish ? "WORLD" : "BD"} />
      <meta name="geo.country" content={isEnglish ? "WORLD" : "BD"} />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`https://agecalculator.yec.org.bd/${locale}`} />
      <meta property="og:site_name" content={isEnglish ? "Age Calculator" : "বয়স ক্যালকুলেটর"} />
      <meta property="og:image" content="https://agecalculator.yec.org.bd/opengraph-image.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={isEnglish ? "Age Calculator - Free Online Tool" : "বয়স ক্যালকুলেটর - বিনামূল্যে অনলাইন সরঞ্জাম"} />
      <meta property="og:locale" content={isEnglish ? "en_US" : "bn_BD"} />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://agecalculator.yec.org.bd/twitter-image.png" />
      <meta name="twitter:image:alt" content={isEnglish ? "Age Calculator - Free Online Tool" : "বয়স ক্যালকুলেটর - বিনামূল্যে অনলাইন সরঞ্জাম"} />
      
      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#3B82F6" />
      <meta name="msapplication-TileColor" content="#3B82F6" />
      <meta name="application-name" content={isEnglish ? "Age Calculator" : "বয়স ক্যালকুলেটর"} />
      <meta name="apple-mobile-web-app-title" content={isEnglish ? "Age Calculator" : "বয়স ক্যালকুলেটর"} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={`https://agecalculator.yec.org.bd/${locale}`} />
      
      {/* Alternate Language Versions */}
      <link rel="alternate" hrefLang="en" href="https://agecalculator.yec.org.bd/en" />
      <link rel="alternate" hrefLang="bn" href="https://agecalculator.yec.org.bd/bn" />
      <link rel="alternate" hrefLang="x-default" href="https://agecalculator.yec.org.bd/en" />
    </>
  )
}
