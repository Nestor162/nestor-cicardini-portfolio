import React from 'react'
import PixelCharacter from './PixelCharacter'
import { chakra, michroma } from '../../lib/fonts'

function ContactSection() {
  return (
    <div className='relative'>
      <span id='contact' className='absolute -top-24 sm:-top-28 w-14 h-8'></span>
      <h2 className={`${michroma.className} text-center mt-44 mb-12 text-4xl bg-white px-3 dark:bg-slate-800`}>
        Contact me!
      </h2>
      <PixelCharacter />
    </div>
  )
}

export default ContactSection
