
import { CustomCursor } from "@/components/CustomCursor"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Marquee } from "@/components/Marquee"
import { Services } from "@/components/Services"
import { Stats } from "@/components/Stats"
import { WhyUs } from "@/components/WhyUs"
import { Process } from "@/components/Process"
import { AIServiceTool } from "@/components/AIServiceTool"
import { Courses } from "@/components/Courses"
import { Testimonials } from "@/components/Testimonials"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Stats />
      <WhyUs />
      <Process />
      <AIServiceTool />
      <Courses />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
