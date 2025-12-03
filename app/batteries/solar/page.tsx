"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { InquiryModal } from "@/components/inquiry-modal"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Star, CheckCircle, Truck, Shield, Zap, Sun } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const solarBatteries = [
  {
    id: "solar-agm-vrla",
    name: "Exide Solar AGM VRLA",
    brand: "Exide",
    image: "/Solar_Agm vrla",
    rating: 4.7,
    capacity: "100Ah",
    voltage: "12V",
    warranty: "Extended Warranty",
    features: ["Deep Cycle", "Maintenance Free", "Sealed Design", "High Efficiency"],
    applications: ["Solar Systems", "Off-Grid", "Renewable Energy", "Street Lights"],
    description: "Exide Solar AGM VRLA is an advanced deep cycle battery designed for solar applications. It features Absorbent Glass Mat technology for superior performance and reliability.",
    detailedDescription: "The Solar AGM VRLA battery utilizes advanced AGM technology with high-purity lead alloy for optimal solar energy storage. Its sealed design eliminates maintenance requirements while providing excellent deep cycle performance. The battery's superior charge acceptance ensures efficient energy storage from solar panels, while the low self-discharge rate maintains charge during periods without sunlight."
  },
  {
    id: "solar-flooded",
    name: "Exide Solar Flooded",
    brand: "Exide",
    image: "/Solar_Flooded",
    rating: 4.5,
    capacity: "200Ah",
    voltage: "12V",
    warranty: "Extended Warranty",
    features: ["Tubular Technology", "Deep Discharge", "Long Life", "Eco Friendly"],
    applications: ["Large Solar Systems", "Industrial Applications", "Agricultural", "Remote Areas"],
    description: "Exide Solar Flooded is a heavy-duty tubular battery designed for large-scale solar installations requiring deep discharge capability and extended service life.",
    detailedDescription: "The Solar Flooded battery features advanced tubular plate technology with thick positive plates for superior deep cycle performance. Its robust construction withstands frequent deep discharge cycles common in solar applications. The battery's special alloy composition provides excellent resistance to corrosion, while the efficient electrolyte circulation ensures optimal performance in varying temperature conditions."
  }
]

export default function SolarBatteriesPage() {
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
              Solar Batteries
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Deep cycle batteries optimized for solar panel systems and renewable energy applications
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Sun className="w-4 h-4 mr-2" />
                Eco Choice
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Zap className="w-4 h-4 mr-2" />
                Deep Cycle
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
            {solarBatteries.map((battery) => (
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
                    <Sun className="w-16 h-16 text-primary" style={{display: 'none'}} />
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
                        href={`https://wa.me/919876543210?text=Hi,%20I'm%20interested%20in%20${encodeURIComponent(battery.name)}%20battery`}
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
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Solar Batteries</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  <Sun className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Eco Friendly</h3>
                <p className="text-sm text-muted-foreground">Sustainable energy storage solution</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Deep Cycle</h3>
                <p className="text-sm text-muted-foreground">Optimized for solar energy storage</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Long Backup</h3>
                <p className="text-sm text-muted-foreground">Extended power storage capacity</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Low Maintenance</h3>
                <p className="text-sm text-muted-foreground">Minimal upkeep requirements</p>
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
