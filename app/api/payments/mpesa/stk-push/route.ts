import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { amount, phoneNumber, accountReference, transactionDesc } = await request.json()

    // In a real implementation, you would integrate with Safaricom's M-Pesa API
    // This would involve:
    // 1. Getting an access token
    // 2. Making an STK push request
    // 3. Handling the response

    // For demo purposes, return a mock response
    const mockResponse = {
      MerchantRequestID: `MR_${Date.now()}`,
      CheckoutRequestID: `CR_${Date.now()}`,
      ResponseCode: "0",
      ResponseDescription: "Success. Request accepted for processing",
      CustomerMessage: "Success. Request accepted for processing",
    }

    return NextResponse.json(mockResponse)
  } catch (error) {
    console.error("M-Pesa STK push failed:", error)
    return NextResponse.json({ error: "Failed to initiate M-Pesa payment" }, { status: 500 })
  }
}
