import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function SellTestimonials() {
  const testimonials = [
    {
      name: "David Kimani",
      location: "Nairobi",
      content:
        "Sold my Toyota Prado in just 8 days! The platform made it so easy to connect with serious buyers. Got exactly the price I wanted.",
      rating: 5,
      avatar: "/professional-man-avatar.png",
      carSold: "Toyota Prado 2020",
      salePrice: "$45,000",
    },
    {
      name: "Grace Wanjiku",
      location: "Mombasa",
      content:
        "Amazing experience selling my Honda CR-V. The support team helped me price it right and I had multiple offers within days.",
      rating: 5,
      avatar: "/professional-woman-avatar.png",
      carSold: "Honda CR-V 2019",
      salePrice: "$32,000",
    },
    {
      name: "Peter Ochieng",
      location: "Kisumu",
      content:
        "Best car selling platform in Kenya! Secure payments, verified buyers, and excellent customer service throughout.",
      rating: 5,
      avatar: "/young-man-professional-avatar.png",
      carSold: "Nissan X-Trail 2021",
      salePrice: "$38,000",
    },
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from car owners who successfully sold their vehicles through our platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-muted-foreground text-pretty">"{testimonial.content}"</p>

                  <div className="space-y-3 pt-4 border-t">
                    <div className="flex items-center space-x-3">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>

                    <div className="bg-muted/30 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium text-foreground">{testimonial.carSold}</p>
                          <p className="text-xs text-muted-foreground">Sold for</p>
                        </div>
                        <p className="text-lg font-bold text-primary">{testimonial.salePrice}</p>
                      </div>
                    </div>
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
