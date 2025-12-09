'use client';

import Image from 'next/image';

export function BatteryBrands() {
  const brands = [
    { name: 'Exide', logo: '/Exidelogo.jpeg' },
    { name: 'Amaron', logo: '/Amaronlogo.jpeg' },
    { name: 'Luminous', logo: '/Luminiouslogo.jpg' },
    { name: 'Livfast', logo: '/Livfastlogo.png' },
    { name: 'Okaya', logo: '/Okayalogo.jpg' },
    { name: 'Su-Kam', logo: '/Su-Kamlogo.jpeg' },
    { name: 'Microtek', logo: '/Microteklogo.png' },
    { name: 'V-Guard', logo: '/V‑Guardlogo.png' },
    { name: 'SF Sonic', logo: '/sf-sonic-battery-logo.jpg' },
  ];

  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Trusted by Leading Brands
        </h2>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll">
            {[...brands, ...brands].map((brand, index) => (
              <div 
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 relative w-32 h-20 mx-10 opacity-80 hover:opacity-100 transition-opacity duration-300"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 80px, 128px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 15s linear infinite;
          width: fit-content;
        }
      `}</style>
    </section>
  );
}
