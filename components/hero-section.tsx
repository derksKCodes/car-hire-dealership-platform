"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Car, Shield, Clock, Star } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useSearch } from "@/lib/contexts/search-context"

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("hire")
  const router = useRouter()
  const { updateFilters } = useSearch()

  const handleSearch = (type: string) => {
    updateFilters({ query: searchQuery, type })
    const route = type === "hire" ? "/rent" : type === "buy" ? "/cars" : "/sell"
    router.push(`${route}?q=${encodeURIComponent(searchQuery)}`)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch(activeTab)
    }
  }

  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="trust-badge">
                  <Shield className="h-3 w-3" />
                  Trusted by 10,000+ customers
                </div>
                <div className="trust-badge">
                  <Star className="h-3 w-3" />
                  4.9/5 rating
                </div>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance leading-tight">
                Find Your Perfect Car for <span className="text-primary">Rent</span>,{" "}
                <span className="text-accent">Buy</span>, or <span className="text-success">Sell</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-2xl">
                Discover thousands of quality vehicles from verified dealers and trusted individuals. Your next car
                journey starts here.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border shadow-lg">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="hire" className="flex items-center gap-2">
                    <Car className="h-4 w-4" />
                    Hire
                  </TabsTrigger>
                  <TabsTrigger value="buy" className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Buy
                  </TabsTrigger>
                  <TabsTrigger value="sell" className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Sell
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="hire" className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <Input
                        placeholder="Where do you want to pick up your rental?"
                        className="h-12"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyPress={handleKeyPress}
                      />
                    </div>
                    <Button
                      size="lg"
                      className="w-full sm:w-auto cta-button bg-accent hover:bg-accent/90"
                      onClick={() => handleSearch("hire")}
                    >
                      <Search className="h-4 w-4 mr-2" />
                      Find Rentals
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="buy" className="space-y-4">
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
                    <Button size="lg" className="w-full sm:w-auto cta-button" onClick={() => handleSearch("buy")}>
                      <Search className="h-4 w-4 mr-2" />
                      Search Cars
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="sell" className="space-y-4">
                  <div className="text-center space-y-4">
                    <p className="text-muted-foreground">Ready to sell your car? Get started in minutes.</p>
                    <Link href="/sell">
                      <Button size="lg" className="cta-button bg-success hover:bg-success/90">
                        <Clock className="h-4 w-4 mr-2" />
                        Start Selling
                      </Button>
                    </Link>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">5,000+</div>
                <div className="text-sm text-muted-foreground">Cars Available</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-accent">500+</div>
                <div className="text-sm text-muted-foreground">Verified Dealers</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-success">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 shadow-2xl">
              <img
                src="/modern-car-showroom-with-luxury-vehicles.jpg"
                alt="Car showroom with luxury vehicles"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-xl border car-card-hover">
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

            <div className="absolute -top-6 -right-6 bg-card p-4 rounded-xl shadow-xl border car-card-hover">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-success" />
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
