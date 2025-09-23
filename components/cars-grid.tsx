"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, MapPin, Fuel, Calendar, Settings, Eye, Compass as Compare } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function CarsGrid() {
  const [favorites, setFavorites] = useState<string[]>([])
  const [compareList, setCompareList] = useState<string[]>([])

  const toggleFavorite = (carId: string) => {
    setFavorites((prev) => (prev.includes(carId) ? prev.filter((id) => id !== carId) : [...prev, carId]))
  }

  const toggleCompare = (carId: string) => {
    setCompareList((prev) => {
      if (prev.includes(carId)) {
        return prev.filter((id) => id !== carId)
      } else if (prev.length < 3) {
        return [...prev, carId]
      }
      return prev
    })
  }

  // Sample cars for sale data - will be replaced with real data from Supabase
  const carsForSale = [
    {
      id: "1",
      title: "Toyota Camry 2022 - Excellent Condition",
      brand: "Toyota",
      model: "Camry",
      year: 2022,
      price_sale: 28000,
      location: "Nairobi, Kenya",
      fuel_type: "petrol",
      transmission: "automatic",
      mileage: 15000,
      body_type: "sedan",
      images: ["/silver-toyota-camry-sedan.png"],
      features: ["GPS", "AC", "Bluetooth", "Backup Camera"],
      dealer: {
        name: "Premium Motors",
        verified: true,
      },
    },
    {
      id: "2",
      title: "BMW X5 2021 - Luxury SUV",
      brand: "BMW",
      model: "X5",
      year: 2021,
      price_sale: 55000,
      location: "Kisumu, Kenya",
      fuel_type: "petrol",
      transmission: "automatic",
      mileage: 25000,
      body_type: "suv",
      images: ["/black-bmw-x5-luxury-suv.jpg"],
      features: ["Leather Seats", "Premium Sound", "Panoramic Roof", "GPS"],
      dealer: {
        name: "Luxury Car Center",
        verified: true,
      },
    },
    {
      id: "3",
      title: "Honda Accord 2023 - Like New",
      brand: "Honda",
      model: "Accord",
      year: 2023,
      price_sale: 32000,
      location: "Mombasa, Kenya",
      fuel_type: "petrol",
      transmission: "automatic",
      mileage: 8000,
      body_type: "sedan",
      images: ["/placeholder.svg?height=200&width=300"],
      features: ["GPS", "AC", "Bluetooth", "Lane Assist"],
      dealer: {
        name: "Honda Dealership",
        verified: true,
      },
    },
    {
      id: "4",
      title: "Mercedes C-Class 2022 - Premium",
      brand: "Mercedes",
      model: "C-Class",
      year: 2022,
      price_sale: 48000,
      location: "Nairobi, Kenya",
      fuel_type: "petrol",
      transmission: "automatic",
      mileage: 18000,
      body_type: "sedan",
      images: ["/placeholder.svg?height=200&width=300"],
      features: ["Leather", "Premium Sound", "Sunroof", "GPS"],
      dealer: {
        name: "Mercedes Center",
        verified: true,
      },
    },
    {
      id: "5",
      title: "Audi Q5 2021 - Sport Package",
      brand: "Audi",
      model: "Q5",
      year: 2021,
      price_sale: 42000,
      location: "Eldoret, Kenya",
      fuel_type: "petrol",
      transmission: "automatic",
      mileage: 22000,
      body_type: "suv",
      images: ["/placeholder.svg?height=200&width=300"],
      features: ["Quattro AWD", "Sport Seats", "Premium Audio", "GPS"],
      dealer: {
        name: "Audi Specialist",
        verified: true,
      },
    },
    {
      id: "6",
      title: "Nissan Altima 2023 - Fuel Efficient",
      brand: "Nissan",
      model: "Altima",
      year: 2023,
      price_sale: 26000,
      location: "Nakuru, Kenya",
      fuel_type: "petrol",
      transmission: "automatic",
      mileage: 12000,
      body_type: "sedan",
      images: ["/placeholder.svg?height=200&width=300"],
      features: ["GPS", "AC", "Bluetooth", "Safety Package"],
      dealer: {
        name: "Nissan Motors",
        verified: true,
      },
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Cars for Sale</h2>
          <p className="text-muted-foreground">{carsForSale.length} cars found</p>
        </div>
        <div className="flex items-center space-x-4">
          {compareList.length > 0 && (
            <Link href={`/compare?cars=${compareList.join(",")}`}>
              <Button variant="outline" size="sm">
                <Compare className="h-4 w-4 mr-2" />
                Compare ({compareList.length})
              </Button>
            </Link>
          )}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <select className="text-sm border rounded px-2 py-1">
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Year: Newest First</option>
              <option>Mileage: Low to High</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {carsForSale.map((car) => (
          <Card key={car.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img src={car.images[0] || "/placeholder.svg"} alt={car.title} className="w-full h-48 object-cover" />
              <div className="absolute top-4 left-4">
                <Badge variant="default">${car.price_sale.toLocaleString()}</Badge>
              </div>
              <div className="absolute top-4 right-4 flex space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`bg-background/80 hover:bg-background ${favorites.includes(car.id) ? "text-red-500" : ""}`}
                  onClick={() => toggleFavorite(car.id)}
                >
                  <Heart className={`h-4 w-4 ${favorites.includes(car.id) ? "fill-current" : ""}`} />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`bg-background/80 hover:bg-background ${
                    compareList.includes(car.id) ? "text-primary" : ""
                  }`}
                  onClick={() => toggleCompare(car.id)}
                  disabled={!compareList.includes(car.id) && compareList.length >= 3}
                >
                  <Compare className={`h-4 w-4 ${compareList.includes(car.id) ? "fill-current" : ""}`} />
                </Button>
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
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="font-medium">{car.dealer.name}</span>
                    {car.dealer.verified && (
                      <Badge variant="outline" className="ml-2 text-xs">
                        Verified
                      </Badge>
                    )}
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

                <div className="text-sm text-muted-foreground">
                  <span>{car.mileage.toLocaleString()} miles</span>
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
                    <p className="text-xl font-bold text-foreground">${car.price_sale.toLocaleString()}</p>
                  </div>
                  <div className="flex space-x-2">
                    <Link href={`/cars/${car.id}`}>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                    </Link>
                    <Link href={`/cars/${car.id}/buy`}>
                      <Button size="sm">Buy Now</Button>
                    </Link>
                  </div>
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
