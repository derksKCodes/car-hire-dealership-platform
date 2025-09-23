"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Smartphone, Wallet, Loader2 } from "lucide-react"
import { createStripePaymentIntent } from "@/lib/payments/stripe"
import { initiateMpesaPayment } from "@/lib/payments/mpesa"
import { createPayPalOrder } from "@/lib/payments/paypal"

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  amount: number
  currency: string
  description: string
  onSuccess: (paymentData: any) => void
}

export function PaymentModal({ isOpen, onClose, amount, currency, description, onSuccess }: PaymentModalProps) {
  const [loading, setLoading] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("stripe")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [cardDetails, setCardDetails] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
  })

  const handleStripePayment = async () => {
    setLoading(true)
    try {
      const paymentIntent = await createStripePaymentIntent({
        amount: amount * 100, // Convert to cents
        currency,
        description,
        metadata: {
          type: "car_transaction",
        },
      })

      // In a real implementation, you would use Stripe Elements here
      // For now, we'll simulate a successful payment
      setTimeout(() => {
        onSuccess({
          method: "stripe",
          paymentIntentId: paymentIntent.id,
          amount,
          currency,
        })
        setLoading(false)
        onClose()
      }, 2000)
    } catch (error) {
      console.error("Stripe payment failed:", error)
      setLoading(false)
    }
  }

  const handleMpesaPayment = async () => {
    if (!phoneNumber) {
      alert("Please enter your phone number")
      return
    }

    setLoading(true)
    try {
      const response = await initiateMpesaPayment({
        amount,
        phoneNumber,
        accountReference: `CAR-${Date.now()}`,
        transactionDesc: description,
      })

      // Simulate M-Pesa STK push
      setTimeout(() => {
        onSuccess({
          method: "mpesa",
          checkoutRequestId: response.CheckoutRequestID,
          amount,
          phoneNumber,
        })
        setLoading(false)
        onClose()
      }, 3000)
    } catch (error) {
      console.error("M-Pesa payment failed:", error)
      setLoading(false)
    }
  }

  const handlePayPalPayment = async () => {
    setLoading(true)
    try {
      const order = await createPayPalOrder({
        amount,
        currency,
        description,
        returnUrl: `${window.location.origin}/payment/success`,
        cancelUrl: `${window.location.origin}/payment/cancel`,
      })

      // In a real implementation, you would redirect to PayPal
      // For now, we'll simulate a successful payment
      setTimeout(() => {
        onSuccess({
          method: "paypal",
          orderId: order.id,
          amount,
          currency,
        })
        setLoading(false)
        onClose()
      }, 2000)
    } catch (error) {
      console.error("PayPal payment failed:", error)
      setLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Complete Payment</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Amount</span>
                <span className="text-lg font-bold">
                  {currency === "KES" ? "KSh" : "$"} {amount.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-muted-foreground">Description</span>
                <span className="text-sm">{description}</span>
              </div>
            </CardContent>
          </Card>

          <Tabs value={paymentMethod} onValueChange={setPaymentMethod}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="stripe" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                Card
              </TabsTrigger>
              <TabsTrigger value="mpesa" className="flex items-center gap-2">
                <Smartphone className="h-4 w-4" />
                M-Pesa
              </TabsTrigger>
              <TabsTrigger value="paypal" className="flex items-center gap-2">
                <Wallet className="h-4 w-4" />
                PayPal
              </TabsTrigger>
            </TabsList>

            <TabsContent value="stripe" className="space-y-4">
              <div className="space-y-3">
                <div>
                  <Label htmlFor="cardName">Cardholder Name</Label>
                  <Input
                    id="cardName"
                    placeholder="John Doe"
                    value={cardDetails.name}
                    onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={cardDetails.number}
                    onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="expiry">Expiry</Label>
                    <Input
                      id="expiry"
                      placeholder="MM/YY"
                      value={cardDetails.expiry}
                      onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvc">CVC</Label>
                    <Input
                      id="cvc"
                      placeholder="123"
                      value={cardDetails.cvc}
                      onChange={(e) => setCardDetails({ ...cardDetails, cvc: e.target.value })}
                    />
                  </div>
                </div>
              </div>
              <Button onClick={handleStripePayment} disabled={loading} className="w-full">
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Pay with Card"
                )}
              </Button>
            </TabsContent>

            <TabsContent value="mpesa" className="space-y-4">
              <div className="space-y-3">
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    placeholder="254712345678"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground mt-1">Enter your M-Pesa registered phone number</p>
                </div>
                <div className="bg-muted/30 p-3 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    You will receive an STK push notification on your phone to complete the payment.
                  </p>
                </div>
              </div>
              <Button onClick={handleMpesaPayment} disabled={loading} className="w-full">
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Sending STK Push...
                  </>
                ) : (
                  "Pay with M-Pesa"
                )}
              </Button>
            </TabsContent>

            <TabsContent value="paypal" className="space-y-4">
              <div className="bg-muted/30 p-4 rounded-lg text-center">
                <Wallet className="h-12 w-12 mx-auto mb-3 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  You will be redirected to PayPal to complete your payment securely.
                </p>
              </div>
              <Button onClick={handlePayPalPayment} disabled={loading} className="w-full">
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Redirecting...
                  </>
                ) : (
                  "Pay with PayPal"
                )}
              </Button>
            </TabsContent>
          </Tabs>

          <div className="flex items-center justify-center space-x-2 text-xs text-muted-foreground">
            <Badge variant="outline" className="text-xs">
              Secure
            </Badge>
            <span>Your payment information is encrypted and secure</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
