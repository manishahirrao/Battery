"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Phone, CheckCircle } from "lucide-react"
import { useEffect } from "react"

interface HeroSectionProps {
  onInquiryClick: () => void
}

export function HeroSection({ onInquiryClick }: HeroSectionProps) {
  const scrollToProducts = () => {
    // Try to find the products section
    const productsSection = document.getElementById("products")
    if (productsSection) {
      // Add a small delay to ensure the DOM is ready
      setTimeout(() => {
        productsSection.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 100)
    } else {
      // Fallback: navigate to home page with hash
      window.location.href = "/#products"
    }
  }

  // Handle URL hash scrolling on component mount
  useEffect(() => {
    if (window.location.hash === "#products") {
      setTimeout(() => {
        const productsSection = document.getElementById("products")
        if (productsSection) {
          productsSection.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }, 500)
    }
  }, [])

  return (
    <>
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              <Badge className="bg-accent/20 text-accent-foreground border-accent/30 px-4 py-1">
                <Zap className="w-3 h-3 mr-1" />
                Trusted by 50,000+ Customers
              </Badge>
             
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Premium <span className="text-primary">Battery</span> Solutions for Every Need
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty">
              Your trusted power partner for automotive, inverter, solar, and industrial batteries. Genuine products
              from top brands with industry-best warranty and free doorstep delivery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-sm">
              <span className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Free Installation
              </span>
              <span className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Same Day Delivery
              </span>
              <span className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-green-500" />5 Year Warranty
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button
                size="lg"
                onClick={scrollToProducts}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
                style={{ position: 'relative' }}
              >
                View Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <button
                onClick={() => {
                  onInquiryClick()
                }}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 py-6 text-lg"
                style={{ position: 'relative' }}
              >
                Get Free Quote
              </button>
            </div>

            <div className="flex items-center gap-4 justify-center lg:justify-start pt-2">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                style={{ position: 'relative', zIndex: 1000 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Call Now</p>
                  <p className="font-bold">+91 98765 43210</p>
                </div>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4 border-t border-border">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">Expert</span>
                </div>
                <span className="text-sm text-muted-foreground">Service</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-lg">50+</span>
                </div>
                <span className="text-sm text-muted-foreground">Brands Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                  <span className="text-green-600 font-bold text-lg">4.9</span>
                </div>
                <span className="text-sm text-muted-foreground">Customer Rating</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/hero image.png"
                alt="Premium Battery Collection"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover lg:max-h-[500px] md:max-h-[400px] max-h-[300px]"
              />
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground p-3 rounded-xl shadow-lg">
                <p className="text-sm font-bold">Free Delivery</p>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/30 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
