import React from 'react'
import { chakra, michroma } from '../../lib/fonts'
import Image from 'next/image'

function SkillsSection() {
  const skills = [
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      alt: 'HTML5 icon',
      name: 'HTML5'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      alt: 'CSS icon',
      name: 'CSS'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      alt: 'Javascrip icon',
      name: 'Javascript'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      alt: 'React icon',
      name: 'React'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      alt: 'Next.js icon',
      name: 'Next.js'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      alt: 'Bootstrap icon',
      name: 'Bootstrap'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
      alt: 'Tailwind icon',
      name: 'Tailwind'
    }
  ]

  return (
    <article className='mt-28 ms-0 md:ms-9'>
      <div
        className={`${chakra.className} relative w-5/6 md:w-3/5 text-xl mx-auto space-y-4 mb-6 border border-gray-600 rounded py-3 px-10 md:py-5 md:px-12 mt-32 md:mt-40`}
      >
        <h2 className={`${michroma.className} absolute -top-5 left-4 text-2xl bg-white px-3`}>Skills</h2>
        <span id='skills' className='absolute -top-28 w-14 h-8'></span>
        <h4 className='absolute -rotate-90 top-10 start-0'>Frontend</h4>
        <div className='flex justify-center items-center gap-4'>
          {skills.map(skill => (
            <figure key={skill.name} className='flex flex-col justify-center items-center'>
              <Image src={skill.src} alt={skill.alt} width={50} height={50} />
              <figcaption>{skill.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </article>
  )
}

export default SkillsSection
