import React from 'react'
import PixelCharacter from './PixelCharacter'
import { chakra, michroma } from '../../lib/fonts'

function ContactSection() {
  return (
    <div>
      <h2 className={`${michroma.className} text-center mt-44 mb-12 text-4xl bg-white px-3`}>Contact me!</h2>
      <PixelCharacter />
    </div>
  )
}

export default ContactSection
