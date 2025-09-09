'use client'

interface SchemaMarkupProps {
  locale: string
  pageType: 'home' | 'privacy'
  ageResult?: any
}

export default function SchemaMarkup({ locale, pageType, ageResult }: SchemaMarkupProps) {
  const isEnglish = locale === 'en'
  
  // Base organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": isEnglish ? "YEC - Youth Empowerment Center" : "যুব ক্ষমতায়ন কেন্দ্র - YEC",
    "url": "https://agecalculator.yec.org.bd",
    "logo": "https://agecalculator.yec.org.bd/YEC-logo.webp",
    "description": isEnglish 
      ? "Free online age calculator with multiple calendar systems, zodiac signs, and global compatibility"
      : "বিনামূল্যে অনলাইন বয়স ক্যালকুলেটর - ইসলামিক ও বাংলা ক্যালেন্ডার সহ",
    "sameAs": [
      "https://yec.org.bd"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": isEnglish ? "English" : "Bengali"
    }
  }

  // WebApplication schema for the calculator
  const webApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": isEnglish ? "Age Calculator" : "বয়স ক্যালকুলেটর",
    "url": `https://agecalculator.yec.org.bd/${locale}`,
    "description": isEnglish
      ? "Calculate age in years, months, weeks, days, hours, minutes, and seconds. Supports multiple calendar systems including Gregorian, Islamic, Hebrew, Chinese, and Hindu calendars. Free online tool with zodiac signs and life expectancy data."
      : "বছর, মাস, সপ্তাহ, দিন, ঘন্টা, মিনিট এবং সেকেন্ডে বয়স গণনা করুন। ইসলামিক, বাংলা এবং অন্যান্য ক্যালেন্ডার সিস্টেম সমর্থন করে। রাশিচক্র এবং জীবনকালের তথ্য সহ বিনামূল্যে অনলাইন সরঞ্জাম।",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": isEnglish ? [
      "Age calculation in multiple units",
      "Multiple calendar system support",
      "Zodiac sign calculation",
      "Life expectancy data",
      "Mobile responsive design",
      "Free to use",
      "No registration required"
    ] : [
      "বিভিন্ন এককে বয়স গণনা",
      "একাধিক ক্যালেন্ডার সিস্টেম সমর্থন",
      "রাশিচক্র চিহ্ন গণনা",
      "জীবনকালের তথ্য",
      "মোবাইল রেসপন্সিভ ডিজাইন",
      "বিনামূল্যে ব্যবহার",
      "নিবন্ধন প্রয়োজন নেই"
    ],
    "screenshot": "https://agecalculator.yec.org.bd/opengraph-image.png",
    "author": {
      "@type": "Organization",
      "name": isEnglish ? "YEC - Youth Empowerment Center" : "যুব ক্ষমতায়ন কেন্দ্র - YEC"
    }
  }

  // FAQ Schema for common questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": isEnglish ? [
      {
        "@type": "Question",
        "name": "How do I calculate my age?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Enter your birth date and optionally a target date. Our calculator will show your exact age in years, months, weeks, days, hours, minutes, and seconds."
        }
      },
      {
        "@type": "Question",
        "name": "What calendar systems are supported?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We support Gregorian, Islamic (Hijri), Hebrew, Chinese, and Hindu calendar systems for comprehensive age calculation across different cultures."
        }
      },
      {
        "@type": "Question",
        "name": "Is this age calculator free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our age calculator is completely free to use with no registration required. No hidden fees or premium features."
        }
      },
      {
        "@type": "Question",
        "name": "Can I calculate age for any date?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can calculate your age as of any specific date by entering both your birth date and the target date."
        }
      }
    ] : [
      {
        "@type": "Question",
        "name": "কিভাবে আমার বয়স গণনা করব?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "আপনার জন্ম তারিখ এবং ঐচ্ছিকভাবে একটি লক্ষ্য তারিখ লিখুন। আমাদের ক্যালকুলেটর আপনার সঠিক বয়স বছর, মাস, সপ্তাহ, দিন, ঘন্টা, মিনিট এবং সেকেন্ডে দেখাবে।"
        }
      },
      {
        "@type": "Question",
        "name": "কোন ক্যালেন্ডার সিস্টেম সমর্থিত?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "আমরা গ্রেগরিয়ান, ইসলামিক (হিজরি), হিব্রু, চীনা এবং হিন্দু ক্যালেন্ডার সিস্টেম সমর্থন করি বিভিন্ন সংস্কৃতিতে ব্যাপক বয়স গণনার জন্য।"
        }
      },
      {
        "@type": "Question",
        "name": "এই বয়স ক্যালকুলেটর কি বিনামূল্যে?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "হ্যাঁ, আমাদের বয়স ক্যালকুলেটর সম্পূর্ণ বিনামূল্যে ব্যবহার করা যায় এবং কোনো নিবন্ধনের প্রয়োজন নেই। কোনো গোপন ফি বা প্রিমিয়াম বৈশিষ্ট্য নেই।"
        }
      },
      {
        "@type": "Question",
        "name": "আমি কি যেকোনো তারিখের জন্য বয়স গণনা করতে পারি?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "হ্যাঁ, আপনি আপনার জন্ম তারিখ এবং লক্ষ্য তারিখ উভয় লিখে যেকোনো নির্দিষ্ট তারিখের জন্য আপনার বয়স গণনা করতে পারেন।"
        }
      }
    ]
  }

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": isEnglish ? "Home" : "হোম",
        "item": `https://agecalculator.yec.org.bd/${locale}`
      }
    ]
  }

  // Age calculation result schema (if ageResult is provided)
  const ageResultSchema = ageResult ? {
    "@context": "https://schema.org",
    "@type": "QuantitativeValue",
    "name": isEnglish ? "Calculated Age" : "গণনাকৃত বয়স",
    "value": ageResult.years,
    "unitText": isEnglish ? "years" : "বছর",
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": isEnglish ? "Months" : "মাস",
        "value": ageResult.months
      },
      {
        "@type": "PropertyValue",
        "name": isEnglish ? "Days" : "দিন",
        "value": ageResult.days
      },
      {
        "@type": "PropertyValue",
        "name": isEnglish ? "Total Days" : "মোট দিন",
        "value": ageResult.totalDays
      }
    ]
  } : null

  const schemas: any[] = [
    organizationSchema,
    webApplicationSchema,
    faqSchema,
    breadcrumbSchema
  ]

  if (ageResultSchema) {
    schemas.push(ageResultSchema)
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
