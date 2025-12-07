"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { InquiryModal } from "@/components/inquiry-modal"
import { ShareButton } from "@/components/share-button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Star, CheckCircle, Truck, Shield, Zap, Tractor } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const truckTractorBatteries = [
  {
    id: "exide-jai-kisan",
    name: "Exide Jai Kisan",
    brand: "Exide",
    image: "/Exide Jai Kisan.jpg",
    rating: 4.6,
    capacity: "120Ah",
    voltage: "12V",
    warranty: "36 Months",
    features: ["Jai Kisan Series", "Agricultural", "Reliable", "Cost Effective"],
    applications: ["Tractors", "Farm Equipment", "Agricultural Vehicles", "Rural Applications"],
    description: "Exide Jai Kisan is designed for agricultural applications and farm equipment.",
    detailedDescription: "The Jai Kisan battery is specifically designed for agricultural applications with reliable performance for tractors and farm equipment. Its robust construction ensures durability in rural and farming environments. The cost-effective design provides excellent value for agricultural applications."
  },
  {
    id: "exide-xpress-xp1600",
    name: "Exide Xpress XP1600",
    brand: "Exide",
    image: "/Exide Xpress XP1600.jpg",
    rating: 4.7,
    capacity: "160Ah",
    voltage: "12V",
    warranty: "42 Months",
    features: ["Xpress Technology", "High Capacity", "Quick Start", "Reliable"],
    applications: ["Medium Trucks", "Commercial Vehicles", "Light Trucks", "Delivery Vehicles"],
    description: "Exide Xpress XP1600 provides high capacity for medium truck applications.",
    detailedDescription: "The Xpress XP1600 battery features advanced Xpress technology with high capacity for medium truck applications. Its quick start capability ensures reliable ignition in all conditions. The reliable performance makes it ideal for commercial vehicles and delivery fleets."
  },
  {
    id: "exide-xpress-ultra-truck-battery",
    name: "Exide Xpress Ultra Truck Battery",
    brand: "Exide",
    image: "/Exide Xpress Ultra Truck Battery.jpg",
    rating: 4.9,
    capacity: "220Ah",
    voltage: "12V",
    warranty: "72 Months",
    features: ["Xpress Ultra", "Maximum Capacity", "Premium Grade", "Extended Warranty"],
    applications: ["Heavy Trucks", "Long Haul", "Commercial Fleets", "Industrial Transport"],
    description: "Exide Xpress Ultra Truck Battery delivers maximum capacity for demanding truck applications.",
    detailedDescription: "The Xpress Ultra Truck Battery represents maximum capacity with premium Xpress Ultra technology for demanding truck applications. Its extended warranty and premium construction provide maximum reliability for commercial fleets. The maximum capacity design ensures excellent performance for heavy trucks and long haul operations."
  }
]

export default function TruckTractorBatteriesPage() {
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
              Truck & Tractor Batteries
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Heavy-duty batteries for trucks, tractors, and commercial vehicles with reliable starting power and extended service life
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Truck className="w-4 h-4 mr-2" />
                Heavy Duty
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Tractor className="w-4 h-4 mr-2" />
                Agricultural
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Shield className="w-4 h-4 mr-2" />
                Commercial Grade
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {truckTractorBatteries.map((battery) => (
              <Card key={battery.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
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
                        productUrl={`${typeof window !== 'undefined' ? window.location.origin : ''}/batteries/truck-tractor#${battery.id}`}
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Our Truck & Tractor Batteries?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Heavy-duty batteries engineered for commercial vehicles, agricultural equipment, and demanding truck applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Heavy Duty</h3>
              <p className="text-sm text-muted-foreground">Robust construction designed for demanding commercial applications</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Tractor className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Agricultural</h3>
              <p className="text-sm text-muted-foreground">Specialized design for tractors and farm equipment applications</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">High Capacity</h3>
              <p className="text-sm text-muted-foreground">Wide range of capacities from 100Ah to 220Ah for various applications</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Extended Warranty</h3>
              <p className="text-sm text-muted-foreground">Long warranty periods up to 72 months for complete peace of mind</p>
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
