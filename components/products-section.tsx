"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Battery, Zap, Shield } from "lucide-react"

interface ProductsSectionProps {
  onInquiryClick: (product: string) => void
}

const products = [
  {
    name: "Automotive Batteries",
    image: "/car-battery-12v-high-performance-automotive.jpg",
    description: "High-performance batteries for cars, SUVs, and sedans with superior cold cranking power",
    features: ["12V / 35Ah - 100Ah", "Maintenance-free", "3-5 Year Warranty", "Quick Start Technology"],
    badge: "Best Seller",
    priceRange: "₹3,500 - ₹12,000",
    applications: ["Cars", "SUVs", "Sedans", "MUVs"],
    specs: {
      voltage: "12V",
      capacity: "35Ah - 100Ah",
      warranty: "3-5 Years",
    },
  },
  {
    name: "Inverter Batteries",
    image: "/tall-tubular-inverter-battery-home-backup.jpg",
    description: "Reliable tubular batteries for uninterrupted power backup for homes and offices",
    features: ["Tubular Technology", "150Ah - 220Ah", "5 Year Warranty", "Low Maintenance"],
    badge: "Popular",
    priceRange: "₹12,000 - ₹22,000",
    applications: ["Homes", "Offices", "Shops", "Hospitals"],
    specs: {
      voltage: "12V",
      capacity: "150Ah - 220Ah",
      warranty: "5 Years",
    },
  },
  {
    name: "Two Wheeler Batteries",
    image: "/compact-motorcycle-bike-battery.jpg",
    description: "Compact and powerful batteries designed for bikes, scooters, and mopeds",
    features: ["Quick Start", "Vibration Resistant", "2.5Ah - 12Ah", "Sealed Design"],
    badge: null,
    priceRange: "₹800 - ₹2,500",
    applications: ["Bikes", "Scooters", "Mopeds", "ATVs"],
    specs: {
      voltage: "12V",
      capacity: "2.5Ah - 12Ah",
      warranty: "2 Years",
    },
  },
  {
    name: "Truck & Bus Batteries",
    image: "/heavy-duty-truck-bus-battery-large.jpg",
    description: "Heavy-duty batteries built for commercial vehicles requiring maximum power",
    features: ["High Capacity 150Ah+", "Extreme Durability", "Weather Resistant", "Long Life"],
    badge: "Heavy Duty",
    priceRange: "₹8,000 - ₹18,000",
    applications: ["Trucks", "Buses", "Tractors", "JCB"],
    specs: {
      voltage: "12V / 24V",
      capacity: "150Ah - 200Ah",
      warranty: "3 Years",
    },
  },
  {
    name: "Solar Batteries",
    image: "/solar-battery-deep-cycle-panel-system.jpg",
    description: "Deep cycle batteries optimized for solar panel systems and renewable energy",
    features: ["Deep Discharge", "Long Backup", "Eco-Friendly", "Low Self-Discharge"],
    badge: "Eco Choice",
    priceRange: "₹15,000 - ₹35,000",
    applications: ["Solar Systems", "Off-Grid", "Renewable Energy", "Street Lights"],
    specs: {
      voltage: "12V",
      capacity: "100Ah - 200Ah",
      warranty: "5 Years",
    },
  },
  {
    name: "E-Rickshaw Batteries",
    image: "/e-rickshaw-electric-vehicle-battery.jpg",
    description: "High-efficiency batteries for electric rickshaws with fast charging capability",
    features: ["Fast Charging", "High Efficiency", "100+ Km Range", "1000+ Cycles"],
    badge: "Top Rated",
    priceRange: "₹10,000 - ₹20,000",
    applications: ["E-Rickshaws", "E-Carts", "Golf Carts", "E-Loaders"],
    specs: {
      voltage: "12V",
      capacity: "100Ah - 150Ah",
      warranty: "18 Months",
    },
  },
]

export function ProductsSection({ onInquiryClick }: ProductsSectionProps) {
  return (
    <section id="products" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Products</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Complete Range of Premium Batteries
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            From automotive to industrial, we offer quality batteries from India{"'"}s leading brands with the best
            warranty and prices
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <Card
              key={product.name}
              className="group overflow-hidden border-border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {product.badge && (
                  <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">{product.badge}</Badge>
                )}
                <div className="absolute bottom-3 right-3 bg-foreground/90 text-background px-3 py-1 rounded-full text-sm font-bold">
                  {product.priceRange}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{product.description}</p>

                <div className="flex items-center gap-4 mb-4 text-xs">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Battery className="w-3 h-3 text-primary" />
                    {product.specs.voltage}
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Zap className="w-3 h-3 text-accent" />
                    {product.specs.capacity}
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Shield className="w-3 h-3 text-green-500" />
                    {product.specs.warranty}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1 mb-4">
                  {product.applications.map((app) => (
                    <span key={app} className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                      {app}
                    </span>
                  ))}
                </div>

                <Button
                  onClick={() => onInquiryClick(product.name)}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group/btn"
                >
                  Get Best Price
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Can{"'"}t find what you{"'"}re looking for? We have 50+ battery models available.
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={() => onInquiryClick("Custom Requirement")}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  )
}
