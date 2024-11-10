import './assets/App.css'
import AboutSection from './components/AboutSection'
import HeroSection from './components/HeroSection'
import NavBarSection from './components/NavBarSection'
import SkillsSection from './components/SkillsSection'
import ProjectSection from './components/ProjectsSection'
import ContactSection from './components/ContactSetion'
import FooterSection from './components/FooterSection'


function App() {
  
  return (
    <>
      <NavBarSection/>
      <HeroSection/>
      <SkillsSection/>
      <AboutSection/>
      <ProjectSection/>
      <ContactSection/>
      <FooterSection/>
    </>
  )
}

export default App
