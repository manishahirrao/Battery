"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { InquiryModal } from "@/components/inquiry-modal"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Star, CheckCircle, Truck, Shield, Zap, Bike } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const bikeScooterBatteries = [
  {
    id: "exide-xplore-12xl5l",
    name: "Exide Xplore 12XL5L",
    brand: "Exide",
    image: "/Exide Xplore 12XL5L.jpeg",
    rating: 4.5,
    capacity: "5Ah",
    voltage: "12V",
    warranty: "12 Months",
    features: ["Xplore Series", "Compact Design", "Reliable", "Cost Effective"],
    applications: ["Small Bikes", "Scooters", "Mopeds", "Light Two-Wheelers"],
    description: "Exide Xplore 12XL5L is a compact battery designed for small bikes and scooters.",
    detailedDescription: "The Xplore 12XL5L battery features compact design optimized for small bikes and scooters. Its reliable performance ensures consistent starting power for light two-wheeler applications. The cost-effective design makes it an excellent choice for budget-conscious riders."
  },
  {
    id: "exide-bikerz-br9-b",
    name: "Exide Bikerz BR9-B",
    brand: "Exide",
    image: "/Exide Bikerz BR9-B.jpeg",
    rating: 4.7,
    capacity: "9Ah",
    voltage: "12V",
    warranty: "24 Months",
    features: ["Bikerz Series", "High Performance", "Long Life", "Robust"],
    applications: ["Motorcycles", "Scooters", "Performance Bikes", "Sports Bikes"],
    description: "Exide Bikerz BR9-B is a high-performance battery for motorcycles and performance bikes.",
    detailedDescription: "The Bikerz BR9-B battery features high-performance design with robust construction for motorcycles and performance bikes. Its long service life and reliable performance make it ideal for demanding applications. The Bikerz series technology ensures excellent power delivery for sports bikes."
  },
  {
    id: "exide-xplore-vrla-2-5ah",
    name: "Exide Xplore VRLA 2.5Ah",
    brand: "Exide",
    image: "/Exide Xplore VRLA 2.5Ah.webp",
    rating: 4.5,
    capacity: "2.5Ah",
    voltage: "12V",
    warranty: "12 Months",
    features: ["VRLA Technology", "Sealed Design", "Maintenance Free", "Compact"],
    applications: ["Electric Bikes", "Light Scooters", "Mopeds", "Small EVs"],
    description: "Exide Xplore VRLA 2.5Ah is a sealed maintenance-free battery for light electric vehicles.",
    detailedDescription: "The Xplore VRLA 2.5Ah battery features sealed VRLA technology with maintenance-free operation for light electric vehicles. Its compact design makes it perfect for space-constrained applications. The sealed construction ensures safe operation in all positions."
  },
  {
    id: "exide-boss-motorbike-series",
    name: "Exide Boss Motorbike Series",
    brand: "Exide",
    image: "/Exide Boss Motorbike Series.png",
    rating: 4.8,
    capacity: "10Ah",
    voltage: "12V",
    warranty: "36 Months",
    features: ["Boss Series", "Premium Grade", "Extended Warranty", "Ultra Reliable"],
    applications: ["Premium Motorcycles", "Heavy Bikes", "Cruiser Bikes", "Adventure Bikes"],
    description: "Exide Boss Motorbike Series is a premium-grade battery for heavy and premium motorcycles.",
    detailedDescription: "The Boss Motorbike Series battery represents premium-grade technology with extended warranty for premium motorcycles. Its ultra-reliable performance ensures consistent power delivery for heavy bikes and cruiser motorcycles. The premium construction provides exceptional durability and long service life."
  },
  {
    id: "exide-two-wheeler-freedom-fb9b",
    name: "Exide Two-Wheeler Freedom FB9B",
    brand: "Exide",
    image: "/Exide Two-Wheeler Freedom FB9B.avif",
    rating: 4.7,
    capacity: "9Ah",
    voltage: "12V",
    warranty: "30 Months",
    features: ["Freedom Series", "Long Life", "Reliable", "Cost Effective"],
    applications: ["Commuter Bikes", "Scooters", "Daily Use", "Urban Mobility"],
    description: "Exide Two-Wheeler Freedom FB9B offers long life and reliability for daily commuting.",
    detailedDescription: "The Two-Wheeler Freedom FB9B battery features Freedom series technology with long service life for daily commuting applications. Its reliable performance ensures consistent power delivery for urban mobility. The cost-effective design provides excellent value for regular use.",
  }
]

export default function BikeScooterBatteriesPage() {
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
              Bike & Scooter Batteries
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              High-performance batteries for motorcycles, scooters, and two-wheelers with reliable starting power and extended service life
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Bike className="w-4 h-4 mr-2" />
                Two-Wheeler
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Zap className="w-4 h-4 mr-2" />
                Quick Start
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Shield className="w-4 h-4 mr-2" />
                Reliable Power
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bikeScooterBatteries.map((battery) => (
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
                    
                    <div className="pt-4 flex gap-3">
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Our Bike & Scooter Batteries?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              High-performance two-wheeler batteries designed for reliable starting, long service life, and optimal performance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Quick Start</h3>
              <p className="text-sm text-muted-foreground">Advanced technology ensures reliable starting power in all conditions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Reliable Power</h3>
              <p className="text-sm text-muted-foreground">Consistent performance for daily commuting and long-distance riding</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Wide Range</h3>
              <p className="text-sm text-muted-foreground">Comprehensive selection for all types of bikes and scooters</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Extended Warranty</h3>
              <p className="text-sm text-muted-foreground">Long warranty periods up to 36 months for complete peace of mind</p>
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
