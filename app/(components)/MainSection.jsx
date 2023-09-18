import React from 'react'
import Image from 'next/image'
import { chakra } from '../../lib/fonts'
import IonIcon from '@reacticons/ionicons'
import './MainSection.css'
import Link from 'next/link'
import WaveSeparator from './WaveSeparator'

function MainSection() {
  return (
    <main className={`${chakra.className} w-screen`}>
      <WaveSeparator />
      <section className='flex flex-col sm:flex-row justify-center gap-0 sm:gap-9 items-center mt-20 sm:mt-32'>
        <Image
          className='inline-block dark:hidden'
          priority
          src='/img/Profile_picture_purple_v1.png'
          alt='Profile picture of Nestor Cicardini'
          width={245}
          height={245}
        />
        <Image
          className='hidden dark:inline-block'
          priority
          src='/img/Profile_picture_purple_v2.png'
          alt='Profile picture of Nestor Cicardini'
          width={245}
          height={245}
        />
        <div className='flex sm:hidden gap-4 speech-bubble mb-4 '>
          <Link className='social-icon' href='https://github.com/Nestor162' target='blank'>
            <IonIcon name='logo-github' size='large'></IonIcon>
          </Link>
          <Link
            className='social-icon'
            href='https://www.linkedin.com/in/nestor-cicardini-fullstack-developer/'
            target='blank'
          >
            <IonIcon name='logo-linkedin' size='large'></IonIcon>
          </Link>
          <Link className='social-icon' href='mailto:nestorcicardini@gmail.com' target='blank'>
            <IonIcon name='mail-outline' size='large'></IonIcon>
          </Link>
        </div>
        <h1 className='text-center sm:text-left text-5xl font-bold flex flex-col mb-4 sm:mb-0'>
          <span className='mb-3'>I am a </span>
          <span className='animated-gradient-text'>FullStack</span>
          <span className='animated-gradient-text mb-3'>Developer</span>
        </h1>
      </section>
      <section className='flex flex-col sm:flex-row justify-center gap-20 items-center'>
        <div className='hidden sm:flex gap-4 ms-4 speech-bubble '>
          <Link className='social-icon' href='https://github.com/Nestor162' target='blank'>
            <IonIcon name='logo-github' size='large'></IonIcon>
          </Link>
          <Link
            className='social-icon'
            href='https://www.linkedin.com/in/nestor-cicardini-fullstack-developer/'
            target='blank'
          >
            <IonIcon name='logo-linkedin' size='large'></IonIcon>
          </Link>
          <Link className='social-icon' href='mailto:nestorcicardini@gmail.com' target='blank'>
            <IonIcon name='mail-outline' size='large'></IonIcon>
          </Link>
        </div>
        <a href='/CV/Nestor_Cicardini_CV_one_page_eng.pdf' download className='neon-border-button ms-1'>
          Download CV
        </a>
      </section>
      <div className='flex justify-center mt-24'>
        <div className='w-32'>
          <div className='chevron bounce'></div>
          <div className='chevron bounce'></div>
        </div>
      </div>
    </main>
  )
}

export default MainSection
