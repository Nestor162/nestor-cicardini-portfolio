import React from 'react'
import { chakra, michroma } from '../../lib/fonts'
import './ProjectSection.css'
import FlipCard from './FlipCard'
import Image from 'next/image'

function ProjectsSection({ content }) {
  return (
    <article className='mt-28 ms-0 md:ms-9'>
      <div
        className={`${chakra.className} relative w-5/6 md:w-3/5 text-xl mx-auto mb-6 border border-gray-600 dark:border-slate-400 rounded py-3 px-7 md:py-12 mt-32 md:mt-40 shadow-lg`}
      >
        <h2 className={`${michroma.className} absolute -top-5 left-4 text-2xl bg-white dark:bg-slate-800 px-3`}>
          {content.title}
        </h2>
        <span id='projects' className='absolute -top-24 sm:-top-28 w-14 h-8'></span>

        <div className='relative w-full h-full flex justify-center items-center gap-0 sm:gap-5 flex-col xl:flex-row xl:flex-wrap p-0 sm:p-0 '>
          <FlipCard
            title='Minimal Weather App'
            img1='/img/laptop-mwa.png'
            img1Width={240}
            img2='/img/pc-mwa.png'
            description={content.project1Description}
            linkDemo='https://minimalweatherapp.vercel.app/'
            linkGitHub='https://github.com/Nestor162/U3-D10-Weekly-Homework-Weather-App'
          >
            <Image
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
              alt='react icon'
              width={50}
              height={50}
            />
            <Image
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'
              alt='redux icon'
              width={50}
              height={50}
            />
            <Image
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
              alt='bootstrap icon'
              width={50}
              height={50}
            />
          </FlipCard>
          <div className='-mt-12 sm:mt-0 me-0'>
            <FlipCard
              title='SkillTrade'
              img1='/img/tablet-skilltrade.png'
              img1Width={450}
              img2='/img/laptop-skilltrade.png'
              description={content.project2Description}
              linkDemo='https://skilltrade.vercel.app/'
              linkGitHub='https://github.com/Nestor162/SkillTrade-Capstone-Project-Frontend'
            >
              <Image
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
                alt='react icon'
                width={50}
                height={50}
              />
              <Image
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
                alt='bootstrap icon'
                width={50}
                height={50}
              />
              <Image
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
                alt='java icon'
                width={50}
                height={50}
              />
              <Image
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg'
                alt='spring icon'
                width={50}
                height={50}
              />
              <Image
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
                alt='postgresql icon'
                width={50}
                height={50}
              />
            </FlipCard>
          </div>
          <div className='-mt-12 sm:mt-0'>
            <FlipCard
              title='YourBMICalculator'
              img1='/img/BMI_icon.webp'
              img1Width={69}
              img2Width={88}
              leftImg1={160}
              leftImg2={55}
              topImg1={110}
              topImg2={62}
              img2='/img/BMI_1.png'
              description={content.project3Description}
              linkDemo='https://www.linkedin.com/posts/nestor-cicardini-fullstack-developer_androiddevelopment-kotlin-firstapp-activity-7113169368183623680-6DEH?utm_source=share&utm_medium=member_desktop'
              linkGitHub='https://github.com/Nestor162/YourBMICalculator'
            >
              <Image
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg'
                alt='Kotlin icon'
                width={50}
                height={50}
              />
              <Image
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg'
                alt='Android Studio icon'
                width={50}
                height={50}
              />
            </FlipCard>
          </div>
          <div className='-mt-12 sm:mt-0'>
            <FlipCard
              title='SimpleToDoApp'
              img1='/img/STDA-logo.png'
              img1Width={69}
              img2Width={88}
              leftImg1={160}
              leftImg2={55}
              topImg1={110}
              topImg2={62}
              img2='/img/STDA.png'
              description={content.project4Description}
              linkDemo='https://github.com/Nestor162/SimpleToDoApp'
              linkGitHub='https://github.com/Nestor162/SimpleToDoApp'
            >
              <Image
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg'
                alt='Kotlin icon'
                width={50}
                height={50}
              />
              <Image
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg'
                alt='Android Studio icon'
                width={50}
                height={50}
              />
            </FlipCard>
          </div>
          <div className='-mt-12 sm:mt-0'>
            <FlipCard
              title='GameChase'
              img1='/img/gc_laptop.png'
              img1Width={240}
              img2='/img/gc_desktop.png'
              description={content.project5Description}
              linkDemo='https://gamechase.vercel.app/'
              linkGitHub='https://github.com/Nestor162/GameChase'
            >
              <Image
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
                alt='React icon'
                width={50}
                height={50}
              />
              <Image src='/img/icons8-chakra-ui-48.png' alt='Chakra UI icon' width={50} height={50} />
              <Image
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
                alt='Typescript icon'
                width={50}
                height={50}
              />
            </FlipCard>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProjectsSection
