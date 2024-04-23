import FollowMe from "./components/FollowMe"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import SocialMediaBar from "./components/SocialMediaBar"
import { MenuNavbarProvider } from "./hooks/useMenuNavbar"
import useScrollToElement from "./hooks/useScrollToElement"
import { SectionNames } from "./models/Menu"
import AboutMe from "./pages/AboutMe"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import Home from "./pages/Home/Home"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"

export type ScrollToSection = Record<SectionNames, () => void>

function App() {

  const [homeRef, scrollToHome] = useScrollToElement<HTMLElement>({})
  const [projectsRef, scrollToProjects] = useScrollToElement<HTMLElement>({})
  const [contactRef, scrollToContact] = useScrollToElement<HTMLElement>({})
  const [blogRef, scrollToBlog] = useScrollToElement<HTMLElement>({})
  const [aboutRef, scrollToAbout] = useScrollToElement<HTMLElement>({})


  const scrollToSection: ScrollToSection = {
    "Home": scrollToHome,
    "AboutMe": scrollToAbout,
    "Projects": scrollToProjects,
    "Contact": scrollToContact,
    "Blog": scrollToBlog,
  }

  return (
    <MenuNavbarProvider>
      <Navbar scrollToSection={scrollToSection} />
      <SocialMediaBar />
      <main>
        <Home reference={homeRef} />
        <AboutMe reference={aboutRef} />
        <Skills />
        <Projects reference={projectsRef} />
        <Blog reference={blogRef} />
        <Contact reference={contactRef} />
        <FollowMe />
      </main>
      <Footer scrollToSection={scrollToSection} />
    </MenuNavbarProvider>

  )
}

export default App
