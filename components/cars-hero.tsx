"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Car, TrendingUp } from "lucide-react"
import { useState } from "react"
import { useSearch } from "@/lib/contexts/search-context"

export function CarsHero() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedMake, setSelectedMake] = useState("")
  const [selectedPriceRange, setSelectedPriceRange] = useState("")
  const { updateFilters } = useSearch()

  const handleSearch = () => {
    const updates: any = { query: searchQuery }

    if (selectedMake) {
      updates.make = [selectedMake]
    }

    if (selectedPriceRange) {
      const [min, max] = selectedPriceRange.split("-").map(Number)
      updates.priceRange = [min, max || 1000000]
    }

    updateFilters(updates)
  }

  return (
    <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Find Your Perfect Car to Buy
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Browse thousands of quality vehicles from trusted dealers and individuals. Find the car of your dreams at
            the best price.
          </p>
        </div>

        {/* Advanced Search */}
        <div className="bg-card p-6 rounded-lg border shadow-sm max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-4">
            <div className="md:col-span-2">
              <Input
                placeholder="Search by make, model, or keyword..."
                className="h-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div>
              <Select value={selectedMake} onValueChange={setSelectedMake}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Any Make" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="toyota">Toyota</SelectItem>
                  <SelectItem value="honda">Honda</SelectItem>
                  <SelectItem value="bmw">BMW</SelectItem>
                  <SelectItem value="mercedes">Mercedes</SelectItem>
                  <SelectItem value="audi">Audi</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-10000">Under $10,000</SelectItem>
                  <SelectItem value="10000-25000">$10,000 - $25,000</SelectItem>
                  <SelectItem value="25000-50000">$25,000 - $50,000</SelectItem>
                  <SelectItem value="50000-100000">$50,000 - $100,000</SelectItem>
                  <SelectItem value="100000-1000000">$100,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Button size="lg" className="w-full h-12" onClick={handleSearch}>
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
              <Car className="h-6 w-6 text-primary" />
            </div>
            <p className="text-2xl font-bold text-foreground">2,500+</p>
            <p className="text-sm text-muted-foreground">Cars for Sale</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-full mb-3">
              <TrendingUp className="h-6 w-6 text-secondary-foreground" />
            </div>
            <p className="text-2xl font-bold text-foreground">$15K</p>
            <p className="text-sm text-muted-foreground">Average Price</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-3">
              <Car className="h-6 w-6 text-accent-foreground" />
            </div>
            <p className="text-2xl font-bold text-foreground">50+</p>
            <p className="text-sm text-muted-foreground">Brands Available</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-muted/10 rounded-full mb-3">
              <TrendingUp className="h-6 w-6 text-muted-foreground" />
            </div>
            <p className="text-2xl font-bold text-foreground">98%</p>
            <p className="text-sm text-muted-foreground">Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}
