import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CarDetails } from "@/components/car-details"
import { BookingForm } from "@/components/booking-form"

interface RentCarPageProps {
  params: Promise<{ id: string }>
}

export default async function RentCarPage({ params }: RentCarPageProps) {
  const { id } = await params

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CarDetails carId={id} />
          </div>
          <div className="lg:col-span-1">
            <BookingForm carId={id} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
