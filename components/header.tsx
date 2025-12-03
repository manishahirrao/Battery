"use client"

import { Phone, MessageCircle, Menu, X, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface HeaderProps {
  onInquiryClick: () => void
}

export function Header({ onInquiryClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  const handleNavigation = (section: string) => {
    if (pathname === '/') {
      scrollToSection(section)
    } else {
      window.location.href = `/#${section}`
    }
  }

  return (
    <header 
     style={{  zIndex: 2000 }}
    className="sticky top-0 z-80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img 
              src="/logo.png" 
              alt="Shri Guru Traders Logo"
              className="h-10 w-auto rounded-lg"
            />
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-primary">Shri Guru Traders</span>
              <span className="text-[10px] md:text-xs text-muted-foreground -mt-1">Your Trusted Power Partner</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => handleNavigation("products")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => handleNavigation("why-us")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Why Us
            </button>
            <button
              onClick={() => handleNavigation("contact")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Contact Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </a>
            <a
              href="https://wa.me/919876543210?text=Hi,%20I'm%20interested%20in%20your%20battery%20products"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-medium transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <Button onClick={onInquiryClick} className="bg-primary hover:bg-primary/90">
              Inquiry Form
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-in slide-in-from-top-2">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => handleNavigation("products")}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Products
              </button>
              <button
                onClick={() => handleNavigation("why-us")}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Why Us
              </button>
              <button
                onClick={() => handleNavigation("contact")}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
              <hr className="border-border" />
              <a href="tel:+919876543210" className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </a>
              <div className="flex gap-2">
                <a
                  href="https://wa.me/919876543210?text=Hi,%20I'm%20interested%20in%20your%20battery%20products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <Button onClick={onInquiryClick} className="flex-1 bg-primary">
                  Inquiry
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
