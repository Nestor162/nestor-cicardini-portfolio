const { default: Image } = require('next/image')

import React from 'react'

function FlipCard() {
  return (
    <div class='card-container'>
      <div class='card top-4'>
        <div class='front'>
          <div className='relative h-72 w-72'>
            <h3 className='text-center font-bold text-lg mt-4'>Minimal Weather App</h3>
            <Image
              className='absolute top-24 right-20 z-10'
              src='/img/laptop-mwa.png'
              alt='Minimal Wheater App project in a laptop screen'
              width={240}
              height={350}
            />
            <Image
              className='absolute left-10 top-12'
              src='/img/pc-mwa.png'
              alt='Minimal Wheater App project in a pc screen'
              width={350}
              height={350}
            />
          </div>
          <div class='details'></div>
        </div>
        <div class='back'>
          <a href='#' class='icon'>
            <i class='fab fa-instagram'></i>
          </a>
          <a href='#' class='icon'>
            <i class='fab fa-facebook-f'></i>
          </a>
          <a href='#' class='icon'>
            <i class='fab fa-twitter'></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default FlipCard
