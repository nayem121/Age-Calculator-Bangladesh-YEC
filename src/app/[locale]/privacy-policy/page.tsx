import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Metadata } from 'next'
import { Shield, Eye, Lock, Mail, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import SEOHead from '@/components/SEO/SEOHead'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'privacyPolicy' })
  
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      locale: locale === 'bn' ? 'bn_BD' : 'en_US',
    },
  }
}

export default function PrivacyPolicyPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  
  const isBengali = locale === 'bn'
  
  return (
    <div className="min-h-screen gradient-bg">
      <SEOHead 
        locale={locale} 
        pageType="privacy" 
        breadcrumbItems={[
          { name: isBengali ? 'হোম' : 'Home', href: `/${locale}` },
          { name: isBengali ? 'গোপনীয়তা নীতি' : 'Privacy Policy', href: `/${locale}/privacy-policy`, current: true }
        ]}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Shield className="w-16 h-16 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">
              {isBengali ? 'গোপনীয়তা নীতি' : 'Privacy Policy'}
            </h1>
            <p className="text-blue-100 text-lg">
              {isBengali 
                ? 'বয়স ক্যালকুলেটর বাংলাদেশ - অ্যান্ড্রয়েড অ্যাপ' 
                : 'Age Calculator Bangladesh - Android App'
              }
            </p>
            <p className="text-blue-200 text-sm mt-2">
              {isBengali ? 'কার্যকর তারিখ: ১ জানুয়ারি, ২০২৫' : 'Effective Date: January 1, 2025'}
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-lg shadow-xl p-8 space-y-8">
            
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Eye className="w-6 h-6 mr-2 text-blue-600" />
                {isBengali ? 'ভূমিকা' : 'Introduction'}
              </h2>
              <div className="prose max-w-none text-gray-700">
                <p>
                  {isBengali 
                    ? 'ইয়ুথ এমপাওয়ারমেন্ট সেন্টার (YEC) ("আমরা," "আমাদের," বা "আমাদের") Google Play Store-এ উপলব্ধ Age Calculator Bangladesh মোবাইল অ্যাপ্লিকেশন (অ্যাপ) পরিচালনা করে। এই গোপনীয়তা নীতি ব্যাখ্যা করে যে আপনি আমাদের অ্যাপ ব্যবহার করার সময় আমরা কীভাবে আপনার তথ্য সংগ্রহ, ব্যবহার, প্রকাশ এবং সুরক্ষা করি।'
                    : 'Youth Empowerment Center (YEC) ("we," "our," or "us") operates the Age Calculator Bangladesh mobile application (the "App") available on Google Play Store. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our App.'
                  }
                </p>
              </div>
            </section>

            {/* Data Collection */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Lock className="w-6 h-6 mr-2 text-blue-600" />
                {isBengali ? 'তথ্য সংগ্রহ' : 'Information We Collect'}
              </h2>
              <div className="prose max-w-none text-gray-700">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {isBengali ? 'ব্যক্তিগত তথ্য' : 'Personal Information'}
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    {isBengali 
                      ? 'জন্ম তারিখের তথ্য: অ্যাপটি আপনাকে আপনার জন্ম তারিখ ইনপুট করতে দেয় বয়স গণনা করার জন্য। এই তথ্যটি আপনার ডিভাইসে স্থানীয়ভাবে সংরক্ষিত হয় এবং আমাদের সার্ভারে প্রেরণ করা হয় না।'
                      : 'Birth Date Information: The App allows you to input your birth date to calculate your age. This information is stored locally on your device and is not transmitted to our servers.'
                    }
                  </li>
                  <li>
                    {isBengali 
                      ? 'ডিভাইস তথ্য: আমরা প্রযুক্তিগত সহায়তা এবং অ্যাপ উন্নতির উদ্দেশ্যে ডিভাইস মডেল, অপারেটিং সিস্টেম সংস্করণ এবং অ্যাপ সংস্করণের মতো মৌলিক ডিভাইস তথ্য সংগ্রহ করতে পারি।'
                      : 'Device Information: We may collect basic device information such as device model, operating system version, and app version for technical support and app improvement purposes.'
                    }
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                  {isBengali ? 'অ-ব্যক্তিগত তথ্য' : 'Non-Personal Information'}
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    {isBengali 
                      ? 'ব্যবহারের বিশ্লেষণ: আমরা অ্যাপের কর্মক্ষমতা এবং ব্যবহারকারীর অভিজ্ঞতা উন্নত করতে বেনামী ব্যবহারের পরিসংখ্যান সংগ্রহ করতে পারি।'
                      : 'Usage Analytics: We may collect anonymous usage statistics to improve app performance and user experience.'
                    }
                  </li>
                  <li>
                    {isBengali 
                      ? 'ক্র্যাশ রিপোর্ট: অ্যাপ ক্র্যাশের ক্ষেত্রে, আমরা প্রযুক্তিগত সমস্যা চিহ্নিত করতে এবং ঠিক করতে বেনামী ক্র্যাশ রিপোর্ট সংগ্রহ করতে পারি।'
                      : 'Crash Reports: In case of app crashes, we may collect anonymous crash reports to identify and fix technical issues.'
                    }
                  </li>
                </ul>
              </div>
            </section>

            {/* AdMob Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <ExternalLink className="w-6 h-6 mr-2 text-blue-600" />
                {isBengali ? 'বিজ্ঞাপন (AdMob)' : 'Advertising (AdMob)'}
              </h2>
              <div className="prose max-w-none text-gray-700">
                <p>
                  {isBengali 
                    ? 'আমাদের অ্যাপ Google AdMob ব্যবহার করে বিজ্ঞাপন প্রদর্শন করে। AdMob আপনার ডিভাইসের বিজ্ঞাপন ID এবং অন্যান্য অ-ব্যক্তিগত তথ্য সংগ্রহ করতে পারে। এই তথ্য Google-এর গোপনীয়তা নীতির অধীনে পরিচালিত হয়।'
                    : 'Our app uses Google AdMob to display advertisements. AdMob may collect your device\'s advertising ID and other non-personal information. This information is governed by Google\'s Privacy Policy.'
                  }
                </p>
                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <p className="text-sm">
                    <strong>{isBengali ? 'গুরুত্বপূর্ণ:' : 'Important:'}</strong> {isBengali 
                      ? 'আমরা আপনার জন্ম তারিখ বা অন্য কোন ব্যক্তিগত তথ্য AdMob বা অন্য কোন তৃতীয় পক্ষের সাথে শেয়ার করি না।'
                      : 'We do not share your birth date or any other personal information with AdMob or any third parties.'
                    }
                  </p>
                </div>
              </div>
            </section>

            {/* Data Usage */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {isBengali ? 'আমরা আপনার তথ্য কীভাবে ব্যবহার করি' : 'How We Use Your Information'}
              </h2>
              <div className="prose max-w-none text-gray-700">
                <p>
                  {isBengali 
                    ? 'আমরা সংগৃহীত তথ্য নিম্নলিখিত উদ্দেশ্যে ব্যবহার করি:'
                    : 'We use the collected information for the following purposes:'
                  }
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    {isBengali 
                      ? 'মূল কার্যকারিতা: বয়স গণনা সেবা, ক্যালেন্ডার রূপান্তর, রাশিচক্রের তথ্য এবং টিকাদানের সময়সূচী প্রদান করতে।'
                      : 'Core Functionality: To provide age calculation services, calendar conversions, zodiac sign information, and vaccination schedules.'
                    }
                  </li>
                  <li>
                    {isBengali 
                      ? 'অ্যাপ উন্নতি: অ্যাপের কর্মক্ষমতা এবং ব্যবহারকারীর অভিজ্ঞতা বিশ্লেষণ করে আমাদের সেবা উন্নত করতে।'
                      : 'App Improvement: To analyze app performance and user experience to enhance our services.'
                    }
                  </li>
                  <li>
                    {isBengali 
                      ? 'প্রযুক্তিগত সহায়তা: গ্রাহক সহায়তা প্রদান এবং প্রযুক্তিগত সমস্যা সমাধান করতে।'
                      : 'Technical Support: To provide customer support and troubleshoot technical issues.'
                    }
                  </li>
                  <li>
                    {isBengali 
                      ? 'আইনি সম্মতি: প্রযোজ্য আইন এবং বিধিবিধান মেনে চলতে।'
                      : 'Legal Compliance: To comply with applicable laws and regulations.'
                    }
                  </li>
                </ol>
              </div>
            </section>

            {/* Data Storage */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {isBengali ? 'তথ্য সংরক্ষণ এবং নিরাপত্তা' : 'Information Storage and Security'}
              </h2>
              <div className="prose max-w-none text-gray-700">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {isBengali ? 'স্থানীয় সংরক্ষণ' : 'Local Storage'}
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    {isBengali 
                      ? 'অ্যাপে প্রবেশ করা সমস্ত ব্যক্তিগত তথ্য (জন্ম তারিখ) আপনার ডিভাইসে স্থানীয়ভাবে সংরক্ষিত হয়।'
                      : 'All personal data (birth dates) entered in the app is stored locally on your device.'
                    }
                  </li>
                  <li>
                    {isBengali 
                      ? 'আমরা আমাদের সার্ভারে আপনার ব্যক্তিগত তথ্য সংরক্ষণ করি না।'
                      : 'We do not store your personal information on our servers.'
                    }
                  </li>
                  <li>
                    {isBengali 
                      ? 'আপনি যে কোন সময় অ্যাপটি মুছে ফেলে সমস্ত স্থানীয়ভাবে সংরক্ষিত তথ্য মুছে ফেলতে পারেন।'
                      : 'You can delete the app at any time to remove all locally stored data.'
                    }
                  </li>
                </ul>
              </div>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {isBengali ? 'তথ্য শেয়ারিং এবং প্রকাশ' : 'Data Sharing and Disclosure'}
              </h2>
              <div className="prose max-w-none text-gray-700">
                <p>
                  {isBengali 
                    ? 'আমরা আপনার ব্যক্তিগত তথ্য তৃতীয় পক্ষের কাছে বিক্রি, বাণিজ্য বা অন্য কোনভাবে স্থানান্তর করি না, নিম্নলিখিত পরিস্থিতিতে ব্যতীত:'
                    : 'We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:'
                  }
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    {isBengali 
                      ? 'আইনি প্রয়োজন: যখন আইন দ্বারা প্রয়োজন বা আমাদের অধিকার এবং নিরাপত্তা রক্ষা করতে।'
                      : 'Legal Requirements: When required by law or to protect our rights and safety.'
                    }
                  </li>
                  <li>
                    {isBengali 
                      ? 'সেবা প্রদানকারী: আমরা আমাদের অ্যাপ পরিচালনায় সহায়তা করে এমন বিশ্বস্ত তৃতীয় পক্ষের সেবা প্রদানকারীদের সাথে বেনামী, সমষ্টিগত তথ্য শেয়ার করতে পারি।'
                      : 'Service Providers: We may share anonymous, aggregated data with trusted third-party service providers who assist us in operating our app.'
                    }
                  </li>
                </ol>
              </div>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {isBengali ? 'শিশুদের গোপনীয়তা' : 'Children\'s Privacy'}
              </h2>
              <div className="prose max-w-none text-gray-700">
                <p>
                  {isBengali 
                    ? 'আমাদের অ্যাপটি সকল বয়সের ব্যবহারকারীদের জন্য ডিজাইন করা হয়েছে। আমরা ১৩ বছরের কম বয়সী শিশুদের কাছ থেকে পিতামাতার সম্মতি ছাড়া জেনে শুনে ব্যক্তিগত তথ্য সংগ্রহ করি না।'
                    : 'Our app is designed for users of all ages. We do not knowingly collect personal information from children under 13 without parental consent.'
                  }
                </p>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {isBengali ? 'আপনার অধিকার এবং পছন্দ' : 'Your Rights and Choices'}
              </h2>
              <div className="prose max-w-none text-gray-700">
                <p>
                  {isBengali 
                    ? 'আপনার ব্যক্তিগত তথ্য সম্পর্কে আপনার নিম্নলিখিত অধিকার রয়েছে:'
                    : 'You have the following rights regarding your personal information:'
                  }
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    {isBengali 
                      ? 'অ্যাক্সেস: আপনি আপনার ডিভাইসে সংরক্ষিত সমস্ত তথ্য দেখতে পারেন।'
                      : 'Access: You can view all data stored locally on your device.'
                    }
                  </li>
                  <li>
                    {isBengali 
                      ? 'মুছে ফেলা: আপনি অ্যাপটি আনইনস্টল করে সমস্ত ব্যক্তিগত তথ্য মুছে ফেলতে পারেন।'
                      : 'Deletion: You can delete all personal data by uninstalling the app.'
                    }
                  </li>
                  <li>
                    {isBengali 
                      ? 'সংশোধন: আপনি অ্যাপের মধ্যে যে কোন সময় আপনার জন্ম তারিখের তথ্য পরিবর্তন করতে পারেন।'
                      : 'Correction: You can modify your birth date information at any time within the app.'
                    }
                  </li>
                </ul>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Mail className="w-6 h-6 mr-2 text-blue-600" />
                {isBengali ? 'যোগাযোগের তথ্য' : 'Contact Information'}
              </h2>
              <div className="prose max-w-none text-gray-700">
                <p>
                  {isBengali 
                    ? 'এই গোপনীয়তা নীতি বা আমাদের তথ্য অনুশীলন সম্পর্কে আপনার কোন প্রশ্ন থাকলে, অনুগ্রহ করে আমাদের সাথে যোগাযোগ করুন:'
                    : 'If you have any questions about this Privacy Policy or our data practices, please contact us:'
                  }
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <p><strong>{isBengali ? 'ইয়ুথ এমপাওয়ারমেন্ট সেন্টার (YEC)' : 'Youth Empowerment Center (YEC)'}</strong></p>
                  <p>Email: nayem121@programmer.net</p>
                  <p>Website: <Link href="https://yec.org.bd" className="text-blue-600 hover:underline">https://yec.org.bd</Link></p>
                  <p>App Store: <Link href="https://play.google.com/store/apps/details?id=com.yec.agecalculatorbangladesh" className="text-blue-600 hover:underline">Google Play Store</Link></p>
                </div>
              </div>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {isBengali ? 'এই গোপনীয়তা নীতিতে পরিবর্তন' : 'Changes to This Privacy Policy'}
              </h2>
              <div className="prose max-w-none text-gray-700">
                <p>
                  {isBengali 
                    ? 'আমরা সময়ে সময়ে এই গোপনীয়তা নীতি আপডেট করতে পারি। আমরা নিম্নলিখিত উপায়ে আপনাকে কোন পরিবর্তনের বিষয়ে অবহিত করব:'
                    : 'We may update this Privacy Policy from time to time. We will notify you of any changes by:'
                  }
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    {isBengali 
                      ? 'অ্যাপে নতুন গোপনীয়তা নীতি পোস্ট করা'
                      : 'Posting the new Privacy Policy in the app'
                    }
                  </li>
                  <li>
                    {isBengali 
                      ? 'এই নীতির শীর্ষে "সর্বশেষ আপডেট" তারিখ আপডেট করা'
                      : 'Updating the "Last Updated" date at the top of this policy'
                    }
                  </li>
                </ul>
              </div>
            </section>

            {/* Footer */}
            <div className="border-t pt-6 mt-8">
              <p className="text-sm text-gray-600 text-center">
                {isBengali 
                  ? 'এই গোপনীয়তা নীতি Age Calculator Bangladesh মোবাইল অ্যাপ্লিকেশনের জন্য বিশেষভাবে ডিজাইন করা হয়েছে এবং Google Play Store-এর প্রয়োজনীয়তার সাথে সামঞ্জস্যপূর্ণ। আমাদের অ্যাপ ব্যবহার করে, আপনি এই গোপনীয়তা নীতিতে বর্ণিত শর্তাবলীর সাথে সম্মত হন।'
                  : 'This Privacy Policy is specifically designed for the Age Calculator Bangladesh mobile application and complies with Google Play Store requirements. By using our app, you agree to the terms outlined in this Privacy Policy.'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
