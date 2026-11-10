import { type ClassValue, clsx } from "clsx"

export function cn(...inputs: ClassValue[]) {
    return clsx(inputs)
}

export function formatNumber(num: number, locale: string = 'en'): string {
    if (locale === 'bn') {
        const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
        return num.toString().replace(/\d/g, (digit) => bengaliDigits[parseInt(digit)]);
    }
    return num.toLocaleString();
}

export function formatDate(date: Date, locale: string = 'en'): string {
    if (locale === 'bn') {
        const months = ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];
        return `${formatNumber(date.getDate(), locale)} ${months[date.getMonth()]} ${formatNumber(date.getFullYear(), locale)}`;
    }
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function calculateAge(birthDate: Date, targetDate?: Date): {
    years: number;
    months: number;
    days: number;
    totalDays: number;
    totalWeeks: number;
    totalMonths: number;
    totalHours: number;
    totalMinutes: number;
    totalSeconds: number;
    daysUntilBirthday: number;
    nextBirthday: Date;
    leapYears: number;
    secondsLived: number;
    minutesLived: number;
    hoursLived: number;
    heartbeats: number;
    breaths: number;
} {
    const today = targetDate || new Date();
    const birth = new Date(birthDate);

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
        months--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    // Calculate additional information
    const totalDays = Math.floor((today.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = years * 12 + months;

    // Next birthday
    const nextBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());
    if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }
    const daysUntilBirthday = Math.ceil((nextBirthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    // Fun facts
    const totalSeconds = Math.floor((today.getTime() - birth.getTime()) / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const heartbeats = Math.floor(totalSeconds * 1.2); // Average 72 bpm
    const breaths = Math.floor(totalSeconds / 4); // Average 15 breaths per minute

    // Calculate leap years
    let leapYears = 0;
    for (let year = birth.getFullYear(); year <= today.getFullYear(); year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            leapYears++;
        }
    }

    return {
        years,
        months,
        days,
        totalDays,
        totalWeeks,
        totalMonths,
        totalHours,
        totalMinutes,
        totalSeconds,
        daysUntilBirthday,
        nextBirthday,
        leapYears,
        secondsLived: totalSeconds,
        minutesLived: totalMinutes,
        hoursLived: totalHours,
        heartbeats,
        breaths,
    };
}

export function convertToHijri(gregorianDate: Date, locale: string = 'en') {
    const year = gregorianDate.getFullYear();
    const month = gregorianDate.getMonth() + 1;
    const day = gregorianDate.getDate();

    // Islamic calendar epoch: July 16, 622 CE (Gregorian)
    const islamicEpoch = new Date(622, 6, 16); // Month is 0-indexed
    const targetDate = new Date(year, month - 1, day);

    // Calculate days since Islamic epoch
    const daysSinceEpoch = Math.floor((targetDate.getTime() - islamicEpoch.getTime()) / (1000 * 60 * 60 * 24));

    // Islamic year is approximately 354.37 days
    const hijriYear = Math.floor(daysSinceEpoch / 354.37) + 1;

    // Calculate remaining days for month calculation
    const daysInHijriYear = Math.floor((daysSinceEpoch % 354.37));

    // Islamic months have alternating 29/30 days (simplified)
    const hijriMonthDays = [30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29];
    let hijriMonth = 1;
    let remainingDays = daysInHijriYear;

    for (let i = 0; i < 12; i++) {
        if (remainingDays <= hijriMonthDays[i]) {
            hijriMonth = i + 1;
            break;
        }
        remainingDays -= hijriMonthDays[i];
    }

    const hijriDay = Math.max(1, Math.floor(remainingDays) + 1);

    const hijriMonths = {
        bn: [
            'মুহাররম', 'সফর', 'রবিউল আউয়াল', 'রবিউস সানি', 'জুমাদাল উলা', 'জুমাদাস সানি',
            'রজব', 'শাবান', 'রমজান', 'শাওয়াল', 'জিলকদ', 'জিলহজ'
        ],
        en: [
            'Muharram', 'Safar', 'Rabi\' al-awwal', 'Rabi\' al-thani', 'Jumada al-awwal', 'Jumada al-thani',
            'Rajab', 'Sha\'ban', 'Ramadan', 'Shawwal', 'Dhu al-Qi\'dah', 'Dhu al-Hijjah'
        ]
    };

    return {
        year: hijriYear,
        month: hijriMonths[locale as keyof typeof hijriMonths][hijriMonth - 1] || hijriMonths[locale as keyof typeof hijriMonths][0],
        day: hijriDay
    };
}

export function convertToBengali(gregorianDate: Date, locale: string = 'en') {
    const year = gregorianDate.getFullYear();
    const month = gregorianDate.getMonth() + 1;
    const day = gregorianDate.getDate();

    // Bengali calendar epoch: April 14, 594 CE (Gregorian)
    const bengaliEpoch = new Date(594, 3, 14); // Month is 0-indexed
    const targetDate = new Date(year, month - 1, day);

    // Calculate days since Bengali epoch
    const daysSinceEpoch = Math.floor((targetDate.getTime() - bengaliEpoch.getTime()) / (1000 * 60 * 60 * 24));

    // Bengali year is approximately 365.25 days (same as Gregorian)
    const bengaliYear = Math.floor(daysSinceEpoch / 365.25) + 1;

    // Calculate remaining days for month calculation
    const daysInBengaliYear = Math.floor((daysSinceEpoch % 365.25));

    // Bengali months with their approximate start dates (simplified)
    // Boishakh starts around April 14-15
    const bengaliMonthStarts = [
        0,    // Boishakh (April 14)
        31,   // Joishtho (May 15)
        61,   // Asharh (June 15)
        92,   // Srabon (July 16)
        123,  // Bhadro (August 16)
        154,  // Ashwin (September 16)
        184,  // Kartik (October 16)
        215,  // Agrahayan (November 16)
        245,  // Poush (December 16)
        276,  // Magh (January 15)
        307,  // Falgun (February 14)
        335   // Chaitra (March 15)
    ];

    let bengaliMonth = 1;
    let bengaliDay = 1;

    // Find the correct month
    for (let i = 0; i < 12; i++) {
        if (daysInBengaliYear >= bengaliMonthStarts[i] &&
            (i === 11 || daysInBengaliYear < bengaliMonthStarts[i + 1])) {
            bengaliMonth = i + 1;
            bengaliDay = daysInBengaliYear - bengaliMonthStarts[i] + 1;
            break;
        }
    }

    // Handle leap year adjustments
    if (bengaliMonth === 12 && bengaliDay > 30) {
        bengaliMonth = 1;
        bengaliDay = bengaliDay - 30;
    }

    const bengaliMonths = {
        bn: [
            'বৈশাখ', 'জ্যৈষ্ঠ', 'আষাঢ়', 'শ্রাবণ', 'ভাদ্র', 'আশ্বিন',
            'কার্তিক', 'অগ্রহায়ণ', 'পৌষ', 'মাঘ', 'ফাল্গুন', 'চৈত্র'
        ],
        en: [
            'Boishakh', 'Joishtho', 'Asharh', 'Srabon', 'Bhadro', 'Ashwin',
            'Kartik', 'Agrahayan', 'Poush', 'Magh', 'Falgun', 'Chaitra'
        ]
    };

    return {
        year: bengaliYear,
        month: bengaliMonths[locale as keyof typeof bengaliMonths][bengaliMonth - 1] || bengaliMonths[locale as keyof typeof bengaliMonths][0],
        day: Math.max(1, Math.min(bengaliDay, 31))
    };
}

export function getZodiacSign(birthDate: Date, locale: string = 'en') {
    const zodiacData = {
        en: {
            signs: ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius'],
            descriptions: [
                {
                    name: 'Capricorn',
                    personality: 'Capricorn is ambitious, disciplined, and practical. This sign represents natural leadership with strong determination.',
                    traits: 'Hardworking, responsible, patient, and goal-oriented.',
                    element: 'Earth',
                    symbol: '🐐'
                },
                {
                    name: 'Aquarius',
                    personality: 'Aquarius is independent, innovative, and humanitarian. This sign thinks outside the box and cares deeply about humanity.',
                    traits: 'Original, progressive, friendly, and humanitarian.',
                    element: 'Air',
                    symbol: '♒'
                },
                {
                    name: 'Pisces',
                    personality: 'Pisces is compassionate, intuitive, and artistic. This sign has a deep connection to emotions and creativity.',
                    traits: 'Empathetic, imaginative, gentle, and spiritual.',
                    element: 'Water',
                    symbol: '🐟'
                },
                {
                    name: 'Aries',
                    personality: 'Aries is bold, energetic, and pioneering. This sign represents natural born leadership with lots of enthusiasm.',
                    traits: 'Courageous, confident, passionate, and independent.',
                    element: 'Fire',
                    symbol: '♈'
                },
                {
                    name: 'Taurus',
                    personality: 'Taurus is reliable, patient, and practical. This sign values stability and enjoys life\'s pleasures.',
                    traits: 'Determined, loyal, sensual, and grounded.',
                    element: 'Earth',
                    symbol: '🐂'
                },
                {
                    name: 'Gemini',
                    personality: 'Gemini is curious, adaptable, and communicative. This sign loves learning and connecting with others.',
                    traits: 'Versatile, expressive, quick-witted, and sociable.',
                    element: 'Air',
                    symbol: '♊'
                },
                {
                    name: 'Cancer',
                    personality: 'Cancer is nurturing, intuitive, and protective. This sign has strong emotional intelligence and cares deeply.',
                    traits: 'Loyal, empathetic, imaginative, and protective.',
                    element: 'Water',
                    symbol: '♋'
                },
                {
                    name: 'Leo',
                    personality: 'Leo is confident, creative, and generous. This sign has a natural flair for drama and leadership.',
                    traits: 'Dramatic, creative, self-confident, and generous.',
                    element: 'Fire',
                    symbol: '♌'
                },
                {
                    name: 'Virgo',
                    personality: 'Virgo is analytical, practical, and detail-oriented. This sign has a keen eye for perfection and service.',
                    traits: 'Loyal, analytical, kind, and hardworking.',
                    element: 'Earth',
                    symbol: '♍'
                },
                {
                    name: 'Libra',
                    personality: 'Libra is diplomatic, fair-minded, and social. This sign seeks balance and harmony in all relationships.',
                    traits: 'Cooperative, diplomatic, gracious, and fair-minded.',
                    element: 'Air',
                    symbol: '♎'
                },
                {
                    name: 'Scorpio',
                    personality: 'Scorpio is passionate, resourceful, and brave. This sign has intense emotions and strong intuition.',
                    traits: 'Resourceful, brave, passionate, and stubborn.',
                    element: 'Water',
                    symbol: '♏'
                },
                {
                    name: 'Sagittarius',
                    personality: 'Sagittarius is adventurous, independent, and philosophical. This sign loves freedom and exploring new horizons.',
                    traits: 'Generous, idealistic, great sense of humor, and philosophical.',
                    element: 'Fire',
                    symbol: '♐'
                }
            ]
        },
        bn: {
            signs: ['মকর', 'কুম্ভ', 'মীন', 'মেষ', 'বৃষ', 'মিথুন', 'কর্কট', 'সিংহ', 'কন্যা', 'তুলা', 'বৃশ্চিক', 'ধনু'],
            descriptions: [
                {
                    name: 'মকর',
                    personality: 'মকর রাশি উচ্চাকাঙ্ক্ষী, শৃঙ্খলাবদ্ধ এবং বাস্তববাদী। এই রাশি দৃঢ় সংকল্প সহ স্বাভাবিক নেতৃত্বের প্রতিনিধিত্ব করে।',
                    traits: 'পরিশ্রমী, দায়িত্বশীল, ধৈর্যশীল এবং লক্ষ্যভিত্তিক।',
                    element: 'মৃত্তিকা',
                    symbol: '🐐'
                },
                {
                    name: 'কুম্ভ',
                    personality: 'কুম্ভ রাশি স্বাধীন, উদ্ভাবনী এবং মানবতাবাদী। এই রাশি প্রচলিত ধারার বাইরে চিন্তা করে এবং মানবতার জন্য কাজ করে।',
                    traits: 'মৌলিক, প্রগতিশীল, বন্ধুত্বপূর্ণ এবং মানবতাবাদী।',
                    element: 'বায়ু',
                    symbol: '♒'
                },
                {
                    name: 'মীন',
                    personality: 'মীন রাশি সহানুভূতিশীল, স্বজ্ঞাত এবং শৈল্পিক। এই রাশির আবেগ এবং সৃজনশীলতার সাথে গভীর সংযোগ রয়েছে।',
                    traits: 'সহানুভূতিশীল, কল্পনাপ্রবণ, নম্র এবং আধ্যাত্মিক।',
                    element: 'জল',
                    symbol: '🐟'
                },
                {
                    name: 'মেষ',
                    personality: 'মেষ রাশি সাহসী, উদ্যমী এবং অগ্রগামী। এই রাশি প্রচুর উৎসাহ সহ স্বাভাবিক নেতৃত্বের প্রতিনিধিত্ব করে।',
                    traits: 'সাহসী, আত্মবিশ্বাসী, আবেগপ্রবণ এবং স্বাধীন।',
                    element: 'অগ্নি',
                    symbol: '♈'
                },
                {
                    name: 'বৃষ',
                    personality: 'বৃষ রাশি নির্ভরযোগ্য, ধৈর্যশীল এবং বাস্তববাদী। এই রাশি স্থিতিশীলতা মূল্য দেয় এবং জীবনের আনন্দ উপভোগ করে।',
                    traits: 'দৃঢ়প্রতিজ্ঞ, অনুগত, সংবেদনশীল এবং ভিত্তিমূলক।',
                    element: 'মৃত্তিকা',
                    symbol: '🐂'
                },
                {
                    name: 'মিথুন',
                    personality: 'মিথুন রাশি কৌতূহলী, অভিযোজিত এবং যোগাযোগমূলক। এই রাশি শেখা এবং অন্যদের সাথে সংযোগ স্থাপন করতে ভালোবাসে।',
                    traits: 'বহুমুখী, অভিব্যক্তিপূর্ণ, তীক্ষ্ণবুদ্ধি এবং সামাজিক।',
                    element: 'বায়ু',
                    symbol: '♊'
                },
                {
                    name: 'কর্কট',
                    personality: 'কর্কট রাশি যত্নশীল, স্বজ্ঞাত এবং সুরক্ষামূলক। এই রাশির শক্তিশালী আবেগিক বুদ্ধিমত্তা রয়েছে এবং গভীরভাবে যত্ন নেয়।',
                    traits: 'অনুগত, সহানুভূতিশীল, কল্পনাপ্রবণ এবং সুরক্ষামূলক।',
                    element: 'জল',
                    symbol: '♋'
                },
                {
                    name: 'সিংহ',
                    personality: 'সিংহ রাশি আত্মবিশ্বাসী, সৃজনশীল এবং উদার। এই রাশির নাটকীয়তা এবং নেতৃত্বের জন্য স্বাভাবিক দক্ষতা রয়েছে।',
                    traits: 'নাটকীয়, সৃজনশীল, আত্মবিশ্বাসী এবং উদার।',
                    element: 'অগ্নি',
                    symbol: '♌'
                },
                {
                    name: 'কন্যা',
                    personality: 'কন্যা রাশি বিশ্লেষণাত্মক, বাস্তববাদী এবং বিস্তারিত-ভিত্তিক। এই রাশির নিখুঁততা এবং সেবার জন্য তীক্ষ্ণ দৃষ্টি রয়েছে।',
                    traits: 'অনুগত, বিশ্লেষণাত্মক, দয়ালু এবং পরিশ্রমী।',
                    element: 'মৃত্তিকা',
                    symbol: '♍'
                },
                {
                    name: 'তুলা',
                    personality: 'তুলা রাশি কূটনৈতিক, ন্যায়পরায়ণ এবং সামাজিক। এই রাশি সব সম্পর্কে ভারসাম্য এবং সাদৃশ্য খুঁজে।',
                    traits: 'সহযোগিতামূলক, কূটনৈতিক, মার্জিত এবং ন্যায়পরায়ণ।',
                    element: 'বায়ু',
                    symbol: '♎'
                },
                {
                    name: 'বৃশ্চিক',
                    personality: 'বৃশ্চিক রাশি আবেগপ্রবণ, সম্পদশালী এবং সাহসী। এই রাশির তীব্র আবেগ এবং শক্তিশালী স্বজ্ঞা রয়েছে।',
                    traits: 'সম্পদশালী, সাহসী, আবেগপ্রবণ এবং জেদী।',
                    element: 'জল',
                    symbol: '♏'
                },
                {
                    name: 'ধনু',
                    personality: 'ধনু রাশি দুঃসাহসিক, স্বাধীন এবং দার্শনিক। এই রাশি স্বাধীনতা এবং নতুন দিগন্ত অন্বেষণ করতে ভালোবাসে।',
                    traits: 'উদার, আদর্শবাদী, মহান রসবোধ এবং দার্শনিক।',
                    element: 'অগ্নি',
                    symbol: '♐'
                }
            ]
        }
    };

    const zodiacDates = [20, 19, 20, 20, 21, 21, 22, 23, 23, 23, 22, 22];
    const month = birthDate.getMonth();
    const day = birthDate.getDate();
    const zodiacIndex = day <= zodiacDates[month] ? month : (month + 1) % 12;
    const zodiacSign = zodiacData[locale as keyof typeof zodiacData].signs[zodiacIndex];
    const zodiacInfo = zodiacData[locale as keyof typeof zodiacData].descriptions[zodiacIndex];
    const zodiacInfoEn = zodiacData.en.descriptions[zodiacIndex];
    const zodiacInfoBn = zodiacData.bn.descriptions[zodiacIndex];

    return {
        sign: zodiacSign,
        info: zodiacInfo,
        infoEn: zodiacInfoEn,
        infoBn: zodiacInfoBn,
        index: zodiacIndex
    };
}