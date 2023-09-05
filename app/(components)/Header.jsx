import React from 'react'
import { Michroma } from 'next/font/google'
import Link from 'next/link'

const michroma = Michroma({ weight: '400', subsets: ['latin'] })

function Header() {
  return (
    <header className={`${michroma.className} h-16 border-b`}>
      <div className=' h-full flex items-center justify-between mx-12'>
        <div>
          <Link href='/'>
            <span>NESTOR</span> <br /> <span>CICARDINI</span>
          </Link>
        </div>

        <ul className='flex gap-4'>
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
      </div>
    </header>
  )
}

export default Header
