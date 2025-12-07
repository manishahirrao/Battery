"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { InquiryModal } from "@/components/inquiry-modal"
import { InquirySection } from "@/components/inquiry-section"
import { WelcomePopup } from "@/components/welcome-popup"
import { useState, useEffect } from "react"
import { MapPin, Phone, Mail, Clock, MessageCircle, Users, Award, Shield } from "lucide-react"

export default function ContactPage() {
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
      
      {/* Hero Section */}
      <section className="relative  bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

     
      </section>

      {/* Contact Form Section - Prominently Placed */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            <InquirySection />
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Phone Support</h3>
              <p className="text-primary font-medium mb-1">+91 7974146200</p>
              <p className="text-muted-foreground text-sm">Available 24/7</p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">WhatsApp</h3>
              <p className="text-green-600 font-medium mb-1">+91 7974146200</p>
              <p className="text-muted-foreground text-sm">Instant Response</p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Email Support</h3>
              <p className="text-blue-600 font-medium mb-1">info@shrugutru.com</p>
              <p className="text-muted-foreground text-sm">Within 24 hours</p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Visit Us</h3>
              <p className="text-orange-600 font-medium mb-1">Main Location</p>
              <p className="text-muted-foreground text-sm">Ahmedpur Kalam, Hoshangabad Road Bag Swaniya, Misrod, Bhopal - 462026 (Near By Johan Majeed)</p>
            </div>
          </div>

          {/* Why Contact Us Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-muted/20 rounded-3xl p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">Why Choose Our Service?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Expert Guidance</h4>
                    <p className="text-muted-foreground text-sm">Get personalized recommendations from certified battery experts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Quick Response</h4>
                    <p className="text-muted-foreground text-sm">We respond within 30 minutes during business hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Trusted Solutions</h4>
                    <p className="text-muted-foreground text-sm">10,000+ customers trust us for reliable battery solutions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Customer First</h4>
                    <p className="text-muted-foreground text-sm">Your satisfaction is our top priority</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted/20 rounded-3xl p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">Business Hours</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-foreground font-medium">Monday - Friday</span>
                  <span className="text-primary font-semibold">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-foreground font-medium">Saturday</span>
                  <span className="text-primary font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-foreground font-medium">Sunday</span>
                  <span className="text-primary font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-foreground font-medium">Emergency Support</span>
                  <span className="text-green-600 font-semibold">24/7 Available</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-primary/10 rounded-xl">
                <p className="text-sm text-primary font-medium text-center">
                  Need urgent assistance? Call us at +91 7974146200 for immediate support
                </p>
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
