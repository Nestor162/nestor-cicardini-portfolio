'use client'
import React, { useState } from 'react'
import { michroma } from '../../lib/fonts'
import Link from 'next/link'
import IonIcon from '@reacticons/ionicons'
import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={`${michroma.className} h-16 border-b border-gray-600 fixed top-0 left-0 right-0 bg-white z-50`}>
      <div className=' h-full flex items-center justify-between mx-4 sm:mx-12'>
        <div>
          <Link href='/'>
            <span>NESTOR</span> <br /> <span>CICARDINI</span>
          </Link>
        </div>

        <span className='sm:hidden cursor-pointer' onClick={() => setMenuOpen(!menuOpen)}>
          <IonIcon name='menu-outline' size='large' />
        </span>

        <ul className='hidden sm:flex gap-4'>
          <li>
            <Link href='#' className='hover:font-bold hover-underline-animation'>
              About me
            </Link>
          </li>
          <li>
            <Link href='#' className='hover:font-bold hover-underline-animation'>
              Skills
            </Link>
          </li>
          <li>
            <Link href='#' className='hover:font-bold hover-underline-animation'>
              Contact
            </Link>
          </li>
          <li>
            <Link href='#' className='hover:font-bold hover-underline-animation'>
              Projects
            </Link>
          </li>
        </ul>

        <ul
          className={`flex sm:hidden flex-col fixed top-0 end-0 mt-16 p-4 gap-4 text-right text-2xl nav-menu ${
            menuOpen ? 'open' : ''
          }`}
        >
          <li>
            <Link href='#'>About me</Link>
          </li>
          <li>
            <Link href='#'>Skills</Link>
          </li>
          <li>
            <Link href='#'>Contact</Link>
          </li>
          <li>
            <Link href='#'>Projects</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
