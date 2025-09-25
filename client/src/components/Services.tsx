import React from "react";
import customsImg from "@/assets/images/icon-box-2.png";
import landImg from "@/assets/images/icon-box-1.jpg";
import seaImg from "@/assets/images/icon-box-3.jpg";
import { Truck, Plane, Ship } from "lucide-react";

const Services: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h1 className="text-gray-500 text-lg tracking-widest uppercase">
          Welcome To
        </h1>
        <h2 className="text-[#c62828] text-5xl md:text-6xl font-extrabold mt-2">
          PAMU SERVICES
        </h2>

        {/* Service Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Customs Clearance */}
          <div className="relative h-[350px] w-full overflow-hidden group">
            <img
              src={customsImg}
              alt="Customs Clearance"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30 group-hover:bg-black/40 transition">
              <Truck className="w-12 h-12 mb-3 text-white" />
              <h3 className="text-2xl font-bold uppercase">Customs Clearance</h3>
            </div>
          </div>

          {/* Land Delivery */}
          <div className="relative h-[350px] w-full overflow-hidden group">
            <img
              src={landImg}
              alt="Land Delivery"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30 group-hover:bg-black/40 transition">
              <Plane className="w-12 h-12 mb-3 text-white" />
              <h3 className="text-2xl font-bold uppercase">Land Delivery</h3>
            </div>
          </div>

          {/* Sea Delivery */}
          <div className="relative h-[350px] w-full overflow-hidden group">
            <img
              src={seaImg}
              alt="Sea Delivery"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30 group-hover:bg-black/40 transition">
              <Ship className="w-12 h-12 mb-3 text-white" />
              <h3 className="text-2xl font-bold uppercase">Sea Delivery</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
