import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './providers'
import { Locale, i18n } from '@/i18n.config'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nestor Cicardini',
  description: 'Hello world, I am nestor cicardini a Fullstack Developer',
  icons: {
    rel: 'icon',
    type: 'image/x-icon',
    url: '/favicon.ico'
  }
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({ children, params }) {
  return (
    <html className='scroll-smooth' lang={params.lang} suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-slate-800 dark:text-slate-300`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
