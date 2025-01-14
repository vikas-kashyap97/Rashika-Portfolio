import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Achievements } from "@/components/achievements"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { ClientWrapper } from "@/components/client-wrapper"

export default function Home() {
  return (
    <ClientWrapper>
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Achievements />
        <Projects />
        <Contact />
        <ThemeSwitcher />
      </main>
    </ClientWrapper>
  )
}

