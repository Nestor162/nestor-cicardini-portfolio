import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import AboutMe from '../(components)/AboutMe'
import ContactSection from '../(components)/ContactSection'
import Header from '../(components)/Header'
import MainSection from '../(components)/MainSection'
import ProjectsSection from '../(components)/ProjectsSection'
import SkillsSection from '../(components)/SkillsSection'

export default async function Home({ params: { lang } }) {
  const { page, navigation } = await getDictionary(lang)
  return (
    <main>
      <Header navLinks={navigation} />
      <MainSection />
      <AboutMe />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
