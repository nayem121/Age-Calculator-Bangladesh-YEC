import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

const locales = ['en', 'bn']

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const baseUrl = 'https://agecalculator.yec.org.bd'
  const currentUrl = `${baseUrl}/${locale}`
  
  return {
    alternates: {
      canonical: currentUrl,
      languages: {
        'en-US': `${baseUrl}/en`,
        'bn-BD': `${baseUrl}/bn`,
      },
    },
    openGraph: {
      url: currentUrl,
      locale: locale === 'bn' ? 'bn_BD' : 'en_US',
    },
  }
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound()

  // Enable static rendering
  setRequestLocale(locale)

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}
