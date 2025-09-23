import { Car, Users, Shield, Clock } from "lucide-react"

export function Stats() {
  const stats = [
    {
      icon: Car,
      value: "5,000+",
      label: "Cars Available",
      description: "Wide selection of vehicles",
    },
    {
      icon: Users,
      value: "10,000+",
      label: "Happy Customers",
      description: "Trusted by thousands",
    },
    {
      icon: Shield,
      value: "100%",
      label: "Verified Dealers",
      description: "All dealers are verified",
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Customer Support",
      description: "Always here to help",
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="font-semibold text-foreground">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
