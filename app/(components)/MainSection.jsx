import React from 'react'
import Image from 'next/image'
import { Chakra_Petch } from 'next/font/google'
import IonIcon from '@reacticons/ionicons'
import './MainSection.css'
import Link from 'next/link'

const chakra = Chakra_Petch({ weight: ['300', '400', '700'], subsets: ['latin'] })

function MainSection() {
  return (
    <main className={chakra.className}>
      <section className='flex justify-center gap-9 items-center mt-16'>
        <Image
          src={'/img/Profile_picture_purple_v1.png'}
          alt='Profile picture of Nestor Cicardini'
          width={245}
          height={245}
        />
        <h1 className='text-5xl font-bold flex flex-col'>
          <span className='mb-3'>I am a </span>
          <span className='animated-gradient-text'>FullStack</span>
          <span className='animated-gradient-text mb-3'>Developer</span>
        </h1>
      </section>
      <section className='flex justify-center gap-20 items-center'>
        <div className='flex gap-4 ms-4 speech-bubble'>
          <Link className='social-icon' href='https://github.com/Nestor162'>
            <IonIcon name='logo-github' size='large'></IonIcon>
          </Link>
          <Link className='social-icon' href='https://www.linkedin.com/in/nestor-cicardini-fullstack-developer/'>
            <IonIcon name='logo-linkedin' size='large'></IonIcon>
          </Link>
          <Link className='social-icon' href='mailto:nestorcicardini@gmail.com'>
            <IonIcon name='mail-outline' size='large'></IonIcon>
          </Link>
        </div>
        <div className='neon-border-button ms-1'>Download CV</div>
      </section>
    </main>
  )
}

export default MainSection
