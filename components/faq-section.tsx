"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, HelpCircle, Battery, Zap, Shield, Clock, Truck, Phone, MessageCircle } from "lucide-react"

const faqData = [
  {
    category: "General",
    icon: HelpCircle,
    questions: [
      {
        q: "Are you an authorized Exide dealer?",
        a: "Yes, we are an authorized Exide dealer in Bhopal. All our products are genuine and come with manufacturer warranties. We have been serving customers for over 10 years with authentic Exide batteries."
      },
      {
        q: "Do you provide installation services?",
        a: "Yes, we provide complimentary professional installation for all battery purchases. Our trained technicians ensure proper installation and safety checks at your location."
      },
      {
        q: "What areas do you serve in Bhopal?",
        a: "We provide same-day delivery and installation across all areas of Bhopal, including MP Nagar, New Market, Habibganj, Kolar, and surrounding regions."
      }
    ]
  },
  {
    category: "Automotive Batteries",
    icon: Battery,
    questions: [
      {
        q: "How do I know which car battery I need?",
        a: "The right battery depends on your car model, engine size, and electrical requirements. You can check your current battery specifications, consult your car manual, or contact us with your vehicle details for expert recommendation."
      },
      {
        q: "How long do car batteries typically last?",
        a: "Car batteries typically last 3-5 years depending on usage, weather conditions, and maintenance. We recommend testing your battery after 2 years and replacing it proactively to avoid breakdowns."
      },
      {
        q: "Do you offer battery exchange/old battery buyback?",
        a: "Yes, we offer old battery exchange with attractive buyback prices. The exchange value depends on the battery type, condition, and current market rates."
      }
    ]
  },
  {
    category: "Inverter Batteries",
    icon: Zap,
    questions: [
      {
        q: "How do I calculate the right inverter battery capacity?",
        a: "Calculate your total load in watts, then use this formula: Battery Ah × Battery Voltage ÷ Total Load = Backup hours. For example, a 150Ah 12V battery with 400W load provides about 4.5 hours backup."
      },
      {
        q: "What's the difference between tubular and flat plate batteries?",
        a: "Tubular batteries offer 40% longer life, better deep discharge capability, and are ideal for areas with long power cuts. Flat plate batteries are more affordable and suitable for areas with shorter power cuts."
      },
      {
        q: "How often should I top up the water in my inverter battery?",
        a: "Tubular batteries typically need water top-up every 3-4 months. Check the electrolyte level monthly and top up with distilled water when the level is below the minimum mark."
      }
    ]
  },
  {
    category: "Solar Solutions",
    icon: Shield,
    questions: [
      {
        q: "What is the ROI on solar panel installation?",
        a: "Solar installations typically achieve ROI in 3-5 years. With 25+ year panel lifespan and government subsidies, you can save 50-90% on electricity bills for 20+ years after ROI."
      },
      {
        q: "How much space is required for a solar installation?",
        a: "A 1kW solar system requires approximately 100 sq ft of shadow-free roof space. For an average home, a 3-5kW system (300-500 sq ft) is usually sufficient."
      },
      {
        q: "Do solar panels work during cloudy days or monsoon?",
        a: "Yes, solar panels generate electricity even on cloudy days, though at reduced efficiency (10-25%). Modern panels are designed to work in various weather conditions."
      }
    ]
  },
  {
    category: "Warranty & Service",
    icon: Clock,
    questions: [
      {
        q: "What does the warranty cover?",
        a: "Warranty covers manufacturing defects and premature failure. It doesn't cover damage due to improper installation, accidents, or natural disasters. We provide complete warranty support at our service center."
      },
      {
        q: "How do I claim warranty?",
        a: "Simply contact us with your battery serial number and purchase details. We'll verify the warranty status and arrange for free replacement if covered under warranty terms."
      },
      {
        q: "Do you provide AMC (Annual Maintenance Contract)?",
        a: "Yes, we offer AMC packages for inverter and solar systems. This includes regular check-ups, water top-up, terminal cleaning, and priority service."
      }
    ]
  },
  {
    category: "Delivery & Payment",
    icon: Truck,
    questions: [
      {
        q: "How quickly can you deliver and install?",
        a: "We offer same-day delivery and installation within Bhopal for orders placed before 4 PM. For urgent requirements, we also provide express delivery within 2 hours."
      },
      {
        q: "What payment options do you accept?",
        a: "We accept cash, UPI, bank transfers, debit/credit cards, and also offer EMI options on select products through our financing partners."
      },
      {
        q: "Do you provide bills and GST invoices?",
        a: "Yes, we provide proper bills with GST invoices for all purchases. This helps with warranty claims and business expense tracking."
      }
    ]
  }
]

export default function FAQSection() {
  const [openCategory, setOpenCategory] = useState<string | null>(null)
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category)
    setOpenQuestion(null)
  }

  const toggleQuestion = (question: string) => {
    setOpenQuestion(openQuestion === question ? null : question)
  }

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-4 py-1.5">
            Frequently Asked Questions
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Got Questions? We've Got Answers
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our batteries, services, and solutions
          </p>
        </div>

        {/* Quick Contact Banner */}
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 rounded-2xl p-6 md:p-8 mb-12 border border-primary/20 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-lg">Need immediate assistance?</p>
                <p className="text-sm text-muted-foreground">Our battery experts are ready to help you</p>
              </div>
            </div>
            <div className="flex gap-3 flex-wrap justify-center">
              <a
                href="tel:+917974146200"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-all hover:scale-105 shadow-md"
              >
                <Phone className="w-4 h-4" />
                +91 7974146200
              </a>
              <a
                href="https://wa.me/917974146200"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-600 transition-all hover:scale-105 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-4">
          {faqData.map((category) => {
            const Icon = category.icon
            const isOpen = openCategory === category.category

            return (
              <div 
                key={category.category} 
                className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category.category)}
                  className="w-full px-6 md:px-8 py-5 flex items-center justify-between hover:bg-muted/50 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg md:text-xl font-semibold text-foreground">{category.category}</h3>
                      <p className="text-sm text-muted-foreground">{category.questions.length} common questions</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-primary transition-transform" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    )}
                  </div>
                </button>

                {/* Questions */}
                {isOpen && (
                  <div className="border-t border-border bg-muted/30">
                    {category.questions.map((item, index) => {
                      const isQuestionOpen = openQuestion === `${category.category}-${index}`

                      return (
                        <div
                          key={index}
                          className={`${index < category.questions.length - 1 ? 'border-b border-border' : ''}`}
                        >
                          <button
                            onClick={() => toggleQuestion(`${category.category}-${index}`)}
                            className="w-full px-6 md:px-8 py-5 text-left hover:bg-muted/50 transition-colors group"
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex items-start gap-3 flex-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                                <p className="font-medium text-foreground pr-4 group-hover:text-primary transition-colors">
                                  {item.q}
                                </p>
                              </div>
                              {isQuestionOpen ? (
                                <ChevronUp className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                              ) : (
                                <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-primary flex-shrink-0 mt-1 transition-colors" />
                              )}
                            </div>
                          </button>
                          {isQuestionOpen && (
                            <div className="px-6 md:px-8 pb-6 pl-12 md:pl-14 animate-in fade-in slide-in-from-top-2 duration-300">
                              <p className="text-muted-foreground leading-relaxed">
                                {item.a}
                              </p>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        
      </div>
    </section>
  )
}

