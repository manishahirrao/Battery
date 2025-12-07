// HERO SECTION - Mobile Optimized
import { Phone, MessageCircle, Menu, X, Zap, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { CheckCircle } from "lucide-react"
import { Award } from "lucide-react"

export function HeroSection({ onInquiryClick }: { onInquiryClick: () => void }) {
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
      className="relative overflow-hidden min-h-[85vh] sm:min-h-[80vh] flex items-center w-full"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero image.png"
          alt="Premium Exide battery collection"
          className="w-full h-full object-cover"
          style={{ 
            objectPosition: 'center',
            objectFit: 'cover'
          }}
          loading="eager"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/85 sm:from-black/80 sm:via-black/60 sm:to-black/80" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fff' fill-opacity='0.25'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badges */}
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-6 sm:mb-8">
            <div className="bg-primary/20 text-primary border border-primary/40 px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-1.5 sm:gap-2 font-semibold backdrop-blur-sm rounded-full text-xs sm:text-sm">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden xs:inline">Authorized Exide Dealer</span>
              <span className="xs:hidden">Authorized Dealer</span>
            </div>

            <div className="bg-green-500/20 text-green-300 border border-green-500/40 px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-1.5 sm:gap-2 font-semibold backdrop-blur-sm rounded-full text-xs sm:text-sm">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden xs:inline">10,000+ Happy Customers</span>
              <span className="xs:hidden">10,000+ Customers</span>
            </div>

            <div className="bg-red-500/20 text-red-300 border border-red-500/40 px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-1.5 sm:gap-2 font-semibold animate-pulse backdrop-blur-sm rounded-full text-xs sm:text-sm">
              <Award className="w-3 h-3 sm:w-4 sm:h-4" />
              Limited Offer
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-4 sm:mb-6 px-2">
            Powering Bhopal with{" "}
            <span className="text-primary">Premium Exide Solutions</span>
            <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-200 mt-3 sm:mt-4">
              Authorized dealer | Genuine products | Expert service
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 md:mb-10 px-4">
            Experience uninterrupted power with India's most trusted battery brand. 
            From inverters to automotive, solar to industrial applications—we deliver 
            complete power solutions backed by manufacturer warranties and professional support.
          </p>

          {/* Benefits list */}
          <ul className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3 md:gap-4 max-w-2xl mx-auto text-xs sm:text-sm md:text-base mb-6 sm:mb-8 md:mb-10 px-4">
            <li className="flex items-start gap-2 text-white">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mt-0.5 flex-shrink-0" aria-hidden />
              <span>Complimentary professional installation</span>
            </li>
            <li className="flex items-start gap-2 text-white">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mt-0.5 flex-shrink-0" aria-hidden />
              <span>Same-day delivery across Bhopal</span>
            </li>
            <li className="flex items-start gap-2 text-white">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mt-0.5 flex-shrink-0" aria-hidden />
              <span>Extended manufacturer warranty</span>
            </li>
            <li className="flex items-start gap-2 text-white">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mt-0.5 flex-shrink-0" aria-hidden />
              <span>24/7 technical support & service</span>
            </li>
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-4">
            <button
              onClick={scrollToProducts}
              className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lg bg-primary hover:bg-primary/95 text-primary-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-lg touch-manipulation active:scale-95 transition-all"
              aria-label="Explore products"
            >
              Explore Products
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button
              onClick={() => onInquiryClick()}
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold border-2 border-white/60 bg-white/10 hover:bg-white/20 hover:border-white text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 backdrop-blur-md rounded-lg touch-manipulation active:scale-95 transition-all"
              aria-label="Get free consultation"
            >
              Get Free Consultation
            </button>
          </div>

          {/* Phone CTA */}
          <div className="flex items-center gap-3 sm:gap-4 justify-center px-4">
            <a
              href="tel:+917974146200"
              className="flex items-center gap-2 sm:gap-3 text-white hover:text-primary transition-colors touch-manipulation"
              aria-label="Call Exide dealer in Bhopal"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-300">Call Now</p>
                <p className="font-bold text-white text-sm sm:text-base">+91 7974146200</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}