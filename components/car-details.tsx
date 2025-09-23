"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { MapPin, Fuel, Calendar, Settings, Users, Star, Heart, Share2 } from "lucide-react"
import { useState } from "react"

interface CarDetailsProps {
  carId: string
}

export function CarDetails({ carId }: CarDetailsProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  // Sample car data - will be replaced with real data from Supabase
  const car = {
    id: carId,
    title: "Honda CR-V 2023 - Premium SUV",
    brand: "Honda",
    model: "CR-V",
    year: 2023,
    price_rent_daily: 65,
    price_rent_weekly: 400,
    price_rent_monthly: 1500,
    location: "Mombasa, Kenya",
    fuel_type: "petrol",
    transmission: "automatic",
    seats: 7,
    mileage: 8000,
    rating: 4.9,
    reviews: 18,
    description:
      "Experience luxury and comfort with this premium Honda CR-V. Perfect for family trips, business travel, or exploring the beautiful landscapes of Kenya. This well-maintained SUV comes with all modern amenities and safety features.",
    images: [
      "/white-honda-crv-suv.jpg",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    features: [
      "GPS Navigation",
      "Air Conditioning",
      "Bluetooth Connectivity",
      "All-Wheel Drive",
      "Sunroof",
      "Backup Camera",
      "Cruise Control",
      "USB Charging Ports",
      "Premium Sound System",
      "Keyless Entry",
    ],
    owner: {
      name: "Premium Car Rentals",
      rating: 4.8,
      reviews: 156,
      verified: true,
    },
  }

  const reviews = [
    {
      id: "1",
      user: "John Doe",
      rating: 5,
      comment: "Excellent car and service. Very clean and well-maintained vehicle.",
      date: "2 weeks ago",
    },
    {
      id: "2",
      user: "Sarah Wilson",
      rating: 5,
      comment: "Perfect for our family vacation. Spacious and comfortable.",
      date: "1 month ago",
    },
    {
      id: "3",
      user: "Mike Johnson",
      rating: 4,
      comment: "Great car, smooth pickup and return process.",
      date: "1 month ago",
    },
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
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-2">{car.title}</h1>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {car.location}
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{car.rating}</span>
                    <span className="text-muted-foreground">({car.reviews} reviews)</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-primary">${car.price_rent_daily}</p>
                  <p className="text-sm text-muted-foreground">per day</p>
                </div>
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
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Seats</p>
                    <p className="font-medium">{car.seats}</p>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground text-pretty">{car.description}</p>
            </div>

            <Separator />

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Features & Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {car.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Pricing Options</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <p className="text-2xl font-bold text-primary">${car.price_rent_daily}</p>
                  <p className="text-sm text-muted-foreground">per day</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <p className="text-2xl font-bold text-primary">${car.price_rent_weekly}</p>
                  <p className="text-sm text-muted-foreground">per week</p>
                  <Badge variant="secondary" className="mt-1">
                    Save 12%
                  </Badge>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <p className="text-2xl font-bold text-primary">${car.price_rent_monthly}</p>
                  <p className="text-sm text-muted-foreground">per month</p>
                  <Badge variant="secondary" className="mt-1">
                    Save 23%
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Reviews */}
      <Card>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-foreground">Customer Reviews</h3>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{car.rating}</span>
                <span className="text-muted-foreground">({car.reviews} reviews)</span>
              </div>
            </div>

            <div className="space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="border-b pb-4 last:border-b-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium">{review.user[0]}</span>
                      </div>
                      <span className="font-medium">{review.user}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">{review.date}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-pretty">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
