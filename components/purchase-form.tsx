"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Shield, Calculator, Phone } from "lucide-react"
import { useState } from "react"

interface PurchaseFormProps {
  carId: string
}

export function PurchaseForm({ carId }: PurchaseFormProps) {
  const [paymentMethod, setPaymentMethod] = useState("")
  const [downPayment, setDownPayment] = useState("")
  const [loanTerm, setLoanTerm] = useState("")

  const carPrice = 55000
  const calculateMonthlyPayment = () => {
    if (!downPayment || !loanTerm) return 0
    const principal = carPrice - Number.parseInt(downPayment)
    const monthlyRate = 0.05 / 12 // 5% annual rate
    const months = Number.parseInt(loanTerm)
    const monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1)
    return Math.round(monthlyPayment)
  }

  const handlePurchase = () => {
    // This will integrate with payment processing
    console.log("Purchasing car:", carId)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CreditCard className="h-5 w-5" />
            <span>Purchase This Car</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center p-4 bg-primary/5 rounded-lg">
            <p className="text-3xl font-bold text-primary">${carPrice.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">Total Price</p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="payment-method">Payment Method</Label>
              <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                <SelectTrigger>
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cash">Cash Payment</SelectItem>
                  <SelectItem value="financing">Financing</SelectItem>
                  <SelectItem value="trade-in">Trade-in + Cash</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {paymentMethod === "financing" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="down-payment">Down Payment ($)</Label>
                  <Input
                    id="down-payment"
                    type="number"
                    placeholder="10000"
                    value={downPayment}
                    onChange={(e) => setDownPayment(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="loan-term">Loan Term</Label>
                  <Select value={loanTerm} onValueChange={setLoanTerm}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select loan term" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="36">36 months</SelectItem>
                      <SelectItem value="48">48 months</SelectItem>
                      <SelectItem value="60">60 months</SelectItem>
                      <SelectItem value="72">72 months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {downPayment && loanTerm && (
                  <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Loan Amount:</span>
                      <span>${(carPrice - Number.parseInt(downPayment)).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Estimated Monthly Payment:</span>
                      <span className="font-semibold">${calculateMonthlyPayment().toLocaleString()}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">*Estimated at 5% APR. Actual rates may vary.</div>
                  </div>
                )}
              </>
            )}

            <Separator />

            <div className="space-y-4">
              <h4 className="font-semibold">Contact Information</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+254 700 123 456" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea id="message" placeholder="Any questions or special requests..." rows={3} />
              </div>
            </div>

            <Button className="w-full" size="lg" onClick={handlePurchase} disabled={!paymentMethod}>
              <CreditCard className="h-4 w-4 mr-2" />
              {paymentMethod === "cash"
                ? "Buy Now"
                : paymentMethod === "financing"
                  ? "Apply for Financing"
                  : "Get Quote"}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-sm">
              <Shield className="h-4 w-4 text-muted-foreground" />
              <span>Secure transaction</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Calculator className="h-4 w-4 text-muted-foreground" />
              <span>Financing available</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span>Expert support</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <div className="text-center space-y-2">
            <h4 className="font-semibold">Need Help?</h4>
            <p className="text-sm text-muted-foreground">Our experts are here to assist you</p>
            <Button variant="outline" className="w-full bg-transparent">
              <Phone className="h-4 w-4 mr-2" />
              Call +254 700 123 456
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
