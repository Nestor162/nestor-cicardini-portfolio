'use client'
import { useRouter } from 'next/navigation'

export default function DownloadButton({ content }) {
  return (
    <a
      href={`/CV/Nestor_Cicardini_CV_one_page_${content.cvLang}.pdf`}
      target='_blank'
      className='neon-border-button ms-1'
    >
      {content.button}
    </a>
  )
}
