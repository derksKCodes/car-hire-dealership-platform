import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Shield } from "lucide-react"
import Link from "next/link"

export function SellHero() {
  return (
    <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">
                Sell Your Car <span className="text-primary">Fast & Easy</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Get the best price for your car with our trusted platform. Reach thousands of potential buyers and sell
                your car quickly and securely.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/dashboard/add-car">
                <Button size="lg" className="w-full sm:w-auto">
                  <DollarSign className="h-4 w-4 mr-2" />
                  List Your Car
                </Button>
              </Link>
              <Link href="/cars">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                  Browse Listings
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">$2.5M+</p>
                <p className="text-sm text-muted-foreground">Cars Sold</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">15 Days</p>
                <p className="text-sm text-muted-foreground">Average Sale Time</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
              <img
                src="/car-selling-process-illustration.jpg"
                alt="Car selling process"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating benefit cards */}
            <Card className="absolute -bottom-6 -left-6 w-48">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <DollarSign className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Best Prices</p>
                    <p className="text-sm text-muted-foreground">Market value guaranteed</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="absolute -top-6 -right-6 w-48">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Shield className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Secure Sales</p>
                    <p className="text-sm text-muted-foreground">Protected transactions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
