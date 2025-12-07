"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Battery, Zap, Shield, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState, useEffect, useCallback, useRef } from "react"
import useEmblaCarousel from 'embla-carousel-react'

interface ProductsSectionProps {
  onInquiryClick: (product: string) => void
}

const productCategories = [
  {
    id: 'automotive',
    name: 'Automotive Batteries',
    description: 'High-performance batteries for all types of vehicles',
    icon: '🚗',
    importantInfo: {
      title: "Why Choose Our Automotive Batteries?",
      points: [
        "Zero maintenance design with sealed construction",
        "Superior cold cranking amps (CCA) for reliable starts in all weather",
        "Advanced calcium technology for longer life and better performance",
        "Free installation and old battery exchange available",
        "Compatible with start-stop technology and modern vehicles"
      ],
      warranty: "Extended warranty with nationwide service network",
      tip: "Battery life typically ranges 3-5 years. Regular testing recommended after 2 years."
    },
    products: [
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
        name: "Bikes & Scooters Batteries",
        image: "/compact-motorcycle-bike-battery.jpg",
        description: "Compact and powerful batteries designed for bikes, scooters, and mopeds",
        features: ["Quick Start", "Vibration Resistant", "2.5Ah - 12Ah", "Sealed Design"],
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
      }
    ]
  },
  {
    id: 'inverter-ups',
    name: 'Inverter & UPS Batteries',
    description: 'Reliable power backup solutions for homes and businesses',
    icon: '🔌',
    importantInfo: {
      title: "Power Backup Solutions Guide",
      points: [
        "Tubular batteries offer 40% longer life than flat plate batteries",
        "Regular water top-up required every 3-4 months for optimal performance",
        "Calculate backup time: Battery Ah × Battery Voltage ÷ Total Load (Watts)",
        "Keep batteries in well-ventilated areas away from direct sunlight",
        "Professional installation ensures safety and maximum efficiency"
      ],
      warranty: "Up to 72 months warranty with free home service",
      tip: "A 150Ah inverter battery typically provides 3-4 hours backup for basic home appliances (2 fans, 4 lights, 1 TV)."
    },
    products: [
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
      }
    ]
  },
  {
    id: 'solar',
    name: 'Solar Solutions',
    description: 'Sustainable energy solutions for a greener future',
    icon: '☀️',
    importantInfo: {
      title: "Solar Energy Benefits",
      points: [
        "Reduce electricity bills by 50-90% with proper solar installation",
        "Government subsidies available: 40% for residential up to 3kW, 20% for 3-10kW",
        "Solar panels generate electricity even on cloudy days (10-25% efficiency)",
        "ROI typically achieved in 3-5 years with 25+ year panel lifespan",
        "Net metering allows selling excess power back to grid in most states"
      ],
      warranty: "25 years on solar panels, 5-10 years on inverters",
      tip: "1kW solar system requires ~100 sq ft space and generates ~4-5 units/day on average."
    },
    products: [
      {
        name: "Solar Panel Solutions",
        image: "/home roof solar panel with battery storage.webp",
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
        name: "Solar Inverters",
        image: "/Exide Solar Hybrid SH200.jpg",
        description: "High-efficiency solar inverters for converting solar energy into usable power",
        features: ["High Efficiency", "MPPT Technology", "Grid-Tie/Off-Grid", "Remote Monitoring"],
        badge: "Smart",
        applications: ["Homes", "Businesses", "Farms", "Industrial"],
        specs: {
          type: "Hybrid/On-Grid/Off-Grid",
          capacity: "1kVA - 100kVA+",
          warranty: "5-10 Years",
        },
        route: "/batteries/solar-inverters",
      },
      {
        name: "Solar Battery Storage",
        image: "/Exide Solar Tubular 150Ah.jpeg",
        description: "Advanced battery storage solutions to maximize solar energy usage",
        features: ["Deep Cycle", "Long Lifespan", "High Efficiency", "Low Maintenance"],
        badge: "Eco+",
        applications: ["Residential", "Commercial", "Off-Grid", "Backup Power"],
        specs: {
          type: "Lithium-Ion/Lead Acid",
          capacity: "2kWh - 20kWh+",
          warranty: "5-10 Years",
        },
        route: "/batteries/solar-storage",
      },
          ]
  }
]

function CategoryCarousel({ category, onInquiryClick }: { category: any, onInquiryClick: (product: string) => void }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: false,
    skipSnaps: false,
    inViewThreshold: 0.7
  })
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  // Auto-rotation effect - runs continuously, stops on hover
  useEffect(() => {
    if (!emblaApi) return

    let interval: NodeJS.Timeout

    const startRotation = () => {
      console.log(`Starting rotation for ${category.name} with ${category.products.length} products`)
      console.log(`Mobile: 1 product, Tablet: 2 products, Desktop: 3 products`)
      interval = setInterval(() => {
        if (emblaApi.canScrollNext()) {
          emblaApi.scrollNext()
        } else {
          emblaApi.scrollTo(0)
        }
      }, 4000) // 4 seconds
    }

    const stopRotation = () => {
      if (interval) clearInterval(interval)
    }

    // Start rotation immediately
    startRotation()

    // Stop rotation when hovered
    if (isHovered) {
      stopRotation()
    } else {
      startRotation()
    }

    return () => {
      stopRotation()
    }
  }, [emblaApi, isHovered])

  return (
    <div 
      className="relative" 
      ref={carouselRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Important Information Section */}
      {category.importantInfo && (
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-foreground mb-3">{category.importantInfo.title}</h4>
          <ul className="space-y-2 mb-4">
            {category.importantInfo.points.map((point: string, index: number) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                {point}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-3 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-600" />
              <span className="text-green-700 dark:text-green-400 font-medium">{category.importantInfo.warranty}</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 dark:text-blue-400">{category.importantInfo.tip}</span>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-end mb-4">
        <div className="flex gap-2">
          <button 
            onClick={scrollPrev}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={scrollNext}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -mx-4">
          {category.products.map((product: any) => (
            <div key={product.name} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4">
              <Link href={product.route} className="block h-full">
                <Card className="h-full overflow-hidden border-border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col">
                  <div className="relative overflow-hidden flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {product.badge && (
                      <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-card-foreground mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{product.description}</p>

                    <div className="flex items-center gap-4 mb-4 text-xs">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Battery className="w-3 h-3 text-primary" />
                        {product.specs.voltage || product.specs.type}
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

                    <ul className="space-y-2 mb-4">
                      {product.features.slice(0, 3).map((feature: string) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1 mb-4 mt-auto">
                      {product.applications.slice(0, 3).map((app: string) => (
                        <span key={app} className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                          {app}
                        </span>
                      ))}
                      {product.applications.length > 3 && (
                        <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                          +{product.applications.length - 3} more
                        </span>
                      )}
                    </div>

                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = product.route;
                      }}
                      className="mt-auto w-full bg-primary hover:bg-primary/90 text-primary-foreground group/btn"
                    >
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ProductsSection({ onInquiryClick }: ProductsSectionProps) {
  return (
    <section id="products" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Products Grid - Show all categories */}
        <div className="space-y-16">
          {productCategories.map((category) => (
            <div key={category.id} id={category.id}>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </h3>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
              <CategoryCarousel category={category} onInquiryClick={onInquiryClick} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Can't find what you're looking for? We have 100+ power solutions across all categories.
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
