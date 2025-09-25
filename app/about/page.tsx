import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Car, Users, Award, Globe, Heart, Shield } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">About MotorHarbor</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Your trusted harbor for all things automotive. We connect car owners, buyers, and renters in a seamless
              marketplace built on trust, quality, and exceptional service.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6 text-pretty">
                  To revolutionize the automotive marketplace by providing a secure, transparent, and user-friendly
                  platform where anyone can rent, buy, or sell vehicles with confidence.
                </p>
                <p className="text-lg text-muted-foreground text-pretty">
                  We believe that finding the right car should be simple, safe, and accessible to everyone, whether
                  you're looking for a weekend rental or your dream car.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Car className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">10,000+</h3>
                    <p className="text-sm text-muted-foreground">Vehicles Listed</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">50,000+</h3>
                    <p className="text-sm text-muted-foreground">Happy Customers</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">5 Years</h3>
                    <p className="text-sm text-muted-foreground">Industry Experience</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">15+</h3>
                    <p className="text-sm text-muted-foreground">Cities Covered</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                The principles that guide everything we do at MotorHarbor
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-8 text-center">
                  <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-foreground mb-4">Trust & Security</h3>
                  <p className="text-muted-foreground text-pretty">
                    Every transaction is protected with advanced security measures and verified user profiles.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 text-center">
                  <Heart className="h-16 w-16 text-primary mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-foreground mb-4">Customer First</h3>
                  <p className="text-muted-foreground text-pretty">
                    Your satisfaction is our priority. We're here to support you every step of the way.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 text-center">
                  <Award className="h-16 w-16 text-primary mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-foreground mb-4">Quality Assurance</h3>
                  <p className="text-muted-foreground text-pretty">
                    All vehicles undergo thorough verification to ensure quality and reliability.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Join thousands of satisfied customers who trust MotorHarbor for their automotive needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rent">
                <Button size="lg" className="w-full sm:w-auto">
                  Rent a Car
                </Button>
              </Link>
              <Link href="/cars">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                  Browse Cars for Sale
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
