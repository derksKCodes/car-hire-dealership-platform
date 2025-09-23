"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Eye } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface ComparisonTableProps {
  carIds: string[]
}

export function ComparisonTable({ carIds }: ComparisonTableProps) {
  const [favorites, setFavorites] = useState<string[]>([])

  const toggleFavorite = (carId: string) => {
    setFavorites((prev) => (prev.includes(carId) ? prev.filter((id) => id !== carId) : [...prev, carId]))
  }

  // Sample comparison data - will be replaced with real data from Supabase
  const comparisonCars = [
    {
      id: "1",
      title: "Toyota Camry 2022",
      brand: "Toyota",
      model: "Camry",
      year: 2022,
      price: 28000,
      image: "/silver-toyota-camry-sedan.png",
      specs: {
        engine: "2.5L 4-Cylinder",
        horsepower: "203 HP",
        transmission: "Automatic",
        drivetrain: "FWD",
        fuelEconomy: "28/39 mpg",
        seating: "5",
        cargo: "15.1 cu ft",
        mileage: "15,000 mi",
      },
      features: ["GPS", "AC", "Bluetooth", "Backup Camera", "Lane Assist"],
    },
    {
      id: "2",
      title: "BMW X5 2021",
      brand: "BMW",
      model: "X5",
      year: 2021,
      price: 55000,
      image: "/black-bmw-x5-luxury-suv.jpg",
      specs: {
        engine: "3.0L Turbo I6",
        horsepower: "335 HP",
        transmission: "Automatic",
        drivetrain: "AWD",
        fuelEconomy: "22/29 mpg",
        seating: "5",
        cargo: "33.9 cu ft",
        mileage: "25,000 mi",
      },
      features: ["Leather", "Premium Sound", "Panoramic Roof", "GPS", "Heated Seats"],
    },
    {
      id: "3",
      title: "Honda Accord 2023",
      brand: "Honda",
      model: "Accord",
      year: 2023,
      price: 32000,
      image: "/placeholder.svg?height=200&width=300",
      specs: {
        engine: "1.5L Turbo 4-Cylinder",
        horsepower: "192 HP",
        transmission: "CVT",
        drivetrain: "FWD",
        fuelEconomy: "32/42 mpg",
        seating: "5",
        cargo: "16.7 cu ft",
        mileage: "8,000 mi",
      },
      features: ["GPS", "AC", "Bluetooth", "Lane Assist", "Adaptive Cruise"],
    },
  ].filter((car) => carIds.includes(car.id))

  const specCategories = [
    { key: "engine", label: "Engine" },
    { key: "horsepower", label: "Horsepower" },
    { key: "transmission", label: "Transmission" },
    { key: "drivetrain", label: "Drivetrain" },
    { key: "fuelEconomy", label: "Fuel Economy" },
    { key: "seating", label: "Seating" },
    { key: "cargo", label: "Cargo Space" },
    { key: "mileage", label: "Mileage" },
  ]

  if (comparisonCars.length === 0) {
    return (
      <Card>
        <CardContent className="p-12 text-center">
          <p className="text-muted-foreground mb-4">No cars selected for comparison</p>
          <Link href="/cars">
            <Button>Browse Cars</Button>
          </Link>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {/* Car Images and Basic Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {comparisonCars.map((car) => (
          <Card key={car.id}>
            <CardContent className="p-0">
              <div className="relative">
                <img
                  src={car.image || "/placeholder.svg"}
                  alt={car.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2 bg-background/80 hover:bg-background"
                  onClick={() => toggleFavorite(car.id)}
                >
                  <Heart className={`h-4 w-4 ${favorites.includes(car.id) ? "fill-red-500 text-red-500" : ""}`} />
                </Button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{car.title}</h3>
                <p className="text-2xl font-bold text-primary mb-4">${car.price.toLocaleString()}</p>
                <div className="flex space-x-2">
                  <Link href={`/cars/${car.id}`} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                  </Link>
                  <Link href={`/cars/${car.id}/buy`} className="flex-1">
                    <Button size="sm" className="w-full">
                      Buy Now
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Specifications Comparison Table */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-6">Specifications Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium">Specification</th>
                  {comparisonCars.map((car) => (
                    <th key={car.id} className="text-center py-3 px-4 font-medium">
                      {car.brand} {car.model}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {specCategories.map((category) => (
                  <tr key={category.key} className="border-b hover:bg-muted/30">
                    <td className="py-3 px-4 font-medium text-muted-foreground">{category.label}</td>
                    {comparisonCars.map((car) => (
                      <td key={car.id} className="py-3 px-4 text-center">
                        {car.specs[category.key as keyof typeof car.specs]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Features Comparison */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-6">Features Comparison</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comparisonCars.map((car) => (
              <div key={car.id}>
                <h4 className="font-medium mb-3">
                  {car.brand} {car.model}
                </h4>
                <div className="space-y-2">
                  {car.features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="mr-2 mb-2">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="text-center">
        <Link href="/cars">
          <Button variant="outline">Compare More Cars</Button>
        </Link>
      </div>
    </div>
  )
}
