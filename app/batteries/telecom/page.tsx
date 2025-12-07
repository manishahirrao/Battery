"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { InquiryModal } from "@/components/inquiry-modal"
import { ShareButton } from "@/components/share-button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Star, CheckCircle, Shield, Zap, Radio } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const telecomBatteries = [
  {
    id: "exide-powersafe-vrla-2v",
    name: "Exide Powersafe VRLA 2V",
    brand: "Exide",
    image: "/Exide Powersafe VRLA 2V.jpg",
    rating: 4.7,
    capacity: "500Ah",
    voltage: "2V",
    warranty: "60 Months",
    features: ["VRLA Technology", "Valve Regulated", "Maintenance Free", "Telecom Grade"],
    applications: ["Telecom Sites", "Base Stations", "Communication Towers", "Network Equipment"],
    description: "Exide Powersafe VRLA 2V is a valve-regulated lead-acid battery designed for telecom applications.",
    detailedDescription:
      "The Powersafe VRLA 2V battery features advanced VRLA technology with valve-regulated design for maintenance-free operation. Its telecom-grade construction ensures reliable performance in critical communication infrastructure. The maintenance-free design provides hassle-free operation in remote telecom environments.",
  },
  {
    id: "exide-powersafe-opzv-2v",
    name: "Exide Powersafe OPzV 2V",
    brand: "Exide",
    image: "/Exide Powersafe OPzV 2V.jpg",
    rating: 4.8,
    capacity: "600Ah",
    voltage: "2V",
    warranty: "72 Months",
    features: ["OPzV Technology", "Valve Regulated", "Maintenance Free", "Long Life"],
    applications: ["Telecom Sites", "Base Stations", "Communication Towers", "Network Equipment"],
    description:
      "Exide Powersafe OPzV 2V is a valve-regulated battery with advanced OPzV technology for telecom applications.",
    detailedDescription:
      "The Powersafe OPzV 2V battery features advanced OPzV technology with valve-regulated design for maintenance-free operation. Its telecom-grade construction ensures reliable performance in critical communication infrastructure. The advanced technology provides excellent charge acceptance and deep discharge recovery.",
  },
  {
    id: "exide-gfm-2v-stationary",
    name: "Exide GFM 2V Stationary",
    brand: "Exide",
    image: "/Exide GFM 2V Series.jpg",
    rating: 4.8,
    capacity: "600Ah",
    voltage: "2V",
    warranty: "72 Months",
    features: ["GFM Technology", "Front Terminal", "Stationary Design", "Extended Life"],
    applications: ["Telecom Infrastructure", "Base Stations", "Network Equipment", "Critical Systems"],
    description: "Exide GFM 2V Stationary is designed for telecom infrastructure with front terminal access.",
    detailedDescription:
      "The GFM 2V Stationary battery features front terminal design for easy installation and maintenance in telecom infrastructure. Its stationary construction ensures reliable performance in critical communication systems. The extended service life provides excellent value for telecom operators.",
  },
  {
    id: "exide-powersafe-plus-150ah",
    name: "Exide Powersafe Plus 150Ah",
    brand: "Exide",
    image: "/Exide Powersafe Plus 12V 7.2Ah.webp",
    rating: 4.6,
    capacity: "150Ah",
    voltage: "12V",
    warranty: "48 Months",
    features: ["Powersafe Plus", "SMF Technology", "Compact Design", "Reliable"],
    applications: ["Small Telecom Sites", "Remote Locations", "Backup Systems", "Emergency Power"],
    description: "Exide Powersafe Plus 150Ah is a compact sealed battery for small telecom applications.",
    detailedDescription:
      "The Powersafe Plus 150Ah battery features SMF technology with compact design for small telecom applications. Its reliable performance ensures consistent power delivery for remote locations and backup systems. The sealed construction provides maintenance-free operation.",
  },
  {
    id: "exide-telecom-kbs-series",
    name: "Exide Telecom KBS Series",
    brand: "Exide",
    image: "/Exide Telecom KBS Series.webp",
    rating: 4.8,
    capacity: "200Ah",
    voltage: "12V",
    warranty: "60 Months",
    features: ["KBS Technology", "Telecom Specific", "High Performance", "Extended Life"],
    applications: ["Telecom Networks", "Base Stations", "Communication Systems", "Network Infrastructure"],
    description: "Exide Telecom KBS Series is specifically designed for telecom network applications.",
    detailedDescription:
      "The Telecom KBS Series battery features KBS technology specifically optimized for telecom network applications. Its high-performance design ensures reliable power delivery for communication systems. The extended service life makes it ideal for critical telecom infrastructure.",
  },
  {
    id: "exide-smf-telecom-2v",
    name: "Exide SMF Telecom 2V",
    brand: "Exide",
    image: "/Exide SMF Telecom 2V.jpeg",
    rating: 4.7,
    capacity: "400Ah",
    voltage: "2V",
    warranty: "66 Months",
    features: ["SMF Technology", "Sealed Design", "Telecom Grade", "Zero Maintenance"],
    applications: ["Telecom Sites", "Base Stations", "Communication Towers", "Network Equipment"],
    description: "Exide SMF Telecom 2V is a sealed maintenance-free battery for telecom applications.",
    detailedDescription:
      "The SMF Telecom 2V battery features sealed maintenance-free technology with telecom-grade construction for reliable performance. Its zero-maintenance design ensures hassle-free operation in remote telecom sites. The sealed construction provides excellent safety and reliability.",
  },
  {
    id: "exide-el-telecom-range",
    name: "Exide EL Telecom Range",
    brand: "Exide",
    image: "/Exide Powersafe Wind 2V.webp",
    rating: 4.8,
    capacity: "300Ah",
    voltage: "2V",
    warranty: "72 Months",
    features: ["EL Technology", "Telecom Specific", "High Efficiency", "Extended Life"],
    applications: ["Telecom Infrastructure", "Base Stations", "Network Systems", "Critical Applications"],
    description: "Exide EL Telecom Range offers high efficiency for critical telecom applications.",
    detailedDescription:
      "The EL Telecom Range battery features advanced EL technology with high efficiency for critical telecom applications. Its telecom-specific design ensures optimal performance in communication infrastructure. The extended service life provides excellent reliability for network operators.",
  },
  {
    id: "exide-tubular-telecom-2v",
    name: "Exide Tubular Telecom 2V",
    brand: "Exide",
    image: "/Exide VRLA Wind OPT Series.jpeg",
    rating: 4.9,
    capacity: "500Ah",
    voltage: "2V",
    warranty: "84 Months",
    features: ["Tubular Technology", "Premium Grade", "Extended Life", "High Performance"],
    applications: ["Major Telecom Sites", "Base Stations", "Network Infrastructure", "Critical Systems"],
    description: "Exide Tubular Telecom 2V is a premium-grade tubular battery for major telecom applications.",
    detailedDescription:
      "The Tubular Telecom 2V battery represents premium-grade tubular technology for major telecom applications. Its extended service life and high performance make it ideal for critical communication infrastructure. The premium construction ensures exceptional reliability in demanding telecom environments.",
  },
  {
    id: "exide-gfmh-high-performance",
    name: "Exide GFMH High Performance",
    brand: "Exide",
    image: "/Exide LMX Wind Energy.webp",
    rating: 4.8,
    capacity: "700Ah",
    voltage: "2V",
    warranty: "84 Months",
    features: ["GFMH Technology", "High Performance", "Extended Warranty", "Premium"],
    applications: ["Critical Telecom", "Base Stations", "Network Infrastructure", "Major Sites"],
    description: "Exide GFMH High Performance delivers exceptional performance for critical telecom applications.",
    detailedDescription:
      "The GFMH High Performance battery features advanced GFMH technology with exceptional performance for critical telecom applications. Its extended warranty and premium construction provide maximum reliability for network infrastructure. The high-performance design ensures optimal power delivery in demanding environments.",
  },
  {
    id: "exide-ht-series-for-telecom",
    name: "Exide HT Series for Telecom",
    brand: "Exide",
    image: "/Exide LMX Stationary.webp",
    rating: 4.9,
    capacity: "800Ah",
    voltage: "2V",
    warranty: "96 Months",
    features: ["HT Technology", "High Temperature", "Extended Life", "Ultra Reliable"],
    applications: ["Harsh Environments", "Remote Telecom", "Base Stations", "Critical Infrastructure"],
    description: "Exide HT Series for Telecom is designed for harsh environment telecom applications.",
    detailedDescription:
      "The HT Series battery features advanced HT technology optimized for harsh environment telecom applications. Its high-temperature capability ensures reliable performance in extreme conditions. The ultra-reliable design and extended warranty provide maximum peace of mind for critical infrastructure.",
  },
]

