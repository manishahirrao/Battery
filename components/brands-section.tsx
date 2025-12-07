"use client"

const brands = [
  { name: "Exide", logo: "/exide-battery-logo.jpg" },
  { name: "Amaron", logo: "/amaron-battery-logo.jpg" },
  { name: "Luminous", logo: "/luminous-battery-logo.jpg" },
  { name: "Livfast", logo: "/livfast-battery-logo.jpg" },
  { name: "Tata Green", logo: "/tata-green-battery-logo.jpg" },
  { name: "SF Sonic", logo: "/sf-sonic-battery-logo.jpg" },
  { name: "Okaya", logo: "/okaya-battery-logo.jpg" },
  { name: "Microtek", logo: "/microtek-battery-logo.jpg" },
]

export function BrandsSection() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Trusted Brands We Carry</h2>
          <p className="text-muted-foreground">Authorized dealer for India{"'"}s leading battery manufacturers</p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6 items-center">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors grayscale hover:grayscale-0"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-10 md:h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          And many more premium brands available. Contact us for specific requirements.
        </p>
      </div>
    </section>
  )
}
