import { Package, Award, CheckCircle2 } from "lucide-react";
import truckTeamImg from "@/assets/images/banner_slider_4.jpg"; // replace with correct path

export default function AboutIntro() {
  return (
    <section className="bg-[#f4f6fa] py-24 w-full">
      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE - IMAGE */}
        <div className="relative w-full">
          <div className="relative overflow-hidden rounded-2xl h-[500px] lg:h-[600px]">
            <img
              src={truckTeamImg}
              alt="Logistics Team"
              className="w-full h-full object-cover"
            />

            {/* Overlay Label - perfect square */}
            <div className="absolute top-6 left-6 bg-[#0a2a5e] text-white w-28 h-28 flex flex-col items-center justify-center shadow-lg rounded-lg">
              <p className="text-3xl font-bold leading-none">25+</p>
              <p className="text-sm font-medium text-center">Years of experience</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - CONTENT */}
        <div>
          <p className="text-sm font-semibold text-[#0a2a5e] mb-3 uppercase tracking-wide">
            Who We Are
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-snug">
            Reducing costs and <br /> increasing efficiency
          </h2>
          <p className="text-gray-600 mb-10 text-base lg:text-lg leading-relaxed">
            Pamu Services Limited is a leading provider of Customs Clearance, Freight Forwarding, and Transport Solutions licensed by the Kenya Revenue Authority. Established in 2004, we have over 20 years of experience delivering world-class logistics and supply chain services.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <div className="flex items-center gap-3 bg-white rounded-xl shadow p-5">
              <div className="bg-blue-50 p-3 rounded-lg">
                <Package className="w-6 h-6 text-[#0a2a5e]" />
              </div>
              <span className="font-medium text-gray-900">
                Strong network in customs & transport sector
              </span>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-xl shadow p-5">
              <div className="bg-blue-50 p-3 rounded-lg">
                <Award className="w-6 h-6 text-[#0a2a5e]" />
              </div>
              <span className="font-medium text-gray-900">
                Reliable and timely delivery solutions
              </span>
            </div>
          </div>

          {/* Bullet Points */}
          <ul className="space-y-4 text-gray-700 text-base">
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#0a2a5e]" />
              With over four decades of experience providing solutions
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
