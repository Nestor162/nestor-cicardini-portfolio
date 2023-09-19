'use client'
import { ThemeProvider } from 'next-themes'
import { useRouter, usePathname } from 'next/navigation'
import React from 'react'
import { useEffect } from 'react'

export default function Providers({ children }) {
  const router = useRouter()
  const path = usePathname()
  const lang = path.split('/')[1]

  useEffect(() => {
    // Check if the requested locale is available, otherwise redirect to English
    if (!['en', 'es', 'it'].includes(lang)) {
      router.push('/en') // Redirect to English version
    }
  }, [path])

  return <ThemeProvider attribute='class'>{children}</ThemeProvider>
}
