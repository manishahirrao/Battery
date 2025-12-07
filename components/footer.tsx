"use client"

import { Phone, Mail, MapPin, Clock, Zap, Facebook, Instagram, Youtube, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src="/logo.png" 
                alt="Shri Guru Traders Logo"
                className="h-10 w-auto rounded-lg"
              />
             
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Your trusted power partner. We are authorized dealers for all major battery brands in India,
              providing quality products with the best warranty and service.
            </p>
            <p className="text-accent font-medium text-sm">Powering Your World!</p>

            <div className="flex gap-3 pt-2">
              <a
                href="https://facebook.com/shrigurutraders"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/shrigurutraders"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/@shrigurutraders"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/shrigurutraders"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:+917974146200"
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-accent" />
                +91 7974146200
              </a>
            
              <a
                href="mailto:shrigurutraders001@gmail.com"
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-accent" />
                shrigurutraders001@gmail.com
              </a>
              <div className="flex items-start gap-3 text-background/70 text-sm">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <span>
                  Ahmedpur Kalam, Hoshangabad Road Bag Swaniya,
                  <br />
                  Misrod, Bhopal - 462026 (Near By Johan Majeed)
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <nav className="space-y-2">
              <a
                href="/"
                className="block text-background/70 hover:text-background transition-colors text-sm"
              >
                Home
              </a>
              <a
                href="/about"
                className="block text-background/70 hover:text-background transition-colors text-sm"
              >
                About
              </a>
              <a
                href="/why-us"
                className="block text-background/70 hover:text-background transition-colors text-sm"
              >
                Why Choose Us
              </a>
              <a
                href="/contact"
                className="block text-background/70 hover:text-background transition-colors text-sm"
              >
                Contact
              </a>
            </nav>

            <h4 className="text-lg font-bold pt-4">Products</h4>
            <nav className="space-y-2">
              <a href="/batteries/automotive" className="block text-background/70 hover:text-background transition-colors text-sm">
                Car Batteries
              </a>
              <a href="/batteries/inverter" className="block text-background/70 hover:text-background transition-colors text-sm">
                Inverter Batteries
              </a>
              <a href="/batteries/solar" className="block text-background/70 hover:text-background transition-colors text-sm">
                Solar Solutions
              </a>
              <a href="/batteries/three-wheeler" className="block text-background/70 hover:text-background transition-colors text-sm">
                E-Rickshaw Batteries
              </a>
              <a href="/batteries/two-wheeler" className="block text-background/70 hover:text-background transition-colors text-sm">
                Two Wheeler Batteries
              </a>
              <a href="/batteries/truck-tractor" className="block text-background/70 hover:text-background transition-colors text-sm">
                Truck & Tractor Batteries
              </a>
              <a href="/batteries/ups" className="block text-background/70 hover:text-background transition-colors text-sm">
                UPS Batteries
              </a>
              <a href="/batteries/telecom" className="block text-background/70 hover:text-background transition-colors text-sm">
                Telecom Batteries
              </a>
            </nav>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Business Hours</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-background/70 text-sm">
                <Clock className="w-4 h-4 text-accent mt-0.5" />
                <div>
                  <p className="font-medium text-background">Monday - Saturday</p>
                  <p>9:00 AM - 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-background/70 text-sm">
                <Clock className="w-4 h-4 text-accent mt-0.5" />
                <div>
                  <p className="font-medium text-background">Sunday</p>
                  <p>10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-background/20">
              <p className="text-background/70 text-sm">
                <span className="font-medium text-background">GSTIN:</span> 23BGJPR7223N1ZY
              </p>
            </div>
            
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} Shri Guru Traders. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-sm text-background/60">
              <a href="/privacy-policy" className="hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-conditions" className="hover:text-background transition-colors">
                Terms of Service
              </a>
              <a href="/refund-policy" className="hover:text-background transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
