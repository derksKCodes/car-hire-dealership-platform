import { Card, CardContent } from "@/components/ui/card"
import { Shield, DollarSign, Clock, Users, BarChart3, Headphones } from "lucide-react"

export function SellBenefits() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Best Market Price",
      description: "Get competitive offers from thousands of active buyers looking for your exact car model.",
    },
    {
      icon: Clock,
      title: "Quick Sales",
      description: "Most cars sell within 15 days. Our platform connects you with serious buyers fast.",
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "All payments are processed securely with buyer verification and fraud protection.",
    },
    {
      icon: Users,
      title: "Wide Reach",
      description: "Your listing reaches over 100,000 monthly visitors actively searching for cars.",
    },
    {
      icon: BarChart3,
      title: "Market Insights",
      description: "Get real-time pricing data and market trends to price your car competitively.",
    },
    {
      icon: Headphones,
      title: "Expert Support",
      description: "Our team provides guidance throughout the selling process from listing to completion.",
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Why Sell With CarHub?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied sellers who chose our platform for their car selling needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground text-pretty">{benefit.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
