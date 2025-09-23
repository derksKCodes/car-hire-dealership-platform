import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, Search, Handshake, DollarSign } from "lucide-react"
import Link from "next/link"

export function SellProcess() {
  const steps = [
    {
      icon: Upload,
      title: "List Your Car",
      description: "Upload photos and details of your car. Our easy form takes just 5 minutes to complete.",
      action: "Start Listing",
      href: "/dashboard/add-car",
    },
    {
      icon: Search,
      title: "Get Discovered",
      description: "Your car gets featured to thousands of potential buyers actively searching for vehicles.",
      action: "View Sample",
      href: "/cars",
    },
    {
      icon: Handshake,
      title: "Connect with Buyers",
      description: "Receive inquiries and negotiate directly with serious buyers through our secure platform.",
      action: "Learn More",
      href: "/help",
    },
    {
      icon: DollarSign,
      title: "Complete the Sale",
      description: "Finalize the transaction with our secure payment system and transfer ownership safely.",
      action: "See Process",
      href: "/help/selling",
    },
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">How to Sell Your Car</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow our simple 4-step process to sell your car quickly and get the best price
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-secondary-foreground">{index + 1}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground text-pretty">{step.description}</p>
                  </div>

                  <Link href={step.href}>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      {step.action}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
