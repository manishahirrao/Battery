import React from 'react';
import { Phone, CheckCircle } from 'lucide-react';

const ExideHeroSlider: React.FC = () => {
  const features = [
    '100% Genuine Products',
    'FREE Delivery + Installation',
    'Same-Day Service',
    'Up to 60 Months Warranty'
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'linear-gradient(90deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.4) 100%), url(https://lh3.googleusercontent.com/aida-public/AB6AXuCExs1cq4A1vI6iLX8vUYivTk_lyQHP6SagZiZ4S59GexBpspqR84BAGN5LYPhChJYoWKC1IMt1YGOqDj_NJQh7yojO5myicWtJE9FyijuhKG2Kr9fKFku-HI0c-F9B3l-S08OEtvCx1KiLZ1S3FTLAAzsId24hNqDHnGkt3RnGSOxgcCYr0y8Q0-jwooqVWJSKbuRbmxXGe9lojyvS2OAFL0QbNc-pLkF-niGaOaaSgq0eiBD-ROY8R7HpWSSLpeNF9jFlGuozOUg)'
          }}
        />
        
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-3xl">
            {/* Main Heading */}
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-6 sm:mb-8">
              🔥 Powering Bhopal with EXIDE & Other Leading Battery Brands
            </h1>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-white">
                  <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                  <span className="text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </div>

            {/* Offer Banner */}
            <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded-lg mb-6 sm:mb-8">
              <p className="text-yellow-300 text-sm sm:text-base">
                <span className="font-bold">👉 Limited Offer: </span>
                <span className="text-white font-bold">Flat ₹800–₹2000 OFF</span>
                <span className="font-bold"> + Old Battery Exchange</span>
              </p>
            </div>

            {/* CTA Button */}
            <a
              href="tel:+917974146200"
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-5 bg-green-500 text-white text-base sm:text-lg lg:text-xl font-bold rounded-lg hover:bg-green-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
            >
              <Phone className="mr-2 flex-shrink-0" size={20} />
              <span className="truncate">Call/WhatsApp: +91 79741 46200</span>
            </a>

            {/* Trust Badge */}
            <p className="text-gray-300 text-xs sm:text-sm mt-4 sm:mt-6">
              Shri Guru Traders – Your Trusted Exide Dealer.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExideHeroSlider;