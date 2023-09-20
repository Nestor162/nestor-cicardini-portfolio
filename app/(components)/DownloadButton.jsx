'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function DownloadButton({ content }) {
  const path = usePathname()
  const lang = path.split('/')[1]
  return (
    <Link
      href={`${lang}/CV/Nestor_Cicardini_CV_one_page_${content.cvLang}.pdf`}
      target='_blank'
      rel='noopener noreferrer'
      className='neon-border-button ms-1 flex justify-center sm:inline-block'
    >
      {content.button}
    </Link>
  )
}
