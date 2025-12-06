"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917974146200?text=Hi,%20I'm%20interested%20in%20your%20battery%20products"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline font-medium">WhatsApp Us</span>

      {/* Pulse Animation */}
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full" />
    </a>
  )
}
