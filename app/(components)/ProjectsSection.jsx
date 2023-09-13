import React from 'react'
import { chakra, michroma } from '../../lib/fonts'
import './ProjectSection.css'
import FlipCard from './FlipCard'

function ProjectsSection() {
  return (
    <article className='mt-28 ms-0 md:ms-9'>
      <div
        className={`${chakra.className} relative w-5/6 md:w-3/5 text-xl mx-auto mb-6 border border-gray-600 rounded py-3 px-7 md:py-5 md:px-12 mt-32 md:mt-40 shadow-lg h-80`}
      >
        <h2 className={`${michroma.className} absolute -top-5 left-4 text-2xl bg-white px-3`}>Projects</h2>
        <span id='projects' className='absolute -top-24 sm:-top-28 w-14 h-8'></span>

        <div className='relative w-full h-full '>
          <FlipCard />
        </div>
      </div>
    </article>
  )
}

export default ProjectsSection
