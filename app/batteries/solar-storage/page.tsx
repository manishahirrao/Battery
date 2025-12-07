"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { InquiryModal } from "@/components/inquiry-modal"
import { ShareButton } from "@/components/share-button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, CheckCircle, Shield, Zap, Battery } from "lucide-react"
import { useState } from "react"

const solarBatteryProducts = [
  {
    id: "solar-battery-lithium",
    name: "Lithium Solar Battery",
    brand: "Exide Solar",
    image: "/Lithium Solar Battery.jpg",
    rating: 4.8,
    type: "Li-Ion Battery",
    capacity: "5kWh - 20kWh",
    warranty: "10 Years",
    features: ["High Energy Density", "Long Cycle Life", "Fast Charging", "Smart BMS"],
    applications: ["Residential", "Commercial", "Off-Grid", "Backup Power"],
    description: "Advanced lithium-ion solar battery with high energy density and long cycle life for reliable energy storage",
    detailedDescription: "Lithium-ion solar batteries offer superior performance with high energy density, longer lifespan, and faster charging compared to traditional batteries. These batteries feature advanced Battery Management Systems (BMS) for optimal performance and safety."
  },
  {
    id: "solar-battery-tubular",
    name: "Tubular Solar Battery",
    brand: "Luminous Solar",
    image: "/Tubular Solar Battery.jpeg",
    rating: 4.6,
    type: "Tubular Lead Acid",
    capacity: "100Ah - 500Ah",
    warranty: "5 Years",
    features: ["Deep Cycle Design", "Low Maintenance", "High Temperature", "Reliable Performance"],
    applications: ["Rural Areas", "Off-Grid Systems", "Backup Power", "Budget Solutions"],
    description: "Durable tubular lead-acid solar battery designed for deep cycle applications and off-grid systems",
    detailedDescription: "Tubular solar batteries are specifically designed for solar applications with deep cycle capabilities. These batteries provide reliable performance in harsh conditions and are ideal for off-grid systems where cost-effectiveness is important."
  },
  {
    id: "solar-battery-agm",
    name: "AGM Solar Battery",
    brand: "Amaron Solar",
    image: "/AGM Solar Battery.jpeg",
    rating: 4.7,
    type: "AGM Battery",
    capacity: "75Ah - 300Ah",
    warranty: "6 Years",
    features: ["Absorbent Glass Mat", "Vibration Resistant", "Fast Recovery", "Low Self-Discharge"],
    applications: ["Mobile Applications", "RVs", "Boats", "Transportable Systems"],
    description: "High-performance AGM solar battery with vibration resistance for mobile and transportable applications",
    detailedDescription: "AGM (Absorbent Glass Mat) solar batteries are designed for applications requiring vibration resistance and fast recovery. These batteries are ideal for mobile installations like RVs, boats, and transportable solar systems."
  },
  {
    id: "solar-battery-exide-blitz",
    name: "Exide Solar Blitz Battery",
    brand: "Exide Solar",
    image: "/Exide Solar Blitz 150Ah.jpg",
    rating: 4.8,
    type: "Tubular Battery",
    capacity: "150Ah",
    warranty: "5 Years",
    features: ["High Performance", "Deep Cycle", "Low Maintenance", "Solar Optimized"],
    applications: ["Residential", "Commercial", "Off-Grid", "Solar Systems"],
    description: "High-performance Exide Solar Blitz battery optimized for solar applications with deep cycle capabilities",
    detailedDescription: "Exide Solar Blitz batteries are specifically designed for solar applications with advanced deep cycle technology. These batteries provide excellent performance in solar charging and discharging cycles, ensuring reliable power storage for solar energy systems."
  }
]

export default function SolarStoragePage() {
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
              Solar Battery Storage
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Advanced battery storage solutions to maximize solar energy usage with deep cycle technology and long lifespan
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Battery className="w-4 h-4 mr-2" />
                Solar Storage
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Zap className="w-4 h-4 mr-2" />
                Deep Cycle
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Shield className="w-4 h-4 mr-2" />
                Long Life
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solarBatteryProducts.map((product) => (
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
                        productUrl={`${typeof window !== 'undefined' ? window.location.origin : ''}/batteries/solar-storage#${product.id}`}
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
