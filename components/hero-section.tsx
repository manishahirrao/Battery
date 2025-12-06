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
      className="relative overflow-hidden bg-gradient-to-br from-primary/8 via-background to-accent/8"
    >
      {/* Subtle pattern background */}
      <div className="pointer-events-none absolute inset-0 opacity-5" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.25'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT - Text content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Badge
                className="bg-primary/10 text-primary border-primary/20 px-4 py-2 flex items-center gap-2 font-semibold"
                aria-hidden
              >
                <Zap className="w-4 h-4" />
                Authorized Exide Dealer
              </Badge>

              <Badge
                className="bg-green-500/10 text-green-700 border-green-500/30 px-4 py-2 flex items-center gap-2 font-semibold"
                aria-hidden
              >
                <CheckCircle className="w-4 h-4" />
                10,000+ Happy Customers
              </Badge>

              <Badge
                className="bg-red-500/10 text-red-700 border-red-500/30 px-4 py-2 flex items-center gap-2 font-semibold animate-pulse"
                aria-hidden
              >
                <Award className="w-4 h-4" />
                Limited Time Offer
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
              Powering Bhopal with{" "}
              <span className="text-primary">Premium Exide Solutions</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground mt-4">
                Authorized dealer | Genuine products | Expert service
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Experience uninterrupted power with India's most trusted battery brand. 
              From inverters to automotive, solar to industrial applications—we deliver 
              complete power solutions backed by manufacturer warranties and professional support.
            </p>

            {/* Benefits list */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto lg:mx-0 text-base">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden />
                <span className="text-foreground">Complimentary professional installation</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden />
                <span className="text-foreground">Same-day delivery across Bhopal</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden />
                <span className="text-foreground">Extended manufacturer warranty</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden />
                <span className="text-foreground">24/7 technical support & service</span>
              </li>
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
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
                className="inline-flex items-center px-8 py-4 text-lg font-semibold border-2 hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                aria-label="Get free consultation"
              >
                Get Free Consultation
              </Button>
            </div>

            {/* Phone CTA */}
            <div className="flex items-center gap-4 justify-center lg:justify-start pt-4">
              <a
                href="tel:+917974146200"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                aria-label="Call Exide dealer in Bhopal"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Call Now</p>
                  <p className="font-bold">+91 79741 46200</p>
                </div>
              </a>
            </div>

          
          </div>

          {/* RIGHT - Visual */}
          <div className="relative lg:pl-8">
            <div className="relative z-10 group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/hero image.png"
                  alt="Premium Exide battery collection - inverter, automotive, solar and industrial power solutions"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ 
                    aspectRatio: '4/3',
                    objectPosition: 'center'
                  }}
                />
                {/* Gradient overlay for better depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-accent to-accent/90 text-accent-foreground px-5 py-3 rounded-xl shadow-xl border border-accent/20">
                <p className="text-sm font-bold">Special Offer</p>
                <p className="text-xs opacity-90">10% Off This Week</p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  )
}