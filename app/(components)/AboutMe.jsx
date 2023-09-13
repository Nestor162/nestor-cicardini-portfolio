import React from 'react'
import { chakra, michroma } from '../../lib/fonts'

function AboutMe() {
  return (
    <article className='mt-28 ms-0 md:ms-9'>
      <div
        className={`${chakra.className} relative w-5/6 md:w-3/5 text-xl mx-auto space-y-4 mb-6 border border-gray-600 rounded pt-3 pb-7 px-10 md:py-5 md:px-12 mt-32 md:mt-40 shadow-lg`}
      >
        <h2 className={`${michroma.className} absolute -top-5 left-4 text-2xl bg-white px-3`}>About Me</h2>
        <span id='about' className='absolute -top-28 w-14 h-8'></span>

        <p>
          Hello! My name is <strong>Nestor Cicardini</strong>, and I&apos;m a passionate{' '}
          <strong>full-stack programmer from Argentina</strong>.{' '}
        </p>
        <p>
          Despite being a novice programmer, I&apos;ve already tackled personal projects, gaining{' '}
          <strong>hands-on experience </strong>
          and building a <strong>strong foundation</strong> in various programming languages, frameworks, and
          technologies.
        </p>
        <p>
          What sets me apart is my <strong>insatiable curiosity</strong> and commitment to{' '}
          <strong>staying updated</strong> with industry trends, always ready to embrace new challenges and expand my
          skill set.
        </p>

        {/* <p>
          Beyond the world of programming I&apos;m an avid reader of science fiction and fantasy books, a fan of anime,
          and I also have a deep fascination with ancient history.
        </p> */}
        <p>
          Thank you for visiting my portfolio! Feel free to explore my projects and get in touch if you&apos;d like to
          collaborate or discuss any exciting opportunities.
        </p>
      </div>
    </article>
  )
}

export default AboutMe
