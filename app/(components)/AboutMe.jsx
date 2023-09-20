import React from 'react'
import { chakra, michroma } from '../../lib/fonts'

function AboutMe({ content }) {
  return (
    <article className='mt-28 ms-0 md:ms-9'>
      <div
        className={`${chakra.className} relative w-5/6 md:w-3/5 text-xl mx-auto space-y-4 mb-6 border border-gray-600 dark:border-slate-400 rounded pt-3 pb-7 px-10 md:py-5 md:px-12 mt-32 md:mt-40 shadow-lg`}
      >
        <h2 className={`${michroma.className} absolute -top-5 left-4 text-2xl bg-white dark:bg-slate-800 px-3`}>
          {content.title}
        </h2>
        <span id='about' className='absolute -top-28 w-14 h-8'></span>

        <p dangerouslySetInnerHTML={{ __html: content.paragraph1 }} />
        <p dangerouslySetInnerHTML={{ __html: content.paragraph2 }} />
        <p dangerouslySetInnerHTML={{ __html: content.paragraph3 }} />
        <p dangerouslySetInnerHTML={{ __html: content.paragraph4 }} />

        {/* <p>
          Beyond the world of programming I&apos;m an avid reader of science fiction and fantasy books, a fan of anime,
          and I also have a deep fascination with ancient history.
        </p> */}
      </div>
    </article>
  )
}

export default AboutMe
