import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Owner",
      content:
        "CarHub made finding a rental car for my business trip incredibly easy. The process was smooth and the car was exactly as described.",
      rating: 5,
      avatar: "/professional-woman-avatar.png",
    },
    {
      name: "Michael Chen",
      role: "Family Man",
      content:
        "I bought my family car through CarHub and couldn't be happier. Great selection, fair prices, and excellent customer service.",
      rating: 5,
      avatar: "/professional-man-avatar.png",
    },
    {
      name: "Emma Wilson",
      role: "Student",
      content:
        "As a student, I needed an affordable rental for the weekend. CarHub had great options and the booking process was super quick.",
      rating: 5,
      avatar: "/young-woman-student-avatar.png",
    },
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
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

                  <div className="flex items-center space-x-3 pt-4 border-t">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
