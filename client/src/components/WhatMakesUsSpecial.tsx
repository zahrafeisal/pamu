import React from "react";
import { ShieldCheck, Package, Globe, Briefcase } from "lucide-react";
import businessMan from "@/assets/images/homd.png";

const WhatMakesUsSpecial: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20 font-[Outfit]">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={businessMan}
            alt="Business Man"
            className="max-w-md w-full object-contain"
          />
        </div>

        {/* Right Side - Text */}
        <div className="text-center lg:text-center">
          {/* Heading */}
          <h3 className="text-gray-500 text-lg tracking-wide mb-2">
            Our Goodness
          </h3>
          <h1 className="text-4xl md:text-5xl font-bold text-[#c62828] mb-10">
            What Makes Us Special
          </h1>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Licensed & Trusted Experts */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#c62828] text-white">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold text-[#004c80]">
                Licensed & Trusted Experts
              </h4>
              <p className="text-gray-700">
                With over 20 years of experience as KRA-licensed customs agents,
                we guarantee compliance, transparency, and peace of mind for
                every shipment.
              </p>
            </div>

            {/* Complete Logistics Solutions */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#c62828] text-white">
                <Package className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold text-[#004c80]">
                Complete Logistics Solutions
              </h4>
              <p className="text-gray-700">
                From customs clearance to freight forwarding, transport, and
                warehousing — we provide end-to-end logistics tailored to your
                needs.
              </p>
            </div>

            {/* Regional Coverage */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#c62828] text-white">
                <Globe className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold text-[#004c80]">
                Regional Coverage
              </h4>
              <p className="text-gray-700">
                Seamless operations across Kenya, Uganda, and the wider East
                African region, ensuring your cargo reaches every destination
                reliably.
              </p>
            </div>

            {/* Logistics Consulting */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#c62828] text-white">
                <Briefcase className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold text-[#004c80]">
                Logistics Consulting
              </h4>
              <p className="text-gray-700">
                Specialist advisory on customs and supply chain management,
                helping you move goods smarter, faster, and more cost-effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsSpecial;
