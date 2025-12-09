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

const twoWheelerBatteries = [
  {
    id: "exide-jetski",
    name: "Exide Jetski",
    brand: "Exide",
    image: "/Two_wheeler_jetski",
    rating: 4.5,
    capacity: "5Ah",
    voltage: "12V",
    warranty: "Extended Warranty",
    features: ["Maintenance Free", "Quick Start", "Vibration Resistant", "Long Life"],
    applications: ["Motorcycles", "Scooters", "Mopeds", "ATVs"],
    description: "Exide Jetski is a premium two-wheeler battery designed for reliable performance in all riding conditions. It features advanced technology for superior starting power and durability.",
    detailedDescription: "The Exide Jetski battery utilizes advanced lead-acid technology with calcium alloy for enhanced performance and longer life. Its robust construction includes vibration-resistant plates that withstand rough road conditions and frequent stops. The maintenance-free design eliminates the need for electrolyte topping, while the sealed construction prevents acid leakage. The battery's high cranking power ensures reliable starts even in cold weather conditions."
  },
  {
    id: "lf-5e-five-ah",
    name: "LF-5E Five Ah",
    brand: "LF",
    image: "/LF-5E Five Ah.webp",
    rating: 4.3,
    capacity: "5Ah",
    voltage: "12V",
    warranty: "12 Months",
    features: ["Lightweight", "Quick Start", "Low Maintenance", "Compact Design"],
    applications: ["Motorcycles", "Scooters", "Mopeds", "Small Bikes"],
    description: "LF-5E Five Ah is a compact battery designed for small two-wheelers with reliable starting power.",
    detailedDescription: "The LF-5E Five Ah battery features lightweight construction with compact design perfect for small motorcycles and scooters. Its quick start technology ensures reliable ignition, while the low maintenance design provides hassle-free operation. The compact size makes it ideal for vehicles with limited battery space."
  },
  {
    id: "pro-bike-rider-9ah",
    name: "Pro Bike Rider 9Ah",
    brand: "Pro Bike",
    image: "/Pro Bike Rider 9Ah.jpg",
    rating: 4.4,
    capacity: "9Ah",
    voltage: "12V",
    warranty: "18 Months",
    features: ["High Capacity", "Enhanced Power", "Durable", "Long Life"],
    applications: ["Motorcycles", "Scooters", "Heavy Bikes", "Performance Vehicles"],
    description: "Pro Bike Rider 9Ah offers enhanced power and capacity for demanding two-wheeler applications.",
    detailedDescription: "The Pro Bike Rider 9Ah battery provides enhanced power with higher capacity for demanding two-wheeler applications. Its durable construction ensures long service life even in harsh riding conditions. The enhanced power delivery makes it ideal for performance motorcycles and heavy bikes requiring consistent electrical output."
  }
]

export default function TwoWheelerBatteriesPage() {
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
              Two Wheeler Batteries
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Compact and powerful batteries designed for bikes, scooters, and mopeds with quick start technology
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Bike className="w-4 h-4 mr-2" />
                All Two Wheelers
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Zap className="w-4 h-4 mr-2" />
                Quick Start
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Shield className="w-4 h-4 mr-2" />
                Extended Warranty
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {twoWheelerBatteries.map((battery) => (
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
                    <Bike className="w-16 h-16 text-primary" style={{display: 'none'}} />
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
                    <div className="flex gap-2 pt-4">
                      <Button 
                        onClick={() => openModal(battery.name)}
                        className="flex-1"
                      >
                        Get Quote
                      </Button>
                      <a
                        href={`https://wa.me/917974146200?text=Hi,%20I'm%20interested%20in%20${encodeURIComponent(battery.name)}%20battery`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button variant="outline" className="w-full">
                          WhatsApp
                        </Button>
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
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Two Wheeler Batteries</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Quick Start</h3>
                <p className="text-sm text-muted-foreground">Instant ignition even in cold weather</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Vibration Resistant</h3>
                <p className="text-sm text-muted-foreground">Built to withstand rough road conditions</p>
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
                <h3 className="font-semibold mb-2">Maintenance Free</h3>
                <p className="text-sm text-muted-foreground">Zero maintenance for hassle-free riding</p>
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
