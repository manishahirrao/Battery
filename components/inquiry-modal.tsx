"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Send, CheckCircle, Phone, Zap } from "lucide-react"

interface InquiryModalProps {
  isOpen: boolean
  onClose: () => void
  selectedProduct: string
}

const productOptions = [
  "Automotive Battery",
  "Inverter Battery",
  "Two Wheeler Battery",
  "Truck / Tractor / Bus Battery",
  "E-Rickshaw / 3-Wheeler Battery",
  "Home Backup Solution",
  "Solar Solution",
  "Commercial / Industrial Power",
  "Custom Requirement",
]

export function InquiryModal({ isOpen, onClose, selectedProduct }: InquiryModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    product: "",
    message: "",
  })

  useEffect(() => {
    if (selectedProduct) {
      setFormData((prev) => ({ ...prev, product: selectedProduct }))
    }
  }, [selectedProduct])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", phone: "", email: "", product: "", message: "" })
      onClose()
    }, 2500)
  }

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose()
      setIsSubmitted(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto p-0" style={{ zIndex: 9999 }}>
        <DialogTitle className="sr-only">Power & Solar Solution Inquiry Form</DialogTitle>
        <DialogDescription className="sr-only">
          Share your basic details to get a tailored quote for batteries, inverters, solar solutions, and power backup requirements. Our team will contact you shortly.
        </DialogDescription>
        <div className="bg-primary p-5 text-primary-foreground">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
              <Zap className="w-5 h-5 text-accent-foreground" />
            </div>
            <DialogTitle className="text-xl font-bold">Request a Custom Quote</DialogTitle>
          </div>
          <p className="text-primary-foreground/80 text-sm">
            Tell us what you need and we'll suggest the right battery, inverter or solar solution with pricing and warranty details.
          </p>
        </div>

        <div className="p-6">
          {isSubmitted ? (
            <div className="py-8 text-center animate-in fade-in-0 zoom-in-95">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Thank You!</h3>
              <p className="text-muted-foreground">Our team will review your requirement and connect with you soon with the best options.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Your Name *</label>
                <Input
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Phone Number *</label>
                <Input
                  required
                  type="tel"
                  placeholder="Enter your 10-digit phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email Address</label>
                <Input
                  type="email"
                  placeholder="Enter your email (optional)"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Requirement Type *</label>
                <Select
                  required
                  value={formData.product}
                  onValueChange={(value) => setFormData({ ...formData, product: value })}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your requirement type" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border border-border shadow-lg" style={{ zIndex: 10000 }}>
                    {productOptions.map((option) => (
                      <SelectItem key={option} value={option} className="hover:bg-accent cursor-pointer">
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Your Requirements</label>
                <Textarea
                  placeholder="Share details like application (home, shop, vehicle, industrial), approx. load / backup time, brand preference, quantity, location, etc."
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="resize-none"
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-5">
                Submit Inquiry
                <Send className="ml-2 w-4 h-4" />
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or call directly</span>
                </div>
              </div>

              <Button type="button" variant="outline" className="w-full py-5 bg-transparent" asChild>
                <a href="tel:+917974146200">
                  <Phone className="mr-2 w-4 h-4" />
                  +91 7974146200
                </a>
              </Button>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
