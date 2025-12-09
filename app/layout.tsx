import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shri Guru Traders - Premium Battery Solutions",
  description:
    "Your trusted power partner for automotive, inverter, solar, and e-rickshaw batteries from all leading brands. Quality products with best warranty and fast delivery.",
  keywords:
    "batteries, automotive batteries, inverter batteries, solar batteries, e-rickshaw batteries, truck batteries, two wheeler batteries",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/hero image.png" as="image" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
