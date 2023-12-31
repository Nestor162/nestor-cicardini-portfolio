import Image from 'next/image'
import React from 'react'
import { vt323 } from '../../lib/fonts'

function PixelCharacter() {
  return (
    <>
      <div className={`${vt323.className} flex flex-col items-center gap-3 relative scale-y-[0.9]`}>
        <Image
          className='absolute right-2/4'
          src='/img/pixel-avatar/pixel-avatar.png'
          width={185}
          height={185}
          alt='pixel art representation of Nestor'
        />
        <a
          href='https://www.linkedin.com/in/nestor-cicardini-fullstack-developer/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='relative'>
            <Image
              className='ms-28'
              src='/img/pixel-avatar/sepach-bubble-1.png'
              alt='pixel speach bubble'
              width={150}
              height={150}
            />
            <Image
              className='absolute left-[134px] top-4'
              src='/img/pixel-avatar/linkedin-pixel-logo.png'
              alt='pixel art linkedin logo'
              width={28}
              height={28}
            />
            <span className='absolute top-[13px] left-[167px] text-2xl text-black'>LinkedIn</span>
          </div>
        </a>
        <a
          href='mailto:nestorcicardini@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          className='text-dark text-decoration-none'
        >
          <div className='relative'>
            <Image
              className='ms-32 -mt-4'
              src='/img/pixel-avatar/sepach-bubble-2.png'
              alt='pixel speach bubble'
              width={140}
              height={140}
            />
            <Image
              className='absolute right-20 bottom-[17px]'
              src='/img/pixel-avatar/email-pixel-icon.png'
              alt='pixel art github logo'
              width={39}
              height={39}
            />
            <span className='absolute bottom-[15px] right-5 text-2xl text-black'>Email</span>
          </div>
        </a>
        <Image
          className='absolute -bottom-[39px] -z-50 w-screen'
          src='/img/grass-v3.png'
          alt='pixel art github logo'
          width={1600}
          height={1000}
        />
      </div>
    </>
  )
}

export default PixelCharacter
