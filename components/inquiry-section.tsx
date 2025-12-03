"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, CheckCircle } from "lucide-react"

const productOptions = [
  "Automotive Battery",
  "Inverter Battery",
  "Two Wheeler Battery",
  "Truck & Bus Battery",
  "Solar Battery",
  "E-Rickshaw Battery",
  "Other",
]

export function InquirySection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    product: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", phone: "", email: "", product: "", message: "" })
    }, 3000)
  }

  return (
    <section id="contact" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Get In Touch</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground text-lg text-pretty">
              Send us your requirements and we{"'"}ll get back to you within 24 hours
            </p>
          </div>

          {/* Form */}
          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-in fade-in-0 zoom-in-95">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
              <p className="text-green-700">
                Your inquiry has been submitted successfully. We{"'"}ll contact you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card rounded-xl shadow-lg p-6 md:p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground">Your Name *</label>
                  <Input
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-input"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground">Phone Number *</label>
                  <Input
                    required
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-input"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-card-foreground">Email Address</label>
                <Input
                  type="email"
                  placeholder="Enter your email (optional)"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-input"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-card-foreground">Product Type *</label>
                <Select
                  required
                  value={formData.product}
                  onValueChange={(value) => setFormData({ ...formData, product: value })}
                >
                  <SelectTrigger className="bg-input">
                    <SelectValue placeholder="Select a product" />
                  </SelectTrigger>
                  <SelectContent>
                    {productOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-card-foreground">Your Message</label>
                <Textarea
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-input resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg"
              >
                Submit Inquiry
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
