'use client'
import { usePathname, useRouter } from 'next/navigation'

export default function DownloadButton({ content }) {
  const router = useRouter()
  const path = usePathname()
  const lang = path.split('/')[1]
  return (
    <a
      // href={`/CV/Nestor_Cicardini_CV_one_page_${content.cvLang}.pdf`}
      onClick={() => {
        const filePath = `${lang}/CV/Nestor_Cicardini_CV_one_page_${content.cvLang}.pdf`
        router.push(filePath)
      }}
      target='_blank'
      className='neon-border-button ms-1'
    >
      {content.button}
    </a>
  )
}
