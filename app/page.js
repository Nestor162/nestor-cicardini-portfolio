import AboutMe from './(components)/AboutMe'
import Header from './(components)/Header'
import MainSection from './(components)/MainSection'
import ProjectsSection from './(components)/ProjectsSection'
import SkillsSection from './(components)/SkillsSection'

export default function Home() {
  return (
    <main>
      <Header />
      <MainSection />
      <AboutMe />
      <SkillsSection />
      <ProjectsSection />
    </main>
  )
}
