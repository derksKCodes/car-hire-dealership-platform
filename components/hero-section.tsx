"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Car, Shield, Clock } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useSearch } from "@/lib/contexts/search-context"

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()
  const { updateFilters } = useSearch()

  const handleSearch = () => {
    updateFilters({ query: searchQuery })
    router.push(`/cars?q=${encodeURIComponent(searchQuery)}`)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">
                Find Your Perfect Car for <span className="text-primary">Rent or Sale</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-2xl">
                Discover thousands of quality vehicles from trusted dealers and individuals. Whether you're looking to
                rent for a day or buy your dream car, we've got you covered.
              </p>
            </div>

            {/* Search Bar */}
            <div className="bg-card p-6 rounded-lg border shadow-sm">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Search by brand, model, or location..."
                    className="h-12"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                </div>
                <Button size="lg" className="w-full sm:w-auto" onClick={handleSearch}>
                  <Search className="h-4 w-4 mr-2" />
                  Search Cars
                </Button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/rent" className="flex-1">
                <Button variant="outline" size="lg" className="w-full bg-transparent">
                  <Car className="h-4 w-4 mr-2" />
                  Rent a Car
                </Button>
              </Link>
              <Link href="/cars?type=sale" className="flex-1">
                <Button variant="outline" size="lg" className="w-full bg-transparent">
                  <Shield className="h-4 w-4 mr-2" />
                  Buy a Car
                </Button>
              </Link>
              <Link href="/sell" className="flex-1">
                <Button variant="outline" size="lg" className="w-full bg-transparent">
                  <Clock className="h-4 w-4 mr-2" />
                  Sell Your Car
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
              <img
                src="/modern-car-showroom-with-luxury-vehicles.jpg"
                alt="Car showroom with luxury vehicles"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-lg shadow-lg border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Car className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">5000+</p>
                  <p className="text-sm text-muted-foreground">Cars Available</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-card p-4 rounded-lg shadow-lg border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Verified</p>
                  <p className="text-sm text-muted-foreground">Dealers Only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
