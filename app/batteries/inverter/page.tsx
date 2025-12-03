"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { InquiryModal } from "@/components/inquiry-modal"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Star, CheckCircle, Truck, Shield, Zap, Home } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const inverterBatteries = [
  {
    id: "inva-magic",
    name: "Exide Inva Magic",
    brand: "Exide",
    image: "/Inverter_InvaMagic.png",
    rating: 4.6,
    capacity: "150Ah",
    voltage: "12V",
    warranty: "Extended Warranty",
    features: ["Tubular Technology", "Deep Cycle", "Low Maintenance", "High Backup"],
    applications: ["Home Backup", "Office Backup", "Small Shops", "Hospitals"],
    description: "Exide Inva Magic is a premium tubular battery designed for reliable power backup. It features advanced tubular technology that ensures long life and consistent performance.",
    detailedDescription: "The Inva Magic battery utilizes state-of-the-art tubular plate technology with high-purity lead alloy for superior performance. Its robust construction includes corrosion-resistant positive plates and special additives that enhance charge acceptance. The battery's deep cycle design provides extended backup time, making it ideal for areas with frequent power cuts. The sealed design ensures minimal water loss and reduced maintenance requirements."
  },
  {
    id: "inva-master",
    name: "Exide Inva Master",
    brand: "Exide",
    image: "/Inverter_InvaMaster.png",
    rating: 4.7,
    capacity: "180Ah",
    voltage: "12V",
    warranty: "Extended Warranty",
    features: ["Advanced Tubular", "Long Life", "Quick Recovery", "Corrosion Resistant"],
    applications: ["Large Homes", "Offices", "Clinics", "Educational Institutes"],
    description: "Exide Inva Master is a high-capacity tubular battery designed for demanding power backup requirements. It offers superior performance and extended service life.",
    detailedDescription: "The Inva Master battery features advanced tubular technology with thicker plates for enhanced durability and longer life. Its optimized grid design ensures uniform current distribution and prevents premature plate failure. The battery's high charge acceptance capability ensures quick recharging, while its superior heat dissipation properties maintain optimal performance even in high-temperature environments. Ideal for heavy-duty applications requiring extended backup periods."
  },
  {
    id: "inva-tabular",
    name: "Exide Inva Tabular",
    brand: "Exide",
    image: "/Inverter_InvaTabular.png",
    rating: 4.5,
    capacity: "150Ah",
    voltage: "12V",
    warranty: "Extended Warranty",
    features: ["Tall Tubular", "High Efficiency", "Low Water Loss", "Reliable"],
    applications: ["Medium Homes", "Shops", "Small Offices", "Pharmacies"],
    description: "Exide Inva Tabular combines reliability with affordability, offering excellent performance for medium-duty backup applications.",
    detailedDescription: "The Inva Tabular battery features tall tubular plates that provide superior performance and longer life compared to conventional batteries. Its special alloy composition reduces water consumption significantly, resulting in lower maintenance requirements. The battery's efficient design ensures optimal energy conversion and minimal power loss during charging and discharging cycles. Perfect for users seeking reliable backup without frequent maintenance."
  },
  {
    id: "inva-zen",
    name: "Exide Inva Zen",
    brand: "Exide",
    image: "/Inverter_InvaZen.png",
    rating: 4.8,
    capacity: "200Ah",
    voltage: "12V",
    warranty: "Extended Warranty",
    features: ["Premium Tubular", "Maximum Backup", "Ultra Long Life", "Zero Maintenance"],
    applications: ["Large Villas", "Small Businesses", "Restaurants", "Petrol Pumps"],
    description: "Exide Inva Zen is the flagship tubular battery offering maximum backup time and ultra-long service life for critical power backup applications.",
    detailedDescription: "The Inva Zen battery represents the pinnacle of tubular battery technology with premium-grade materials and advanced manufacturing processes. Its ultra-thick tubular plates provide exceptional durability and service life, while the special electrolyte formulation ensures optimal performance in all conditions. The battery's zero-maintenance design eliminates the need for regular water topping, making it perfect for remote or hard-to-access installations."
  }
]

export default function InverterBatteriesPage() {
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
              Inverter Batteries
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Reliable tubular and flat plate batteries for uninterrupted power backup for homes and offices
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Home className="w-4 h-4 mr-2" />
                Home & Office Backup
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Zap className="w-4 h-4 mr-2" />
                Tubular Technology
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
            {inverterBatteries.map((battery) => (
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
                    <Home className="w-16 h-16 text-primary" style={{display: 'none'}} />
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
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Inverter Batteries</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Long Backup Time</h3>
                <p className="text-sm text-muted-foreground">Extended power backup for uninterrupted supply</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Tubular Technology</h3>
                <p className="text-sm text-muted-foreground">Advanced tubular plates for longer life</p>
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
                <h3 className="font-semibold mb-2">Low Maintenance</h3>
                <p className="text-sm text-muted-foreground">Minimal water topping and easy maintenance</p>
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
