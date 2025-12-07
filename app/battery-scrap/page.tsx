"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { InquiryModal } from "@/components/inquiry-modal"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Phone, Mail, MapPin, Recycle, Battery, Truck, Shield, CheckCircle, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function BatteryScrapPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const scrapTypes = [
    {
      title: "Lead Battery Plates (RAILS)",
      description: "Battery plates extracted from used lead-acid batteries",
      icon: <Battery className="w-8 h-8" />,
      features: ["High lead content", "Easy to process", "Competitive pricing"]
    },
    {
      title: "Wet Whole Intact Batteries (RINK)",
      description: "Complete used batteries with electrolyte still inside",
      icon: <Battery className="w-8 h-8" />,
      features: ["Complete units", "Acid contained", "Safe handling"]
    },
    {
      title: "Drained/Dry Whole Batteries (RAINS)",
      description: "Used batteries with electrolyte removed",
      icon: <Battery className="w-8 h-8" />,
      features: ["Acid removed", "Safer transport", "Ready for recycling"]
    },
    {
      title: "Soft Lead Scraps",
      description: "Various forms of soft lead materials",
      icon: <Recycle className="w-8 h-8" />,
      features: ["Sheets & pipes", "Cable stripping", "Lead bullions"]
    }
  ]

  const benefits = [
    {
      title: "Best Market Prices",
      description: "We offer competitive prices for all types of battery scrap",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Safe Handling",
      description: "Professional handling of hazardous battery materials",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Quick Payment",
      description: "Fast and secure payment processing",
      icon: <Truck className="w-6 h-6" />
    },
    {
      title: "Environmental Compliance",
      description: "Eco-friendly recycling processes",
      icon: <Recycle className="w-6 h-6" />
    }
  ]

  return (
    <main className="min-h-screen">
      <Header onInquiryClick={openModal} />
      
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[80vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/scrap.png" 
            alt="Battery Scrap Collection" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
                    
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">Battery Scrap Business</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              We Buy Used Lead Acid Batteries
            </h1>
            <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
              Shri Guru Traders is a trusted battery scrap buyer in India. We purchase all types of used lead acid battery scraps, 
              battery plates, and soft lead materials at the best market prices with safe and environmentally compliant processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={openModal} size="lg" className="bg-white text-black hover:bg-white/90 font-semibold">
                Sell Your Battery Scrap
              </Button>
              <a
                href="tel:+917974146200"
                className="inline-flex items-center justify-center px-6 py-3 border border-white/30 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium transition-colors backdrop-blur-sm"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now: +91 7974146200
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us for Battery Scrap?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Our Expertise</h3>
                <p className="text-muted-foreground mb-4">
                  We are experts in battery scrap procurement and recycling. With years of experience in the industry, 
                  we understand the value of used batteries and ensure you get the best prices for your scrap materials.
                </p>
                <p className="text-muted-foreground">
                  Lead is a crucial component of batteries, and we ensure it's recovered and reused through environmentally 
                  friendly recycling processes. We handle all types of lead acid batteries with proper care and compliance.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Environmental Responsibility</h3>
                <p className="text-muted-foreground mb-4">
                  Lead-acid batteries are considered hazardous waste and must be handled with care. We follow all environmental 
                  regulations and safety protocols during collection, transportation, and recycling.
                </p>
                <p className="text-muted-foreground">
                  Our recycling processes help reduce environmental impact while ensuring valuable materials are recovered 
                  and reused in new battery production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Battery Scrap */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Types of Battery Scrap We Buy</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scrapTypes.map((type, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {type.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{type.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{type.description}</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center gap-1">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">1. Contact Us</h3>
                <p className="text-muted-foreground">Call or message us with details about your battery scrap</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  <Truck className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">2. Collection</h3>
                <p className="text-muted-foreground">We arrange safe pickup and transportation of your battery scrap</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">3. Payment</h3>
                <p className="text-muted-foreground">Quick payment at competitive market prices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Notice */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-orange-200 bg-orange-50/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Important Safety Information</h3>
                    <p className="text-muted-foreground mb-3">
                      Lead-acid batteries contain hazardous materials and must be handled with care:
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Always wear protective gloves and eyewear when handling batteries</li>
                      <li>Keep batteries upright to prevent acid leakage</li>
                      <li>Store in a cool, dry place away from children and pets</li>
                      <li>Never attempt to open or damage batteries</li>
                      <li>Contact us immediately if batteries are damaged or leaking</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Sell Your Battery Scrap?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get the best prices for your used batteries with safe and reliable service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={openModal} size="lg" variant="secondary">
              Get Quote Now
            </Button>
            <a
              href="tel:+917974146200"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary-foreground/20 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg text-sm font-medium transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call: +91 7974146200
            </a>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <InquiryModal isOpen={isModalOpen} onClose={closeModal} selectedProduct="Battery Scrap" />
      <Footer />
    </main>
  )
}
