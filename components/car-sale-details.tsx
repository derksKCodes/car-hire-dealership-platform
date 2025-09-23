"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { MapPin, Fuel, Calendar, Settings, Gauge, Star, Heart, Share2, Shield, Award } from "lucide-react"
import { useState } from "react"

interface CarSaleDetailsProps {
  carId: string
}

export function CarSaleDetails({ carId }: CarSaleDetailsProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  // Sample car data - will be replaced with real data from Supabase
  const car = {
    id: carId,
    title: "BMW X5 2021 - Luxury SUV for Sale",
    brand: "BMW",
    model: "X5",
    year: 2021,
    price_sale: 55000,
    location: "Kisumu, Kenya",
    fuel_type: "petrol",
    transmission: "automatic",
    mileage: 25000,
    body_type: "suv",
    color: "Black",
    vin: "WBAFR7C50BC123456",
    description:
      "This premium BMW X5 is in excellent condition with a full service history. Features luxury appointments throughout, advanced safety systems, and powerful performance. Perfect for those seeking a premium driving experience with reliability and style.",
    images: [
      "/black-bmw-x5-luxury-suv.jpg",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    features: [
      "Leather Seats",
      "Premium Sound System",
      "Panoramic Sunroof",
      "GPS Navigation",
      "Heated Seats",
      "Backup Camera",
      "Blind Spot Monitoring",
      "Lane Departure Warning",
      "Adaptive Cruise Control",
      "Keyless Entry",
      "Push Button Start",
      "Dual Zone Climate Control",
    ],
    dealer: {
      name: "Luxury Car Center",
      rating: 4.8,
      reviews: 156,
      verified: true,
      phone: "+254 700 123 456",
      address: "Kisumu, Kenya",
    },
    history: {
      owners: 1,
      accidents: 0,
      serviceRecords: 8,
      lastService: "2024-01-15",
    },
  }

  const specifications = [
    { label: "Engine", value: "3.0L Turbo I6" },
    { label: "Horsepower", value: "335 HP" },
    { label: "Drivetrain", value: "All-Wheel Drive" },
    { label: "Fuel Economy", value: "22 city / 29 hwy" },
    { label: "Seating", value: "5 passengers" },
    { label: "Cargo Space", value: "33.9 cu ft" },
  ]

  return (
    <div className="space-y-6">
      {/* Image Gallery */}
      <Card>
        <CardContent className="p-0">
          <div className="relative">
            <img
              src={car.images[currentImageIndex] || "/placeholder.svg"}
              alt={car.title}
              className="w-full h-96 object-cover rounded-t-lg"
            />
            <div className="absolute top-4 left-4">
              <Badge variant="default" className="text-lg px-3 py-1">
                ${car.price_sale.toLocaleString()}
              </Badge>
            </div>
            <div className="absolute top-4 right-4 flex space-x-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setIsFavorite(!isFavorite)}
                className="bg-background/80 hover:bg-background"
              >
                <Heart className={`h-4 w-4 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
              </Button>
              <Button variant="secondary" size="sm" className="bg-background/80 hover:bg-background">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
          {car.images.length > 1 && (
            <div className="flex space-x-2 p-4 overflow-x-auto">
              {car.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 ${
                    currentImageIndex === index ? "border-primary" : "border-transparent"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${car.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Car Information */}
      <Card>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{car.title}</h1>
              <div className="flex items-center text-muted-foreground mb-4">
                <MapPin className="h-4 w-4 mr-1" />
                {car.location}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Year</p>
                    <p className="font-medium">{car.year}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Gauge className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Mileage</p>
                    <p className="font-medium">{car.mileage.toLocaleString()} mi</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Fuel className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Fuel</p>
                    <p className="font-medium capitalize">{car.fuel_type}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Settings className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Transmission</p>
                    <p className="font-medium capitalize">{car.transmission}</p>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground text-pretty">{car.description}</p>
            </div>

            <Separator />

            {/* Vehicle History */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Vehicle History</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center justify-center mb-2">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <p className="text-2xl font-bold text-foreground">{car.history.owners}</p>
                  <p className="text-sm text-muted-foreground">Previous Owner</p>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center justify-center mb-2">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <p className="text-2xl font-bold text-foreground">{car.history.accidents}</p>
                  <p className="text-sm text-muted-foreground">Accidents</p>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center justify-center mb-2">
                    <Settings className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="text-2xl font-bold text-foreground">{car.history.serviceRecords}</p>
                  <p className="text-sm text-muted-foreground">Service Records</p>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center justify-center mb-2">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="text-sm font-bold text-foreground">Jan 2024</p>
                  <p className="text-sm text-muted-foreground">Last Service</p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Specifications */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Specifications</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-border last:border-b-0">
                    <span className="text-muted-foreground">{spec.label}</span>
                    <span className="font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Features & Options</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {car.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dealer Information */}
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-foreground">Dealer Information</h3>
              {car.dealer.verified && (
                <Badge variant="outline" className="text-green-600 border-green-600">
                  <Shield className="h-3 w-3 mr-1" />
                  Verified Dealer
                </Badge>
              )}
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-primary">{car.dealer.name[0]}</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{car.dealer.name}</h4>
                <div className="flex items-center space-x-1 mb-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{car.dealer.rating}</span>
                  <span className="text-muted-foreground">({car.dealer.reviews} reviews)</span>
                </div>
                <p className="text-sm text-muted-foreground">{car.dealer.address}</p>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button variant="outline" className="flex-1 bg-transparent">
                Call Dealer
              </Button>
              <Button variant="outline" className="flex-1 bg-transparent">
                Send Message
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
