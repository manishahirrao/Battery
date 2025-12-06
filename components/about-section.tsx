"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Zap, Shield, Truck, Headphones, Award } from "lucide-react"

export function AboutSection() {
  const values = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality First",
      description: "We only supply genuine, certified batteries from trusted manufacturers"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer Centric",
      description: "Your satisfaction is our priority, with personalized service and support"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Fast Delivery",
      description: "Quick delivery across the city with our dedicated logistics team"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Expert Support",
      description: "Technical guidance and after-sales support from our experienced team"
    }
  ]

  const expertise = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automotive Batteries",
      description: "Complete range of car, bike, and commercial vehicle batteries from leading brands with extended warranty."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Inverter & UPS",
      description: "Reliable power backup solutions for homes and offices with tubular and flat plate batteries."
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Industrial Solutions",
      description: "Heavy-duty batteries for trucks, buses, and industrial applications with superior performance."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "E-Rickshaw Batteries",
      description: "Specialized batteries for electric vehicles with long life and quick charging capabilities."
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Solar Batteries",
      description: "Energy storage solutions for solar power systems with deep cycle technology."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Technical Support",
      description: "Expert guidance for battery selection, installation, and maintenance services."
    }
  ]

  return (
    <section id="about" className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            About Shri Guru Traders
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            For over 5 years, we have been India's most trusted authorized battery dealer, 
            delivering premium power solutions with uncompromising quality and exceptional service.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-primary/10 px-6 py-3 rounded-full">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Users className="w-5 h-5" />
                10,000+ Satisfied Customers
              </div>
            </div>
            <div className="bg-accent/20 px-6 py-3 rounded-full">
              <div className="flex items-center gap-2 text-accent-foreground font-semibold">
                <Zap className="w-5 h-5" />
                100% Genuine Products
              </div>
            </div>
            <div className="bg-green-500/10 px-6 py-3 rounded-full">
              <div className="flex items-center gap-2 text-green-600 font-semibold">
                <Award className="w-5 h-5" />
                ISO Certified Company
              </div>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="max-w-6xl mx-auto mb-24">
          <h3 className="text-3xl font-bold text-center mb-12">Our Journey of Excellence</h3>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2019, Shri Guru Traders began as a humble battery retail shop with a singular vision: 
                to provide reliable, genuine power solutions to our community. What started as a small family business 
                has blossomed into one of India's most respected authorized battery dealers.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our growth story is built on three pillars: <strong>uncompromising quality</strong>, 
                <strong>customer-centric service</strong>, and <strong>technical expertise</strong>. 
                We've evolved from a single outlet to a comprehensive battery solutions provider, 
                serving diverse sectors from automotive to industrial.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we stand proud as authorized partners for over 15 premium battery brands, 
                with a state-of-the-art facility and a team of certified experts dedicated to powering 
                India's progress, one battery at a time.
              </p>
              <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
                <p className="text-primary font-semibold text-lg mb-2">Our Mission</p>
                <p className="text-muted-foreground">
                  To deliver authentic battery solutions with exceptional service, ensuring every customer 
                  experiences reliable power and complete peace of mind.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/our story.png" 
                alt="Our Story - Shri Guru Traders Journey"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover lg:max-h-[500px] md:max-h-[400px] max-h-[300px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-4 rounded-xl shadow-lg">
                <p className="font-bold text-lg">Since 2019</p>
                <p className="text-sm">5+ Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Expertise */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-center mb-16">Comprehensive Battery Solutions</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {expertise.map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-muted/20">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-foreground">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-center mb-16">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-muted/20">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-foreground">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-center mb-16">Our Impact by Numbers</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="text-5xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform">10,000+</div>
              <p className="text-lg text-muted-foreground font-medium">Happy Customers</p>
              <p className="text-sm text-muted-foreground mt-1">Across India</p>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform">15+</div>
              <p className="text-lg text-muted-foreground font-medium">Premium Brands</p>
              <p className="text-sm text-muted-foreground mt-1">Authorized Partners</p>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform">5+</div>
              <p className="text-lg text-muted-foreground font-medium">Years Experience</p>
              <p className="text-sm text-muted-foreground mt-1">Industry Leadership</p>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform">24/7</div>
              <p className="text-lg text-muted-foreground font-medium">Customer Support</p>
              <p className="text-sm text-muted-foreground mt-1">Always Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
