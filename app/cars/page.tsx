import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CarsHero } from "@/components/cars-hero"
import { CarsFilters } from "@/components/cars-filters"
import { CarsGrid } from "@/components/cars-grid"

export default function CarsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <CarsHero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <CarsFilters />
            </div>
            <div className="lg:col-span-3">
              <CarsGrid />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
