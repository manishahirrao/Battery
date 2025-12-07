import { Shield, Award, Truck, HeadphonesIcon, BadgePercent, RefreshCw, Wrench, Clock } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "100% Genuine Products",
    description:
      "Authorized dealer for all major brands. Every battery comes with manufacturer warranty and authenticity guarantee. No counterfeit products ever.",
    highlight: "Manufacturer Authorized"
  },
  {
    icon: Award,
    title: "Industry-Best Warranty",
    description: "Up to 5 years comprehensive warranty on inverter batteries. Complete coverage with free replacement during warranty period.",
    highlight: "5 Year Coverage"
  },
  {
    icon: Truck,
    title: "Special Discounts",
    description: "Free doorstep delivery across the city within 4 hours. Same-day delivery available for urgent requirements.",
    highlight: "4 Hour Delivery"
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Expert Support",
    description: "Round-the-clock technical assistance from certified battery experts. Get help anytime, anywhere for all your power needs.",
    highlight: "Always Available"
  },
  {
    icon: BadgePercent,
    title: "Best Price Guarantee",
    description: "Competitive pricing with value match guarantee. Special discounts on bulk orders and seasonal offers throughout the year.",
    highlight: "Price Match Promise"
  },
  {
    icon: RefreshCw,
    title: "Old Battery Exchange",
    description: "Get the best exchange value for your old battery. Instant discount on new purchase with eco-friendly disposal.",
    highlight: "Instant Discount"
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    description: "Free installation by certified technicians. Proper fitting, testing, and safety checks included with every purchase.",
    highlight: "Certified Technicians"
  },
  {
    icon: Clock,
    title: "Rapid Response Service",
    description: "Respond to all inquiries within 30 minutes. Emergency service available 24/7 for critical power backup needs.",
    highlight: "30 Minute Response"
  },
]

export function WhyChooseUs() {
  return (
    <>
      {/* Hero Section with Image */}
      <section className="relative min-h-[60vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/why%20us.png" 
            alt="Why Choose Us" 
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error('Image failed to load:', e);
              e.currentTarget.src = '/placeholder.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Why Choose Us
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Why <span className="text-primary">10,000+</span> Customers Trust Us
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              We're committed to delivering exceptional battery solutions with unmatched service quality, 
              genuine products, and customer satisfaction that speaks for itself across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917974146200"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Call Now: +91 7974146200
              </a>
              <a
                href="https://wa.me/917974146200?text=Hi,%20I'm%20interested%20in%20your%20battery%20products"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="why-us-content" className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
       

        {/* Introduction Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-muted/30 rounded-3xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4 text-center">Our Commitment to Excellence</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              For over 5 years, Shri Guru Traders has been the trusted name in battery solutions across India. 
              Our commitment goes beyond just selling batteries - we build lasting relationships with our customers 
              through transparency, reliability, and exceptional service. Every battery we sell comes with our 
              promise of quality, backed by comprehensive warranties and expert support.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We understand that power is critical to your daily life and business operations. That's why we 
              ensure every customer receives personalized attention, expert guidance, and solutions that perfectly 
              match their needs. Our team of certified professionals is always ready to help you make the right choice.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card border border-border rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Highlight Badge */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                {feature.highlight}
              </div>
              
              <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Content Section */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12">
          <div className="bg-muted/20 rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Quality Assurance Process</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Direct from Manufacturers</h4>
                  <p className="text-muted-foreground text-sm">We source directly from authorized manufacturers, eliminating middlemen and ensuring 100% genuine products.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Rigorous Testing</h4>
                  <p className="text-muted-foreground text-sm">Every battery undergoes strict quality checks before delivery to ensure optimal performance and longevity.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Certified Technicians</h4>
                  <p className="text-muted-foreground text-sm">Our installation team consists of certified professionals with extensive experience in battery systems.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-muted/20 rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Customer-Centric Approach</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Personalized Consultation</h4>
                  <p className="text-muted-foreground text-sm">Our experts provide personalized recommendations based on your specific requirements and usage patterns.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">After-Sales Support</h4>
                  <p className="text-muted-foreground text-sm">We provide comprehensive after-sales service including maintenance tips and troubleshooting assistance.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Emergency Services</h4>
                  <p className="text-muted-foreground text-sm">24/7 emergency support for critical power situations with rapid response times.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-primary/5 backdrop-blur-md rounded-3xl p-12 max-w-4xl mx-auto border border-primary/20 shadow-xl">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Experience the <span className="text-primary">Difference</span>?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join thousands of satisfied customers who trust us for their power needs. 
              Get started today with our premium battery solutions and exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917974146200"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Call Now: +91 7974146200
              </a>
              <a
                href="https://wa.me/917974146200?text=Hi,%20I'm%20interested%20in%20your%20battery%20products"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                WhatsApp Us
              </a>
            </div>
            
            <div className="mt-12 grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">30 Min</div>
                <p className="text-muted-foreground font-medium">Response Time</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground font-medium">Satisfaction</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground font-medium">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  )
}
