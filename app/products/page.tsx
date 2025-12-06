"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { InquiryModal } from "@/components/inquiry-modal"
import { ProductsSection } from "@/components/products-section"
import { BrandsSection } from "@/components/brands-section"
import { useState } from "react"

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
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Products
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Premium quality batteries and power solutions for all your needs
            </p>
          </div>
        </div>
        <ProductsSection onInquiryClick={openModal} />
        <BrandsSection />
      </div>
      <Footer />
      <WhatsAppButton />
      <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} selectedProduct={selectedProduct} />
    </main>
  )
}
