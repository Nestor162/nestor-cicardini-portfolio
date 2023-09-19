import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import AboutMe from '../(components)/AboutMe'
import ContactSection from '../(components)/ContactSection'
import Header from '../(components)/Header'
import MainSection from '../(components)/MainSection'
import ProjectsSection from '../(components)/ProjectsSection'
import SkillsSection from '../(components)/SkillsSection'

export default async function Home({ params: { lang } }) {
  const { section, navigation } = await getDictionary(lang)
  return (
    <>
      <Header navLinks={navigation} />
      <MainSection content={section.main} />
      <AboutMe content={section.about} />
      <SkillsSection content={section.skills} />
      <ProjectsSection content={section.projects} />
      <ContactSection content={section.contact} />
    </>
  )
}
