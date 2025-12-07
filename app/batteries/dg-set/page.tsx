"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { InquiryModal } from "@/components/inquiry-modal"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Star, CheckCircle, Truck, Shield, Zap, Power } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const dgSetBatteries = [
  {
    id: "exide-genset-xp1500",
    name: "Exide Genset XP1500",
    brand: "Exide",
    image: "/Exide Genset XP1500.jpg",
    rating: 4.7,
    capacity: "150Ah",
    voltage: "12V",
    warranty: "48 Months",
    features: ["Xpress Technology", "High Performance", "Quick Recovery", "Durable"],
    applications: ["DG Sets", "Backup Power", "Industrial Applications", "Commercial Use"],
    description: "Exide Genset XP1500 is designed for generator sets offering high performance and quick recovery.",
    detailedDescription: "The Genset XP1500 battery features advanced Xpress technology optimized for generator set applications. Its high-performance design ensures reliable power delivery and quick recovery after discharge cycles. The durable construction makes it ideal for continuous backup power applications."
  },
  {
    id: "exide-genplus-12v-150ah",
    name: "Exide Genplus 12V 150Ah",
    brand: "Exide",
    image: "/Exide Genplus 12V 150Ah.jpg",
    rating: 4.6,
    capacity: "150Ah",
    voltage: "12V",
    warranty: "42 Months",
    features: ["Genplus Series", "Reliable", "Extended Life", "Low Maintenance"],
    applications: ["DG Sets", "Industrial Backup", "Commercial Power", "Emergency Systems"],
    description: "Exide Genplus 12V 150Ah provides reliable performance for generator set applications.",
    detailedDescription: "The Genplus 12V 150Ah battery offers reliable performance with extended service life for generator applications. Its low maintenance design ensures hassle-free operation in demanding environments. The Genplus series technology provides excellent charge acceptance and deep discharge recovery."
  },
  {
    id: "exide-el-genset-12v180",
    name: "Exide EL Genset 12V180",
    brand: "Exide",
    image: "/Exide EL Genset 12V180.webp",
    rating: 4.7,
    capacity: "180Ah",
    voltage: "12V",
    warranty: "54 Months",
    features: ["EL Technology", "High Capacity", "Efficient", "Reliable"],
    applications: ["Large DG Sets", "Industrial Power", "Commercial Backup", "Emergency Systems"],
    description: "Exide EL Genset 12V180 combines EL technology with high capacity for large generator applications.",
    detailedDescription: "The EL Genset 12V180 battery features advanced EL technology with high capacity output for large generator applications. Its efficient design ensures optimal power utilization while maintaining reliable performance. The EL technology provides excellent charge acceptance and recovery characteristics."
  },
  {
    id: "exide-smf-genset-100ah",
    name: "Exide SMF Genset 100Ah",
    brand: "Exide",
    image: "/Exide SMF Genset 100Ah.jpeg",
    rating: 4.6,
    capacity: "100Ah",
    voltage: "12V",
    warranty: "36 Months",
    features: ["SMF Technology", "Sealed Maintenance Free", "Compact", "Efficient"],
    applications: ["Small DG Sets", "Commercial Backup", "Emergency Power", "Compact Systems"],
    description: "Exide SMF Genset 100Ah is a sealed maintenance-free battery for small generator applications.",
    detailedDescription: "The SMF Genset 100Ah battery features sealed maintenance-free technology with compact design for small generator applications. Its efficient performance ensures reliable power delivery while requiring zero maintenance. The SMF technology provides excellent safety and convenience for backup power systems.",
  }
]

export default function DGSetBatteriesPage() {
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
              DG Set Batteries
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Heavy-duty generator set batteries designed for reliable backup power, industrial applications, and critical infrastructure support
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Power className="w-4 h-4 mr-2" />
                DG Set
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Zap className="w-4 h-4 mr-2" />
                Heavy Duty
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
            {dgSetBatteries.map((battery) => (
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
                        href={`https://wa.me/917974146200?text=Hi,%20I'm%20interested%20in%20${encodeURIComponent(battery.name)}%20battery`}
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Our DG Set Batteries?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Heavy-duty generator set batteries engineered for reliable backup power, industrial performance, and critical infrastructure support
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Power className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Heavy Duty</h3>
              <p className="text-sm text-muted-foreground">Robust construction designed for demanding generator applications</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Extended Warranty</h3>
              <p className="text-sm text-muted-foreground">Long warranty periods up to 84 months for complete peace of mind</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">High Performance</h3>
              <p className="text-sm text-muted-foreground">Advanced technology ensures reliable power delivery and quick recovery</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Industrial Grade</h3>
              <p className="text-sm text-muted-foreground">Premium materials and construction for critical infrastructure applications</p>
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
