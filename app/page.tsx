"use client"
import FAQSection from "@/components/faq-section"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductsSection } from "@/components/products-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ServiceCards } from "@/components/service-cards"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { InquiryModal } from "@/components/inquiry-modal"
import { WelcomePopup } from "@/components/welcome-popup"
import { Footer } from "@/components/footer"
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
    
    // Only show welcome popup on desktop/tablet, skip on mobile for better UX
    const isMobile = window.innerWidth < 768
    if (isMobile) return
    
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
    <main className="min-h-screen overflow-x-hidden">
      <Header onInquiryClick={() => openModal()} />
      <HeroSection onInquiryClick={() => openModal()} />
      <ServiceCards />
      
      {/* Products Section Header - Mobile Optimized */}
      <section className="pt-8 sm:pt-10 md:pt-12 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 tracking-tight px-2">
              Our Products
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6 sm:mb-8" />
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4">
              Discover our comprehensive range of high-quality batteries and power solutions, 
              engineered for reliability and designed to meet all your energy requirements
            </p>
          </div>
        </div>
      </section>
      
      <ProductsSection onInquiryClick={openModal} />
      
      <TestimonialsSection />
      <FAQSection />
      
      {/* CTA Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 sm:mb-6 px-2">
              Need a Custom Battery Solution?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Get a personalized quotation tailored to your specific power requirements. 
              Our experts will help you find the perfect solution.
            </p>
            
            {/* Mobile-First Button Layout */}
            <div className="flex flex-col gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <button
                onClick={() => openModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-accent/90 active:scale-95 transition-all shadow-lg text-base sm:text-lg touch-manipulation"
              >
                Get Free Quotation
              </button>
              <a
                href="tel:+917974146200"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-foreground/20 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-primary-foreground/30 active:scale-95 transition-all border border-primary-foreground/30 text-base sm:text-lg touch-manipulation"
              >
                <span className="hidden sm:inline">Call Expert:</span>
                <span className="sm:hidden">Call:</span> +91 7974146200
              </a>
            </div>
            
            {/* Stats Grid - Mobile Optimized */}
            <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-3xl mx-auto px-4">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-accent mb-1 sm:mb-2">30 Min</div>
                <p className="text-primary-foreground/80 text-xs sm:text-sm md:text-base">Response Time</p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-accent mb-1 sm:mb-2">100%</div>
                <p className="text-primary-foreground/80 text-xs sm:text-sm md:text-base">Free Quotes</p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-accent mb-1 sm:mb-2">24/7</div>
                <p className="text-primary-foreground/80 text-xs sm:text-sm md:text-base">Support Available</p>
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