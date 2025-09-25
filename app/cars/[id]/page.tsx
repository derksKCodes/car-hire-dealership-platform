import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CarSaleDetails } from "@/components/car-sale-details"
import { PurchaseForm } from "@/components/purchase-form"

interface CarSalePageProps {
  params: Promise<{ id: string }>
}

export default async function CarSalePage({ params }: CarSalePageProps) {
  const { id } = await params

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CarSaleDetails carId={id} />
          </div>
          <div className="lg:col-span-1">
            <PurchaseForm carId={id} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
