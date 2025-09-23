// PayPal payment integration
export interface PayPalPaymentData {
  amount: number
  currency: string
  description: string
  returnUrl: string
  cancelUrl: string
}

export async function createPayPalOrder(data: PayPalPaymentData) {
  try {
    const response = await fetch("/api/payments/paypal/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error("Failed to create PayPal order")
    }

    return await response.json()
  } catch (error) {
    console.error("PayPal order creation error:", error)
    throw error
  }
}

export async function capturePayPalOrder(orderId: string) {
  try {
    const response = await fetch("/api/payments/paypal/capture", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orderId }),
    })

    if (!response.ok) {
      throw new Error("Failed to capture PayPal order")
    }

    return await response.json()
  } catch (error) {
    console.error("PayPal capture error:", error)
    throw error
  }
}
