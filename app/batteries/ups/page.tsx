"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { InquiryModal } from "@/components/inquiry-modal"
import { ShareButton } from "@/components/share-button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Star, CheckCircle, Truck, Shield, Zap, Server } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const upsBatteries = [
  {
    id: "exide-powersafe-plus-7-2ah",
    name: "Exide Powersafe Plus 12V 7.2Ah",
    brand: "Exide",
    image: "/Exide Powersafe Plus 12V 7.2Ah.webp",
    rating: 4.5,
    capacity: "7.2Ah",
    voltage: "12V",
    warranty: "24 Months",
    features: ["SMF Technology", "Sealed Maintenance Free", "High Reliability", "Compact Design"],
    applications: ["Small UPS Systems", "Security Systems", "Emergency Lighting", "POS Systems"],
    description: "Exide Powersafe Plus 12V 7.2Ah is a compact sealed maintenance-free battery designed for small UPS applications.",
    detailedDescription: "The Powersafe Plus 7.2Ah battery features advanced sealed maintenance-free (SMF) technology with valve-regulated construction. Its compact design makes it ideal for space-constrained applications while providing reliable backup power for critical equipment."
  },
  {
    id: "exide-powersafe-plus-9ah",
    name: "Exide Powersafe Plus 12V 9Ah",
    brand: "Exide",
    image: "/Exide Powersafe Plus 12V 9Ah.jpg",
    rating: 4.5,
    capacity: "9Ah",
    voltage: "12V",
    warranty: "24 Months",
    features: ["SMF Technology", "Sealed Maintenance Free", "High Reliability", "Long Life"],
    applications: ["Small UPS Systems", "Security Systems", "Emergency Lighting", "POS Systems"],
    description: "Exide Powersafe Plus 12V 9Ah offers reliable performance for small UPS systems with sealed maintenance-free technology.",
    detailedDescription: "The Powersafe Plus 9Ah battery utilizes advanced SMF technology with high-purity lead alloy for superior performance. Its sealed construction prevents electrolyte leakage and ensures safe operation in any position."
  },
  {
    id: "exide-gfm-2v-series",
    name: "Exide GFM 2V Series",
    brand: "Exide",
    image: "/Exide GFM 2V Series.jpg",
    rating: 4.9,
    capacity: "500Ah",
    voltage: "2V",
    warranty: "72 Months",
    features: ["GFM Technology", "Front Terminal", "Industrial Grade", "Extended Life"],
    applications: ["Large Data Centers", "Telecom Infrastructure", "Power Plants", "Critical Systems"],
    description: "Exide GFM 2V Series is designed for large-scale UPS systems requiring industrial-grade reliability.",
    detailedDescription: "The GFM 2V Series battery features front terminal design for easy installation and maintenance in large-scale applications. Its industrial-grade construction and advanced GFM technology ensure exceptional reliability and extended service life for mission-critical infrastructure."
  },
  {
    id: "exide-ups-ep-1500",
    name: "Exide UPS EP 1500",
    brand: "Exide",
    image: "/Exide UPS EP 1500.jpg",
    rating: 4.7,
    capacity: "150Ah",
    voltage: "12V",
    warranty: "48 Months",
    features: ["EP Technology", "Extended Performance", "High Efficiency", "Quick Charge"],
    applications: ["Enterprise UPS", "Server Rooms", "Network Equipment", "Medical Equipment"],
    description: "Exide UPS EP 1500 is engineered for extended performance in demanding UPS applications.",
    detailedDescription: "The UPS EP 1500 battery utilizes extended performance (EP) technology with advanced plate design for superior cycle life. Its high efficiency and quick charge capabilities ensure optimal performance in demanding enterprise environments."
  },
  {
    id: "exide-smf-ep-1200",
    name: "Exide SMF EP 1200",
    brand: "Exide",
    image: "/Exide SMF EP 1200.webp",
    rating: 4.6,
    capacity: "120Ah",
    voltage: "12V",
    warranty: "42 Months",
    features: ["SMF EP Technology", "Sealed Maintenance Free", "Extended Performance", "Reliable"],
    applications: ["Medium UPS Systems", "Network Equipment", "Security Systems", "Industrial Applications"],
    description: "Exide SMF EP 1200 combines sealed maintenance-free design with extended performance capabilities.",
    detailedDescription: "The SMF EP 1200 battery features advanced sealed maintenance-free technology with extended performance characteristics. Its reliable design and consistent performance make it ideal for medium-sized UPS systems and critical equipment backup."
  }
]

export default function UPSBatteriesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<string>("")

  const openModal = (product?: string) => {
    setSelectedProduct(product || "")
    setIsModalOpen(true)
  }

  return (
    <main className="min-h-screen">
      <Header onInquiryClick={() => openModal()} />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              UPS Batteries
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              High-performance sealed maintenance-free batteries for uninterrupted power supply systems and critical backup applications
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Server className="w-4 h-4 mr-2" />
                UPS Systems
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Zap className="w-4 h-4 mr-2" />
                SMF Technology
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Shield className="w-4 h-4 mr-2" />
                Maintenance Free
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upsBatteries.map((battery) => (
              <Card key={battery.id} id={battery.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <img
                      src={battery.image}
                      alt={battery.name}
                      className="w-full h-48 object-contain bg-muted/30 rounded-xl"
                    />
                    <Badge className="absolute top-4 right-4 bg-primary/10 text-primary border-primary/20">
                      {battery.capacity}
                    </Badge>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {battery.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{battery.brand}</p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium ml-1">{battery.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{battery.voltage}</span>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{battery.warranty}</span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {battery.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {battery.features.slice(0, 3).map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="pt-4 flex flex-wrap gap-2">
                      <Button
                        onClick={() => openModal(battery.name)}
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        Get Quote
                      </Button>
                      <a
                        href={`https://wa.me/917974146200?text=Hi,%20I'm%20interested%20in%20${encodeURIComponent(battery.name)}%20battery`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl font-semibold transition-all duration-300"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                      </a>
                      <ShareButton 
                        productName={battery.name} 
                        productUrl={`${typeof window !== 'undefined' ? window.location.origin : ''}/batteries/ups#${battery.id}`}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Our UPS Batteries?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Premium sealed maintenance-free batteries designed for critical power backup applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Maintenance Free</h3>
              <p className="text-sm text-muted-foreground">Sealed design eliminates need for water topping and regular maintenance</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">High Efficiency</h3>
              <p className="text-sm text-muted-foreground">Advanced technology ensures optimal power conversion and minimal losses</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Quick Delivery</h3>
              <p className="text-sm text-muted-foreground">Fast delivery across all locations with professional installation support</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Warranty Support</h3>
              <p className="text-sm text-muted-foreground">Comprehensive warranty coverage with reliable after-sales service</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} selectedProduct={selectedProduct} />
    </main>
  )
}
