
// HEADER COMPONENT - Mobile Optimized
"use client"

import { Phone, MessageCircle, Menu, X, Zap, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface HeaderProps {
  onInquiryClick: () => void
}

export function Header({ onInquiryClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false)
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null)
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

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
      setDropdownTimeout(null)
    }
    setIsProductsDropdownOpen(true)
  }

  const handleDropdownMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsProductsDropdownOpen(false)
    }, 150)
    setDropdownTimeout(timeout)
  }

  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout)
      }
    }
  }, [dropdownTimeout])

  return (
    <header 
      style={{ zIndex: 2000 }}
      className="sticky top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border"
    >
      <div className="w-full px-4 sm:px-6 lg:container lg:mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <img 
              src="/logo.png" 
              alt="Shri Guru Traders Logo"
              className="h-8 sm:h-10 w-auto rounded-lg"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              About Us
            </Link>
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-all duration-200 hover:scale-105">
                Products
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div 
                className={`absolute top-full left-0 mt-2 w-80 bg-background/95 backdrop-blur-md border border-border/50 rounded-xl shadow-2xl overflow-hidden z-50 transition-all duration-300 origin-top ${isProductsDropdownOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <div className="py-2 max-h-[70vh] overflow-y-auto">
                  {/* Automotive Batteries Section */}
                  <div className="px-4 py-2">
                    <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Automotive Batteries</div>
                    <div className="space-y-1">
                      <Link href="/batteries/four-wheeler" className="block px-3 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200" onClick={() => setIsProductsDropdownOpen(false)}>
                        4 Wheeler Batteries
                      </Link>
                      <Link href="/batteries/bike-scooter" className="block px-3 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200" onClick={() => setIsProductsDropdownOpen(false)}>
                        Bikes & Scooters Batteries
                      </Link>
                      <Link href="/batteries/three-wheeler" className="block px-3 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200" onClick={() => setIsProductsDropdownOpen(false)}>
                        3 Wheeler Batteries
                      </Link>
                      <Link href="/batteries/truck-tractor" className="block px-3 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200" onClick={() => setIsProductsDropdownOpen(false)}>
                        Trucks & Tractors Batteries
                      </Link>
                    </div>
                  </div>
                  
                  <div className="border-t border-border/30 my-2" />
                  
                  {/* Inverter & UPS Section */}
                  <div className="px-4 py-2">
                    <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Inverter & UPS Batteries</div>
                    <div className="space-y-1">
                      <Link href="/batteries/inverter" className="block px-3 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200" onClick={() => setIsProductsDropdownOpen(false)}>
                        Inverter Batteries
                      </Link>
                      <Link href="/batteries/ups" className="block px-3 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200" onClick={() => setIsProductsDropdownOpen(false)}>
                        Online UPS Systems
                      </Link>
                      <Link href="/batteries/dg-set" className="block px-3 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200" onClick={() => setIsProductsDropdownOpen(false)}>
                        DG Set Batteries
                      </Link>
                      <Link href="/batteries/sub-station" className="block px-3 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200" onClick={() => setIsProductsDropdownOpen(false)}>
                        Sub Station Batteries
                      </Link>
                      <Link href="/batteries/telecom" className="block px-3 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200" onClick={() => setIsProductsDropdownOpen(false)}>
                        Telecom Tower Batteries
                      </Link>
                      <Link href="/batteries/stacker-forklift" className="block px-3 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200" onClick={() => setIsProductsDropdownOpen(false)}>
                        Stackers & Forklift Batteries
                      </Link>
                    </div>
                  </div>
                  
                  <div className="border-t border-border/30 my-2" />
                  
                  {/* Solar Solutions Section */}
                  <div className="px-4 py-2">
                    <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Solar Solutions</div>
                    <div className="space-y-1">
                      <Link href="/batteries/solar" className="block px-3 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200" onClick={() => setIsProductsDropdownOpen(false)}>
                        Solar Panel Solutions
                      </Link>
                      <Link href="/batteries/solar-inverters" className="block px-3 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200" onClick={() => setIsProductsDropdownOpen(false)}>
                        Solar Inverters
                      </Link>
                      <Link href="/batteries/solar-storage" className="block px-3 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200" onClick={() => setIsProductsDropdownOpen(false)}>
                        Solar Battery Storage
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/why-us" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Why Us
            </Link>
            <Link href="/battery-scrap" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Battery Scrap
            </Link>
            <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Contact Actions - Desktop */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <a href="tel:+917974146200" className="hidden xl:flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 7974146200</span>
            </a>
            <a href="https://wa.me/917974146200?text=Hi,%20I'm%20interested%20in%20your%20battery%20products" target="_blank" rel="noopener noreferrer" className="hidden lg:flex items-center gap-2 px-3 xl:px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-medium transition-colors">
              <MessageCircle className="w-4 h-4" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>
            <Button onClick={onInquiryClick} size="sm" className="bg-primary hover:bg-primary/90 text-xs lg:text-sm px-3 lg:px-4">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 -mr-2 touch-manipulation active:scale-95 transition-transform" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-in slide-in-from-top-2 max-h-[70vh] overflow-y-auto">
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2 px-2 rounded-lg hover:bg-primary/5" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2 px-2 rounded-lg hover:bg-primary/5" onClick={() => setIsMobileMenuOpen(false)}>
                About Us
              </Link>
              
              {/* Mobile Products Dropdown */}
              <div className="space-y-2">
                <button 
                  className="w-full text-left text-sm font-medium text-foreground hover:text-primary transition-all duration-200 flex items-center gap-2 py-2 px-2 rounded-lg hover:bg-primary/5 touch-manipulation"
                  onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                >
                  <Zap className="w-4 h-4 text-primary flex-shrink-0" />
                  Products
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ml-auto ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isProductsDropdownOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="pl-4 pr-2 space-y-3 py-2">
                    {/* Automotive Batteries Section */}
                    <div>
                      <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2 px-2">Automotive Batteries</div>
                      <div className="space-y-1">
                        <Link href="/batteries/four-wheeler" className="block pl-4 py-2 text-sm text-muted-foreground hover:text-primary transition-all duration-200 rounded-lg hover:bg-primary/5" onClick={() => { setIsProductsDropdownOpen(false); setIsMobileMenuOpen(false); }}>
                          4 Wheeler Batteries
                        </Link>
                        <Link href="/batteries/bike-scooter" className="block pl-4 py-2 text-sm text-muted-foreground hover:text-primary transition-all duration-200 rounded-lg hover:bg-primary/5" onClick={() => { setIsProductsDropdownOpen(false); setIsMobileMenuOpen(false); }}>
                          Bikes & Scooters
                        </Link>
                        <Link href="/batteries/three-wheeler" className="block pl-4 py-2 text-sm text-muted-foreground hover:text-primary transition-all duration-200 rounded-lg hover:bg-primary/5" onClick={() => { setIsProductsDropdownOpen(false); setIsMobileMenuOpen(false); }}>
                          3 Wheeler Batteries
                        </Link>
                        <Link href="/batteries/truck-tractor" className="block pl-4 py-2 text-sm text-muted-foreground hover:text-primary transition-all duration-200 rounded-lg hover:bg-primary/5" onClick={() => { setIsProductsDropdownOpen(false); setIsMobileMenuOpen(false); }}>
                          Trucks & Tractors
                        </Link>
                      </div>
                    </div>
                    
                    <div className="border-t border-border/30" />
                    
                    {/* Inverter & UPS Section */}
                    <div>
                      <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2 px-2">Inverter & UPS</div>
                      <div className="space-y-1">
                        <Link href="/batteries/inverter" className="block pl-4 py-2 text-sm text-muted-foreground hover:text-primary transition-all duration-200 rounded-lg hover:bg-primary/5" onClick={() => { setIsProductsDropdownOpen(false); setIsMobileMenuOpen(false); }}>
                          Inverter Batteries
                        </Link>
                        <Link href="/batteries/ups" className="block pl-4 py-2 text-sm text-muted-foreground hover:text-primary transition-all duration-200 rounded-lg hover:bg-primary/5" onClick={() => { setIsProductsDropdownOpen(false); setIsMobileMenuOpen(false); }}>
                          Online UPS Systems
                        </Link>
                        <Link href="/batteries/dg-set" className="block pl-4 py-2 text-sm text-muted-foreground hover:text-primary transition-all duration-200 rounded-lg hover:bg-primary/5" onClick={() => { setIsProductsDropdownOpen(false); setIsMobileMenuOpen(false); }}>
                          DG Set Batteries
                        </Link>
                        <Link href="/batteries/sub-station" className="block pl-4 py-2 text-sm text-muted-foreground hover:text-primary transition-all duration-200 rounded-lg hover:bg-primary/5" onClick={() => { setIsProductsDropdownOpen(false); setIsMobileMenuOpen(false); }}>
                          Sub Station Batteries
                        </Link>
                        <Link href="/batteries/telecom" className="block pl-4 py-2 text-sm text-muted-foreground hover:text-primary transition-all duration-200 rounded-lg hover:bg-primary/5" onClick={() => { setIsProductsDropdownOpen(false); setIsMobileMenuOpen(false); }}>
                          Telecom Tower
                        </Link>
                        <Link href="/batteries/stacker-forklift" className="block pl-4 py-2 text-sm text-muted-foreground hover:text-primary transition-all duration-200 rounded-lg hover:bg-primary/5" onClick={() => { setIsProductsDropdownOpen(false); setIsMobileMenuOpen(false); }}>
                          Stackers & Forklift
                        </Link>
                      </div>
                    </div>
                    
                    <div className="border-t border-border/30" />
                    
                    {/* Solar Solutions Section */}
                    <div>
                      <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2 px-2">Solar Solutions</div>
                      <div className="space-y-1">
                        <Link href="/batteries/solar" className="block pl-4 py-2 text-sm text-muted-foreground hover:text-primary transition-all duration-200 rounded-lg hover:bg-primary/5" onClick={() => { setIsProductsDropdownOpen(false); setIsMobileMenuOpen(false); }}>
                          Solar Panel Solutions
                        </Link>
                        <Link href="/batteries/solar-inverters" className="block pl-4 py-2 text-sm text-muted-foreground hover:text-primary transition-all duration-200 rounded-lg hover:bg-primary/5" onClick={() => { setIsProductsDropdownOpen(false); setIsMobileMenuOpen(false); }}>
                          Solar Inverters
                        </Link>
                        <Link href="/batteries/solar-storage" className="block pl-4 py-2 text-sm text-muted-foreground hover:text-primary transition-all duration-200 rounded-lg hover:bg-primary/5" onClick={() => { setIsProductsDropdownOpen(false); setIsMobileMenuOpen(false); }}>
                          Solar Battery Storage
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <Link href="/why-us" className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2 px-2 rounded-lg hover:bg-primary/5" onClick={() => setIsMobileMenuOpen(false)}>
                Why Us
              </Link>
              <Link href="/battery-scrap" className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2 px-2 rounded-lg hover:bg-primary/5" onClick={() => setIsMobileMenuOpen(false)}>
                Battery Scrap
              </Link>
              <Link href="/contact" className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2 px-2 rounded-lg hover:bg-primary/5" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
              
              <hr className="border-border my-2" />
              
              <a href="tel:+917974146200" className="flex items-center gap-2 text-sm font-medium text-foreground py-2 px-2 rounded-lg hover:bg-primary/5 touch-manipulation">
                <Phone className="w-4 h-4 text-primary" />
                +91 7974146200
              </a>
              
              <div className="flex flex-col sm:flex-row gap-2 pt-2">
                <a href="https://wa.me/917974146200?text=Hi,%20I'm%20interested%20in%20your%20battery%20products" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-white rounded-lg text-sm font-medium touch-manipulation active:scale-95 transition-transform">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <Button onClick={() => { onInquiryClick(); setIsMobileMenuOpen(false); }} className="flex-1 bg-primary py-3 touch-manipulation active:scale-95 transition-transform">
                  Get a Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}