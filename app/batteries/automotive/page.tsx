"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { InquiryModal } from "@/components/inquiry-modal"
import { ShareButton } from "@/components/share-button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Star, CheckCircle, Truck, Shield, Zap } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const automotiveBatteries = [
  {
    id: "exide-eezy",
    name: "Exide Eezy",
    brand: "Exide",
    image: "/Autom_Eezy.png",
    rating: 4.5,
    capacity: "45Ah",
    voltage: "12V",
    warranty: "Extended Warranty",
    features: ["Maintenance Free", "High Cranking Power", "Vibration Resistant", "Quick Start"],
    applications: ["Maruti Suzuki", "Hyundai", "Tata", "Honda"],
    description: "The Exide Eezy is a premium automotive battery designed for modern vehicles with advanced technology and superior performance.",
    detailedDescription: "Engineered with state-of-the-art technology, the Exide Eezy battery delivers exceptional starting power and reliability. Its advanced grid design ensures optimal current distribution, while the high-purity lead alloy provides enhanced corrosion resistance. The maintenance-free construction eliminates the need for water topping, making it perfect for modern vehicles."
  },
  {
    id: "exide-matrix",
    name: "Exide Matrix",
    brand: "Exide",
    image: "/Autom_Matrix.png",
    rating: 4.6,
    capacity: "55Ah",
    voltage: "12V",
    warranty: "Extended Warranty",
    features: ["Advanced Technology", "Long Life", "High Performance", "Zero Maintenance"],
    applications: ["Toyota", "Honda", "Ford", "Mahindra"],
    description: "Exide Matrix is an advanced automotive battery featuring cutting-edge technology for superior performance and extended service life.",
    detailedDescription: "The Exide Matrix battery incorporates advanced hybrid technology with calcium-silver alloy for superior performance and longer life. Its optimized plate design provides excellent charge acceptance and reduced water consumption. The battery's superior heat resistance ensures consistent performance in extreme weather conditions."
  },
  {
    id: "exide-epiq",
    name: "Exide Epiq",
    brand: "Exide",
    image: "/Autom_Epiq.png",
    rating: 4.7,
    capacity: "65Ah",
    voltage: "12V",
    warranty: "Extended Warranty",
    features: ["Premium Quality", "Maximum Power", "Extended Life", "All Weather"],
    applications: ["BMW", "Mercedes", "Audi", "Volkswagen"],
    description: "Exide Epiq is the flagship automotive battery designed for premium vehicles requiring maximum power and reliability.",
    detailedDescription: "The Exide Epiq battery represents the pinnacle of automotive battery technology with premium-grade materials and advanced manufacturing processes. Its ultra-thick plates provide exceptional durability and cranking power, while the advanced electrolyte formulation ensures optimal performance in all conditions. Perfect for luxury vehicles with high electrical demands."
  },
  {
    id: "exide-mileage",
    name: "Exide Mileage",
    brand: "Exide",
    image: "/Autom_Mileage.png",
    rating: 4.4,
    capacity: "50Ah",
    voltage: "12V",
    warranty: "Extended Warranty",
    features: ["Fuel Efficient", "Low Maintenance", "Reliable", "Cost Effective"],
    applications: ["Maruti", "Hyundai", "Tata", "Renault"],
    description: "Exide Mileage is designed for fuel-efficient vehicles, offering reliable performance with excellent value for money.",
    detailedDescription: "The Exide Mileage battery is specifically engineered for modern fuel-efficient vehicles. Its optimized design reduces internal resistance, improving fuel efficiency while maintaining reliable starting power. The battery's advanced alloy composition provides excellent corrosion resistance and extended service life."
  },
  {
    id: "exide-ride",
    name: "Exide Ride",
    brand: "Exide",
    image: "/Autom_Ride.png",
    rating: 4.5,
    capacity: "60Ah",
    voltage: "12V",
    warranty: "Extended Warranty",
    features: ["Smooth Performance", "Durable", "Quick Start", "All Terrain"],
    applications: ["SUVs", "Crossovers", "Compact SUVs", "Off-Road Vehicles"],
    description: "Exide Ride is designed for SUVs and crossover vehicles, providing reliable performance for both city and off-road conditions.",
    detailedDescription: "The Exide Ride battery features robust construction designed to handle the demanding electrical requirements of modern SUVs. Its enhanced vibration resistance ensures reliable performance on rough terrain, while the high reserve capacity provides consistent power for all electronic systems and accessories."
  },
  {
    id: "exide-drive",
    name: "Exide Drive",
    brand: "Exide",
    image: "/Autom_Drive.png",
    rating: 4.6,
    capacity: "70Ah",
    voltage: "12V",
    warranty: "Extended Warranty",
    features: ["Heavy Duty", "High Power", "Long Life", "Commercial Grade"],
    applications: ["Commercial Vehicles", "Taxis", "Fleet Vehicles", "Delivery Vans"],
    description: "Exide Drive is a heavy-duty automotive battery designed for commercial vehicles requiring maximum power and durability.",
    detailedDescription: "The Exide Drive battery is built for commercial applications with reinforced plates and heavy-duty construction. Its superior cranking power ensures reliable starts even after extended periods of inactivity, while the robust design withstands the demanding conditions of commercial use."
  }
]

export default function AutomotiveBatteriesPage() {
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
              Automotive Batteries
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              High-performance batteries for cars, SUVs, and sedans with superior cold cranking power and reliability
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Zap className="w-4 h-4 mr-2" />
                12V Batteries
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Shield className="w-4 h-4 mr-2" />
                Extended Warranty
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Truck className="w-4 h-4 mr-2" />
                Free Installation
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automotiveBatteries.map((battery) => (
              <Card key={battery.id} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  {/* Product Image */}
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <img 
                      src={battery.image} 
                      alt={battery.name}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        const target = e.currentTarget
                        target.style.display = 'none'
                        const nextSibling = target.nextElementSibling as HTMLElement
                        if (nextSibling) {
                          nextSibling.style.display = 'flex'
                        }
                      }}
                    />
                    <Zap className="w-16 h-16 text-primary" style={{display: 'none'}} />
                  </div>
                  
                  {/* Product Info */}
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <Badge variant="outline" className="mb-2">{battery.brand}</Badge>
                        <h3 className="text-lg font-semibold">{battery.name}</h3>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm text-muted-foreground">{battery.rating}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">{battery.description}</p>
                    
                    {/* Specifications */}
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-primary" />
                        <span>{battery.voltage} / {battery.capacity}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-primary" />
                        <span>{battery.warranty}</span>
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-2">
                      {battery.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Applications */}
                    <div className="pt-2">
                      <p className="text-xs text-muted-foreground mb-1">Suitable for:</p>
                      <div className="flex flex-wrap gap-1">
                        {battery.applications.slice(0, 3).map((app, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Actions */}
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
                        productUrl={`${typeof window !== 'undefined' ? window.location.origin : ''}/batteries/automotive#${battery.id}`}
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
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Automotive Batteries</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">High Cranking Power</h3>
                <p className="text-sm text-muted-foreground">Superior starting power in all weather conditions</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Extended Warranty</h3>
                <p className="text-sm text-muted-foreground">Peace of mind with comprehensive warranty coverage</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Free Installation</h3>
                <p className="text-sm text-muted-foreground">Professional installation at your doorstep</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">100% Genuine</h3>
                <p className="text-sm text-muted-foreground">Authentic products from authorized dealers</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} selectedProduct={selectedProduct} />
    </main>
  )
}
