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
    <section id="about" className="py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            About Shri Guru Traders
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Your trusted power partner, providing premium battery solutions 
            with unmatched quality and service.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="text-sm py-2 px-4">
              <Users className="w-4 h-4 mr-2" />
              50,000+ Happy Customers
            </Badge>
            <Badge variant="secondary" className="text-sm py-2 px-4">
              <Zap className="w-4 h-4 mr-2" />
              100% Genuine Products
            </Badge>
            <Badge variant="secondary" className="text-sm py-2 px-4">
              <Truck className="w-4 h-4 mr-2" />
              Fast Delivery
            </Badge>
          </div>
        </div>

        {/* Our Story */}
        <div className="max-w-4xl mx-auto mb-20">
        
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-muted-foreground mb-4">
                Shri Guru Traders began as a small battery retail shop with a simple mission: 
                to provide reliable power solutions to our community. Over the years, we've grown into one of the 
                most trusted battery suppliers in the region.
              </p>
              <p className="text-muted-foreground mb-4">
                Our journey has been driven by commitment to quality, customer satisfaction, and innovation. 
                We've adapted to changing market needs while maintaining our core values of integrity and excellence.
              </p>
              <p className="text-muted-foreground">
                Today, we serve thousands of customers across automotive, industrial, and residential sectors, 
                offering a comprehensive range of batteries from leading manufacturers with genuine warranties 
                and reliable after-sales support.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/our story.png" 
                alt="Our Story - Shri Guru Traders Journey"
                className="w-full h-auto rounded-2xl shadow-lg object-cover"
                style={{ maxHeight: "400px" }}
              />
            </div>
          </div>
        </div>

        {/* Our Expertise */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">Our Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {expertise.map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {value.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12">By the Numbers</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50,000+</div>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <p className="text-muted-foreground">Battery Brands</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Customer Support</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Genuine Products</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
