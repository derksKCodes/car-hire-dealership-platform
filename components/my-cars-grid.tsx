"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Edit, MoreHorizontal, Eye, Trash2, BarChart3, MapPin, Calendar, Car } from "lucide-react"
import Link from "next/link"

export function MyCarsGrid() {
  // Sample data - will be replaced with real data from Supabase
  const myCars = [
    {
      id: "1",
      title: "Toyota Camry 2022 - Excellent Condition",
      brand: "Toyota",
      model: "Camry",
      year: 2022,
      price_sale: 28000,
      price_rent_daily: 45,
      availability_type: "both",
      status: "available",
      location: "Nairobi, Kenya",
      images: ["/silver-toyota-camry-sedan.png"],
      views: 245,
      inquiries: 12,
      bookings: 5,
      created_at: "2024-01-15",
    },
    {
      id: "2",
      title: "BMW X5 2021 - Luxury SUV",
      brand: "BMW",
      model: "X5",
      year: 2021,
      price_sale: 55000,
      availability_type: "sale",
      status: "available",
      location: "Kisumu, Kenya",
      images: ["/black-bmw-x5-luxury-suv.jpg"],
      views: 189,
      inquiries: 8,
      bookings: 0,
      created_at: "2024-01-10",
    },
    {
      id: "3",
      title: "Honda CR-V 2023 - Premium SUV",
      brand: "Honda",
      model: "CR-V",
      year: 2023,
      price_rent_daily: 65,
      availability_type: "rent",
      status: "rented",
      location: "Mombasa, Kenya",
      images: ["/white-honda-crv-suv.jpg"],
      views: 156,
      inquiries: 6,
      bookings: 4,
      created_at: "2024-01-08",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "default"
      case "rented":
        return "secondary"
      case "sold":
        return "outline"
      case "maintenance":
        return "destructive"
      default:
        return "outline"
    }
  }

  const getAvailabilityLabel = (type: string) => {
    switch (type) {
      case "sale":
        return "For Sale"
      case "rent":
        return "For Rent"
      case "both":
        return "Sale & Rent"
      default:
        return type
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-muted-foreground">{myCars.length} cars listed</p>
        </div>
        <Link href="/dashboard/add-car">
          <Button>Add New Car</Button>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myCars.map((car) => (
          <Card key={car.id} className="overflow-hidden">
            <div className="relative">
              <img src={car.images[0] || "/placeholder.svg"} alt={car.title} className="w-full h-48 object-cover" />
              <div className="absolute top-4 left-4 flex space-x-2">
                <Badge variant={getStatusColor(car.status)}>{car.status}</Badge>
                <Badge variant="outline">{getAvailabilityLabel(car.availability_type)}</Badge>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-4 right-4 bg-background/80 hover:bg-background"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Eye className="h-4 w-4 mr-2" />
                    View Listing
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Analytics
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
                    <Calendar className="h-4 w-4 mr-1" />
                    Listed on {new Date(car.created_at).toLocaleDateString()}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <p className="font-semibold text-foreground">{car.views}</p>
                    <p className="text-muted-foreground">Views</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-foreground">{car.inquiries}</p>
                    <p className="text-muted-foreground">Inquiries</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-foreground">{car.bookings}</p>
                    <p className="text-muted-foreground">Bookings</p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <div>
                      {car.price_sale && (
                        <p className="text-lg font-bold text-foreground">${car.price_sale.toLocaleString()}</p>
                      )}
                      {car.price_rent_daily && (
                        <p className="text-sm text-muted-foreground">${car.price_rent_daily}/day</p>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      <Link href={`/dashboard/cars/${car.id}/edit`}>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                      </Link>
                      <Link href={`/cars/${car.id}`}>
                        <Button size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {myCars.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-muted/30 rounded-full flex items-center justify-center mx-auto">
                <Car className="h-8 w-8 text-muted-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">No cars listed yet</h3>
                <p className="text-muted-foreground">Start by adding your first car listing</p>
              </div>
              <Link href="/dashboard/add-car">
                <Button>Add Your First Car</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
