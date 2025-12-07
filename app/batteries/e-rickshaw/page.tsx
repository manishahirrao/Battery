"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { InquiryModal } from "@/components/inquiry-modal"
import { ShareButton } from "@/components/share-button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Star, CheckCircle, Truck, Shield, Zap, ZapIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const eRickshawBatteries = [
  {
    id: "e-rickshaw-neo",
    name: "Exide E-Rickshaw Neo",
    brand: "Exide",
    image: "/Exide MegaRide E-Rickshaw.png",
    rating: 4.8,
    capacity: "100Ah",
    voltage: "12V",
    warranty: "Extended Warranty",
    features: ["Fast Charging", "High Efficiency", "Long Range", "Lightweight"],
    applications: ["E-Rickshaws", "E-Carts", "Golf Carts", "E-Loaders"],
    description: "Exide E-Rickshaw Neo is a high-efficiency battery designed specifically for electric rickshaws. It offers fast charging capability and extended range for daily operations.",
    detailedDescription: "The E-Rickshaw Neo battery utilizes advanced lithium-ion technology with high-energy density cells for superior performance. Its lightweight design reduces vehicle weight while maintaining excellent power output. The battery's fast-charging capability ensures minimal downtime during operations, while the intelligent BMS (Battery Management System) provides optimal protection and longevity."
  }
]

export default function ERickshawBatteriesPage() {
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
              E-Rickshaw Batteries
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              High-efficiency batteries for electric rickshaws with fast charging capability and extended range
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <ZapIcon className="w-4 h-4 mr-2" />
                Top Rated
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Zap className="w-4 h-4 mr-2" />
                Fast Charging
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
            {eRickshawBatteries.map((battery) => (
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
                    <ZapIcon className="w-16 h-16 text-primary" style={{display: 'none'}} />
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
                        productUrl={`${typeof window !== 'undefined' ? window.location.origin : ''}/batteries/e-rickshaw#${battery.id}`}
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
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our E-Rickshaw Batteries</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Fast Charging</h3>
                <p className="text-sm text-muted-foreground">Quick recharge for minimal downtime</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  <ZapIcon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">High Efficiency</h3>
                <p className="text-sm text-muted-foreground">Maximum power output per charge</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Extended Range</h3>
                <p className="text-sm text-muted-foreground">100+ km range on single charge</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Long Life</h3>
                <p className="text-sm text-muted-foreground">1000+ charging cycles</p>
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