export default function TelecomBatteriesPage() {
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
            <Link
              href="/#products"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Telecom Batteries</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Specialized telecom batteries for base stations, communication towers, and network infrastructure with
              reliable backup power
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Radio className="w-4 h-4 mr-2" />
                Telecom Grade
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Shield className="w-4 h-4 mr-2" />
                Maintenance Free
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Zap className="w-4 h-4 mr-2" />
                Extended Life
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {telecomBatteries.map((battery) => (
              <Card
                key={battery.id}
                id={battery.id}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
              >
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

                    <p className="text-sm text-muted-foreground line-clamp-2">{battery.description}</p>

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
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                      </a>
                      <ShareButton
                        productName={battery.name}
                        productUrl={`${typeof window !== "undefined" ? window.location.origin : ""}/batteries/telecom#${battery.id}`}
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Our Telecom Batteries?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Specialized telecom batteries engineered for base stations, communication infrastructure, and network
              reliability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Radio className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Telecom Grade</h3>
              <p className="text-sm text-muted-foreground">
                Specifically designed for telecom infrastructure and communication systems
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Maintenance Free</h3>
              <p className="text-sm text-muted-foreground">
                Sealed VRLA technology ensures zero maintenance requirements
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Extended Life</h3>
              <p className="text-sm text-muted-foreground">
                Long service life with warranties up to 96 months for reliability
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">High Performance</h3>
              <p className="text-sm text-muted-foreground">
                Advanced technology ensures reliable power for critical communication systems
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedProduct={selectedProduct}
      />
    </main>
  )
}
