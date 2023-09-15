import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './providers'

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

export default function RootLayout({ children }) {
  return (
    <html className='scroll-smooth' lang='en' suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-slate-800 dark:text-slate-300`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
