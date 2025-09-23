import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, MapPin, Fuel, Calendar, Settings } from "lucide-react"
import Link from "next/link"

export function FeaturedCars() {
  // This will be replaced with real data from Supabase
  const featuredCars = [
    {
      id: "1",
      title: "Toyota Camry 2022",
      brand: "Toyota",
      model: "Camry",
      year: 2022,
      price_sale: 28000,
      price_rent_daily: 45,
      availability_type: "both",
      location: "Nairobi, Kenya",
      fuel_type: "petrol",
      transmission: "automatic",
      mileage: 15000,
      images: ["/silver-toyota-camry-sedan.png"],
      features: ["GPS", "AC", "Bluetooth"],
    },
    {
      id: "2",
      title: "Honda CR-V 2023",
      brand: "Honda",
      model: "CR-V",
      year: 2023,
      price_rent_daily: 65,
      availability_type: "rent",
      location: "Mombasa, Kenya",
      fuel_type: "petrol",
      transmission: "automatic",
      mileage: 8000,
      images: ["/white-honda-crv-suv.jpg"],
      features: ["GPS", "AC", "AWD"],
    },
    {
      id: "3",
      title: "BMW X5 2021",
      brand: "BMW",
      model: "X5",
      year: 2021,
      price_sale: 55000,
      availability_type: "sale",
      location: "Kisumu, Kenya",
      fuel_type: "petrol",
      transmission: "automatic",
      mileage: 25000,
      images: ["/black-bmw-x5-luxury-suv.jpg"],
      features: ["Leather", "Premium Sound", "Panoramic Roof"],
    },
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Featured Cars</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium vehicles available for rent or purchase
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCars.map((car) => (
            <Card key={car.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img src={car.images[0] || "/placeholder.svg"} alt={car.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 left-4">
                  <Badge
                    variant={
                      car.availability_type === "rent"
                        ? "secondary"
                        : car.availability_type === "sale"
                          ? "default"
                          : "outline"
                    }
                  >
                    {car.availability_type === "both"
                      ? "Rent & Sale"
                      : car.availability_type === "rent"
                        ? "For Rent"
                        : "For Sale"}
                  </Badge>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-4 right-4 bg-background/80 hover:bg-background"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{car.title}</h3>
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      {car.location}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span>{car.year}</span>
                    </div>
                    <div className="flex items-center">
                      <Fuel className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span className="capitalize">{car.fuel_type}</span>
                    </div>
                    <div className="flex items-center">
                      <Settings className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span className="capitalize">{car.transmission}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {car.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      {car.price_sale && (
                        <p className="text-lg font-bold text-foreground">${car.price_sale.toLocaleString()}</p>
                      )}
                      {car.price_rent_daily && (
                        <p className="text-sm text-muted-foreground">${car.price_rent_daily}/day</p>
                      )}
                    </div>
                    <Link href={`/cars/${car.id}`}>
                      <Button>View Details</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/cars">
            <Button size="lg" variant="outline">
              View All Cars
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
