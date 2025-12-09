"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { InquiryModal } from "@/components/inquiry-modal"
import { ShareButton } from "@/components/share-button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Star, CheckCircle, Truck, Shield, Zap, TruckIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const threeWheelerBatteries = [
  {
    id: "exide-eride-100ah",
    name: "Exide ERide 100Ah",
    brand: "Exide",
    image: "/Exide ERide 100Ah.jpeg",
    rating: 4.6,
    capacity: "100Ah",
    voltage: "12V",
    warranty: "24 Months",
    features: ["ERide Technology", "Electric Vehicle", "Deep Cycle", "Reliable"],
    applications: ["E-Rickshaws", "E-Autos", "Electric 3-Wheelers", "Commercial EVs"],
    description: "Exide ERide 100Ah is designed for electric rickshaws and three-wheeler applications.",
    detailedDescription: "The ERide 100Ah battery features advanced ERide technology optimized for electric rickshaw applications. Its deep cycle design ensures reliable performance for daily commercial use. The robust construction provides excellent durability in demanding three-wheeler environments."
  },
  {
    id: "exide-e-ride-traction-100ah",
    name: "Exide E-Ride Traction 100Ah",
    brand: "Exide",
    image: "/Exide E-Ride Traction 100Ah.jpeg",
    rating: 4.7,
    capacity: "100Ah",
    voltage: "12V",
    warranty: "30 Months",
    features: ["Traction Technology", "Enhanced Capacity", "Extended Life", "High Performance"],
    applications: ["E-Rickshaws", "E-Autos", "Heavy 3-Wheelers", "Commercial Transport"],
    description: "Exide E-Ride Traction 100Ah offers enhanced capacity for heavy electric three-wheeler applications.",
    detailedDescription: "The E-Ride Traction 100Ah battery provides enhanced capacity with advanced traction technology for heavy electric three-wheeler applications. Its extended service life and high performance make it ideal for commercial transport vehicles."
  },
  {
    id: "exide-e-technology-traction",
    name: "Exide E-Technology Traction Cells",
    brand: "Exide",
    image: "/Exide E-Technology Traction Cells.jpeg",
    rating: 4.8,
    capacity: "120Ah",
    voltage: "12V",
    warranty: "36 Months",
    features: ["E-Technology", "Traction Cells", "Premium Performance", "Extended Range"],
    applications: ["Heavy E-Rickshaws", "Commercial Transport", "Long Distance", "Fleet Operations"],
    description: "Exide E-Technology Traction Cells provides maximum capacity for demanding electric three-wheeler applications.",
    detailedDescription: "The E-Technology Traction Cells battery delivers maximum capacity with premium technology for the most demanding electric three-wheeler applications. Its extended range capability and premium performance make it perfect for fleet operations."
  },
  {
    id: "exide-tubular-er135",
    name: "Exide Tubular ER135",
    brand: "Exide",
    image: "/Exide Tubular ER135.jpeg",
    rating: 4.7,
    capacity: "135Ah",
    voltage: "12V",
    warranty: "36 Months",
    features: ["Tubular Technology", "ER Series", "Deep Cycle", "Long Life"],
    applications: ["E-Rickshaws", "E-Autos", "Commercial 3-Wheelers", "Heavy Duty EVs"],
    description: "Exide Tubular ER135 combines tubular technology with deep cycle performance for three-wheelers.",
    detailedDescription: "The Tubular ER135 battery features advanced tubular technology with ER series design for deep cycle performance in three-wheeler applications. Its long service life and reliable performance make it ideal for commercial operations."
  },
  {
    id: "current-ev-120ah",
    name: "Current EV 120Ah",
    brand: "Current",
    image: "/Current EV 120Ah.webp",
    rating: 4.5,
    capacity: "120Ah",
    voltage: "12V",
    warranty: "24 Months",
    features: ["EV Technology", "High Capacity", "Deep Cycle", "Reliable Performance"],
    applications: ["E-Rickshaws", "E-Autos", "Electric 3-Wheelers", "Commercial EVs"],
    description: "Current EV 120Ah is designed for electric three-wheelers with high capacity and reliable performance.",
    detailedDescription: "The Current EV 120Ah battery features advanced EV technology optimized for electric three-wheeler applications. Its high capacity design provides extended range for commercial operations, while the deep cycle technology ensures reliable performance in demanding daily use conditions."
  }
]

export default function ThreeWheelerBatteriesPage() {
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
              3-Wheeler Batteries
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Specialized batteries for electric rickshaws, e-autos, and three-wheeler commercial vehicles with deep cycle performance and extended range
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <TruckIcon className="w-4 h-4 mr-2" />
                3-Wheeler
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Zap className="w-4 h-4 mr-2" />
                Electric Vehicle
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Shield className="w-4 h-4 mr-2" />
                Deep Cycle
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {threeWheelerBatteries.map((battery) => (
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
                        productUrl={`${typeof window !== 'undefined' ? window.location.origin : ''}/batteries/three-wheeler#${battery.id}`}
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Our 3-Wheeler Batteries?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Specialized electric vehicle batteries engineered for rickshaws, e-autos, and commercial three-wheeler applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TruckIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">EV Optimized</h3>
              <p className="text-sm text-muted-foreground">Specifically designed for electric three-wheeler applications</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Deep Cycle</h3>
              <p className="text-sm text-muted-foreground">Advanced deep cycle technology for extended daily operation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Extended Range</h3>
              <p className="text-sm text-muted-foreground">High capacity batteries for longer operating range</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Commercial Grade</h3>
              <p className="text-sm text-muted-foreground">Heavy-duty construction for demanding commercial use</p>
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
