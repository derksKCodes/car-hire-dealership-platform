"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, MapPin, Clock, CreditCard } from "lucide-react"
import { useState } from "react"
import { PaymentModal } from "./payment-modal"

interface BookingFormProps {
  carId: string
}

export function BookingForm({ carId }: BookingFormProps) {
  const [pickupDate, setPickupDate] = useState("")
  const [returnDate, setReturnDate] = useState("")
  const [pickupLocation, setPickupLocation] = useState("")
  const [notes, setNotes] = useState("")
  const [showPayment, setShowPayment] = useState(false)

  const dailyRate = 65
  const calculateTotal = () => {
    if (!pickupDate || !returnDate) return 0
    const pickup = new Date(pickupDate)
    const returnD = new Date(returnDate)
    const days = Math.ceil((returnD.getTime() - pickup.getTime()) / (1000 * 60 * 60 * 24))
    return days > 0 ? days * dailyRate : 0
  }

  const handleBooking = () => {
    if (!pickupDate || !returnDate || !pickupLocation) {
      alert("Please fill in all required fields")
      return
    }
    setShowPayment(true)
  }

  const handlePaymentSuccess = (paymentDetails: any) => {
    console.log("Booking confirmed:", { carId, pickupDate, returnDate, pickupLocation, notes, paymentDetails })
    setShowPayment(false)
    alert("Booking confirmed! You will receive a confirmation email shortly.")
  }

  return (
    <>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Book This Car</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="pickup-date">Pick-up Date</Label>
                <Input
                  id="pickup-date"
                  type="date"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="return-date">Return Date</Label>
                <Input
                  id="return-date"
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  min={pickupDate || new Date().toISOString().split("T")[0]}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="pickup-location">Pick-up Location</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="pickup-location"
                  placeholder="Enter pick-up location"
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Special Requests (Optional)</Label>
              <Textarea
                id="notes"
                placeholder="Any special requests or notes..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
              />
            </div>

            {pickupDate && returnDate && (
              <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Daily Rate:</span>
                  <span>${dailyRate}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>
                    Duration:{" "}
                    {Math.ceil(
                      (new Date(returnDate).getTime() - new Date(pickupDate).getTime()) / (1000 * 60 * 60 * 24),
                    )}{" "}
                    days
                  </span>
                  <span>
                    $
                    {Math.ceil(
                      (new Date(returnDate).getTime() - new Date(pickupDate).getTime()) / (1000 * 60 * 60 * 24),
                    ) * dailyRate}
                  </span>
                </div>
                <div className="flex justify-between font-semibold text-lg border-t pt-2">
                  <span>Total:</span>
                  <span className="text-primary">${calculateTotal()}</span>
                </div>
              </div>
            )}

            <Button
              className="w-full"
              size="lg"
              onClick={handleBooking}
              disabled={!pickupDate || !returnDate || !pickupLocation}
            >
              <CreditCard className="h-4 w-4 mr-2" />
              Book Now - ${calculateTotal()}
            </Button>

            <div className="text-center text-sm text-muted-foreground">
              <p>Free cancellation up to 24 hours before pickup</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>Instant confirmation</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>Free pickup available</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <CreditCard className="h-4 w-4 text-muted-foreground" />
                <span>Secure payment</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {showPayment && (
        <PaymentModal
          amount={calculateTotal()}
          onSuccess={handlePaymentSuccess}
          onClose={() => setShowPayment(false)}
          bookingDetails={{
            carId,
            pickupDate,
            returnDate,
            pickupLocation,
            notes,
          }}
        />
      )}
    </>
  )
}
