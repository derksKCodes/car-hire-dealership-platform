import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Information We Collect</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>We collect information you provide directly to us, such as when you:</p>
                  <ul>
                    <li>Create an account or profile</li>
                    <li>List a vehicle for sale or rent</li>
                    <li>Make a booking or purchase</li>
                    <li>Contact our customer support</li>
                    <li>Subscribe to our newsletter</li>
                  </ul>
                  <p>
                    This may include your name, email address, phone number, payment information, and vehicle details.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How We Use Your Information</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>We use the information we collect to:</p>
                  <ul>
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send you technical notices and support messages</li>
                    <li>Communicate with you about products, services, and events</li>
                    <li>Monitor and analyze trends and usage</li>
                    <li>Detect, investigate, and prevent fraudulent transactions</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Information Sharing</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>We may share your information in the following situations:</p>
                  <ul>
                    <li>
                      <strong>With other users:</strong> When you list a vehicle, certain information becomes visible to
                      potential buyers or renters
                    </li>
                    <li>
                      <strong>With service providers:</strong> We work with third-party companies to provide payment
                      processing, analytics, and customer support
                    </li>
                    <li>
                      <strong>For legal reasons:</strong> We may disclose information if required by law or to protect
                      our rights and safety
                    </li>
                    <li>
                      <strong>Business transfers:</strong> Information may be transferred if we're involved in a merger,
                      acquisition, or sale
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Security</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>
                    We take reasonable measures to protect your information from loss, theft, misuse, and unauthorized
                    access. These measures include:
                  </p>
                  <ul>
                    <li>Encryption of sensitive data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Limited access to personal information by employees</li>
                    <li>Secure payment processing through certified providers</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Your Rights</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>You have the right to:</p>
                  <ul>
                    <li>Access and update your personal information</li>
                    <li>Delete your account and associated data</li>
                    <li>Opt out of marketing communications</li>
                    <li>Request a copy of your data</li>
                    <li>Object to certain uses of your information</li>
                  </ul>
                  <p>To exercise these rights, please contact us at privacy@motorharbor.com</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>If you have any questions about this Privacy Policy, please contact us:</p>
                  <div className="mt-4 space-y-2">
                    <p>
                      <strong>Email:</strong> privacy@motorharbor.com
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
