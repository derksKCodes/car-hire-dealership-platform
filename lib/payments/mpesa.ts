// M-Pesa payment integration
export interface MpesaPaymentData {
  amount: number
  phoneNumber: string
  accountReference: string
  transactionDesc: string
}

export async function initiateMpesaPayment(data: MpesaPaymentData) {
  try {
    const response = await fetch("/api/payments/mpesa/stk-push", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error("Failed to initiate M-Pesa payment")
    }

    return await response.json()
  } catch (error) {
    console.error("M-Pesa payment error:", error)
    throw error
  }
}

export async function checkMpesaPaymentStatus(checkoutRequestId: string) {
  try {
    const response = await fetch("/api/payments/mpesa/query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ checkoutRequestId }),
    })

    if (!response.ok) {
      throw new Error("Failed to check M-Pesa payment status")
    }

    return await response.json()
  } catch (error) {
    console.error("M-Pesa status check error:", error)
    throw error
  }
}
