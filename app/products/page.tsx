"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { InquiryModal } from "@/components/inquiry-modal"
import { ProductsSection } from "@/components/products-section"
import { BrandsSection } from "@/components/brands-section"
import { useState } from "react"
import { Phone,MessageCircle } from "lucide-react"

export default function ProductsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<string>("")

  const openModal = (product?: string) => {
    setSelectedProduct(product || "")
    setIsModalOpen(true)
  }

  return (
    <main className="min-h-screen">
      <Header onInquiryClick={() => openModal()} />
      <div className="">
        <ProductsSection onInquiryClick={openModal} />
       <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 rounded-2xl p-6 md:p-8 border border-primary/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-lg">Need help choosing the right service?</p>
                <p className="text-sm text-muted-foreground">Our experts are ready to assist you</p>
              </div>
            </div>
            <div className="flex gap-3 flex-wrap justify-center">
              <a
                href="tel:+917974146200"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-all hover:scale-105 shadow-md"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href="https://wa.me/917974146200?text=Hi,%20I'm%20interested%20in%20your%20battery%20products"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-600 transition-all hover:scale-105 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
      <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} selectedProduct={selectedProduct} />
    </main>
  )
}
