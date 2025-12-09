"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { InquiryModal } from "@/components/inquiry-modal"
import { ShareButton } from "@/components/share-button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, CheckCircle, Shield, Zap, Sun } from "lucide-react"
import { useState } from "react"

const solarInverterProducts = [
  {
    id: "solar-inverter-hybrid",
    name: "Hybrid Solar Inverter",
    brand: "Exide Solar",
    image: "/Hybrid Solar Inverter.jpeg",
    rating: 4.8,
    type: "Hybrid System",
    capacity: "5kVA - 10kVA",
    warranty: "10 Years",
    features: ["Grid-Tie & Off-Grid", "Battery Backup", "MPPT Technology", "Remote Monitoring"],
    applications: ["Residential", "Commercial", "Hybrid Systems", "Backup Power"],
    description: "Advanced hybrid solar inverter with grid-tie and off-grid capabilities for maximum energy independence",
    detailedDescription: "Hybrid solar inverters combine the best of grid-tie and off-grid systems, allowing you to use solar power, store excess energy in batteries, and draw from the grid when needed. These inverters provide maximum flexibility and energy independence for homes and businesses."
  },
  {
    id: "solar-inverter-micro",
    name: "Micro Solar Inverter",
    brand: "Enphase Energy",
    image: "/Micro Solar Inverter.jpeg",
    rating: 4.9,
    type: "Micro Inverter",
    capacity: "230V - 400V",
    warranty: "25 Years",
    features: ["Panel-Level Optimization", "High Efficiency", "Easy Installation", "Individual Monitoring"],
    applications: ["Residential", "Complex Roofs", "Shaded Areas", "Premium Systems"],
    description: "Advanced micro solar inverter for panel-level optimization and maximum energy harvest",
    detailedDescription: "Micro solar inverters are installed on each solar panel, providing individual optimization and monitoring. This technology maximizes energy production, especially in installations with shading or complex roof layouts."
  },
  {
    id: "solar-inverter-lptt12150h",
    name: "Solar LPTT12150H",
    brand: "Solar",
    image: "/Solar LPTT12150H.webp",
    rating: 4.5,
    type: "Solar Charge Controller",
    capacity: "12V/24V - 150A",
    warranty: "5 Years",
    features: ["MPPT Technology", "High Efficiency", "LCD Display", "Multiple Battery Types"],
    applications: ["Solar Power Systems", "Off-Grid Solutions", "Battery Charging", "RV Systems"],
    description: "Solar LPTT12150H is a high-performance MPPT solar charge controller for efficient solar energy management.",
    detailedDescription: "The Solar LPTT12150H charge controller features advanced MPPT (Maximum Power Point Tracking) technology for maximum solar energy harvest. Its high efficiency design ensures optimal power conversion from solar panels to batteries. The LCD display provides real-time monitoring of system parameters, while support for multiple battery types makes it versatile for various solar applications."
  }
]

export default function SolarInvertersPage() {
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
              Solar Inverters
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              High-efficiency solar inverters for converting solar energy into usable power with advanced MPPT technology and smart monitoring
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Sun className="w-4 h-4 mr-2" />
                Solar Inverters
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Zap className="w-4 h-4 mr-2" />
                High Efficiency
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Shield className="w-4 h-4 mr-2" />
                Smart Technology
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solarInverterProducts.map((product) => (
              <Card key={product.id} id={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-contain bg-muted/30 rounded-xl"
                    />
                    <Badge className="absolute top-4 right-4 bg-primary/10 text-primary border-primary/20">
                      {product.capacity}
                    </Badge>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{product.brand}</p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium ml-1">{product.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{product.type}</span>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{product.warranty}</span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {product.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        onClick={() => openModal(product.name)}
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        Get Quote
                      </Button>
                      <a
                        href={`https://wa.me/917974146200?text=Hi,%20I'm%20interested%20in%20${encodeURIComponent(product.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl font-semibold transition-all duration-300"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                      </a>
                      <ShareButton 
                        productName={product.name} 
                        productUrl={`${typeof window !== 'undefined' ? window.location.origin : ''}/batteries/solar-inverters#${product.id}`}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} selectedProduct={selectedProduct} />
      <Footer />
    </main>
  )
}
