"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { InquiryModal } from "@/components/inquiry-modal"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Star, CheckCircle, Truck, Shield, Zap, Wind } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const windmillBatteries = [
  {
    id: "exide-opzv-wind-2v-300ah",
    name: "Exide OPzV Wind 2V 300Ah",
    brand: "Exide",
    image: "/Exide Powersafe OPzV 2V.jpg",
    rating: 4.7,
    capacity: "300Ah",
    voltage: "2V",
    warranty: "72 Months",
    features: ["OPzV Technology", "Wind Optimized", "Valve Regulated", "Maintenance Free"],
    applications: ["Wind Farms", "Renewable Energy", "Wind Turbines", "Green Energy"],
    description: "Exide OPzV Wind 2V 300Ah is optimized for wind farm applications with valve-regulated technology.",
    detailedDescription: "The OPzV Wind 2V 300Ah battery features advanced OPzV technology specifically optimized for wind farm applications. Its valve-regulated design ensures maintenance-free operation in renewable energy systems. The wind-optimized construction provides excellent performance in fluctuating charge conditions typical of wind energy applications."
  },
  {
    id: "exide-opzv-wind-2v-500ah",
    name: "Exide OPzV Wind 2V 500Ah",
    brand: "Exide",
    image: "/Exide Powersafe OPzV 2V.jpg",
    rating: 4.8,
    capacity: "500Ah",
    voltage: "2V",
    warranty: "84 Months",
    features: ["OPzV Technology", "High Capacity", "Wind Optimized", "Extended Life"],
    applications: ["Large Wind Farms", "Renewable Energy", "Wind Power Plants", "Green Infrastructure"],
    description: "Exide OPzV Wind 2V 500Ah offers high capacity for large wind farm applications.",
    detailedDescription: "The OPzV Wind 2V 500Ah battery provides high capacity with advanced OPzV technology optimized for large wind farm applications. Its extended service life and reliable performance make it ideal for demanding renewable energy systems. The high capacity design ensures excellent energy storage for wind power plants."
  },
  {
    id: "exide-opzs-wind-2v-600ah",
    name: "Exide OPzS Wind 2V 600Ah",
    brand: "Exide",
    image: "/Exide Powersafe OPzV 2V.jpg",
    rating: 4.9,
    capacity: "600Ah",
    voltage: "2V",
    warranty: "96 Months",
    features: ["OPzS Technology", "Maximum Capacity", "Tubular Positive", "Wind Specific"],
    applications: ["Major Wind Farms", "Wind Power Plants", "Renewable Energy", "Green Power"],
    description: "Exide OPzS Wind 2V 600Ah delivers maximum capacity for major wind farm applications.",
    detailedDescription: "The OPzS Wind 2V 600Ah battery represents maximum capacity with advanced OPzS technology specifically designed for major wind farm applications. Its tubular positive plate construction ensures exceptional durability and long service life. The wind-specific design provides optimal performance in demanding renewable energy environments."
  },
  {
    id: "exide-powersafe-wind-2v",
    name: "Exide Powersafe Wind 2V",
    brand: "Exide",
    image: "/Exide Powersafe Wind 2V.webp",
    rating: 4.6,
    capacity: "400Ah",
    voltage: "2V",
    warranty: "72 Months",
    features: ["Powersafe Technology", "Wind Optimized", "Reliable", "Cost Effective"],
    applications: ["Wind Farms", "Renewable Energy", "Wind Turbines", "Green Applications"],
    description: "Exide Powersafe Wind 2V is designed for wind farm applications with reliable performance.",
    detailedDescription: "The Powersafe Wind 2V battery features Powersafe technology optimized for wind farm applications with reliable performance. Its cost-effective design provides excellent value for renewable energy systems. The wind-optimized construction ensures consistent performance in fluctuating charge conditions."
  },
  {
    id: "exide-ts-series-wind-backup",
    name: "Exide TS Series Wind Backup",
    brand: "Exide",
    image: "/Exide LMX Stationary.webp",
    rating: 4.7,
    capacity: "450Ah",
    voltage: "2V",
    warranty: "84 Months",
    features: ["TS Technology", "Wind Backup", "Extended Life", "High Performance"],
    applications: ["Wind Backup Systems", "Renewable Energy", "Wind Farms", "Energy Storage"],
    description: "Exide TS Series Wind Backup provides reliable backup for wind energy systems.",
    detailedDescription: "The TS Series Wind Backup battery features advanced TS technology specifically designed for wind backup systems. Its extended service life and high performance make it ideal for renewable energy storage applications. The wind backup design ensures reliable power delivery during low wind periods."
  },
  {
    id: "exide-lmx-wind-energy",
    name: "Exide LMX Wind Energy",
    brand: "Exide",
    image: "/Exide LMX Wind Energy.webp",
    rating: 4.8,
    capacity: "550Ah",
    voltage: "2V",
    warranty: "96 Months",
    features: ["LMX Technology", "Wind Energy", "Premium Grade", "Extended Warranty"],
    applications: ["Wind Energy Systems", "Renewable Power", "Wind Farms", "Green Infrastructure"],
    description: "Exide LMX Wind Energy is a premium-grade battery for wind energy systems.",
    detailedDescription: "The LMX Wind Energy battery represents premium-grade LMX technology specifically designed for wind energy systems. Its extended warranty and premium construction provide maximum reliability for renewable energy applications. The wind energy design ensures optimal performance in demanding green energy environments."
  },
  {
    id: "exide-stationary-tubular-for-wind",
    name: "Exide Stationary Tubular for Wind",
    brand: "Exide",
    image: "/Exide GFM 2V Series.jpg",
    rating: 4.7,
    capacity: "500Ah",
    voltage: "2V",
    warranty: "84 Months",
    features: ["Stationary Tubular", "Wind Specific", "Deep Cycle", "Long Life"],
    applications: ["Wind Farms", "Stationary Applications", "Renewable Energy", "Wind Power"],
    description: "Exide Stationary Tubular for Wind combines tubular technology with wind-specific design.",
    detailedDescription: "The Stationary Tubular for Wind battery features advanced tubular technology with wind-specific design for stationary applications. Its deep cycle capabilities ensure excellent performance in renewable energy systems. The long service life and reliable construction make it ideal for wind farm applications."
  },
  {
    id: "exide-megacycle-renewable",
    name: "Exide MegaCycle Renewable",
    brand: "Exide",
    image: "/Exide LMX Wind Energy.webp",
    rating: 4.8,
    capacity: "650Ah",
    voltage: "2V",
    warranty: "96 Months",
    features: ["MegaCycle Technology", "Renewable Energy", "High Capacity", "Extended Life"],
    applications: ["Renewable Energy", "Wind Farms", "Solar Hybrid", "Green Power"],
    description: "Exide MegaCycle Renewable offers high capacity for renewable energy applications.",
    detailedDescription: "The MegaCycle Renewable battery features advanced MegaCycle technology with high capacity for renewable energy applications. Its extended service life and reliable performance make it ideal for wind farms and solar hybrid systems. The high capacity design ensures excellent energy storage for green power applications."
  },
  {
    id: "exide-vrla-wind-opt-series",
    name: "Exide VRLA Wind OPT Series",
    brand: "Exide",
    image: "/Exide VRLA Wind OPT Series.jpeg",
    rating: 4.7,
    capacity: "350Ah",
    voltage: "2V",
    warranty: "72 Months",
    features: ["VRLA Technology", "Wind OPT", "Sealed Design", "Maintenance Free"],
    applications: ["Wind Farms", "Renewable Energy", "Wind Turbines", "Green Applications"],
    description: "Exide VRLA Wind OPT Series combines VRLA technology with wind optimization.",
    detailedDescription: "The VRLA Wind OPT Series battery features advanced VRLA technology with wind optimization for renewable energy applications. Its sealed design ensures maintenance-free operation in wind farm environments. The wind OPT technology provides excellent performance in fluctuating charge conditions."
  },
  {
    id: "exide-hd-renewable-power",
    name: "Exide HD Renewable Power",
    brand: "Exide",
    image: "/Exide LMX Stationary.webp",
    rating: 4.9,
    capacity: "700Ah",
    voltage: "2V",
    warranty: "120 Months",
    features: ["HD Technology", "Renewable Power", "Heavy Duty", "Maximum Warranty"],
    applications: ["Major Wind Farms", "Renewable Energy", "Wind Power Plants", "Green Infrastructure"],
    description: "Exide HD Renewable Power delivers heavy-duty performance for major renewable energy applications.",
    detailedDescription: "The HD Renewable Power battery represents heavy-duty technology with maximum warranty for major renewable energy applications. Its exceptional durability and long service life make it ideal for demanding wind power plants and green infrastructure. The heavy-duty construction ensures reliable performance in the most challenging renewable energy environments."
  }
]

export default function WindmillBatteriesPage() {
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
              Windmill Batteries
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Specialized renewable energy batteries for wind farms, wind turbines, and green energy applications with deep cycle performance
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Wind className="w-4 h-4 mr-2" />
                Wind Energy
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Zap className="w-4 h-4 mr-2" />
                Renewable Power
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Shield className="w-4 h-4 mr-2" />
                Green Technology
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {windmillBatteries.map((battery) => (
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Our Windmill Batteries?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Specialized renewable energy batteries engineered for wind farms, wind turbines, and sustainable power applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Wind className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Wind Optimized</h3>
              <p className="text-sm text-muted-foreground">Specifically designed for wind farm and renewable energy applications</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Deep Cycle</h3>
              <p className="text-sm text-muted-foreground">Advanced deep cycle technology for fluctuating wind energy conditions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Extended Life</h3>
              <p className="text-sm text-muted-foreground">Long service life with warranties up to 120 months for reliability</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Green Technology</h3>
              <p className="text-sm text-muted-foreground">Environmentally friendly solutions for sustainable energy systems</p>
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
