import { Shield, Award, Truck, HeadphonesIcon, BadgePercent, RefreshCw, Wrench, Clock } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "100% Genuine Products",
    description:
      "Authorized dealer for all major brands. Every battery comes with manufacturer warranty and authenticity guarantee.",
  },
  {
    icon: Award,
    title: "Best Warranty Coverage",
    description: "Up to 5 years warranty on inverter batteries. Free replacement during warranty period.",
  },
  {
    icon: Truck,
    title: "Free Home Delivery",
    description: "Free doorstep delivery across the city. Same-day delivery available for urgent requirements.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Expert Support",
    description: "Technical assistance available round the clock. Our experts help you choose the right battery.",
  },
  {
    icon: BadgePercent,
    title: "Best Value Guarantee",
    description: "Competitive pricing with value match guarantee. Special offers on bulk orders.",
  },
  {
    icon: RefreshCw,
    title: "Old Battery Exchange",
    description: "Get the best exchange value for your old battery. Instant discount on new purchase.",
  },
  {
    icon: Wrench,
    title: "Free Installation",
    description: "Professional installation by trained technicians. Proper fitting and testing included.",
  },
  {
    icon: Clock,
    title: "Quick Response Time",
    description: "Respond to inquiries within 30 minutes. Emergency services available 24/7.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-12 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
            Why 50,000+ Customers Trust Us
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-4" />
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto text-pretty">
            We are committed to providing the best battery solutions with unmatched service and support
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-primary-foreground/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                <feature.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-bold text-primary-foreground mb-2">{feature.title}</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
