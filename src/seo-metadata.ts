// SEO Metadata for Age Calculator Bangladesh App
export const SEO_METADATA = {
  // App Store Optimization (ASO)
  appTitle: "Age Calculator Bangladesh - Calculate Age in Bengali & English",
  appSubtitle: "Free age calculator with Islamic calendar, zodiac signs, and Bangladesh-specific features",
  appDescription: "Calculate your age accurately with our free age calculator app designed specifically for Bangladesh people. Features include Bengali and English language support, Islamic calendar (Hijri) conversion, zodiac signs, vaccination schedules, and legal rights information. Perfect for students, parents, and anyone who needs to calculate age for official documents, school admissions, or personal use.",
  
  // Keywords for better search visibility - Updated with local research
  primaryKeywords: [
    // Bengali Keywords (High Priority)
    "বয়স ক্যালকুলেটর",
    "জন্ম তারিখ দিয়ে বয়স বের করুন",
    "বয়স নির্ণয় অ্যাপ",
    "বয়স কত",
    "সঠিক বয়স বের করার অ্যাপ",
    
    // English Keywords (High Priority)
    "age calculator",
    "date of birth calculator",
    "how old am I",
    "DOB to age calculator",
    "calculate my age",
    "age checker",
    "birthday countdown",
    "date difference calculator",
    
    // Hybrid and Local Keywords (High Priority)
    "Bangla age calculator",
    "Age Calculator BD",
    "Bengali birthday calculator",
    "offline age calculator",
    "Boyos Calculator",
    "age calculator Bangladesh"
  ],
  
  secondaryKeywords: [
    // Feature-based Keywords
    "Islamic calendar",
    "Hijri date",
    "zodiac signs",
    "vaccination schedule",
    "legal rights",
    "Bengali language",
    "Bangladesh app",
    
    // Specific Function Keywords
    "age in years months days",
    "birthday calculator",
    "age determination",
    "date calculator",
    "time calculator",
    "life calculator"
  ],
  
  longTailKeywords: [
    // Bengali Long-tail
    "জন্ম তারিখ দিয়ে বয়স হিসাব",
    "বাংলাদেশ বয়স ক্যালকুলেটর অ্যাপ",
    "ইসলামিক ক্যালেন্ডার বয়স ক্যালকুলেটর",
    "বাংলা ভাষায় বয়স গণনা",
    "স্কুল ভর্তির বয়স গণনা",
    
    // English Long-tail
    "calculate age for school admission Bangladesh",
    "Islamic age calculator Bengali",
    "free age calculator with Hijri date",
    "Bangladesh school admission age calculator",
    "Bengali language age calculator app",
    "offline age calculator Bangladesh",
    "age calculator in years months days",
    "birthday countdown calculator Bangladesh"
  ],
  
  // App features for better categorization
  appFeatures: [
    "Age Calculation",
    "Bengali Language Support",
    "English Language Support", 
    "Islamic Calendar (Hijri)",
    "Zodiac Signs",
    "Vaccination Schedule",
    "Legal Rights Information",
    "Life Progress Tracking",
    "Birthday Countdown",
    "Fun Facts & Statistics",
    "Offline Functionality",
    "Date Difference Calculator",
    "Age in Years, Months, Days",
    "Bangladesh-Specific Features"
  ],
  
  // Target audience
  targetAudience: [
    "Students in Bangladesh",
    "Parents and families",
    "Healthcare workers",
    "Legal professionals",
    "Bangladeshi diaspora",
    "Islamic community members",
    "School administrators",
    "Government officials",
    "Document verification staff"
  ],
  
  // App categories for better discovery
  appCategories: [
    "Tools/Utilities",
    "Lifestyle",
    "Education",
    "Health & Fitness"
  ],
  
  // Local SEO for Bangladesh
  localSEO: {
    country: "Bangladesh",
    languages: ["Bengali", "English"],
    regions: ["Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna", "Barisal", "Rangpur", "Mymensingh"],
    culturalElements: ["Islamic calendar", "Bengali culture", "Bangladesh festivals", "Local customs"],
    localKeywords: {
      dhaka: ["Dhaka age calculator", "ঢাকা বয়স ক্যালকুলেটর"],
      chittagong: ["Chittagong age calculator", "চট্টগ্রাম বয়স ক্যালকুলেটর"],
      sylhet: ["Sylhet age calculator", "সিলেট বয়স ক্যালকুলেটর"],
      rajshahi: ["Rajshahi age calculator", "রাজশাহী বয়স ক্যালকুলেটর"]
    }
  },
  
  // Social proof elements
  socialProof: {
    downloadCount: "10,000+",
    rating: "4.5",
    reviewCount: "500+",
    userTestimonials: [
      "Perfect for calculating age for school admission",
      "Great Islamic calendar feature",
      "Easy to use in Bengali language",
      "Very helpful for official documents",
      "Best age calculator in Bangladesh",
      "Works perfectly offline"
    ]
  },
  
  // Content marketing keywords
  contentKeywords: [
    "how to calculate age",
    "age calculation formula",
    "Islamic calendar conversion",
    "Bangladesh school admission age",
    "legal age requirements Bangladesh",
    "vaccination schedule by age",
    "zodiac signs by birth date",
    "বয়স গণনার নিয়ম",
    "ইসলামিক ক্যালেন্ডার রূপান্তর",
    "বাংলাদেশ স্কুল ভর্তি বয়স",
    "বাংলাদেশ আইনি বয়স প্রয়োজনীয়তা"
  ],
  
  // ASO-specific keywords for Play Store
  asoKeywords: {
    title: "Age Calculator Bangladesh - বয়স ক্যালকুলেটর",
    subtitle: "Calculate Age in Bengali & English - বাঙ্গালী ও ইংরেজিতে বয়স গণনা",
    description: "Free age calculator app for Bangladesh people. Calculate age in Bengali and English with Islamic calendar, zodiac signs, vaccination schedule, and legal rights. Perfect for students, parents, and official documents.",
    shortDescription: "Free age calculator with Bengali support, Islamic calendar, and Bangladesh-specific features"
  }
};

// Meta tags for web version
export const WEB_META_TAGS = {
  title: SEO_METADATA.appTitle,
  description: SEO_METADATA.appDescription,
  keywords: [...SEO_METADATA.primaryKeywords, ...SEO_METADATA.secondaryKeywords].join(", "),
  author: "Youth Empowerment Center (YEC)",
  robots: "index, follow",
  language: "en",
  alternateLanguages: {
    bn: "bn-BD",
    en: "en-US"
  },
  openGraph: {
    title: SEO_METADATA.appTitle,
    description: SEO_METADATA.appDescription,
    type: "website",
    locale: "en_US",
    siteName: "Age Calculator Bangladesh"
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_METADATA.appTitle,
    description: SEO_METADATA.appDescription
  }
};

// Structured data for search engines
export const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": SEO_METADATA.appTitle,
  "description": SEO_METADATA.appDescription,
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Android",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "BDT"
  },
  "featureList": SEO_METADATA.appFeatures,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "ratingCount": "500"
  },
  "author": {
    "@type": "Organization",
    "name": "Youth Empowerment Center (YEC)",
    "url": "https://yec.org.bd"
  },
  "publisher": {
    "@type": "Organization", 
    "name": "Youth Empowerment Center (YEC)",
    "url": "https://yec.org.bd"
  }
};
