"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { InquiryModal } from "@/components/inquiry-modal"
import { ShareButton } from "@/components/share-button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Star, CheckCircle, Truck, Shield, Zap, Factory } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const subStationBatteries = [
  {
    id: "exide-opzs-2v-300ah",
    name: "Exide OPzS 2V 300Ah",
    brand: "Exide",
    image: "/Exide OPzS 2V 300Ah.avif",
    rating: 4.7,
    capacity: "300Ah",
    voltage: "2V",
    warranty: "60 Months",
    features: ["OPzS Technology", "Tubular Positive", "Stationary Design", "Long Life"],
    applications: ["Power Substations", "Telecom Infrastructure", "Switchyards", "Control Rooms"],
    description: "Exide OPzS 2V 300Ah is a stationary tubular battery designed for substation applications requiring reliable backup power.",
    detailedDescription: "The OPzS 2V 300Ah battery features advanced tubular positive plate technology with stationary design for extended service life. Its robust construction ensures reliable performance in demanding substation environments with excellent deep discharge recovery."
  },
  {
    id: "exide-powersafe-gfm-2v",
    name: "Exide Powersafe GFM 2V",
    brand: "Exide",
    image: "/Exide Powersafe GFM 2V.webp",
    rating: 4.6,
    capacity: "400Ah",
    voltage: "2V",
    warranty: "60 Months",
    features: ["GFM Technology", "Front Terminal", "Stationary Design", "Easy Installation"],
    applications: ["Switchyards", "Control Rooms", "Power Plants", "Industrial Sites"],
    description: "Exide Powersafe GFM 2V features front terminal design for easy installation in stationary applications.",
    detailedDescription: "The Powersafe GFM 2V battery features front terminal design for easy installation and maintenance access. Its stationary construction and reliable performance make it ideal for switchyard and control room applications."
  },
  {
    id: "exide-lmx-stationary",
    name: "Exide LMX Stationary",
    brand: "Exide",
    image: "/Exide LMX Stationary.webp",
    rating: 4.8,
    capacity: "450Ah",
    voltage: "2V",
    warranty: "84 Months",
    features: ["LMX Technology", "Premium Grade", "Extended Life", "High Performance"],
    applications: ["Critical Substations", "Power Plants", "Grid Infrastructure", "Industrial Sites"],
    description: "Exide LMX Stationary is a premium-grade battery offering extended service life for critical applications.",
    detailedDescription: "The LMX Stationary battery represents premium-grade stationary battery technology with extended service life. Its advanced LMX technology ensures high performance and reliability in critical power infrastructure applications."
  },
  {
    id: "exide-hd-industrial",
    name: "Exide HD (Heavy Duty Industrial)",
    brand: "Exide",
    image: "/Exide HD (Heavy Duty Industrial).jpeg",
    rating: 4.9,
    capacity: "700Ah",
    voltage: "2V",
    warranty: "96 Months",
    features: ["Heavy Duty", "Industrial Grade", "Maximum Durability", "Extended Warranty"],
    applications: ["Heavy Industry", "Power Plants", "Mining Operations", "Critical Infrastructure"],
    description: "Exide HD Heavy Duty Industrial battery is engineered for the most demanding industrial applications.",
    detailedDescription: "The HD Heavy Duty Industrial battery is engineered for maximum durability in the most demanding industrial applications. Its heavy-duty construction with ultra-thick plates and extended warranty make it perfect for critical infrastructure requiring ultimate reliability."
  }
]

export default function SubStationBatteriesPage() {
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
          <div className="flex items-center gap-4 mb-6">
            <Link href="/#products" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Sub Station Batteries
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Industrial-grade stationary batteries for power substations, switchyards, and critical infrastructure applications
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Factory className="w-4 h-4 mr-2" />
                Sub Station
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Zap className="w-4 h-4 mr-2" />
                Stationary Design
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Shield className="w-4 h-4 mr-2" />
                Industrial Grade
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subStationBatteries.map((battery) => (
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
                      {battery.features.slice(0, 3).map((feature: string, index: number) => (
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
                        href={`https://wa.me/9179741 46200?text=Hi,%20I'm%20interested%20in%20${encodeURIComponent(battery.name)}%20battery`}
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
                        productUrl={`${typeof window !== 'undefined' ? window.location.origin : ''}/batteries/sub-station#${battery.id}`}
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Our Sub Station Batteries?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Industrial-grade stationary batteries designed for critical power infrastructure and substation applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Factory className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Industrial Grade</h3>
              <p className="text-sm text-muted-foreground">Heavy-duty construction designed for demanding substation environments</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Extended Warranty</h3>
              <p className="text-sm text-muted-foreground">Long warranty periods up to 96 months for peace of mind</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">High Capacity</h3>
              <p className="text-sm text-muted-foreground">Wide range of capacities from 300Ah to 800Ah for various applications</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Stationary Design</h3>
              <p className="text-sm text-muted-foreground">Specialized stationary design for fixed installation applications</p>
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
