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
    <section id="about">
      {/* Hero Section with Background Image */}
      <div className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
        {/* Background Image with Enhanced Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/about (2).png" 
            alt="About Us - Shri Guru Traders"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 container h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 pb-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Powering India's Future with Reliable Battery Solutions
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              For over 5 years, Shri Guru Traders has been at the forefront of delivering premium power solutions across India, 
              combining cutting-edge technology with unparalleled customer service.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Our Products
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium backdrop-blur-sm transition-colors border border-white/20">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        
        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-primary/90 to-accent/90 text-white py-6">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold">10,000+</div>
                <div className="text-sm opacity-90">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm opacity-90">Premium Brands</div>
              </div>
              <div>
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm opacity-90">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Rest of the content */}
      <div className="py-16 bg-gradient-to-b from-background to-muted/30">
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
        <div className="w-full mb-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-primary mb-4">Our Journey of Excellence</h3>
            <p className="text-xl text-muted-foreground">
              Powering India with Trusted Battery Solutions
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-card to-muted/20 rounded-2xl p-8 shadow-lg border border-border/50 max-w-7xl mx-auto">
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              Shri Guru Traders began with a simple yet powerful vision: to provide authentic, reliable battery solutions to our community. 
              What started as a humble retail shop has grown into a trusted name in the battery industry, serving over 10,000 satisfied 
              customers across the region. Our journey is built on a foundation of quality, customer service, and technical expertise that 
              continues to guide our operations today.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              We take pride in being authorized partners for over 15 premium battery brands, offering comprehensive power solutions for 
              homes, businesses, and industries. Our team of certified professionals is dedicated to providing expert guidance, ensuring 
              every customer finds the perfect battery solution for their specific needs. We've consistently invested in training and 
              development to stay at the forefront of battery technology and industry best practices.
            </p>
            
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-xl border-l-4 border-primary mb-6">
              <p className="text-primary font-semibold text-lg mb-3">Our Core Philosophy</p>
              <p className="text-muted-foreground mb-4">
                Our success is built on three fundamental pillars:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-foreground"><strong>Uncompromising Quality</strong> - We only supply genuine, certified batteries from trusted manufacturers, ensuring our customers receive products that meet the highest industry standards.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <span className="text-foreground"><strong>Customer-Centric Service</strong> - Your satisfaction is our priority. We provide personalized service, expert guidance, and after-sales support to ensure complete peace of mind.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-foreground"><strong>Technical Expertise</strong> - Our certified professionals possess deep knowledge of battery technologies and applications, enabling us to recommend the perfect solutions for your specific needs.</span>
                </div>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Today, we stand as a testament to what dedication and customer focus can achieve. Our state-of-the-art facility and 
              comprehensive product portfolio reflect our commitment to excellence in every aspect of our operations. We're constantly 
              innovating and expanding our services, embracing new technologies like solar energy solutions and advanced battery 
              management systems to meet the evolving needs of our customers.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="bg-primary/5 p-4 rounded-xl text-center">
                <div className="text-primary font-bold text-2xl mb-1">15+</div>
                <p className="text-sm text-muted-foreground">Premium Brands</p>
              </div>
              <div className="bg-accent/5 p-4 rounded-xl text-center">
                <div className="text-accent-foreground font-bold text-2xl mb-1">10K+</div>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div className="bg-green-500/10 p-4 rounded-xl text-center">
                <div className="text-green-600 font-bold text-2xl mb-1">5+</div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="bg-orange-500/10 p-4 rounded-xl text-center">
                <div className="text-orange-600 font-bold text-2xl mb-1">24/7</div>
                <p className="text-sm text-muted-foreground">Support</p>
              </div>
            </div>
            
            <div className="mt-6 bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-xl">
              <p className="text-primary font-semibold text-lg mb-2">Our Vision</p>
              <p className="text-muted-foreground">
                To be India's most trusted battery solutions provider, setting industry standards for quality, service, and customer satisfaction. 
                We envision a future where every customer experiences reliable power solutions backed by unwavering support and technical expertise.
              </p>
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
      </div>
    </section>
  )
}
