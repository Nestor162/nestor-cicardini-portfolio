import React from 'react'
import './WaveSeparator.css'

function WaveSeparator() {
  return (
    <section className=' absolute w-screen h-[875px] sm:h-[620px] top-0 left-0 right-0 bg-slate-100 dark:bg-slate-700 -z-10'>
      <div className='wave absolute h-[45px] sm:h-[70px] w-full bottom-0 bg-slate-100 dark:bg-slate-700'></div>
    </section>
  )
}

export default WaveSeparator
