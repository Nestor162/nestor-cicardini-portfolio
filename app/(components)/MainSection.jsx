import React from 'react'
import Image from 'next/image'
import { chakra } from '../../lib/fonts'
import IonIcon from '@reacticons/ionicons'
import './MainSection.css'
import Link from 'next/link'
import WaveSeparator from './WaveSeparator'
import DownloadButton from './DownloadButton'

function MainSection({ content }) {
  return (
    <main className={`${chakra.className} w-screen`}>
      <WaveSeparator />
      <section className='flex flex-col sm:flex-row justify-center gap-0 sm:gap-9 items-center mt-20 sm:mt-32'>
        <div className='flex flex-col justify-center items-center'>
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
          <div className='hidden sm:flex gap-4 ms-4 speech-bubble me-3'>
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
        </div>
        <div className='flex sm:hidden gap-4 speech-bubble mb-4'>
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
        <div>
          <h1 className='text-center sm:text-left text-5xl font-bold flex flex-col mb-4 sm:mb-0 mt-7'>
            <span className='mb-2'>{content.line1} </span>
            <span className='animated-gradient-text'>{content.line2}</span>
            <span className='animated-gradient-text mb-3'>{content.line3}</span>
          </h1>

          <div className='mt-12 mx-12 sm:mx-0'>
            <DownloadButton content={content} />
          </div>
        </div>
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
