import { Search, Car, CreditCard, Key } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Search & Browse",
      description: "Find the perfect car using our advanced search filters by brand, model, price, and location.",
    },
    {
      icon: Car,
      title: "Compare & Choose",
      description:
        "Compare different vehicles, read reviews, and check detailed specifications to make the right choice.",
    },
    {
      icon: CreditCard,
      title: "Book & Pay",
      description: "Secure your booking with our safe payment system. Multiple payment options available.",
    },
    {
      icon: Key,
      title: "Drive Away",
      description: "Complete the paperwork and drive away with your chosen vehicle. It's that simple!",
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting your perfect car is easier than ever with our simple 4-step process
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                  <step.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-secondary-foreground">{index + 1}</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-pretty">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
