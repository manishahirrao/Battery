"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductsSection } from "@/components/products-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { InquiryModal } from "@/components/inquiry-modal"
import { WelcomePopup } from "@/components/welcome-popup"
import { useState, useEffect } from "react"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<string>("")
  const [showWelcomePopup, setShowWelcomePopup] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return
    // Show welcome popup after a short delay on page load
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
      <HeroSection onInquiryClick={() => openModal()} />
      <ProductsSection onInquiryClick={openModal} />
      <TestimonialsSection />
      
      {/* CTA Section for Quotation Form */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Need a Custom Battery Solution?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Get a personalized quotation tailored to your specific power requirements. 
              Our experts will help you find the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openModal()}
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold hover:bg-accent/90 transition-colors shadow-lg"
              >
                Get Free Quotation
              </button>
              <a
                href="tel:+9179741 46200"
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary-foreground/30 transition-colors border border-primary-foreground/30"
              >
                Call Expert: +91 79741 46200
              </a>
            </div>
            
            <div className="mt-12 grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">30 Min</div>
                <p className="text-primary-foreground/80">Response Time</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <p className="text-primary-foreground/80">Free Quotes</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <p className="text-primary-foreground/80">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
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
