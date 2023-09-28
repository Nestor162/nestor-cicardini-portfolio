'use client'
const { default: Image } = require('next/image')
import IonIcon from '@reacticons/ionicons'
import React, { useState } from 'react'

function FlipCard({ title, img1, img2, description, children, linkDemo, linkGitHub, img1Width, img2Width = 350 }) {
  const [isToggled, setToggle] = useState(false)

  const handleClick = () => {
    setToggle(!isToggled)
  }

  return (
    <div className='card-container scale-y-[.65] scale-x-[.65] sm:scale-100'>
      <div className={`card ${isToggled ? 'hover' : ''}`} onClick={handleClick}>
        <div className='front'>
          <div className='relative h-72 w-72'>
            <h3 className='text-center font-bold text-lg mt-4'>{title}</h3>
            <Image
              className='absolute top-24 right-20 z-10'
              src={img1}
              alt={`${title} project in a laptop screen`}
              width={img1Width}
              height={350}
            />
            <Image
              className='absolute left-10 top-12'
              src={img2}
              alt={`${title} project in a pc screen`}
              width={img2Width}
              height={350}
            />
          </div>
          <div className='details'></div>
        </div>
        <div className='back flex flex-col '>
          <div className='p-4'>{description}</div>
          <div className='flex gap-2'>{children}</div>
          <div className='flex gap-4'>
            <a
              href={linkDemo}
              target='blank'
              className='border border-gray-500 px-2 py-1 rounded-xl flex items-center gap-1 shadow-md transition ease-in-out duration-300 hover:bg-black hover:text-white '
            >
              Demo <IonIcon name='open-outline' />
            </a>
            <a
              href={linkGitHub}
              target='blank'
              className='border border-gray-500 px-2 py-1 rounded-xl flex items-center gap-1 shadow-md transition ease-in-out duration-300 hover:bg-black hover:text-white'
            >
              Repo <IonIcon name='logo-github' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlipCard
