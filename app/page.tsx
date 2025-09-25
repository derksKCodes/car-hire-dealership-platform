import { HeroSection } from "@/components/hero-section"
import { FeaturedCars } from "@/components/featured-cars"
import { HowItWorks } from "@/components/how-it-works"
import { Stats } from "@/components/stats"
import { Testimonials } from "@/components/testimonials"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <Stats />
        <FeaturedCars />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
