import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, MessageCircle, Phone, Mail } from "lucide-react"

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">Help Center</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty">
              Find answers to common questions and get the support you need.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input placeholder="Search for help articles..." className="pl-10 h-12 text-lg" />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2">Search</Button>
            </div>
          </div>
        </section>

        {/* Quick Help Options */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Live Chat</h3>
                  <p className="text-muted-foreground mb-4">Chat with our support team</p>
                  <Button variant="outline">Start Chat</Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
                  <p className="text-muted-foreground mb-4">Speak directly with support</p>
                  <Button variant="outline">+254 700 123 456</Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Email Support</h3>
                  <p className="text-muted-foreground mb-4">Send us your questions</p>
                  <Button variant="outline">support@motorharbor.com</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Frequently Asked Questions</h2>

            <div className="space-y-8">
              {/* Car Rental FAQs */}
              <Card>
                <CardHeader>
                  <CardTitle>Car Rental</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="rental-1">
                      <AccordionTrigger>How do I rent a car?</AccordionTrigger>
                      <AccordionContent>
                        To rent a car, browse our available vehicles, select your preferred dates and location, complete
                        the booking form with your details, and make payment. You'll receive a confirmation email with
                        pickup instructions.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="rental-2">
                      <AccordionTrigger>What documents do I need?</AccordionTrigger>
                      <AccordionContent>
                        You'll need a valid driver's license, national ID or passport, and a credit card for security
                        deposit. International visitors may need an International Driving Permit.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="rental-3">
                      <AccordionTrigger>Can I cancel my booking?</AccordionTrigger>
                      <AccordionContent>
                        Yes, you can cancel your booking up to 24 hours before pickup for a full refund. Cancellations
                        within 24 hours may incur a fee.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              {/* Car Sales FAQs */}
              <Card>
                <CardHeader>
                  <CardTitle>Car Sales</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="sales-1">
                      <AccordionTrigger>How do I buy a car?</AccordionTrigger>
                      <AccordionContent>
                        Browse our car listings, view detailed information and photos, contact the seller or dealer,
                        arrange a viewing and test drive, negotiate the price, and complete the purchase through our
                        secure payment system.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="sales-2">
                      <AccordionTrigger>Are the cars inspected?</AccordionTrigger>
                      <AccordionContent>
                        All cars listed by verified dealers undergo basic inspection. For private sales, we recommend
                        arranging your own inspection. We provide inspection checklists and can recommend certified
                        mechanics.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="sales-3">
                      <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                      <AccordionContent>
                        We accept credit/debit cards through Stripe, PayPal, and M-Pesa mobile payments. For high-value
                        purchases, bank transfers are also available.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              {/* Selling FAQs */}
              <Card>
                <CardHeader>
                  <CardTitle>Selling Your Car</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="selling-1">
                      <AccordionTrigger>How do I list my car for sale?</AccordionTrigger>
                      <AccordionContent>
                        Create an account, go to "Sell Your Car", fill in your vehicle details, upload high-quality
                        photos, set your price, and publish your listing. Our team will review and approve it within 24
                        hours.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="selling-2">
                      <AccordionTrigger>How much does it cost to list?</AccordionTrigger>
                      <AccordionContent>
                        Basic listings are free for the first 30 days. Premium listings with featured placement and
                        additional photos are available for a small fee. We only charge a commission when your car
                        sells.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="selling-3">
                      <AccordionTrigger>How do I get paid?</AccordionTrigger>
                      <AccordionContent>
                        Once a buyer completes the purchase, payment is held securely until the transaction is
                        confirmed. Funds are then transferred to your registered bank account or mobile money wallet
                        within 2-3 business days.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
