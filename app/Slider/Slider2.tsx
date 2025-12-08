import React from 'react';
import { Phone, CheckCircle } from 'lucide-react';

interface BatteryProduct {
  name: string;
  description: string;
  price: string;
  features: string[];
  imageUrl: string;
}

const ExideBatteryPromo: React.FC = () => {
  const batteryProduct: BatteryProduct = {
    name: "Exide Mielage 45Ah",
    description: "For Cars & SUVs",
    price: "₹4,790 Only",
    features: [
      "Free Delivery • Installation Today"
    ],
    imageUrl: "/Exide Instabrite IB1500.jpg" // Replace with actual product image
  };

  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url('/Slider2.jpg')`
        }}
        aria-hidden="true"
      />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8">
          
          {/* Left Product Card */}
          <div className="bg-black/50 backdrop-blur-sm rounded-xl p-6 w-full lg:w-1/3 border border-orange-500/30">
            {/* Limited Offer Badge */}
            <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-t-lg inline-block mb-4">
              Limited Offer → up to ₹2500 OFF
            </div>
            
            {/* Product Image */}
            <div className="mb-4">
              <img 
                src={batteryProduct.imageUrl} 
                alt="Exide Mielage 45Ah Battery" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            
            {/* Product Details */}
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-1">{batteryProduct.name}</h3>
              <p className="text-gray-300 text-sm mb-2">{batteryProduct.description}</p>
              <p className="text-blue-400 text-2xl font-bold mb-3">{batteryProduct.price}</p>
              <p className="text-gray-400 text-xs">{batteryProduct.features[0]}</p>
            </div>
            
            {/* Action Buttons */}
            <div className="space-y-3">
              <a 
                href="https://wa.me/917974146200?text=Hi%20I'm%20interested%20in%20Exide%20Mielage%2045Ah%20battery"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
              >
                WhatsApp
              </a>
              <a 
                href="tel:+917974146200"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-2/3 max-w-2xl space-y-6">
            {/* Small Header */}
            <div className="text-gray-400 text-sm">Home Decor Lamp</div>
            
            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-6 sm:mb-8">
                Don't Wait for Power Cut!
              </h1>
              <div className="text-blue-400 text-xl sm:text-2xl lg:text-3xl font-bold">
                + FREE Installation
              </div>
              <div className="text-white text-lg sm:text-xl">
                + Highest Old Battery Buy-Back in Bhopal
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <a 
                href="tel:+917974146200"
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-5 bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg lg:text-xl font-bold rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
              >
                <Phone className="mr-2" size={20} />
                Call / WhatsApp +91 79741 46200
              </a>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-12 text-center text-gray-400 text-sm">
          Serving MP Nagar | Arrea Colony | Kolar | Hoshasing Road & entire Bhopal
        </div>
      </div>
    </div>
  );
};

export default ExideBatteryPromo;