"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Battery, Zap, Shield } from "lucide-react"
import Link from "next/link"

interface ProductsSectionProps {
  onInquiryClick: (product: string) => void
}

const products = [
  {
    name: "Inverter Batteries",
    image: "/tall-tubular-inverter-battery-home-backup.jpg",
    description: "Reliable tubular batteries for uninterrupted power backup for homes and offices",
    features: ["Tubular Technology", "150Ah - 220Ah", "Extended Warranty", "Low Maintenance"],
    badge: "Best Seller",
    applications: ["Homes", "Offices", "Shops", "Hospitals"],
    specs: {
      voltage: "12V",
      capacity: "150Ah - 220Ah",
      warranty: "Extended Warranty",
    },
    route: "/batteries/inverter",
  },
  {
    name: "Online UPS Systems",
    image: "/exide-xplore.jpg",
    description: "Advanced online UPS systems for critical power protection and seamless backup",
    features: ["Online Technology", "Double Conversion", "Instant Switchover", "Voltage Regulation"],
    badge: "Premium",
    applications: ["Servers", "Data Centers", "Medical Equipment", "Critical Systems"],
    specs: {
      voltage: "12V / 24V",
      capacity: "100Ah - 200Ah",
      warranty: "Extended Warranty",
    },
    route: "/batteries/ups",
  },
  {
    name: "Solar Panel Solutions",
    image: "/solar-battery-deep-cycle-panel-system.jpg",
    description: "Complete solar panel systems for rooftops with easy installation and attractive paybacks",
    features: ["Easy Installation", "One-Stop Shop", "Low Light Performance", "PID Resistance"],
    badge: "Eco Choice",
    applications: ["Residential", "Commercial", "Off-Grid", "Rooftop Systems"],
    specs: {
      type: "Mono/Poly Crystalline",
      capacity: "1kW - 10kW+",
      warranty: "25 Years",
    },
    route: "/batteries/solar",
  },
  {
    name: "Sub Station Batteries",
    image: "/professional-battery-display-with-various-car-and-.jpg",
    description: "Heavy-duty batteries for electrical substations and power distribution systems",
    features: ["Industrial Grade", "High Reliability", "Long Life", "Temperature Resistant"],
    badge: "Industrial",
    applications: ["Power Substations", "Switchgear", "Control Panels", "Backup Systems"],
    specs: {
      voltage: "2V / 12V",
      capacity: "200Ah - 1000Ah",
      warranty: "Extended Warranty",
    },
    route: "/batteries/sub-station",
  },
  {
    name: "4 Wheeler Batteries",
    image: "/car-battery-12v-high-performance-automotive.jpg",
    description: "High-performance batteries for cars, SUVs, and sedans with superior cold cranking power",
    features: ["12V / 35Ah - 100Ah", "Maintenance-free", "Extended Warranty", "Quick Start Technology"],
    badge: "Popular",
    applications: ["Cars", "SUVs", "Sedans", "MUVs"],
    specs: {
      voltage: "12V",
      capacity: "35Ah - 100Ah",
      warranty: "Extended Warranty",
    },
    route: "/batteries/four-wheeler",
  },
  {
    name: "DG Set Batteries",
    image: "/Exide Genset XP1500.jpg",
    description: "Specialized batteries for diesel generators and power generation equipment",
    features: ["High Cranking Power", "Heavy Duty", "Weather Resistant", "Long Life"],
    badge: "Heavy Duty",
    applications: ["Generators", "DG Sets", "Power Plants", "Emergency Backup"],
    specs: {
      voltage: "12V / 24V",
      capacity: "100Ah - 200Ah",
      warranty: "Extended Warranty",
    },
    route: "/batteries/dg-set",
  },
  {
    name: "Stackers & Forklift Batteries",
    image: "/Exide ET Series Traction 24V.jpg",
    description: "Traction batteries for material handling equipment and warehouse operations",
    features: ["Deep Cycle", "High Durability", "Fast Charging", "Maintenance Free"],
    badge: "Industrial",
    applications: ["Forklifts", "Stackers", "Warehouse Equipment", "Material Handling"],
    specs: {
      voltage: "24V / 48V",
      capacity: "200Ah - 800Ah",
      warranty: "Extended Warranty",
    },
    route: "/batteries/stacker-forklift",
  },
  {
    name: "Telecom Tower Batteries",
    image: "/Exide Powersafe VRLA 2V.jpg",
    description: "Reliable backup batteries for telecommunication towers and network infrastructure",
    features: ["Long Backup", "Temperature Resistant", "Low Maintenance", "Remote Monitoring"],
    badge: "Telecom Grade",
    applications: ["Telecom Towers", "Network Equipment", "Communication Systems", "Remote Sites"],
    specs: {
      voltage: "12V / 24V",
      capacity: "100Ah - 300Ah",
      warranty: "Extended Warranty",
    },
    route: "/batteries/telecom",
  },
  {
    name: "Bikes & Scooters Batteries",
    image: "/compact-motorcycle-bike-battery.jpg",
    description: "Compact and powerful batteries designed for bikes, scooters, and mopeds",
    features: ["Quick Start", "Vibration Resistant", "2.5Ah - 12Ah", "Sealed Design"],
    badge: null,
    applications: ["Bikes", "Scooters", "Mopeds", "ATVs"],
    specs: {
      voltage: "12V",
      capacity: "2.5Ah - 12Ah",
      warranty: "Extended Warranty",
    },
    route: "/batteries/bike-scooter",
  },
  {
    name: "3 Wheeler Batteries",
    image: "/e-rickshaw-electric-vehicle-battery.jpg",
    description: "Durable batteries for auto-rickshaws and three-wheeled commercial vehicles",
    features: ["High Power", "Long Life", "All Weather", "Low Maintenance"],
    badge: "Commercial",
    applications: ["Auto Rickshaws", "3 Wheelers", "Commercial Vehicles", "Goods Carriers"],
    specs: {
      voltage: "12V",
      capacity: "35Ah - 100Ah",
      warranty: "Extended Warranty",
    },
    route: "/batteries/three-wheeler",
  },
  {
    name: "Trucks & Tractors Batteries",
    image: "/heavy-duty-truck-bus-battery-large.jpg",
    description: "Heavy-duty batteries built for commercial vehicles requiring maximum power",
    features: ["High Capacity 150Ah+", "Extreme Durability", "Weather Resistant", "Long Life"],
    badge: "Heavy Duty",
    applications: ["Trucks", "Buses", "Tractors", "JCB"],
    specs: {
      voltage: "12V / 24V",
      capacity: "150Ah - 200Ah",
      warranty: "Extended Warranty",
    },
    route: "/batteries/truck-tractor",
  },
  {
    name: "Wind Mill Batteries",
    image: "/Exide Xpress Ultra Truck Battery.jpg",
    description: "Specialized batteries for wind energy storage and renewable power systems",
    features: ["Wind Energy Storage", "Deep Cycle", "Weather Proof", "Grid Integration"],
    badge: "Renewable",
    applications: ["Wind Turbines", "Wind Farms", "Renewable Energy", "Power Storage"],
    specs: {
      voltage: "12V / 24V",
      capacity: "200Ah - 500Ah",
      warranty: "Extended Warranty",
    },
    route: "/batteries/windmill",
  },
]

export function ProductsSection({ onInquiryClick }: ProductsSectionProps) {
  return (
    <section id="products" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Products</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Complete Range of Premium Batteries
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            From automotive to industrial, we offer quality batteries from India{"'"}s leading brands with the best
            warranty and service
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <Link key={product.name} href={product.route}>
              <Card
                className="group overflow-hidden border-border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
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
                  onClick={(e) => {
                    e.preventDefault()
                    window.location.href = product.route
                  }}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group/btn"
                >
                  Explore More Products
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Can{"'"}t find what you{"'"}re looking for? We have 100+ battery models available across all categories.
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
