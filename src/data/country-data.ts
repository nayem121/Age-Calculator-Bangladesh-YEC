interface LegalInfo {
  [key: string]: {
    en: string
    bn: string
    constitutionalReference?: {
      en: string
      bn: string
    }
  }
}

interface CountryData {
  name: string
  nameEn: string
  flagUrl: string
  lifeExpectancy: number
  legalInfo: (age: number) => LegalInfo
  vaccinationSchedule: (weeks: number, years: number) => { 
    en: string; 
    bn: string; 
    age: string;
    status: 'completed' | 'due' | 'upcoming' | 'overdue';
    priority: 'high' | 'medium' | 'low';
    guidance: { en: string; bn: string };
    category?: 'mandatory' | 'recommended' | 'emergency';
  }[]
}

export const bangladeshData: CountryData = {
  name: "বাংলাদেশ",
  nameEn: "Bangladesh",
  flagUrl: "/images/bangladesh-flag.svg",
  lifeExpectancy: 74,
  legalInfo: (age: number): LegalInfo => {
    const info: LegalInfo = {}

    // Citizenship & Basic Rights
    if (age >= 0) {
      info.citizenship = {
        en: "Every person born in Bangladesh is a citizen by birth. Basic rights like freedom of speech, assembly, and religion are guaranteed by the constitution.",
        bn: "বাংলাদেশে জন্মগ্রহণকারী প্রতিটি ব্যক্তি জন্মসূত্রে নাগরিক। বাক স্বাধীনতা, সমাবেশ এবং ধর্মের স্বাধীনতার মতো মৌলিক অধিকার সংবিধান দ্বারা নিশ্চিত করা হয়েছে।",
        constitutionalReference: {
          en: "Constitution of Bangladesh: Article 6 (Citizenship), Article 27 (Equality before law), Article 39 (Freedom of thought, conscience and speech), Article 37 (Freedom of assembly), Article 41 (Freedom of religion)",
          bn: "বাংলাদেশের সংবিধান: অনুচ্ছেদ ৬ (নাগরিকত্ব), অনুচ্ছেদ ২৭ (আইনের দৃষ্টিতে সমতা), অনুচ্ছেদ ৩৯ (চিন্তা, বিবেক ও বাক স্বাধীনতা), অনুচ্ছেদ ৩৭ (সমাবেশের স্বাধীনতা), অনুচ্ছেদ ৪১ (ধর্মীয় স্বাধীনতা)"
        }
      }
    }

    // Inheritance Information
    if (age >= 0) {
      info.inheritance = {
        en: "Inheritance laws in Bangladesh are primarily based on religious personal laws (e.g., Muslim, Hindu, Christian laws).",
        bn: "বাংলাদেশে উত্তরাধিকার আইন প্রধানত ধর্মীয় ব্যক্তিগত আইনের (যেমন মুসলিম, হিন্দু, খ্রিস্টান আইন) উপর ভিত্তি করে।",
        constitutionalReference: {
          en: "Constitution of Bangladesh: Article 8 (Fundamental principles), Article 27 (Equality before law), Article 28 (Discrimination on grounds of religion, race, caste, sex or place of birth)",
          bn: "বাংলাদেশের সংবিধান: অনুচ্ছেদ ৮ (মৌলিক নীতি), অনুচ্ছেদ ২৭ (আইনের দৃষ্টিতে সমতা), অনুচ্ছেদ ২৮ (ধর্ম, বর্ণ, জাত, লিঙ্গ বা জন্মস্থানের কারণে বৈষম্য)"
        }
      }
    }

    // ID Documents
    if (age >= 18) {
      info.idDocuments = {
        en: "National ID Card (NID) is mandatory for citizens aged 18 and above. Birth registration is required for all ages.",
        bn: "১৮ বছর বা তার বেশি বয়সী নাগরিকদের জন্য জাতীয় পরিচয়পত্র (NID) বাধ্যতামূলক। সকল বয়সের জন্য জন্ম নিবন্ধন প্রয়োজন।",
        constitutionalReference: {
          en: "Constitution of Bangladesh: Article 6 (Citizenship), Article 27 (Equality before law), National Identity Registration Act 2010",
          bn: "বাংলাদেশের সংবিধান: অনুচ্ছেদ ৬ (নাগরিকত্ব), অনুচ্ছেদ ২৭ (আইনের দৃষ্টিতে সমতা), জাতীয় পরিচয় নিবন্ধন আইন ২০১০"
        }
      }
    } else if (age >= 0) {
      info.idDocuments = {
        en: "Birth registration is required for all ages.",
        bn: "সকল বয়সের জন্য জন্ম নিবন্ধন প্রয়োজন।",
        constitutionalReference: {
          en: "Constitution of Bangladesh: Article 6 (Citizenship), Birth and Death Registration Act 2004",
          bn: "বাংলাদেশের সংবিধান: অনুচ্ছেদ ৬ (নাগরিকত্ব), জন্ম ও মৃত্যু নিবন্ধন আইন ২০০৪"
        }
      }
    }

    // Financial & Property Rights
    if (age >= 18) {
      info.financial = {
        en: "Can open bank accounts, own property, enter into contracts, and take loans. Can also be held financially liable.",
        bn: "ব্যাংক অ্যাকাউন্ট খুলতে, সম্পত্তি মালিক হতে, চুক্তি করতে এবং ঋণ নিতে পারে। আর্থিকভাবে দায়বদ্ধও হতে পারে।",
        constitutionalReference: {
          en: "Constitution of Bangladesh: Article 42 (Right to property), Article 27 (Equality before law), Contract Act 1872, Transfer of Property Act 1882",
          bn: "বাংলাদেশের সংবিধান: অনুচ্ছেদ ৪২ (সম্পত্তির অধিকার), অনুচ্ছেদ ২৭ (আইনের দৃষ্টিতে সমতা), চুক্তি আইন ১৮৭২, সম্পত্তি হস্তান্তর আইন ১৮৮২"
        }
      }
    }

    // Marriage & Family Law
    if (age >= 21) {
      info.marriage = {
        en: "Minimum legal age for marriage is 21 for males and 18 for females. Laws vary based on religion.",
        bn: "বিবাহের জন্য সর্বনিম্ন আইনি বয়স পুরুষদের জন্য ২১ বছর এবং মহিলাদের জন্য ১৮ বছর। আইন ধর্ম অনুযায়ী ভিন্ন হয়।",
        constitutionalReference: {
          en: "Constitution of Bangladesh: Article 8 (Fundamental principles), Article 27 (Equality before law), Child Marriage Restraint Act 2017, Muslim Family Laws Ordinance 1961",
          bn: "বাংলাদেশের সংবিধান: অনুচ্ছেদ ৮ (মৌলিক নীতি), অনুচ্ছেদ ২৭ (আইনের দৃষ্টিতে সমতা), শিশু বিবাহ নিরোধ আইন ২০১৭, মুসলিম পারিবারিক আইন অধ্যাদেশ ১৯৬১"
        }
      }
    } else if (age >= 18) {
      info.marriage = {
        en: "Minimum legal age for marriage is 18 for females. Laws vary based on religion.",
        bn: "বিবাহের জন্য সর্বনিম্ন আইনি বয়স মহিলাদের জন্য ১৮ বছর। আইন ধর্ম অনুযায়ী ভিন্ন হয়।",
        constitutionalReference: {
          en: "Constitution of Bangladesh: Article 8 (Fundamental principles), Article 27 (Equality before law), Child Marriage Restraint Act 2017, Muslim Family Laws Ordinance 1961",
          bn: "বাংলাদেশের সংবিধান: অনুচ্ছেদ ৮ (মৌলিক নীতি), অনুচ্ছেদ ২৭ (আইনের দৃষ্টিতে সমতা), শিশু বিবাহ নিরোধ আইন ২০১৭, মুসলিম পারিবারিক আইন অধ্যাদেশ ১৯৬১"
        }
      }
    }

    // Voting Rights
    if (age >= 18) {
      info.voting = {
        en: "Eligible to vote in national and local elections.",
        bn: "জাতীয় ও স্থানীয় নির্বাচনে ভোট দেওয়ার যোগ্য।",
        constitutionalReference: {
          en: "Constitution of Bangladesh: Article 122 (Qualifications for election to Parliament), Article 27 (Equality before law), Representation of the People Order 1972",
          bn: "বাংলাদেশের সংবিধান: অনুচ্ছেদ ১২২ (সংসদে নির্বাচনের যোগ্যতা), অনুচ্ছেদ ২৭ (আইনের দৃষ্টিতে সমতা), জনপ্রতিনিধিত্ব আদেশ ১৯৭২"
        }
      }
    }

    // Business & Licenses
    if (age >= 18) {
      info.business = {
        en: "Can obtain trade licenses and register businesses.",
        bn: "ট্রেড লাইসেন্স এবং ব্যবসা নিবন্ধন করতে পারে।",
        constitutionalReference: {
          en: "Constitution of Bangladesh: Article 40 (Freedom of profession, occupation or business), Article 27 (Equality before law), Trade Organization Act 1961",
          bn: "বাংলাদেশের সংবিধান: অনুচ্ছেদ ৪০ (পেশা, বৃত্তি বা ব্যবসার স্বাধীনতা), অনুচ্ছেদ ২৭ (আইনের দৃষ্টিতে সমতা), বাণিজ্য সংগঠন আইন ১৯৬১"
        }
      }
    }

    // Driving
    if (age >= 18) {
      info.driving = {
        en: "Eligible for a driving license for private vehicles. Commercial vehicle licenses require higher age.",
        bn: "ব্যক্তিগত গাড়ির জন্য ড্রাইভিং লাইসেন্সের যোগ্য। বাণিজ্যিক গাড়ির লাইসেন্সের জন্য উচ্চতর বয়স প্রয়োজন।",
        constitutionalReference: {
          en: "Constitution of Bangladesh: Article 40 (Freedom of profession, occupation or business), Motor Vehicles Ordinance 1983",
          bn: "বাংলাদেশের সংবিধান: অনুচ্ছেদ ৪০ (পেশা, বৃত্তি বা ব্যবসার স্বাধীনতা), মোটর যানবাহন অধ্যাদেশ ১৯৮৩"
        }
      }
    }

    // Alcohol
    if (age >= 21) {
      info.alcohol = {
        en: "Legal age for alcohol consumption and purchase (for non-Muslims and specific licensed premises).",
        bn: "মদ পান এবং কেনার আইনি বয়স (অমুসলিম এবং নির্দিষ্ট লাইসেন্সপ্রাপ্ত প্রতিষ্ঠানের জন্য)।",
        constitutionalReference: {
          en: "Constitution of Bangladesh: Article 41 (Freedom of religion), Article 27 (Equality before law), Intoxicating Substances Act 1990",
          bn: "বাংলাদেশের সংবিধান: অনুচ্ছেদ ৪১ (ধর্মীয় স্বাধীনতা), অনুচ্ছেদ ২৭ (আইনের দৃষ্টিতে সমতা), মাদকদ্রব্য আইন ১৯৯০"
        }
      }
    }

    // Tobacco
    if (age >= 18) {
      info.tobacco = {
        en: "Legal age for tobacco consumption and purchase.",
        bn: "তামাক সেবন এবং কেনার আইনি বয়স।",
        constitutionalReference: {
          en: "Constitution of Bangladesh: Article 15 (Fundamental responsibility of the State), Smoking and Tobacco Products Usage (Control) Act 2005",
          bn: "বাংলাদেশের সংবিধান: অনুচ্ছেদ ১৫ (রাষ্ট্রের মৌলিক দায়িত্ব), ধূমপান ও তামাকজাত দ্রব্য ব্যবহার (নিয়ন্ত্রণ) আইন ২০০৫"
        }
      }
    }

    // Professional Licenses
    if (age >= 18) {
      info.professionalLicenses = {
        en: "Can apply for various professional licenses (e.g., medical, engineering) upon meeting educational and other requirements.",
        bn: "শিক্ষাগত এবং অন্যান্য প্রয়োজনীয়তা পূরণ সাপেক্ষে বিভিন্ন পেশাদার লাইসেন্সের (যেমন চিকিৎসা, প্রকৌশল) জন্য আবেদন করতে পারে।",
        constitutionalReference: {
          en: "Constitution of Bangladesh: Article 40 (Freedom of profession, occupation or business), Article 27 (Equality before law), Bangladesh Medical and Dental Council Act 2010",
          bn: "বাংলাদেশের সংবিধান: অনুচ্ছেদ ৪০ (পেশা, বৃত্তি বা ব্যবসার স্বাধীনতা), অনুচ্ছেদ ২৭ (আইনের দৃষ্টিতে সমতা), বাংলাদেশ মেডিকেল ও ডেন্টাল কাউন্সিল আইন ২০১০"
        }
      }
    }

    // Educational Rights
    if (age >= 0) {
      info.education = {
        en: "Right to free and compulsory primary education up to class five. Access to higher education based on merit.",
        bn: "পঞ্চম শ্রেণী পর্যন্ত বিনামূল্যে ও বাধ্যতামূলক প্রাথমিক শিক্ষার অধিকার। মেধার ভিত্তিতে উচ্চশিক্ষার সুযোগ।",
        constitutionalReference: {
          en: "Constitution of Bangladesh: Article 17 (Free and compulsory education), Article 27 (Equality before law), Primary Education (Compulsory) Act 1990",
          bn: "বাংলাদেশের সংবিধান: অনুচ্ছেদ ১৭ (বিনামূল্যে ও বাধ্যতামূলক শিক্ষা), অনুচ্ছেদ ২৭ (আইনের দৃষ্টিতে সমতা), প্রাথমিক শিক্ষা (বাধ্যতামূলক) আইন ১৯৯০"
        }
      }
    }

    // Political Rights
    if (age >= 18) {
      info.political = {
        en: "Can participate in political activities, form associations, and stand for elections (subject to other qualifications).",
        bn: "রাজনৈতিক কার্যক্রমে অংশগ্রহণ করতে, সমিতি গঠন করতে এবং নির্বাচনে দাঁড়াতে পারে (অন্যান্য যোগ্যতা সাপেক্ষে)।",
        constitutionalReference: {
          en: "Constitution of Bangladesh: Article 38 (Freedom of association), Article 122 (Qualifications for election to Parliament), Article 27 (Equality before law)",
          bn: "বাংলাদেশের সংবিধান: অনুচ্ছেদ ৩৮ (সংগঠনের স্বাধীনতা), অনুচ্ছেদ ১২২ (সংসদে নির্বাচনের যোগ্যতা), অনুচ্ছেদ ২৭ (আইনের দৃষ্টিতে সমতা)"
        }
      }
    }

    // Retirement
    if (age >= 59) {
      info.retirement = {
        en: "General retirement age for government employees is 59 years (can vary for specific professions).",
        bn: "সরকারি কর্মচারীদের জন্য সাধারণ অবসরের বয়স ৫৯ বছর (নির্দিষ্ট পেশার জন্য ভিন্ন হতে পারে)।",
        constitutionalReference: {
          en: "Constitution of Bangladesh: Article 27 (Equality before law), Government Servants (Retirement) Act 1974, Public Service Commission Rules",
          bn: "বাংলাদেশের সংবিধান: অনুচ্ছেদ ২৭ (আইনের দৃষ্টিতে সমতা), সরকারি কর্মচারী (অবসর) আইন ১৯৭৪, সরকারি কর্ম কমিশন বিধিমালা"
        }
      }
    }

    // Employment
    if (age >= 18) {
      info.employment = {
        en: "Can enter into full-time employment contracts. Child labor laws prohibit employment below 14 years.",
        bn: "পূর্ণকালীন কর্মসংস্থান চুক্তিতে প্রবেশ করতে পারে। ১৪ বছরের নিচে শিশুদের শ্রম আইন দ্বারা নিষিদ্ধ।",
        constitutionalReference: {
          en: "Constitution of Bangladesh: Article 40 (Freedom of profession, occupation or business), Article 27 (Equality before law), Labour Act 2006",
          bn: "বাংলাদেশের সংবিধান: অনুচ্ছেদ ৪০ (পেশা, বৃত্তি বা ব্যবসার স্বাধীনতা), অনুচ্ছেদ ২৭ (আইনের দৃষ্টিতে সমতা), শ্রম আইন ২০০৬"
        }
      }
    } else if (age >= 14) {
      info.employment = {
        en: "Can engage in light work that does not harm health or education, with restrictions.",
        bn: "স্বাস্থ্য বা শিক্ষার ক্ষতি করে না এমন হালকা কাজ করতে পারে, তবে বিধিনিষেধ সহ।",
        constitutionalReference: {
          en: "Constitution of Bangladesh: Article 17 (Free and compulsory education), Article 15 (Fundamental responsibility of the State), Labour Act 2006",
          bn: "বাংলাদেশের সংবিধান: অনুচ্ছেদ ১৭ (বিনামূল্যে ও বাধ্যতামূলক শিক্ষা), অনুচ্ছেদ ১৫ (রাষ্ট্রের মৌলিক দায়িত্ব), শ্রম আইন ২০০৬"
        }
      }
    }

    // Military
    if (age >= 18) {
      info.military = {
        en: "Eligible to join the armed forces (Army, Navy, Air Force) as a general recruit, subject to physical and educational qualifications.",
        bn: "শারীরিক ও শিক্ষাগত যোগ্যতা সাপেক্ষে সাধারণ নিয়োগ হিসাবে সশস্ত্র বাহিনীতে (সেনাবাহিনী, নৌবাহিনী, বিমান বাহিনী) যোগদানের যোগ্য।",
        constitutionalReference: {
          en: "Constitution of Bangladesh: Article 61 (Supreme command of the armed forces), Article 27 (Equality before law), Army Act 1952",
          bn: "বাংলাদেশের সংবিধান: অনুচ্ছেদ ৬১ (সশস্ত্র বাহিনীর সর্বাধিনায়কত্ব), অনুচ্ছেদ ২৭ (আইনের দৃষ্টিতে সমতা), সেনা আইন ১৯৫২"
        }
      }
    }

    // Medical Consent
    if (age >= 18) {
      info.medical = {
        en: "Can provide consent for medical treatment and procedures.",
        bn: "চিকিৎসা এবং পদ্ধতির জন্য সম্মতি দিতে পারে।",
        constitutionalReference: {
          en: "Constitution of Bangladesh: Article 15 (Fundamental responsibility of the State), Article 27 (Equality before law), Medical Practice and Private Clinics and Laboratories (Regulation) Ordinance 1982",
          bn: "বাংলাদেশের সংবিধান: অনুচ্ছেদ ১৫ (রাষ্ট্রের মৌলিক দায়িত্ব), অনুচ্ছেদ ২৭ (আইনের দৃষ্টিতে সমতা), চিকিৎসা অনুশীলন ও বেসরকারি ক্লিনিক ও পরীক্ষাগার (নিয়ন্ত্রণ) অধ্যাদেশ ১৯৮২"
        }
      }
    } else if (age >= 12) {
      info.medical = {
        en: "Minors aged 12 and above may provide consent for certain medical treatments, especially related to their own health, but parental consent is often still required for major procedures.",
        bn: "১২ বছর বা তার বেশি বয়সী অপ্রাপ্তবয়স্করা নির্দিষ্ট চিকিৎসার জন্য সম্মতি দিতে পারে, বিশেষ করে তাদের নিজস্ব স্বাস্থ্য সম্পর্কিত, তবে বড় পদ্ধতির জন্য প্রায়শই পিতামাতার সম্মতি এখনও প্রয়োজন।",
        constitutionalReference: {
          en: "Constitution of Bangladesh: Article 15 (Fundamental responsibility of the State), Article 17 (Free and compulsory education), Medical Practice and Private Clinics and Laboratories (Regulation) Ordinance 1982",
          bn: "বাংলাদেশের সংবিধান: অনুচ্ছেদ ১৫ (রাষ্ট্রের মৌলিক দায়িত্ব), অনুচ্ছেদ ১৭ (বিনামূল্যে ও বাধ্যতামূলক শিক্ষা), চিকিৎসা অনুশীলন ও বেসরকারি ক্লিনিক ও পরীক্ষাগার (নিয়ন্ত্রণ) অধ্যাদেশ ১৯৮২"
        }
      }
    }

    // Contracts
    if (age >= 18) {
      info.contracts = {
        en: "Can legally enter into contracts and agreements.",
        bn: "আইনত চুক্তি এবং চুক্তিতে প্রবেশ করতে পারে।",
        constitutionalReference: {
          en: "Constitution of Bangladesh: Article 27 (Equality before law), Article 42 (Right to property), Contract Act 1872",
          bn: "বাংলাদেশের সংবিধান: অনুচ্ছেদ ২৭ (আইনের দৃষ্টিতে সমতা), অনুচ্ছেদ ৪২ (সম্পত্তির অধিকার), চুক্তি আইন ১৮৭২"
        }
      }
    }

    // Criminal Responsibility
    if (age >= 9) {
      info.criminalResponsibility = {
        en: "A child aged 9 or above can be held criminally responsible if they have attained sufficient maturity of understanding to judge the nature and consequences of their conduct.",
        bn: "৯ বছর বা তার বেশি বয়সী একটি শিশু যদি তার আচরণের প্রকৃতি এবং পরিণতি বিচার করার জন্য পর্যাপ্ত পরিপক্কতা অর্জন করে তবে তাকে ফৌজদারিভাবে দায়ী করা যেতে পারে।",
        constitutionalReference: {
          en: "Constitution of Bangladesh: Article 27 (Equality before law), Article 35 (Protection in respect of trial and punishment), Penal Code 1860, Children Act 2013",
          bn: "বাংলাদেশের সংবিধান: অনুচ্ছেদ ২৭ (আইনের দৃষ্টিতে সমতা), অনুচ্ছেদ ৩৫ (বিচার ও শাস্তি সম্পর্কে সুরক্ষা), দণ্ডবিধি ১৮৬০, শিশু আইন ২০১৩"
        }
      }
    } else if (age >= 7) {
      info.criminalResponsibility = {
        en: "A child under 9 years of age is generally presumed to be incapable of committing an offense. However, a child between 7 and 9 years may be held responsible if they have attained sufficient maturity of understanding.",
        bn: "৯ বছরের কম বয়সী একটি শিশুকে সাধারণত অপরাধ করতে অক্ষম বলে ধরে নেওয়া হয়। তবে, ৭ থেকে ৯ বছরের মধ্যে একটি শিশু যদি পর্যাপ্ত পরিপক্কতা অর্জন করে তবে তাকে দায়ী করা যেতে পারে।",
        constitutionalReference: {
          en: "Constitution of Bangladesh: Article 27 (Equality before law), Article 35 (Protection in respect of trial and punishment), Penal Code 1860, Children Act 2013",
          bn: "বাংলাদেশের সংবিধান: অনুচ্ছেদ ২৭ (আইনের দৃষ্টিতে সমতা), অনুচ্ছেদ ৩৫ (বিচার ও শাস্তি সম্পর্কে সুরক্ষা), দণ্ডবিধি ১৮৬০, শিশু আইন ২০১৩"
        }
      }
    }

    // Special Rights & Benefits (e.g., for elderly, disabled)
    if (age >= 60) {
      info.specialRights = {
        en: "Elderly citizens may be eligible for various social safety net programs and benefits.",
        bn: "বয়স্ক নাগরিকরা বিভিন্ন সামাজিক নিরাপত্তা বেষ্টনী কর্মসূচী এবং সুবিধার জন্য যোগ্য হতে পারে।",
        constitutionalReference: {
          en: "Constitution of Bangladesh: Article 15 (Fundamental responsibility of the State), Article 27 (Equality before law), Social Safety Net Programs Act 2018",
          bn: "বাংলাদেশের সংবিধান: অনুচ্ছেদ ১৫ (রাষ্ট্রের মৌলিক দায়িত্ব), অনুচ্ছেদ ২৭ (আইনের দৃষ্টিতে সমতা), সামাজিক নিরাপত্তা বেষ্টনী কর্মসূচী আইন ২০১৮"
        }
      }
    }

    // Legal Aid & Justice
    if (age >= 0) {
      info.legalAssistance = {
        en: "Access to legal aid services for indigent persons is available through the National Legal Aid Services Organization.",
        bn: "জাতীয় আইনগত সহায়তা প্রদান সংস্থা-এর মাধ্যমে দরিদ্র ব্যক্তিদের জন্য আইনি সহায়তা পরিষেবা উপলব্ধ।",
        constitutionalReference: {
          en: "Constitution of Bangladesh: Article 27 (Equality before law), Article 35 (Protection in respect of trial and punishment), Legal Aid Services Act 2000",
          bn: "বাংলাদেশের সংবিধান: অনুচ্ছেদ ২৭ (আইনের দৃষ্টিতে সমতা), অনুচ্ছেদ ৩৫ (বিচার ও শাস্তি সম্পর্কে সুরক্ষা), আইনগত সহায়তা পরিষেবা আইন ২০০০"
        }
      }
    }

    // Healthcare Rights
    if (age >= 0) {
      info.healthcare = {
        en: "Right to health services, including access to public hospitals and health centers.",
        bn: "সরকারি হাসপাতাল ও স্বাস্থ্য কেন্দ্র সহ স্বাস্থ্য পরিষেবা পাওয়ার অধিকার।",
        constitutionalReference: {
          en: "Constitution of Bangladesh: Article 15 (Fundamental responsibility of the State), Article 27 (Equality before law), Article 18 (Public health and morality)",
          bn: "বাংলাদেশের সংবিধান: অনুচ্ছেদ ১৫ (রাষ্ট্রের মৌলিক দায়িত্ব), অনুচ্ছেদ ২৭ (আইনের দৃষ্টিতে সমতা), অনুচ্ছেদ ১৮ (জনস্বাস্থ্য ও নৈতিকতা)"
        }
      }
    }

    // Digital Rights
    if (age >= 18) {
      info.digitalRights = {
        en: "Can legally use social media, online services, and digital platforms, subject to national laws.",
        bn: "জাতীয় আইন সাপেক্ষে সামাজিক মাধ্যম, অনলাইন পরিষেবা এবং ডিজিটাল প্ল্যাটফর্ম আইনত ব্যবহার করতে পারে।",
        constitutionalReference: {
          en: "Constitution of Bangladesh: Article 39 (Freedom of thought, conscience and speech), Article 27 (Equality before law), Digital Security Act 2018",
          bn: "বাংলাদেশের সংবিধান: অনুচ্ছেদ ৩৯ (চিন্তা, বিবেক ও বাক স্বাধীনতা), অনুচ্ছেদ ২৭ (আইনের দৃষ্টিতে সমতা), ডিজিটাল নিরাপত্তা আইন ২০১৮"
        }
      }
    }

    return info
  },
  vaccinationSchedule: (weeks: number, years: number) => {
    const vaccines: { 
      en: string; 
      bn: string; 
      age: string;
      status: 'completed' | 'due' | 'upcoming' | 'overdue';
      priority: 'high' | 'medium' | 'low';
      guidance: { en: string; bn: string };
      category?: 'mandatory' | 'recommended' | 'emergency';
    }[] = []

    // Helper function to parse age string to weeks
    const parseAgeToWeeks = (age: string): number => {
      if (age.includes('weeks')) {
        return parseInt(age.split(' ')[0]);
      } else if (age.includes('months')) {
        return parseInt(age.split(' ')[0]) * 4.33; // Approximate weeks per month
      } else if (age.includes('years')) {
        return parseInt(age.split(' ')[0]) * 52; // 52 weeks per year
      }
      return 0;
    };

    // Complete vaccination schedule with specific ages and status
    const vaccinationSchedule = [
      // Birth (0 weeks)
      {
        age: '0 weeks',
        vaccines: [
          {
            en: "BCG (Bacillus Calmette-Guérin)",
            bn: "বিসিজি (ব্যাসিলাস ক্যালমেট-গুয়েরিন)",
            guidance: {
              en: "Protects against tuberculosis. Given at birth or as soon as possible after birth.",
              bn: "যক্ষ্মা থেকে সুরক্ষা দেয়। জন্মের সময় বা জন্মের পর যত তাড়াতাড়ি সম্ভব দেওয়া হয়।"
            }
          },
          {
            en: "Oral Polio Vaccine (OPV) 0",
            bn: "ওরাল পোলিও ভ্যাকসিন (ওপিভি) ০",
            guidance: {
              en: "First dose of polio vaccine. Essential for polio prevention.",
              bn: "পোলিও ভ্যাকসিনের প্রথম ডোজ। পোলিও প্রতিরোধের জন্য অপরিহার্য।"
            }
          }
        ]
      },
      // 6 weeks
      {
        age: '6 weeks',
        vaccines: [
          {
            en: "Pentavalent 1 (DPT + HepB + Hib)",
            bn: "পেন্টাভ্যালেন্ট ১ (ডিপিটি + হেপবি + হিব)",
            guidance: {
              en: "Protects against Diphtheria, Pertussis, Tetanus, Hepatitis B, and Haemophilus influenzae type b.",
              bn: "ডিপথেরিয়া, পারটুসিস, টিটেনাস, হেপাটাইটিস বি এবং হেমোফিলাস ইনফ্লুয়েঞ্জা টাইপ বি থেকে সুরক্ষা দেয়।"
            }
          },
          {
            en: "OPV 1",
            bn: "ওপিভি ১",
            guidance: {
              en: "Second dose of polio vaccine. Maintains polio immunity.",
              bn: "পোলিও ভ্যাকসিনের দ্বিতীয় ডোজ। পোলিও প্রতিরোধ ক্ষমতা বজায় রাখে।"
            }
          },
          {
            en: "PCV 1 (Pneumococcal Conjugate Vaccine)",
            bn: "পিসিভি ১ (নিউমোকোকাল কনজুগেট ভ্যাকসিন)",
            guidance: {
              en: "Protects against pneumococcal diseases including pneumonia and meningitis.",
              bn: "নিউমোনিয়া এবং মেনিনজাইটিস সহ নিউমোকোকাল রোগ থেকে সুরক্ষা দেয়।"
            }
          }
        ]
      },
      // 10 weeks
      {
        age: '10 weeks',
        vaccines: [
          {
            en: "Pentavalent 2 (DPT + HepB + Hib)",
            bn: "পেন্টাভ্যালেন্ট ২ (ডিপিটি + হেপবি + হিব)",
            guidance: {
              en: "Second dose of pentavalent vaccine. Boosts immunity against 5 diseases.",
              bn: "পেন্টাভ্যালেন্ট ভ্যাকসিনের দ্বিতীয় ডোজ। ৫টি রোগের বিরুদ্ধে প্রতিরোধ ক্ষমতা বাড়ায়।"
            }
          },
          {
            en: "OPV 2",
            bn: "ওপিভি ২",
            guidance: {
              en: "Third dose of polio vaccine. Critical for polio eradication.",
              bn: "পোলিও ভ্যাকসিনের তৃতীয় ডোজ। পোলিও নির্মূলের জন্য গুরুত্বপূর্ণ।"
            }
          },
          {
            en: "PCV 2",
            bn: "পিসিভি ২",
            guidance: {
              en: "Second dose of pneumococcal vaccine. Strengthens protection against pneumonia.",
              bn: "নিউমোকোকাল ভ্যাকসিনের দ্বিতীয় ডোজ। নিউমোনিয়া থেকে সুরক্ষা শক্তিশালী করে।"
            }
          }
        ]
      },
      // 14 weeks
      {
        age: '14 weeks',
        vaccines: [
          {
            en: "Pentavalent 3 (DPT + HepB + Hib)",
            bn: "পেন্টাভ্যালেন্ট ৩ (ডিপিটি + হেপবি + হিব)",
            guidance: {
              en: "Final dose of primary pentavalent series. Completes basic immunization.",
              bn: "প্রাথমিক পেন্টাভ্যালেন্ট সিরিজের শেষ ডোজ। মৌলিক টিকাদান সম্পূর্ণ করে।"
            }
          },
          {
            en: "OPV 3",
            bn: "ওপিভি ৩",
            guidance: {
              en: "Fourth dose of polio vaccine. Ensures complete polio protection.",
              bn: "পোলিও ভ্যাকসিনের চতুর্থ ডোজ। সম্পূর্ণ পোলিও সুরক্ষা নিশ্চিত করে।"
            }
          },
          {
            en: "IPV (Inactivated Polio Vaccine)",
            bn: "আইপিভি (ইনঅ্যাকটিভেটেড পোলিও ভ্যাকসিন)",
            guidance: {
              en: "Injectable polio vaccine. Provides additional protection against polio.",
              bn: "ইনজেকশনযোগ্য পোলিও ভ্যাকসিন। পোলিও থেকে অতিরিক্ত সুরক্ষা প্রদান করে।"
            }
          }
        ]
      },
      // 9 months
      {
        age: '9 months',
        vaccines: [
          {
            en: "MR 1 (Measles and Rubella)",
            bn: "এমআর ১ (হাম ও রুবেলা)",
            guidance: {
              en: "Protects against measles and rubella. Critical for preventing these serious diseases.",
              bn: "হাম ও রুবেলা থেকে সুরক্ষা দেয়। এই গুরুতর রোগ প্রতিরোধের জন্য অপরিহার্য।"
            }
          },
          {
            en: "PCV 3",
            bn: "পিসিভি ৩",
            guidance: {
              en: "Final dose of pneumococcal vaccine. Completes pneumococcal protection.",
              bn: "নিউমোকোকাল ভ্যাকসিনের শেষ ডোজ। নিউমোকোকাল সুরক্ষা সম্পূর্ণ করে।"
            }
          }
        ]
      },
      // 10 months
      {
        age: '10 months',
        vaccines: [
          {
            en: "Measles (Separate dose)",
            bn: "হাম (পৃথক ডোজ)",
            guidance: {
              en: "Additional measles vaccine dose given separately after MR vaccine for enhanced protection.",
              bn: "এমআর ভ্যাকসিনের পর পৃথকভাবে দেওয়া অতিরিক্ত হাম ভ্যাকসিন ডোজ যা সুরক্ষা বাড়ায়।"
            }
          }
        ]
      },
      // 18 months
      {
        age: '18 months',
        vaccines: [
          {
            en: "DPT Booster 1",
            bn: "ডিপিটি বুস্টার ১",
            guidance: {
              en: "Booster dose for Diphtheria, Pertussis, and Tetanus. Maintains immunity.",
              bn: "ডিপথেরিয়া, পারটুসিস এবং টিটেনাসের জন্য বুস্টার ডোজ। প্রতিরোধ ক্ষমতা বজায় রাখে।"
            }
          },
          {
            en: "OPV Booster 1",
            bn: "ওপিভি বুস্টার ১",
            guidance: {
              en: "Booster dose of polio vaccine. Ensures continued polio protection.",
              bn: "পোলিও ভ্যাকসিনের বুস্টার ডোজ। অব্যাহত পোলিও সুরক্ষা নিশ্চিত করে।"
            }
          }
        ]
      },
      // 4-5 years
      {
        age: '4-5 years',
        vaccines: [
          {
            en: "MR 2 (Measles and Rubella)",
            bn: "এমআর ২ (হাম ও রুবেলা)",
            guidance: {
              en: "Second dose of measles and rubella vaccine. Ensures lifelong protection.",
              bn: "হাম ও রুবেলা ভ্যাকসিনের দ্বিতীয় ডোজ। আজীবন সুরক্ষা নিশ্চিত করে।"
            }
          }
        ]
      },
      // 10 years
      {
        age: '10 years',
        vaccines: [
          {
            en: "Td (Tetanus and Diphtheria)",
            bn: "টিডি (টিটেনাস ও ডিপথেরিয়া)",
            guidance: {
              en: "Protects against tetanus and diphtheria. Important for school-age children.",
              bn: "টিটেনাস ও ডিপথেরিয়া থেকে সুরক্ষা দেয়। স্কুল-বয়সী শিশুদের জন্য গুরুত্বপূর্ণ।"
            }
          }
        ]
      },
      // 15 years
      {
        age: '15 years',
        vaccines: [
          {
            en: "Td Booster",
            bn: "টিডি বুস্টার",
            guidance: {
              en: "Booster dose for tetanus and diphtheria. Maintains protection into adulthood.",
              bn: "টিটেনাস ও ডিপথেরিয়ার জন্য বুস্টার ডোজ। প্রাপ্তবয়স্ক হওয়া পর্যন্ত সুরক্ষা বজায় রাখে।"
            }
          }
        ]
      },
      // Women of Childbearing Age (15-49 years) - EPI Program
      {
        age: '15-49 years (Women)',
        vaccines: [
          {
            en: "TT 1 (Tetanus Toxoid) - Women's Vaccine",
            bn: "টিটি ১ (টিটেনাস টক্সয়েড) - মহিলাদের ভ্যাকসিন",
            guidance: {
              en: "First dose of tetanus toxoid for women of childbearing age. Protects against tetanus during pregnancy and childbirth.",
              bn: "সন্তান ধারণক্ষম মহিলাদের জন্য টিটেনাস টক্সয়েডের প্রথম ডোজ। গর্ভাবস্থা ও প্রসবকালে টিটেনাস থেকে সুরক্ষা দেয়।"
            }
          },
          {
            en: "TT 2 (Tetanus Toxoid) - Women's Vaccine",
            bn: "টিটি ২ (টিটেনাস টক্সয়েড) - মহিলাদের ভ্যাকসিন",
            guidance: {
              en: "Second dose of tetanus toxoid. Should be given 4 weeks after TT1 for complete protection.",
              bn: "টিটেনাস টক্সয়েডের দ্বিতীয় ডোজ। সম্পূর্ণ সুরক্ষার জন্য টিটি১ এর ৪ সপ্তাহ পর দেওয়া উচিত।"
            }
          },
          {
            en: "TT 3 (Tetanus Toxoid) - Women's Vaccine",
            bn: "টিটি ৩ (টিটেনাস টক্সয়েড) - মহিলাদের ভ্যাকসিন",
            guidance: {
              en: "Third dose of tetanus toxoid. Provides protection for 5 years.",
              bn: "টিটেনাস টক্সয়েডের তৃতীয় ডোজ। ৫ বছর সুরক্ষা প্রদান করে।"
            }
          },
          {
            en: "TT 4 (Tetanus Toxoid) - Women's Vaccine",
            bn: "টিটি ৪ (টিটেনাস টক্সয়েড) - মহিলাদের ভ্যাকসিন",
            guidance: {
              en: "Fourth dose of tetanus toxoid. Extends protection for 10 years.",
              bn: "টিটেনাস টক্সয়েডের চতুর্থ ডোজ। সুরক্ষা ১০ বছর পর্যন্ত বাড়ায়।"
            }
          },
          {
            en: "TT 5 (Tetanus Toxoid) - Women's Vaccine",
            bn: "টিটি ৫ (টিটেনাস টক্সয়েড) - মহিলাদের ভ্যাকসিন",
            guidance: {
              en: "Fifth and final dose of tetanus toxoid. Provides lifelong protection against tetanus.",
              bn: "টিটেনাস টক্সয়েডের পঞ্চম ও শেষ ডোজ। টিটেনাস থেকে আজীবন সুরক্ষা প্রদান করে।"
            }
          },
          {
            en: "MR (Measles and Rubella) - Women's Vaccine",
            bn: "এমআর (হাম ও রুবেলা) - মহিলাদের ভ্যাকসিন",
            guidance: {
              en: "Measles and rubella vaccine for women of childbearing age. Prevents congenital rubella syndrome in newborns.",
              bn: "সন্তান ধারণক্ষম মহিলাদের জন্য হাম ও রুবেলা ভ্যাকসিন। নবজাতকের মধ্যে জন্মগত রুবেলা সিনড্রোম প্রতিরোধ করে।"
            }
          },
          {
            en: "HPV (Human Papillomavirus) - Women's Vaccine",
            bn: "এইচপিভি (হিউম্যান প্যাপিলোমাভাইরাস) - মহিলাদের ভ্যাকসিন",
            guidance: {
              en: "HPV vaccine. Protects against cervical cancer.",
              bn: "এইচপিভি ভ্যাকসিন জরায়ুর ক্যান্সার থেকে সুরক্ষা দেয়।"
            }
          }
        ]
      }
    ];

    // Determine which vaccines are relevant based on current age
    const currentAgeInWeeks = weeks + (years * 52);
    
    vaccinationSchedule.forEach(schedule => {
      // Special handling for women's vaccines (15-49 years)
      if (schedule.age.includes('15-49 years (Women)')) {
        if (years >= 15 && years <= 49) {
          // For women in childbearing age, show all TT vaccines as due
          schedule.vaccines.forEach((vaccine, index) => {
            let status: 'completed' | 'due' | 'upcoming' | 'overdue' = 'due';
            let priority: 'high' | 'medium' | 'low' = 'high';
            
            // TT vaccines should be spaced out - show first few as due, others as upcoming
            if (index < 2) {
              status = 'due';
              priority = 'high';
            } else if (index < 4) {
              status = 'upcoming';
              priority = 'medium';
            } else {
              status = 'upcoming';
              priority = 'low';
            }
            
            vaccines.push({
              en: vaccine.en,
              bn: vaccine.bn,
              age: schedule.age,
              status,
              priority,
              guidance: vaccine.guidance,
              category: 'mandatory' // Women's vaccines are mandatory
            });
          });
        }
        return; // Skip regular age calculation for women's vaccines
      }
      
      const scheduleAgeInWeeks = parseAgeToWeeks(schedule.age);
      
      // Only show vaccines that are relevant to current age
      // Show vaccines that are due now, overdue, or coming up soon (within 4 weeks)
      if (currentAgeInWeeks >= scheduleAgeInWeeks - 4 && currentAgeInWeeks <= scheduleAgeInWeeks + 8) {
        schedule.vaccines.forEach(vaccine => {
          let status: 'completed' | 'due' | 'upcoming' | 'overdue' = 'upcoming';
          let priority: 'high' | 'medium' | 'low' = 'medium';
          
          // Determine status based on age
          if (currentAgeInWeeks >= scheduleAgeInWeeks) {
            if (currentAgeInWeeks <= scheduleAgeInWeeks + 4) { // Within 4 weeks of due date
              status = 'due';
              priority = 'high';
            } else if (currentAgeInWeeks <= scheduleAgeInWeeks + 8) { // Within 8 weeks
              status = 'overdue';
              priority = 'high';
            } else {
              status = 'completed';
              priority = 'low';
            }
          } else if (currentAgeInWeeks >= scheduleAgeInWeeks - 2) { // 2 weeks before due
            status = 'upcoming';
            priority = 'medium';
          }
          
          vaccines.push({
            en: vaccine.en,
            bn: vaccine.bn,
            age: schedule.age,
            status,
            priority,
            guidance: vaccine.guidance,
            category: 'mandatory' // Children's vaccines are mandatory
          });
        });
      }
    });

    // Add comprehensive adult vaccination schedule for 19+ years
    if (years >= 19) {
      // Adult vaccination schedule with categorization
      const adultVaccines = [
        // Young Adults (19-26 years)
        {
          age: '19-26 years',
          vaccines: [
            {
              en: "Td Booster (Tetanus & Diphtheria) - Mandatory",
              bn: "টিডি বুস্টার (টিটেনাস ও ডিপথেরিয়া) - বাধ্যতামূলক",
              category: 'mandatory',
              guidance: {
                en: "Mandatory booster for tetanus and diphtheria. Required for college admission and employment.",
                bn: "টিটেনাস ও ডিপথেরিয়ার জন্য বাধ্যতামূলক বুস্টার। কলেজে ভর্তি ও চাকরির জন্য প্রয়োজনীয়।"
              }
            },
            {
              en: "MMR (Measles, Mumps, Rubella) - Recommended",
              bn: "এমএমআর (হাম, গালফোলা, রুবেলা) - সুপারিশকৃত",
              category: 'recommended',
              guidance: {
                en: "Recommended for adults who haven't received MMR vaccine. Prevents outbreaks in college settings.",
                bn: "যারা এমএমআর ভ্যাকসিন পায়নি তাদের জন্য সুপারিশকৃত। কলেজে রোগের প্রাদুর্ভাব প্রতিরোধ করে।"
              }
            },
            {
              en: "Varicella (Chickenpox) - Recommended",
              bn: "ভ্যারিসেলা (চিকেনপক্স) - সুপারিশকৃত",
              category: 'recommended',
              guidance: {
                en: "Recommended for adults who haven't had chickenpox. Prevents severe complications in adults.",
                bn: "যারা চিকেনপক্স হয়নি তাদের জন্য সুপারিশকৃত। প্রাপ্তবয়স্কদের মধ্যে গুরুতর জটিলতা প্রতিরোধ করে।"
              }
            },
            {
              en: "Hepatitis B - Recommended",
              bn: "হেপাটাইটিস বি - সুপারিশকৃত",
              category: 'recommended',
              guidance: {
                en: "Recommended for adults at risk of hepatitis B infection. Important for healthcare workers.",
                bn: "হেপাটাইটিস বি সংক্রমণের ঝুঁকিতে থাকা প্রাপ্তবয়স্কদের জন্য সুপারিশকৃত। স্বাস্থ্যসেবা কর্মীদের জন্য গুরুত্বপূর্ণ।"
              }
            }
          ]
        },
        // Adults (27-49 years)
        {
          age: '27-49 years',
          vaccines: [
            {
              en: "Td Booster (every 10 years) - Mandatory",
              bn: "টিডি বুস্টার (প্রতি ১০ বছর অন্তর) - বাধ্যতামূলক",
              category: 'mandatory',
              guidance: {
                en: "Mandatory tetanus and diphtheria booster every 10 years. Required for workplace safety.",
                bn: "প্রতি ১০ বছর অন্তর বাধ্যতামূলক টিটেনাস ও ডিপথেরিয়া বুস্টার। কর্মক্ষেত্রে নিরাপত্তার জন্য প্রয়োজনীয়।"
              }
            },
            {
              en: "Influenza (annually) - Recommended",
              bn: "ইনফ্লুয়েঞ্জা (বার্ষিক) - সুপারিশকৃত",
              category: 'recommended',
              guidance: {
                en: "Annual flu vaccine recommended for all adults. Essential for those with chronic conditions.",
                bn: "সকল প্রাপ্তবয়স্কের জন্য বার্ষিক ফ্লু ভ্যাকসিন সুপারিশকৃত। দীর্ঘস্থায়ী রোগে আক্রান্তদের জন্য অপরিহার্য।"
              }
            },
            {
              en: "Pneumococcal (PCV13/PPSV23) - Recommended",
              bn: "নিউমোকোকাল (পিসিভি১৩/পিপিএসভি২৩) - সুপারিশকৃত",
              category: 'recommended',
              guidance: {
                en: "Recommended for adults with chronic conditions. Protects against pneumonia and related infections.",
                bn: "দীর্ঘস্থায়ী রোগে আক্রান্ত প্রাপ্তবয়স্কদের জন্য সুপারিশকৃত। নিউমোনিয়া ও সম্পর্কিত সংক্রমণ থেকে সুরক্ষা দেয়।"
              }
            },
            {
              en: "Hepatitis A - Recommended",
              bn: "হেপাটাইটিস এ - সুপারিশকৃত",
              category: 'recommended',
              guidance: {
                en: "Recommended for travelers and those at risk. Prevents food and water-borne hepatitis.",
                bn: "ভ্রমণকারী ও ঝুঁকিতে থাকা ব্যক্তিদের জন্য সুপারিশকৃত। খাদ্য ও পানি-বাহিত হেপাটাইটিস প্রতিরোধ করে।"
              }
            }
          ]
        },
        // Middle-aged Adults (50-64 years)
        {
          age: '50-64 years',
          vaccines: [
            {
              en: "Td Booster (every 10 years) - Mandatory",
              bn: "টিডি বুস্টার (প্রতি ১০ বছর অন্তর) - বাধ্যতামূলক",
              category: 'mandatory',
              guidance: {
                en: "Mandatory tetanus and diphtheria booster. Critical for workplace and home safety.",
                bn: "বাধ্যতামূলক টিটেনাস ও ডিপথেরিয়া বুস্টার। কর্মক্ষেত্রে ও বাড়িতে নিরাপত্তার জন্য গুরুত্বপূর্ণ।"
              }
            },
            {
              en: "Influenza (annually) - Mandatory",
              bn: "ইনফ্লুয়েঞ্জা (বার্ষিক) - বাধ্যতামূলক",
              category: 'mandatory',
              guidance: {
                en: "Mandatory annual flu vaccine for this age group. High risk of complications.",
                bn: "এই বয়সের গ্রুপের জন্য বাধ্যতামূলক বার্ষিক ফ্লু ভ্যাকসিন। জটিলতার উচ্চ ঝুঁকি।"
              }
            },
            {
              en: "Pneumococcal (PCV13/PPSV23) - Mandatory",
              bn: "নিউমোকোকাল (পিসিভি১৩/পিপিএসভি২৩) - বাধ্যতামূলক",
              category: 'mandatory',
              guidance: {
                en: "Mandatory pneumococcal vaccine. High risk of pneumonia in this age group.",
                bn: "বাধ্যতামূলক নিউমোকোকাল ভ্যাকসিন। এই বয়সের গ্রুপে নিউমোনিয়ার উচ্চ ঝুঁকি।"
              }
            },
            {
              en: "Shingles (Zoster) - Recommended",
              bn: "শিঙ্গলস (জোস্টার) - সুপারিশকৃত",
              category: 'recommended',
              guidance: {
                en: "Recommended for adults 50+. Prevents shingles and post-herpetic neuralgia.",
                bn: "৫০+ প্রাপ্তবয়স্কদের জন্য সুপারিশকৃত। শিঙ্গলস ও পোস্ট-হারপেটিক নিউরালজিয়া প্রতিরোধ করে।"
              }
            }
          ]
        },
        // Seniors (65+ years)
        {
          age: '65+ years',
          vaccines: [
            {
              en: "Td Booster (every 10 years) - Mandatory",
              bn: "টিডি বুস্টার (প্রতি ১০ বছর অন্তর) - বাধ্যতামূলক",
              category: 'mandatory',
              guidance: {
                en: "Mandatory tetanus and diphtheria booster. Essential for senior safety and independence.",
                bn: "বাধ্যতামূলক টিটেনাস ও ডিপথেরিয়া বুস্টার। বয়স্কদের নিরাপত্তা ও স্বাধীনতার জন্য অপরিহার্য।"
              }
            },
            {
              en: "Influenza (annually) - Mandatory",
              bn: "ইনফ্লুয়েঞ্জা (বার্ষিক) - বাধ্যতামূলক",
              category: 'mandatory',
              guidance: {
                en: "Mandatory annual flu vaccine. Seniors are at highest risk of complications.",
                bn: "বাধ্যতামূলক বার্ষিক ফ্লু ভ্যাকসিন। বয়স্কদের মধ্যে জটিলতার সর্বোচ্চ ঝুঁকি।"
              }
            },
            {
              en: "Pneumococcal (PCV13/PPSV23) - Mandatory",
              bn: "নিউমোকোকাল (পিসিভি১৩/পিপিএসভি২৩) - বাধ্যতামূলক",
              category: 'mandatory',
              guidance: {
                en: "Mandatory pneumococcal vaccine. Critical for preventing pneumonia in seniors.",
                bn: "বাধ্যতামূলক নিউমোকোকাল ভ্যাকসিন। বয়স্কদের মধ্যে নিউমোনিয়া প্রতিরোধের জন্য গুরুত্বপূর্ণ।"
              }
            },
            {
              en: "Shingles (Zoster) - Mandatory",
              bn: "শিঙ্গলস (জোস্টার) - বাধ্যতামূলক",
              category: 'mandatory',
              guidance: {
                en: "Mandatory shingles vaccine for seniors. High risk of complications.",
                bn: "বয়স্কদের জন্য বাধ্যতামূলক শিঙ্গলস ভ্যাকসিন। জটিলতার উচ্চ ঝুঁকি।"
              }
            }
          ]
        }
      ];

      // Add emergency and travel vaccines for all adults
      const emergencyVaccines = [
        {
          en: "COVID-19 (as per guidelines) - Emergency",
          bn: "কোভিড-১৯ (নির্দেশিকা অনুযায়ী) - জরুরি",
          age: "As per guidelines",
          category: 'emergency',
          guidance: {
            en: "Emergency vaccine during pandemic. Follow national and international guidelines for booster doses.",
            bn: "মহামারীর সময় জরুরি ভ্যাকসিন। বুস্টার ডোজের জন্য জাতীয় ও আন্তর্জাতিক নির্দেশিকা অনুসরণ করুন।"
          }
        },
        {
          en: "Rabies (if exposed) - Emergency",
          bn: "রেবিস (সংস্পর্শে এলে) - জরুরি",
          age: "If exposed to rabies",
          category: 'emergency',
          guidance: {
            en: "Emergency vaccine if exposed to rabies. Must be given immediately after exposure.",
            bn: "রেবিস সংস্পর্শে এলে জরুরি ভ্যাকসিন। সংস্পর্শের পর অবিলম্বে দেওয়া আবশ্যক।"
          }
        },
        {
          en: "Tetanus (if injured) - Emergency",
          bn: "টিটেনাস (আঘাত পেলে) - জরুরি",
          age: "If injured and not up to date",
          category: 'emergency',
          guidance: {
            en: "Emergency tetanus vaccine if injured and not up to date with Td boosters.",
            bn: "আঘাত পেলে এবং টিডি বুস্টার আপ টু ডেট না থাকলে জরুরি টিটেনাস ভ্যাকসিন।"
          }
        }
      ];

      // Process adult vaccines based on age group - only show relevant vaccines
      adultVaccines.forEach(ageGroup => {
        const ageRange = ageGroup.age;
        const minAge = parseInt(ageRange.split('-')[0]);
        const maxAge = ageRange.includes('+') ? 120 : parseInt(ageRange.split('-')[1]);
        
        // Only show vaccines for the current age group
        if (years >= minAge && years <= maxAge) {
          ageGroup.vaccines.forEach(vaccine => {
            let status: 'completed' | 'due' | 'upcoming' | 'overdue' = 'due';
            let priority: 'high' | 'medium' | 'low' = 'medium';
            
            // Set priority based on category
            if (vaccine.category === 'mandatory') {
              priority = 'high';
              status = 'due';
            } else if (vaccine.category === 'emergency') {
              priority = 'high';
              status = 'upcoming';
            } else {
              priority = 'medium';
              status = 'upcoming';
            }
            
            vaccines.push({
              en: vaccine.en,
              bn: vaccine.bn,
              age: ageGroup.age,
              status,
              priority,
              guidance: vaccine.guidance,
              category: vaccine.category as 'mandatory' | 'recommended' | 'emergency' | undefined
            });
          });
        }
      });

      // Add emergency vaccines for all adults (always relevant)
      emergencyVaccines.forEach(vaccine => {
        vaccines.push({
          en: vaccine.en,
          bn: vaccine.bn,
          age: vaccine.age,
          status: 'upcoming',
          priority: 'high',
          guidance: vaccine.guidance,
          category: vaccine.category as 'mandatory' | 'recommended' | 'emergency' | undefined
        });
      });
    }

    return vaccines;
  },
}