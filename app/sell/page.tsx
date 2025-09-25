import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SellHero } from "@/components/sell-hero"
import { SellProcess } from "@/components/sell-process"
import { SellBenefits } from "@/components/sell-benefits"
import { SellTestimonials } from "@/components/sell-testimonials"

export default function SellPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <SellHero />
        <SellProcess />
        <SellBenefits />
        <SellTestimonials />
      </main>
      <Footer />
    </div>
  )
}
