import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { SearchProvider } from "@/lib/contexts/search-context"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "MotorHarbor - Your Ultimate Car Rental and Dealership Platform",
  description: "Discover, rent, buy, or sell cars with ease. Trusted by thousands for seamless automotive experiences.",
   icons: {
    icon: "/favicon.ico",
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
      
      
      
      <body>
        <Suspense fallback={<div>Loading...</div>}>
          <SearchProvider>{children}</SearchProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
