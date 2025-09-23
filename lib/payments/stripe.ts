// Stripe payment integration
export interface StripePaymentData {
  amount: number
  currency: string
  description: string
  metadata?: Record<string, string>
}

export async function createStripePaymentIntent(data: StripePaymentData) {
  try {
    const response = await fetch("/api/payments/stripe/create-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error("Failed to create payment intent")
    }

    return await response.json()
  } catch (error) {
    console.error("Stripe payment error:", error)
    throw error
  }
}

export async function confirmStripePayment(paymentIntentId: string) {
  try {
    const response = await fetch("/api/payments/stripe/confirm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ paymentIntentId }),
    })

    if (!response.ok) {
      throw new Error("Failed to confirm payment")
    }

    return await response.json()
  } catch (error) {
    console.error("Stripe confirmation error:", error)
    throw error
  }
}
