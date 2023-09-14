import React from 'react'
import { chakra, michroma } from '../../lib/fonts'
import Image from 'next/image'

function SkillsSection() {
  const skillsFront = [
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

  const skillsBack = [
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      alt: 'Java icon',
      name: 'Java'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      alt: 'Spring icon',
      name: 'Spring'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      alt: 'PostgreSQL icon',
      name: 'PostgreSQL'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      alt: 'MySQL icon',
      name: 'MySQL'
    }
  ]

  const tools = [
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      alt: 'git icon',
      name: 'git'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
      alt: 'npm icon',
      name: 'npm'
    },
    {
      src: '/img/postman.svg',
      alt: 'Postman icon',
      name: 'Postman'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      alt: 'Figma icon',
      name: 'Figma'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg',
      alt: 'Photoshop icon',
      name: 'Photoshop'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg',
      alt: 'Trello icon',
      name: 'Trello'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg',
      alt: 'Markdown icon',
      name: 'Markdown'
    }
  ]

  return (
    <article className='mt-28 ms-0 md:ms-9'>
      <div
        className={`${chakra.className} relative w-5/6 md:w-3/5 text-xl mx-auto mb-6 border border-gray-600 dark:border-slate-400 rounded py-3 px-7 md:py-5 md:px-12 mt-32 md:mt-40 shadow-lg`}
      >
        <h2 className={`${michroma.className} absolute -top-5 left-4 text-2xl bg-white dark:bg-slate-800 px-3`}>
          Skills
        </h2>
        <span id='skills' className='absolute -top-24 sm:-top-28 w-14 h-8'></span>

        <h4 className='hidden xl:block absolute -rotate-90 top-16 start-0'>Frontend</h4>

        <h4 className='block xl:hidden text-center mt-7 font-bold'>Frontend</h4>

        <div className='flex justify-center items-center gap-4 flex-wrap mt-3 sm:mt-7 '>
          {skillsFront.map(skill => (
            <figure key={skill.name} className='flex flex-col justify-center items-center'>
              <Image src={skill.src} alt={skill.alt} width={50} height={50} />
              <figcaption className='text-sm sm:text-xl'>{skill.name}</figcaption>
            </figure>
          ))}
        </div>

        <h4 className='hidden xl:block absolute -rotate-90 top-52 start-0'>Backend</h4>
        <h4 className='block xl:hidden text-center mt-10 font-bold'>Backend</h4>

        <div className='flex justify-center items-center gap-4 flex-wrap mt-3 sm:mt-14'>
          {skillsBack.map(skill => (
            <figure key={skill.name} className='flex flex-col justify-center items-center'>
              <Image src={skill.src} alt={skill.alt} width={50} height={50} />
              <figcaption className='text-sm sm:text-xl'>{skill.name}</figcaption>
            </figure>
          ))}
        </div>

        <h4 className='hidden xl:block absolute -rotate-90 start-3' style={{ top: '21.5rem' }}>
          Tools
        </h4>
        <h4 className='block xl:hidden text-center mt-10 font-bold'>Tools</h4>

        <div className='flex justify-center items-center gap-4 flex-wrap sm:mt-14 mt-3 mb-7'>
          {tools.map(skill => (
            <figure key={skill.name} className='flex flex-col justify-center items-center'>
              <Image src={skill.src} alt={skill.alt} width={50} height={50} />
              <figcaption className='text-sm sm:text-xl'>{skill.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </article>
  )
}

export default SkillsSection
