"use client"

import { Phone, Mail, MapPin, Clock, Zap, Facebook, Instagram, Youtube, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="bg-foreground text-background">
      <div className="bg-primary py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-primary-foreground">
                Need Help Choosing the Right Battery?
              </h3>
              <p className="text-primary-foreground/80">Our experts are here to help. Get free consultation today!</p>
            </div>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => scrollToSection("contact")}
              >
                Contact Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <a href="tel:+919876543210">Call Now</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Shri Guru Traders</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Your trusted power partner since 2008. We are authorized dealers for all major battery brands in India,
              providing quality products with the best warranty and service.
            </p>
            <p className="text-accent font-medium text-sm">Powering Your World!</p>

            <div className="flex gap-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#"
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
                href="tel:+919876543210"
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-accent" />
                +91 98765 43210
              </a>
              <a
                href="tel:+919876543211"
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-accent" />
                +91 98765 43211
              </a>
              <a
                href="mailto:info@shrigurutraders.com"
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-accent" />
                info@shrigurutraders.com
              </a>
              <div className="flex items-start gap-3 text-background/70 text-sm">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <span>
                  123 Battery Market,
                  <br />
                  Main Road, City - 123456
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection("hero")}
                className="block text-background/70 hover:text-background transition-colors text-sm"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="block text-background/70 hover:text-background transition-colors text-sm"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("why-us")}
                className="block text-background/70 hover:text-background transition-colors text-sm"
              >
                Why Choose Us
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-background/70 hover:text-background transition-colors text-sm"
              >
                Contact
              </button>
            </nav>

            <h4 className="text-lg font-bold pt-4">Products</h4>
            <nav className="space-y-2">
              <button className="block text-background/70 hover:text-background transition-colors text-sm">
                Car Batteries
              </button>
              <button className="block text-background/70 hover:text-background transition-colors text-sm">
                Inverter Batteries
              </button>
              <button className="block text-background/70 hover:text-background transition-colors text-sm">
                Solar Batteries
              </button>
              <button className="block text-background/70 hover:text-background transition-colors text-sm">
                E-Rickshaw Batteries
              </button>
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

            <div className="pt-4">
              <h4 className="text-lg font-bold mb-2">We Deliver To</h4>
              <p className="text-background/70 text-sm">
                Delhi NCR, Noida, Gurgaon, Faridabad, Ghaziabad and surrounding areas.
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
              <a href="#" className="hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
