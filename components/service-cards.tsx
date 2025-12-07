"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Battery, Zap, Sun, Recycle, Phone, MessageCircle, Shield, Clock } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const services = [
  {
    id: "automotive",
    title: "Automotive Batteries",
    description: "Start Strong, Drive Longer with Livfast Automotive Batteries",
    icon: Battery,
    image: "/car-battery-12v-high-performance-automotive.jpg",
    badge: "Popular",
    route: "/products#automotive"
  },
  {
    id: "inverter",
    title: "Inverter & Batteries",
    description: "Premium quality batteries for home and office power backup with long backup hours",
    icon: Zap,
    image: "/tall-tubular-inverter-battery-home-backup.jpg",
    badge: "Best Seller",
    route: "/products#inverter-ups"
  },
  {
    id: "solar",
    title: "Solar Solutions",
    description: "Complete solar power systems including panels, inverters, and batteries for sustainable energy",
    icon: Sun,
    image: "/solar-battery-deep-cycle-for-solar-panel-system.jpg",
    badge: "Eco Choice",
    route: "/products#solar"
  },
  {
    id: "scrap",
    title: "Battery Scrap",
    description: "Eco-friendly battery recycling services. Get best price for your old batteries",
    icon: Recycle,
    image: "/scrap.png",
    badge: "Green Service",
    route: "/battery-scrap"
  }
]

export function ServiceCards() {
  const router = useRouter()

  const handleCardClick = (route: string) => {
    if (route.includes('#')) {
      const [path, hash] = route.split('#')
      if (window.location.pathname === '/products') {
        // Already on products page, just scroll
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      } else {
        // Navigate to products page first, then scroll
        router.push(path)
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 100)
      }
    } else {
      // Regular navigation
      router.push(route)
    }
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Complete power solutions for all your energy needs
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.id} onClick={() => handleCardClick(service.route)} className="cursor-pointer">
                <Card className="group relative overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500 h-[400px] cursor-pointer">
                  {/* Product Image - Top Half */}
                  <div className="h-1/2 relative overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    {service.badge && (
                      <Badge className="absolute top-4 right-4 bg-orange-500 text-white border-0 text-xs px-3 py-1">
                        {service.badge}
                      </Badge>
                    )}
                  </div>

                  {/* Content - Bottom Half with Orange Background */}
                  <div className="h-1/2 bg-gradient-to-br from-orange-500 to-red-500 p-6 flex flex-col justify-center relative overflow-hidden group-hover:from-orange-600 group-hover:to-red-600 transition-all duration-500">
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.3),transparent)] group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:translate-y-[-4px] transition-transform duration-300">
                        {service.title}
                      </h3>
                      <div className="w-16 h-1 bg-white/40 mb-4 group-hover:w-24 transition-all duration-300" />
                      <p className="text-white/90 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                        {service.description}
                      </p>
                    </div>

                    {/* Hover Arrow Indicator */}
                    <div className="absolute bottom-6 right-6 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </Card>
              </div>
            )
          })}
        </div>

      
      </div>
    </section>
  )
}