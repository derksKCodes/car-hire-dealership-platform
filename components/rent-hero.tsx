"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, MapPin, Search } from "lucide-react"
import { useState } from "react"
import { useSearch } from "@/lib/contexts/search-context"
import { useRouter } from "next/navigation"

export function RentHero() {
  const [location, setLocation] = useState("")
  const [pickupDate, setPickupDate] = useState("")
  const [returnDate, setReturnDate] = useState("")
  const { updateFilters } = useSearch()
  const router = useRouter()

  const handleSearch = () => {
    updateFilters({
      location,
      pickupDate,
      returnDate,
    })
    router.push("/rent")
  }

  return (
    <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Rent the Perfect Car for Your Journey
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choose from our wide selection of rental cars. From economy to luxury, find the perfect vehicle for any
            occasion.
          </p>
        </div>

        {/* Quick Search */}
        <div className="bg-card p-6 rounded-lg border shadow-sm max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Pick-up location"
                  className="pl-10"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Pick-up Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="date"
                  className="pl-10"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Return Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="date"
                  className="pl-10"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  min={pickupDate || new Date().toISOString().split("T")[0]}
                />
              </div>
            </div>
            <div className="flex items-end">
              <Button size="lg" className="w-full" onClick={handleSearch}>
                <Search className="h-4 w-4 mr-2" />
                Search Cars
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
