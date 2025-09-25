import { Truck, Ship, Plane, Award, Train } from "lucide-react";

interface Service {
  title: string;
  icon: React.ReactNode;
}

export default function ServicesMarquee() {
  const services: Service[] = [
    { title: "Land Freight", icon: <Truck className="w-14 h-14" /> },
    { title: "Air Freight", icon: <Plane className="w-14 h-14" /> },
    { title: "Sea Import/Export", icon: <Ship className="w-14 h-14" /> },
    { title: "Rail Freight", icon: <Train className="w-14 h-14" /> },
    { title: "Project Cargo", icon: <Award className="w-14 h-14" /> },
  ];

  return (
    <section className="bg-gray-50 py-20 overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee items-center whitespace-nowrap space-x-16 md:space-x-24">
          {services.concat(services).map((service, index) => (
            <div
              key={index}
              className="flex items-center space-x-12 md:space-x-16"
            >
              {/* Big text */}
              <span className="text-[90px] md:text-[160px] font-extrabold text-gray-300 leading-none">
                {service.title}
              </span>

              {/* Icon separator */}
              <div className="flex items-center justify-center bg-blue-900 rounded-full w-28 h-28 md:w-32 md:h-32 flex-shrink-0">
                <div className="text-white">{service.icon}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </section>
  );
}
