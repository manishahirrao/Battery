import React from 'react';
import { ArrowRight } from 'lucide-react';

interface BatteryProduct {
  name: string;
  capacity: string;
  warranty: string;
  price: string;
  features: string[];
  imageUrl: string;
}

const ExidePoweringBhopal: React.FC = () => {
  const batteryProduct: BatteryProduct = {
    name: "Exide InvaTubular IT500",
    capacity: "150Ah",
    warranty: "60 Months Warranty*",
    price: "₹11,490",
    features: [
      "Free Delivery • Installation Today"
    ],
    imageUrl: "/Exide InvaTubular 150Ah.jpg" // Replace with actual product image
  };

  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden flex items-center">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url('/Slider3.jpg')`
        }}
        aria-hidden="true"
      />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2 max-w-2xl space-y-6">
            {/* Small Header */}
            <div className="text-gray-400 text-sm">Home Decor Lamp</div>
            
            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-6 sm:mb-8">
                Powering Bhopal
              </h1>
              <div className="text-blue-400 text-xl sm:text-2xl lg:text-3xl font-bold">
                with India's #1 Battery Brand
              </div>
            </div>

            {/* Exide Logo */}
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/exide-battery-logo.jpg" 
                alt="Exide Logo" 
                className="h-12 w-auto"
              />
            </div>

            {/* Subtext */}
            <div className="text-gray-300 text-sm sm:text-base space-y-2">
              <p>Authorized Exide Dealer | 10,000+ Happy Customers</p>
              <p>Same-day delivery & FREE installation across Bhopal</p>
            </div>

            {/* CTA Button */}
            <a 
              href="/products"
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-5 bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg lg:text-xl font-bold rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
            >
              Explore Exide Batteries
            </a>
          </div>

          {/* Right Product Card */}
          <div className="w-full lg:w-1/2 relative">
            {/* Main Battery Image */}
            <div className="relative">
              <img 
                src="/Exide Instabrite IB1500.jpg" 
                alt="Exide InvaTubular IT500 Battery" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              
              {/* Blue Light Effects */}
              <div className="absolute top-4 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute top-4 right-1/4 w-4 h-4 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
            </div>

            {/* Product Card Overlay */}
            <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-xl p-4 w-80 border border-orange-500/30">
              {/* Limited Offer Badge */}
              <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-t-lg inline-block mb-3">
                Limited Offer → Up ₹2690 OFF
              </div>
              
              {/* Product Image */}
              <div className="mb-3">
                <img 
                  src={batteryProduct.imageUrl} 
                  alt={batteryProduct.name} 
                  className="w-20 h-auto rounded"
                />
              </div>
              
              {/* Product Details */}
              <div className="mb-3">
                <h3 className="text-lg font-bold mb-1">{batteryProduct.name}</h3>
                <p className="text-gray-300 text-sm mb-2">
                  {batteryProduct.capacity} | {batteryProduct.warranty}
                </p>
                <p className="text-blue-400 text-xl font-bold mb-2">{batteryProduct.price}</p>
                <p className="text-gray-400 text-xs">{batteryProduct.features[0]}</p>
              </div>
              
              {/* Action Buttons */}
              <div className="space-y-3">
                <a 
                  href="https://wa.me/917974146200?text=Hi%20I'm%20interested%20in%20Exide%20InvaTubular%20IT500%20battery"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExidePoweringBhopal;