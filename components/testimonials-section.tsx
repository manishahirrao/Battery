"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Delhi",
    rating: 5,
    text: "Bought an Exide inverter battery for my home. Excellent service and the battery is performing great. The backup time is amazing and the customer support is top-notch. Will definitely recommend to others!",
    product: "Inverter Battery",
  },
  {
    name: "Priya Sharma",
    location: "Noida",
    rating: 5,
    text: "Very professional team. They helped me choose the right battery for my car and provided free installation. The battery is working perfectly and the service was prompt and efficient. Highly recommended!",
    product: "Car Battery",
  },
  {
    name: "Mohammed Ali",
    location: "Gurgaon",
    rating: 5,
    text: "I run a fleet of e-rickshaws. Shri Guru Traders has been our battery supplier for over 2 years now. Genuine products, competitive pricing, and great after-sales support. Our vehicles have never faced battery issues since we started using their products.",
    product: "E-Rickshaw Battery",
  },
  {
    name: "Sunita Devi",
    location: "Faridabad",
    rating: 5,
    text: "Got a solar battery setup for my farmhouse. The team was very knowledgeable and the installation was done perfectly. The battery performance has exceeded my expectations. Very satisfied with the service and product quality!",
    product: "Solar Battery",
  },
  {
    name: "Amit Patel",
    location: "Ghaziabad",
    rating: 5,
    text: "Excellent experience with their UPS batteries. The team provided great advice and the installation was quick. The battery backup is reliable and lasts longer than expected. Will definitely be a returning customer!",
    product: "UPS Battery",
  },
  {
    name: "Rekha Singh",
    location: "Noida",
    rating: 5,
    text: "Bought an Amaron car battery with free installation. The service was excellent and the battery is performing great even in extreme weather conditions. The staff is very helpful and knowledgeable.",
    product: "Car Battery",
  },
  {
    name: "Vikram Mehta",
    location: "Delhi",
    rating: 5,
    text: "Outstanding service! Got my inverter battery replaced the same day I called. The technician was professional and explained everything clearly. The battery is working perfectly and the pricing was very reasonable.",
    product: "Inverter Battery",
  },
  {
    name: "Anjali Gupta",
    location: "Gurgaon",
    rating: 5,
    text: "Highly recommend their solar battery solutions. The team provided excellent guidance and the installation was seamless. The battery performance has been consistent and reliable. Very happy with the service!",
    product: "Solar Battery",
  },
]

export function TestimonialsSection() {
  const [api, setApi] = useState<CarouselApi | null>(null)

  useEffect(() => {
    if (!api) return

    const scrollNext = () => {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        // If we can't scroll next, go back to the first slide
        api.scrollTo(0)
      }
    }

    const interval = setInterval(() => {
      scrollNext()
    }, 2000)

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval)
  }, [api])

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">What Our Customers Say</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don{"'"}t just take our word for it. Here{"'"}s what our valued customers have to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="relative">
          <Carousel 
            setApi={setApi} 
            className="w-full"
            opts={{
              loop: true,
              align: 'start',
              containScroll: 'trimSnaps',
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/4">
                  <Card className="bg-card border-border hover:shadow-lg transition-shadow h-full">
                    <CardContent className="p-6 h-full flex flex-col">
                      {/* Quote Icon */}
                      <Quote className="w-8 h-8 text-primary/20 mb-4" />

                      {/* Rating */}
                      <div className="flex gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                        ))}
                      </div>

                      {/* Text */}
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
