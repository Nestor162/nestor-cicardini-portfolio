import React from 'react'
import { chakra, michroma } from '../../lib/fonts'
import './ProjectSection.css'
import FlipCard from './FlipCard'
import Image from 'next/image'

function ProjectsSection() {
  return (
    <article className='mt-28 ms-0 md:ms-9'>
      <div
        className={`${chakra.className} relative w-5/6 md:w-3/5 text-xl mx-auto mb-6 border border-gray-600 rounded py-3 px-7 md:py-5 md:px-12 mt-32 md:mt-40 shadow-lg`}
      >
        <h2 className={`${michroma.className} absolute -top-5 left-4 text-2xl bg-white px-3`}>Projects</h2>
        <span id='projects' className='absolute -top-24 sm:-top-28 w-14 h-8'></span>

        <div className='relative w-full h-full flex justify-center items-center gap-5 flex-col lg:flex-row p-10'>
          <FlipCard
            title='Minimal Weather App'
            img1='/img/laptop-mwa.png'
            img2='/img/pc-mwa.png'
            description={'Weather application with a clean and minimalistic interface.'}
            linkDemo='https://minimalweatherapp.vercel.app/'
            linkGitHub='https://github.com/Nestor162/U3-D10-Weekly-Homework-Weather-App'
          >
            <Image
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
              alt='react icon'
              width={50}
              height={50}
            />
            <Image
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'
              alt='redux icon'
              width={50}
              height={50}
            />
            <Image
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
              alt='bootstrap icon'
              width={50}
              height={50}
            />
          </FlipCard>
          <FlipCard
            title='Minimal Weather App'
            img1='/img/laptop-mwa.png'
            img2='/img/pc-mwa.png'
            description={'Weather application with a clean and minimalistic interface.'}
            linkDemo='https://minimalweatherapp.vercel.app/'
            linkGitHub='https://github.com/Nestor162/U3-D10-Weekly-Homework-Weather-App'
          >
            <Image
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
              alt='react icon'
              width={50}
              height={50}
            />
            <Image
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'
              alt='redux icon'
              width={50}
              height={50}
            />
            <Image
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
              alt='bootstrap icon'
              width={50}
              height={50}
            />
          </FlipCard>
        </div>
      </div>
    </article>
  )
}

export default ProjectsSection
