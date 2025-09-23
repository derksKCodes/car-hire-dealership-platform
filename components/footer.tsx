import Link from "next/link"
import {
  Car,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Branding & Tagline */}
          <div className="lg:col-span-1 space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">MotorHarbor</span>
            </Link>
            <p className="text-muted-foreground text-pretty">Your Harbor for Cars – Rent, Buy, Sell.</p>

            {/* Newsletter Signup */}
            <div className="space-y-2">
              <h4 className="font-medium text-foreground">Stay Updated</h4>
              <div className="flex space-x-2">
                <Input placeholder="Enter your email" className="flex-1" />
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>

          {/* Car Hire */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Car Hire</h3>
            <div className="space-y-2">
              <Link href="/rent" className="block text-muted-foreground hover:text-primary transition-colors">
                Browse Rentals
              </Link>
              <Link href="/rent" className="block text-muted-foreground hover:text-primary transition-colors">
                Book a Car
              </Link>
              <Link href="/terms" className="block text-muted-foreground hover:text-primary transition-colors">
                Rental Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Car Sales */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Car Sales</h3>
            <div className="space-y-2">
              <Link href="/cars" className="block text-muted-foreground hover:text-primary transition-colors">
                Cars for Sale
              </Link>
              <Link href="/sell" className="block text-muted-foreground hover:text-primary transition-colors">
                Sell Your Car
              </Link>
              <Link href="/dashboard" className="block text-muted-foreground hover:text-primary transition-colors">
                Dealer Packages
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Company</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/blog" className="block text-muted-foreground hover:text-primary transition-colors">
                Blog / News
              </Link>
              <Link href="/careers" className="block text-muted-foreground hover:text-primary transition-colors">
                Careers
              </Link>
            </div>
          </div>

          {/* Support & Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Support & Legal</h3>
            <div className="space-y-2">
              <Link href="/help" className="block text-muted-foreground hover:text-primary transition-colors">
                Help Center
              </Link>
              <Link href="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
              <Link href="/privacy" className="block text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Payment Methods & Trust Badges */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-green-600" />
                <span className="text-sm text-muted-foreground">SSL Secured • Safe Payments</span>
              </div>
              <div className="flex items-center space-x-3">
                <CreditCard className="h-6 w-6 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Stripe • PayPal • M-Pesa • Visa • Mastercard</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        {/* Contact Info & Copyright */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
            <div className="space-y-2">
              <h4 className="font-medium text-foreground">MotorHarbor Ltd.</h4>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-1 sm:space-y-0">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Nairobi, Kenya</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">support@motorharbor.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">+254 xxx xxx xxx</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">© 2025 MotorHarbor. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
