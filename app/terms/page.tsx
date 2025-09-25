import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">Terms of Service</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Acceptance of Terms</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>
                    By accessing and using MotorHarbor's services, you accept and agree to be bound by the terms and
                    provision of this agreement. If you do not agree to abide by the above, please do not use this
                    service.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>User Accounts</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>To use certain features of our service, you must register for an account. You agree to:</p>
                  <ul>
                    <li>Provide accurate, current, and complete information</li>
                    <li>Maintain and update your information to keep it accurate</li>
                    <li>Maintain the security of your password and account</li>
                    <li>Accept responsibility for all activities under your account</li>
                    <li>Notify us immediately of any unauthorized use</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Vehicle Listings</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>When listing a vehicle for sale or rent, you represent and warrant that:</p>
                  <ul>
                    <li>You have the legal right to sell or rent the vehicle</li>
                    <li>All information provided is accurate and complete</li>
                    <li>The vehicle is in the condition described</li>
                    <li>You will honor the terms of any agreement made through our platform</li>
                  </ul>
                  <p>We reserve the right to remove listings that violate these terms or our community guidelines.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payments and Fees</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>Payment terms:</p>
                  <ul>
                    <li>All prices are displayed in the local currency</li>
                    <li>Payment is due at the time of booking or purchase</li>
                    <li>We may charge service fees for certain transactions</li>
                    <li>Refunds are subject to our cancellation policy</li>
                    <li>You are responsible for any applicable taxes</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Prohibited Uses</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>You may not use our service:</p>
                  <ul>
                    <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                    <li>
                      To violate any international, federal, provincial, or state regulations, rules, laws, or local
                      ordinances
                    </li>
                    <li>
                      To infringe upon or violate our intellectual property rights or the intellectual property rights
                      of others
                    </li>
                    <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                    <li>To submit false or misleading information</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Limitation of Liability</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>
                    MotorHarbor acts as a platform connecting buyers, sellers, and renters. We are not responsible for:
                  </p>
                  <ul>
                    <li>The condition, safety, or legality of vehicles listed</li>
                    <li>The truth or accuracy of listings</li>
                    <li>The ability of users to complete transactions</li>
                    <li>Any disputes between users</li>
                  </ul>
                  <p>Our liability is limited to the maximum extent permitted by law.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Termination</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>
                    We may terminate or suspend your account and access to our service immediately, without prior notice
                    or liability, for any reason, including breach of these Terms.
                  </p>
                  <p>Upon termination, your right to use the service will cease immediately.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>If you have any questions about these Terms of Service, please contact us:</p>
                  <div className="mt-4 space-y-2">
                    <p>
                      <strong>Email:</strong> legal@motorharbor.com
                    </p>
                    <p>
                      <strong>Phone:</strong> +254 700 123 456
                    </p>
                    <p>
                      <strong>Address:</strong> MotorHarbor Ltd., Westlands, Nairobi, Kenya
                    </p>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">Last updated: January 2025</p>
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
