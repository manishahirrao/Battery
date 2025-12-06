"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { InquiryModal } from "@/components/inquiry-modal"
import { ShareButton } from "@/components/share-button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Star, CheckCircle, Truck, Shield, Zap, Home } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const inverterBatteries = [
  {
    id: "exide-instabrite-ib1500",
    name: "Exide Instabrite IB1500",
    brand: "Exide",
    image: "/Exide Instabrite IB1500.jpg",
    rating: 4.6,
    capacity: "150Ah",
    voltage: "12V",
    warranty: "36 Months",
    features: ["Tubular Technology", "Deep Cycle", "Low Maintenance", "High Backup"],
    applications: ["Home Backup", "Office Backup", "Small Shops", "Hospitals"],
    description: "Exide Instabrite IB1500 is a reliable tubular battery designed for consistent power backup with advanced tubular plate technology.",
    detailedDescription: "The Instabrite IB1500 battery features high-purity lead alloy tubular plates that ensure long life and consistent performance. Its robust construction includes corrosion-resistant positive plates and special additives that enhance charge acceptance. The battery's deep cycle design provides extended backup time, making it ideal for areas with frequent power cuts."
  },
  {
    id: "exide-instabrite-ib1350",
    name: "Exide Instabrite IB1350",
    brand: "Exide",
    image: "/Exide Instabrite IB1350.jpeg",
    rating: 4.5,
    capacity: "135Ah",
    voltage: "12V",
    warranty: "36 Months",
    features: ["Tubular Technology", "Quick Recovery", "Low Water Loss", "Reliable"],
    applications: ["Small Homes", "Shops", "Clinics", "Educational Institutes"],
    description: "Exide Instabrite IB1350 offers reliable performance with efficient tubular technology for medium-duty backup applications.",
    detailedDescription: "The Instabrite IB1350 utilizes advanced tubular plate technology with optimized grid design for uniform current distribution. Its special alloy composition reduces water consumption significantly, resulting in lower maintenance requirements and longer service life."
  },
  {
    id: "exide-invamaster-imtt1500",
    name: "Exide InvaMaster IMTT1500",
    brand: "Exide",
    image: "/Exide InvaMaster IMTT1500.jpeg",
    rating: 4.7,
    capacity: "150Ah",
    voltage: "12V",
    warranty: "48 Months",
    features: ["Advanced Tubular", "Long Life", "Quick Recovery", "Corrosion Resistant"],
    applications: ["Large Homes", "Offices", "Clinics", "Educational Institutes"],
    description: "Exide InvaMaster IMTT1500 is a premium tubular battery designed for demanding power backup requirements with superior performance.",
    detailedDescription: "The InvaMaster IMTT1500 features advanced tubular technology with thicker plates for enhanced durability and longer life. Its optimized grid design ensures uniform current distribution and prevents premature plate failure. The battery's high charge acceptance capability ensures quick recharging."
  },
  {
    id: "exide-invamaster-imtt1800",
    name: "Exide InvaMaster IMTT1800",
    brand: "Exide",
    image: "/Exide InvaMaster IMTT1500.jpeg",
    rating: 4.8,
    capacity: "180Ah",
    voltage: "12V",
    warranty: "48 Months",
    features: ["Premium Tubular", "Maximum Backup", "Ultra Long Life", "Heavy Duty"],
    applications: ["Large Villas", "Small Businesses", "Restaurants", "Petrol Pumps"],
    description: "Exide InvaMaster IMTT1800 is a high-capacity premium tubular battery offering maximum backup time and extended service life.",
    detailedDescription: "The InvaMaster IMTT1800 represents premium tubular battery technology with ultra-thick plates for exceptional durability. Its special electrolyte formulation ensures optimal performance in all conditions, making it perfect for heavy-duty applications requiring extended backup periods."
  },
  {
    id: "exide-el-plus-150l",
    name: "Exide EL+ 150L",
    brand: "Exide",
    image: "/Exide EL+ 150L.jpg",
    rating: 4.6,
    capacity: "150Ah",
    voltage: "12V",
    warranty: "42 Months",
    features: ["Flat Plate", "Low Maintenance", "Quick Charge", "Reliable"],
    applications: ["Medium Homes", "Shops", "Small Offices", "Pharmacies"],
    description: "Exide EL+ 150L combines flat plate technology with reliability, offering excellent performance for medium-duty backup applications.",
    detailedDescription: "The EL+ 150L battery features advanced flat plate technology with special alloy composition for enhanced performance. Its efficient design ensures optimal energy conversion and minimal power loss during charging and discharging cycles, making it perfect for users seeking reliable backup."
  },
  {
    id: "exide-it500-super",
    name: "Exide IT500 Super Tubular",
    brand: "Exide",
    image: "/Exide IT500 Super Tubula.jpeg",
    rating: 4.7,
    capacity: "150Ah",
    voltage: "12V",
    warranty: "48 Months",
    features: ["Super Tubular", "High Efficiency", "Low Water Loss", "Extended Life"],
    applications: ["Home Backup", "Office Backup", "Small Shops", "Hospitals"],
    description: "Exide IT500 Super Tubular is a high-performance tubular battery designed for superior efficiency and extended service life.",
    detailedDescription: "The IT500 Super Tubular battery features advanced super tubular technology with special additives for enhanced performance. Its high-purity lead alloy construction ensures excellent charge acceptance and deep discharge recovery, making it ideal for demanding backup applications."
  },
  {
    id: "exide-gqp1500",
    name: "Exide GQP1500",
    brand: "Exide",
    image: "/Exide GQP1500.jpeg",
    rating: 4.6,
    capacity: "150Ah",
    voltage: "12V",
    warranty: "42 Months",
    features: ["Tubular Technology", "Quick Recovery", "Low Water Loss", "Reliable"],
    applications: ["Home Backup", "Office Backup", "Small Shops", "Hospitals"],
    description: "Exide GQP1500 is a quality tubular battery designed for reliable power backup with excellent charge acceptance.",
    detailedDescription: "The GQP1500 battery features advanced tubular technology with optimized plate design for superior performance. Its special alloy composition reduces water consumption and enhances charge acceptance, ensuring reliable backup performance."
  },
  {
    id: "exide-invatubular-150ah",
    name: "Exide InvaTubular 150Ah",
    brand: "Exide",
    image: "/Exide InvaTubular 150Ah.jpg",
    rating: 4.7,
    capacity: "150Ah",
    voltage: "12V",
    warranty: "48 Months",
    features: ["Tall Tubular", "High Efficiency", "Low Water Loss", "Extended Life"],
    applications: ["Medium Homes", "Shops", "Small Offices", "Pharmacies"],
    description: "Exide InvaTubular 150Ah combines tall tubular technology with reliability for excellent backup performance.",
    detailedDescription: "The InvaTubular 150Ah battery features tall tubular plates that provide superior performance and longer life. Its special alloy composition reduces water consumption significantly, resulting in lower maintenance requirements and optimal energy conversion."
  },
  {
    id: "exide-gold-tubular-1600",
    name: "Exide Gold Tubular 1600",
    brand: "Exide",
    image: "/Exide Gold 35Ah.jpg",
    rating: 4.8,
    capacity: "160Ah",
    voltage: "12V",
    warranty: "60 Months",
    features: ["Premium Gold", "Maximum Life", "Zero Maintenance", "Heavy Duty"],
    applications: ["Large Homes", "Offices", "Clinics", "Educational Institutes"],
    description: "Exide Gold Tubular 1600 is the premium tubular battery offering maximum service life and zero maintenance.",
    detailedDescription: "The Gold Tubular 1600 represents the pinnacle of tubular battery technology with premium-grade materials. Its ultra-thick tubular plates provide exceptional durability and service life, while the zero-maintenance design eliminates the need for regular water topping, making it perfect for demanding applications."
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
              <Card key={battery.id} id={battery.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
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
                        productUrl={`${typeof window !== 'undefined' ? window.location.origin : ''}/batteries/inverter#${battery.id}`}
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
