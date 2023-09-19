'use client'
import React, { useState, useEffect } from 'react'
import { michroma } from '../../lib/fonts'
import Link from 'next/link'
import IonIcon from '@reacticons/ionicons'
import './Header.css'
import ThemeToggler from './ThemeToggler'
import { useTheme } from 'next-themes'
import LanguagePopover from './LanguagePopover'

function Header({ navLinks }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [displayTheme, setDisplayTheme] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setDisplayTheme(resolvedTheme)
  }, [resolvedTheme])

  return (
    <header
      className={`${michroma.className} h-16 border-b border-gray-600 fixed top-0 left-0 right-0 bg-white z-50 shadow dark:bg-slate-600 dark:border-gray-500 dark:text-slate-200`}
    >
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
            <ThemeToggler />
          </li>
          <li className='inline-block'>
            <Link href='#about' className='hover-underline-animation'>
              {navLinks.about}
            </Link>
          </li>
          <li>
            <Link href='#skills' className='hover-underline-animation'>
              {navLinks.skills}
            </Link>
          </li>
          <li>
            <Link href='#projects' className='hover-underline-animation'>
              {navLinks.projects}
            </Link>
          </li>
          <li>
            <Link href='#contact' className='hover-underline-animation'>
              {navLinks.contact}
            </Link>
          </li>
        </ul>

        <ul
          className={`flex sm:hidden flex-col fixed top-0 end-0 mt-16 p-4 gap-4 text-right text-2xl border-l border-black shadow-lg nav-menu bg-white dark:bg-slate-700 ${
            menuOpen ? 'open' : ''
          }`}
        >
          <li className='me-5'>
            <Link
              href='#about'
              onClick={() => {
                setMenuOpen(false)
              }}
            >
              About me
            </Link>
          </li>
          <li className='me-5'>
            <Link
              href='#skills'
              onClick={() => {
                setMenuOpen(false)
              }}
            >
              Skills
            </Link>
          </li>
          <li className='me-5'>
            <Link
              href='#projects'
              onClick={() => {
                setMenuOpen(false)
              }}
            >
              Projects
            </Link>
          </li>
          <li className='me-5'>
            <Link
              href='#contact'
              onClick={() => {
                setMenuOpen(false)
              }}
            >
              Contact
            </Link>
          </li>
          <li className='me-5'>
            <span className='me-3 text-xl'>{displayTheme}</span>
            <ThemeToggler />
          </li>
          <li className='me-5'>
            <LanguagePopover />
          </li>
        </ul>
      </div>
      <div className='fixed bottom-5  hidden sm:block sm:right-2 lg:right-10  '>
        <LanguagePopover direction='up' />
      </div>
    </header>
  )
}

export default Header
