"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductsSection } from "@/components/products-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { BrandsSection } from "@/components/brands-section"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { InquirySection } from "@/components/inquiry-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { InquiryModal } from "@/components/inquiry-modal"
import { WelcomePopup } from "@/components/welcome-popup"
import { useState, useEffect } from "react"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<string>("")
  const [showWelcomePopup, setShowWelcomePopup] = useState(false)

  useEffect(() => {
    // Show welcome popup after a short delay on page load
    const timer = setTimeout(() => {
      setShowWelcomePopup(true)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const openModal = (product?: string) => {
    setSelectedProduct(product || "")
    setIsModalOpen(true)
  }

  return (
    <main className="min-h-screen">
      <Header onInquiryClick={() => openModal()} />
      <HeroSection onInquiryClick={() => openModal()} />
      <StatsSection />
      <ProductsSection onInquiryClick={openModal} />
      <BrandsSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <InquirySection />
      <Footer />
      <WhatsAppButton />
      <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} selectedProduct={selectedProduct} />
      <WelcomePopup
        isOpen={showWelcomePopup}
        onClose={() => setShowWelcomePopup(false)}
        onInquiryClick={() => {
          setShowWelcomePopup(false)
          openModal()
        }}
      />
    </main>
  )
}
