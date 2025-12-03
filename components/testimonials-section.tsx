"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Delhi",
    rating: 5,
    text: "Bought an Exide inverter battery for my home. Excellent service and the battery is performing great. Best value in the market!",
    product: "Inverter Battery",
  },
  {
    name: "Priya Sharma",
    location: "Noida",
    rating: 5,
    text: "Very professional team. They helped me choose the right battery for my car and provided free installation. Highly recommended!",
    product: "Car Battery",
  },
  {
    name: "Mohammed Ali",
    location: "Gurgaon",
    rating: 5,
    text: "I run a fleet of e-rickshaws. Shri Guru Traders has been our battery supplier. Genuine products and great after-sales support.",
    product: "E-Rickshaw Battery",
  },
  {
    name: "Sunita Devi",
    location: "Faridabad",
    rating: 5,
    text: "Got a solar battery setup for my farmhouse. The team was very knowledgeable and the installation was done perfectly. Very satisfied!",
    product: "Solar Battery",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">What Our Customers Say</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don{"'"}t just take our word for it. Here{"'"}s what our valued customers have to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary/20 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {'"'}
                  {testimonial.text}
                  {'"'}
                </p>

                {/* Product Badge */}
                <span className="inline-block text-xs bg-primary/10 text-primary px-2 py-1 rounded-full mb-4">
                  {testimonial.product}
                </span>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
