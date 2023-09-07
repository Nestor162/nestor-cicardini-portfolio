import React from 'react'
import { chakra, michroma } from '../../lib/fonts'

function AboutMe() {
  return (
    <article className={`${michroma.className} mt-28 text-2xl ms-9 font-bold`}>
      <h2 className='ms-28 mb-10'>About Me</h2>
      <div className={`${chakra.className} w-3/5 text-xl mx-auto space-y-4 mb-6`}>
        <p>Hello! My name is Nestor Cicardini, and I&apos;m a passionate full-stack programmer from Argentina. 🇦🇷 </p>
        <p>
          My journey into the world of software development began at a young age when I discovered my fascination for
          coding. I&apos;m still a novice programmer, but I&apos;ve already embarked some personal projects that have
          allowed me to apply my skills and learn from hands-on experience. These projects have given me a solid
          foundation in various programming languages, frameworks, and technologies, and I&apos;m eager to take on more
          challenges and continue growing. 🚀
        </p>
        <p>
          What sets me apart as a developer is my unwavering curiosity and dedication to staying up-to-date with the
          latest industry trends. I believe in the power of continuous learning, and I&apos;m always eager to take on
          new challenges and expand my skill set.
        </p>
        <p>
          Beyond the world of programming I&apos;m an avid reader of science fiction and fantasy books, a fan of anime,
          and I also have a deep fascination with ancient history.
        </p>
        <p>
          Thank you for visiting my portfolio! Feel free to explore my projects and get in touch if you&apos;d like to
          collaborate or discuss any exciting opportunities. Let&apos;s create something amazing together.
        </p>
      </div>
    </article>
  )
}

export default AboutMe
