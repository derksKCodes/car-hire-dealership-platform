"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, MapPin, Fuel, Calendar, Users, Star } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function RentCarGrid() {
  const [favorites, setFavorites] = useState<string[]>([])

  const toggleFavorite = (carId: string) => {
    setFavorites((prev) => (prev.includes(carId) ? prev.filter((id) => id !== carId) : [...prev, carId]))
  }

  // Sample rental cars data - will be replaced with real data from Supabase
  const rentalCars = [
    {
      id: "1",
      title: "Toyota Camry 2022",
      brand: "Toyota",
      model: "Camry",
      year: 2022,
      price_rent_daily: 45,
      location: "Nairobi, Kenya",
      fuel_type: "petrol",
      transmission: "automatic",
      seats: 5,
      rating: 4.8,
      reviews: 24,
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
      location: "Mombasa, Kenya",
      fuel_type: "petrol",
      transmission: "automatic",
      seats: 7,
      rating: 4.9,
      reviews: 18,
      images: ["/white-honda-crv-suv.jpg"],
      features: ["GPS", "AC", "AWD", "Sunroof"],
    },
    {
      id: "3",
      title: "Nissan Altima 2022",
      brand: "Nissan",
      model: "Altima",
      year: 2022,
      price_rent_daily: 40,
      location: "Kisumu, Kenya",
      fuel_type: "petrol",
      transmission: "automatic",
      seats: 5,
      rating: 4.6,
      reviews: 31,
      images: ["/placeholder.svg?height=200&width=300"],
      features: ["GPS", "AC", "Bluetooth", "Backup Camera"],
    },
    {
      id: "4",
      title: "BMW X3 2023",
      brand: "BMW",
      model: "X3",
      year: 2023,
      price_rent_daily: 85,
      location: "Nairobi, Kenya",
      fuel_type: "petrol",
      transmission: "automatic",
      seats: 5,
      rating: 4.9,
      reviews: 12,
      images: ["/placeholder.svg?height=200&width=300"],
      features: ["GPS", "AC", "Leather", "Premium Sound"],
    },
    {
      id: "5",
      title: "Hyundai Elantra 2022",
      brand: "Hyundai",
      model: "Elantra",
      year: 2022,
      price_rent_daily: 35,
      location: "Nakuru, Kenya",
      fuel_type: "petrol",
      transmission: "automatic",
      seats: 5,
      rating: 4.5,
      reviews: 28,
      images: ["/placeholder.svg?height=200&width=300"],
      features: ["GPS", "AC", "Bluetooth"],
    },
    {
      id: "6",
      title: "Mercedes C-Class 2023",
      brand: "Mercedes",
      model: "C-Class",
      year: 2023,
      price_rent_daily: 95,
      location: "Mombasa, Kenya",
      fuel_type: "petrol",
      transmission: "automatic",
      seats: 5,
      rating: 5.0,
      reviews: 8,
      images: ["/placeholder.svg?height=200&width=300"],
      features: ["GPS", "AC", "Leather", "Premium Sound", "Sunroof"],
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Available Rental Cars</h2>
          <p className="text-muted-foreground">{rentalCars.length} cars found</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <select className="text-sm border rounded px-2 py-1">
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Rating</option>
            <option>Newest First</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {rentalCars.map((car) => (
          <Card key={car.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img src={car.images[0] || "/placeholder.svg"} alt={car.title} className="w-full h-48 object-cover" />
              <Button
                variant="ghost"
                size="sm"
                className={`absolute top-4 right-4 bg-background/80 hover:bg-background ${
                  favorites.includes(car.id) ? "text-red-500" : ""
                }`}
                onClick={() => toggleFavorite(car.id)}
              >
                <Heart className={`h-4 w-4 ${favorites.includes(car.id) ? "fill-current" : ""}`} />
              </Button>
              <div className="absolute bottom-4 left-4">
                <Badge variant="secondary">${car.price_rent_daily}/day</Badge>
              </div>
            </div>

            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{car.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {car.location}
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{car.rating}</span>
                    <span className="text-sm text-muted-foreground">({car.reviews} reviews)</span>
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
                    <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span>{car.seats} seats</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {car.features.slice(0, 3).map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                  {car.features.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{car.features.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <p className="text-lg font-bold text-foreground">${car.price_rent_daily}</p>
                    <p className="text-sm text-muted-foreground">per day</p>
                  </div>
                  <Link href={`/rent/${car.id}`}>
                    <Button>Book Now</Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center space-x-2 pt-8">
        <Button variant="outline" disabled>
          Previous
        </Button>
        <Button variant="outline" className="bg-primary text-primary-foreground">
          1
        </Button>
        <Button variant="outline">2</Button>
        <Button variant="outline">3</Button>
        <Button variant="outline">Next</Button>
      </div>
    </div>
  )
}
