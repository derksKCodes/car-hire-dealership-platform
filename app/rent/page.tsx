import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { RentHero } from "@/components/rent-hero"
import { RentFilters } from "@/components/rent-filters"
import { RentCarGrid } from "@/components/rent-car-grid"

export default function RentPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <RentHero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <RentFilters />
            </div>
            <div className="lg:col-span-3">
              <RentCarGrid />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
