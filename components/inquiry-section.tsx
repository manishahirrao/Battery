"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, CheckCircle } from "lucide-react"

const productOptions = [
  "Inverter Batteries",
  "Online UPS Systems", 
  "Solar System Batteries",
  "Sub Station Batteries",
  "4 Wheeler Batteries",
  "DG Set Batteries",
  "Stackers & Forklift Batteries",
  "Telecom Tower Batteries",
  "Bikes & Scooters Batteries",
  "3 Wheeler Batteries",
  "Trucks & Tractors Batteries",
  "Wind Mill Batteries",
  "Other / Custom Requirement",
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
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="font-semibold">Send Us a Message</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Get Your <span className="text-primary">Free Quote</span> Today
            </h2>
            <div className="w-32 h-1.5 bg-primary mx-auto rounded-full mb-8" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Fill out the form below and our battery experts will get back to you within 30 minutes 
              with personalized recommendations and competitive pricing.
            </p>
          </div>

          {/* Form */}
          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-3xl p-12 text-center animate-in fade-in-0 zoom-in-95">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-3xl font-bold text-green-800 mb-4">Thank You for Your Inquiry!</h3>
              <p className="text-green-700 text-lg mb-6">
                Your message has been received successfully. Our battery expert will contact you 
                within 30 minutes to discuss your requirements and provide the best solution.
              </p>
              <div className="bg-green-100 rounded-xl p-4 max-w-md mx-auto">
                <p className="text-green-800 font-medium text-sm">
                  For urgent assistance, call us directly at: <span className="text-green-600 font-bold">+91 7974146200</span>
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-card rounded-3xl shadow-xl p-8 md:p-12 border border-border">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <span className="w-1 h-4 bg-primary rounded-full"></span>
                      Your Name *
                    </label>
                    <Input
                      required
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-input border-border h-12 text-base rounded-xl focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <span className="w-1 h-4 bg-primary rounded-full"></span>
                      Phone Number *
                    </label>
                    <Input
                      required
                      type="tel"
                      placeholder="+91 7974146200"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-input border-border h-12 text-base rounded-xl focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <span className="w-1 h-4 bg-primary rounded-full"></span>
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-input border-border h-12 text-base rounded-xl focus:ring-2 focus:ring-primary/20"
                  />
                  <p className="text-xs text-muted-foreground">Optional - helps us send you detailed quotes</p>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <span className="w-1 h-4 bg-primary rounded-full"></span>
                    Product Type *
                  </label>
                  <Select
                    required
                    value={formData.product}
                    onValueChange={(value) => setFormData({ ...formData, product: value })}
                  >
                    <SelectTrigger className="bg-input border-border h-12 text-base rounded-xl focus:ring-2 focus:ring-primary/20">
                      <SelectValue placeholder="Select the battery type you need" />
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

                <div className="space-y-3">
                  <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <span className="w-1 h-4 bg-primary rounded-full"></span>
                    Your Message
                  </label>
                  <Textarea
                    placeholder="Tell us about your specific requirements, application, or any questions you have..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-input border-border resize-none text-base rounded-xl focus:ring-2 focus:ring-primary/20"
                  />
                  <p className="text-xs text-muted-foreground">Include details like capacity requirements, application type, or urgency</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground py-4 text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Send Inquiry
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                  <a
                    href="tel:+917974146200"
                    className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Call Now
                  </a>
                </div>
              </form>
              
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex flex-wrap gap-4 justify-center text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>30-minute response time</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Expert consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Competitive pricing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Free installation</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
