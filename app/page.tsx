import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { DestinationsSection } from "@/components/destinations-section"
import { ExperienceSection } from "@/components/experience-section"
import { Footer } from "@/components/footer"
import { ChatbotWidget } from "@/components/chatbot-widget"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <DestinationsSection />
      <ExperienceSection />
      <Footer />
      <ChatbotWidget />
    </main>
  )
}
