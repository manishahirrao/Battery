"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Phone, CheckCircle,Award } from "lucide-react"
import { useEffect } from "react"

interface HeroSectionProps {
  onInquiryClick: () => void
}

export function HeroSection({ onInquiryClick }: HeroSectionProps) {
  const scrollToProducts = () => {
    const productsSection = document.getElementById("products")
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth", block: "start" })
    } else {
      window.location.href = "/#products"
    }
  }

  useEffect(() => {
    if (window.location.hash === "#products") {
      setTimeout(() => {
        const productsSection = document.getElementById("products")
        if (productsSection) {
          productsSection.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }, 450)
    }
  }, [])

  return (
    <section
      id="hero"
      aria-label="Hero section - Exide authorized dealer in Bhopal"
      className="relative overflow-hidden min-h-[80vh] flex items-center"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero image.png"
          alt="Premium Exide battery collection - inverter, automotive, solar and industrial power solutions"
          className="w-full h-full object-cover"
          style={{ 
            objectPosition: 'center',
            objectFit: 'cover'
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        {/* Subtle pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fff' fill-opacity='0.25'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badges */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <Badge
              className="bg-primary/20 text-primary border-primary/40 px-4 py-2 flex items-center gap-2 font-semibold backdrop-blur-sm"
              aria-hidden
            >
              <Zap className="w-4 h-4" />
              Authorized Exide Dealer
            </Badge>

            <Badge
              className="bg-green-500/20 text-green-300 border-green-500/40 px-4 py-2 flex items-center gap-2 font-semibold backdrop-blur-sm"
              aria-hidden
            >
              <CheckCircle className="w-4 h-4" />
              10,000+ Happy Customers
            </Badge>

            <Badge
              className="bg-red-500/20 text-red-300 border-red-500/40 px-4 py-2 flex items-center gap-2 font-semibold animate-pulse backdrop-blur-sm"
              aria-hidden
            >
              <Award className="w-4 h-4" />
              Limited Time Offer
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Powering Bhopal with{" "}
            <span className="text-primary">Premium Exide Solutions</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-200 mt-4">
              Authorized dealer | Genuine products | Expert service
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-10">
            Experience uninterrupted power with India's most trusted battery brand. 
            From inverters to automotive, solar to industrial applications—we deliver 
            complete power solutions backed by manufacturer warranties and professional support.
          </p>

          {/* Benefits list */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-base mb-10">
            <li className="flex items-start gap-3 text-white">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" aria-hidden />
              <span>Complimentary professional installation</span>
            </li>
            <li className="flex items-start gap-3 text-white">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" aria-hidden />
              <span>Same-day delivery across Bhopal</span>
            </li>
            <li className="flex items-start gap-3 text-white">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" aria-hidden />
              <span>Extended manufacturer warranty</span>
            </li>
            <li className="flex items-start gap-3 text-white">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" aria-hidden />
              <span>24/7 technical support & service</span>
            </li>
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              onClick={scrollToProducts}
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold shadow-lg bg-primary hover:bg-primary/95 text-primary-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              aria-label="Explore products"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => onInquiryClick()}
              className="inline-flex items-center px-8 py-4 text-lg font-semibold border-2 border-white/60 bg-white/10 hover:bg-white/20 hover:border-white text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 backdrop-blur-md"
              aria-label="Get free consultation"
            >
              Get Free Consultation
            </Button>
          </div>

          {/* Phone CTA */}
          <div className="flex items-center gap-4 justify-center">
            <a
              href="tel:+917974146200"
              className="flex items-center gap-3 text-white hover:text-primary transition-colors"
              aria-label="Call Exide dealer in Bhopal"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-300">Call Now</p>
                <p className="font-bold text-white">+91 7974146200</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}