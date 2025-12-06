"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { InquiryModal } from "@/components/inquiry-modal"
import { WelcomePopup } from "@/components/welcome-popup"
import { AboutSection } from "@/components/about-section"
import { useState, useEffect } from "react"

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<string>("")
  const [showWelcomePopup, setShowWelcomePopup] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return
    const timer = setTimeout(() => {
      setShowWelcomePopup(true)
    }, 1500)
    return () => clearTimeout(timer)
  }, [isClient])

  const openModal = (product?: string) => {
    setSelectedProduct(product || "")
    setIsModalOpen(true)
  }

  return (
    <main className="min-h-screen">
      <Header onInquiryClick={() => openModal()} />
      <AboutSection />
      <Footer />
      <WhatsAppButton />
      <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} selectedProduct={selectedProduct} />
      {isClient && (
        <WelcomePopup
          isOpen={showWelcomePopup}
          onClose={() => setShowWelcomePopup(false)}
          onInquiryClick={() => {
            setShowWelcomePopup(false)
            openModal()
          }}
        />
      )}
    </main>
  )
}
