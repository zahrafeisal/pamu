import React, { useEffect } from 'react';
import { Clock, Phone, Mail, Truck, Plane, Ship } from 'lucide-react';
import about from '@/styles/index.css';

const LogisticsComponent = () => {
  useEffect(() => {
    // Initialize any animations or sliders here
    const timer = setTimeout(() => {
      console.log('Component mounted and ready');
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12 scale-150"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-amber-500 text-white text-sm font-semibold rounded-full uppercase tracking-wide mb-4">
              Professional Logistics
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              PAMU SERVICES
              <span className="block text-3xl md:text-4xl font-light text-blue-200 mt-2">
                LIMITED
              </span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl font-light text-blue-100 mb-4">
            From Pickup to Destination
          </p>
          
          <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Reliable Logistics & Transport Solutions Across Kenya
          </p>
          
          <button className="bg-amber-500 hover:bg-amber-400 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Learn More →
          </button>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-amber-500 bg-opacity-20 rounded-full animate-bounce"></div>
      </section>

      {/* Contact Info Bar */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Opening Hours */}
            <div className="flex items-start space-x-4 group">
              <div className="flex-shrink-0 p-3 bg-amber-500 rounded-lg group-hover:bg-amber-400 transition-colors">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-white">OPENING HOURS</h3>
                <p className="text-slate-300 leading-relaxed">
                  Monday - Friday 09.00 - 18.00<br />
                  Saturday 09.00 - 14.00
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4 group">
              <div className="flex-shrink-0 p-3 bg-amber-500 rounded-lg group-hover:bg-amber-400 transition-colors">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-white">CALL US ANYTIME</h3>
                <p className="text-slate-300 leading-relaxed">
                  +254 (0) 795 065 062<br />
                  +254 (0) 740 329 273
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4 group">
              <div className="flex-shrink-0 p-3 bg-amber-500 rounded-lg group-hover:bg-amber-400 transition-colors">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-white">EMAIL US</h3>
                <a 
                  href="mailto:info@pamuservices.co.ke" 
                  className="text-slate-300 hover:text-amber-400 transition-colors leading-relaxed"
                >
                  info@pamuservices.co.ke
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wide mb-2 block">
              Welcome To
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-4">
              PAMU SERVICES
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-amber-500 mx-auto rounded-full"></div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Customs Clearance */}
            <div className="group cursor-pointer">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100 hover:border-blue-200">
                <div className="relative mb-6">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:from-amber-500 group-hover:to-amber-600 transition-all duration-500">
                    <Truck className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-blue-500 to-amber-500 rounded-full group-hover:w-16 transition-all duration-300"></div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                    CUSTOMS CLEARANCE
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Expert customs clearance services to ensure smooth import and export operations
                  </p>
                </div>
              </div>
            </div>

            {/* Land Delivery */}
            <div className="group cursor-pointer">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100 hover:border-blue-200">
                <div className="relative mb-6">
                  <div className="w-full h-48 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:from-amber-500 group-hover:to-amber-600 transition-all duration-500">
                    <Plane className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-green-500 to-amber-500 rounded-full group-hover:w-16 transition-all duration-300"></div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-green-600 transition-colors">
                    LAND DELIVERY
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Reliable ground transportation services across Kenya and East Africa
                  </p>
                </div>
              </div>
            </div>

            {/* Sea Delivery */}
            <div className="group cursor-pointer">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100 hover:border-blue-200">
                <div className="relative mb-6">
                  <div className="w-full h-48 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:from-amber-500 group-hover:to-amber-600 transition-all duration-500">
                    <Ship className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-cyan-500 to-amber-500 rounded-full group-hover:w-16 transition-all duration-300"></div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-cyan-600 transition-colors">
                    SEA DELIVERY
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    International maritime shipping solutions for global trade requirements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl font-black text-amber-500 mb-2">500+</div>
              <div className="text-slate-300">Happy Clients</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-black text-amber-500 mb-2">1000+</div>
              <div className="text-slate-300">Deliveries</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-black text-amber-500 mb-2">24/7</div>
              <div className="text-slate-300">Support</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-black text-amber-500 mb-2">99%</div>
              <div className="text-slate-300">On Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Ship with Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            From freight forwarding to last-mile delivery — we move your business forward with speed and trust
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-500 hover:bg-amber-400 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Get Quote
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-800 font-bold py-4 px-8 rounded-full transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogisticsComponent;