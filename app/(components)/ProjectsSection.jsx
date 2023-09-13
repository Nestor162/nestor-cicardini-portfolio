import React from 'react'
import { chakra, michroma } from '../../lib/fonts'
import Image from 'next/image'
import './ProjectSection.css'

function ProjectsSection() {
  return (
    <article className='mt-28 ms-0 md:ms-9'>
      <div
        className={`${chakra.className} relative w-5/6 md:w-3/5 text-xl mx-auto mb-6 border border-gray-600 rounded py-3 px-7 md:py-5 md:px-12 mt-32 md:mt-40 shadow-lg h-80`}
      >
        <h2 className={`${michroma.className} absolute -top-5 left-4 text-2xl bg-white px-3`}>Projects</h2>
        <span id='projects' className='absolute -top-24 sm:-top-28 w-14 h-8'></span>

        {/* <div className='relative bg-red-600 h-72 w-72'>
          <h3 className='text-center'>Minimal Weather App</h3>
          <Image
            className='absolute bottom-10 right-20 z-10'
            src='/img/laptop-mwa.png'
            alt='Minimal Wheater App project in a laptop screen'
            width={240}
            height={350}
          />
          <Image
            className='absolute left-10 top-4'
            src='/img/pc-mwa.png'
            alt='Minimal Wheater App project in a pc screen'
            width={350}
            height={350}
          />
        </div> */}
        <div className='relative w-full h-full '>
          <div class='card-container'>
            <div class='card top-4'>
              <div class='front'>
                <div className='relative h-72 w-72'>
                  <h3 className='text-center font-bold text-lg mt-4'>Minimal Weather App</h3>
                  <Image
                    className='absolute top-24 right-20 z-10'
                    src='/img/laptop-mwa.png'
                    alt='Minimal Wheater App project in a laptop screen'
                    width={240}
                    height={350}
                  />
                  <Image
                    className='absolute left-10 top-12'
                    src='/img/pc-mwa.png'
                    alt='Minimal Wheater App project in a pc screen'
                    width={350}
                    height={350}
                  />
                </div>
                <div class='details'></div>
              </div>
              <div class='back'>
                <a href='#' class='icon'>
                  <i class='fab fa-instagram'></i>
                </a>
                <a href='#' class='icon'>
                  <i class='fab fa-facebook-f'></i>
                </a>
                <a href='#' class='icon'>
                  <i class='fab fa-twitter'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProjectsSection
