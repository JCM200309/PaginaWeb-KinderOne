import { PuzzleNav } from "@/components/puzzle-nav"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ProgramsSection } from "@/components/sections/programs-section"
import { FacilitiesSection } from "@/components/sections/facilities-section"
import { GallerySection } from "@/components/sections/gallery-section"
import { ContactSection } from "@/components/sections/contact-section"
import { FooterSection } from "@/components/sections/footer-section"

export default function KinderOnePage() {
  return (
    <main className="min-h-screen">
      <PuzzleNav />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <FacilitiesSection />
      <GallerySection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}
