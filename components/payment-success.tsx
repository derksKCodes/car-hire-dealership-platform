"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Download, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

interface PaymentSuccessProps {
  paymentData: {
    method: string
    amount: number
    currency: string
    transactionId: string
    date: string
  }
  bookingData?: {
    carTitle: string
    startDate: string
    endDate: string
    location: string
  }
}

export function PaymentSuccess({ paymentData, bookingData }: PaymentSuccessProps) {
  const formatCurrency = (amount: number, currency: string) => {
    if (currency === "KES") return `KSh ${amount.toLocaleString()}`
    return `$${amount.toLocaleString()}`
  }

  const getPaymentMethodName = (method: string) => {
    switch (method) {
      case "stripe":
        return "Credit/Debit Card"
      case "mpesa":
        return "M-Pesa"
      case "paypal":
        return "PayPal"
      default:
        return method
    }
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-foreground">Payment Successful!</h1>
          <p className="text-muted-foreground mt-2">
            Your payment has been processed successfully. You will receive a confirmation email shortly.
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Payment Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Amount Paid</p>
              <p className="text-lg font-semibold">{formatCurrency(paymentData.amount, paymentData.currency)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Payment Method</p>
              <p className="text-lg font-semibold">{getPaymentMethodName(paymentData.method)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Transaction ID</p>
              <p className="text-sm font-mono bg-muted/30 p-2 rounded">{paymentData.transactionId}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Date</p>
              <p className="text-lg font-semibold">{paymentData.date}</p>
            </div>
          </div>
          <Badge variant="outline" className="w-fit">
            <CheckCircle className="h-3 w-3 mr-1" />
            Confirmed
          </Badge>
        </CardContent>
      </Card>

      {bookingData && (
        <Card>
          <CardHeader>
            <CardTitle>Booking Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Vehicle</p>
              <p className="text-lg font-semibold">{bookingData.carTitle}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Pickup Date</p>
                <p className="font-semibold">{bookingData.startDate}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Return Date</p>
                <p className="font-semibold">{bookingData.endDate}</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="font-semibold">{bookingData.location}</p>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="flex flex-col sm:flex-row gap-4">
        <Button className="flex-1">
          <Download className="h-4 w-4 mr-2" />
          Download Receipt
        </Button>
        <Button variant="outline" className="flex-1 bg-transparent">
          <Mail className="h-4 w-4 mr-2" />
          Email Receipt
        </Button>
      </div>

      <div className="text-center space-y-4">
        <p className="text-sm text-muted-foreground">
          Need help? Contact our support team at support@carmarketplace.com
        </p>
        <Link href="/dashboard">
          <Button variant="outline" className="bg-transparent">
            Go to Dashboard
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
