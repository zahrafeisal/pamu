import { MapPin, Globe, Truck, Umbrella } from "lucide-react";
import statsBg from "@/assets/images/bg_1.jpg"; // 👈 replace with your actual image path


const Stats = () => {
  return (
    <section
      className="relative py-24 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${statsBg})` }}
    >
      {/* Blue overlay at 50% */}
      <div className="absolute inset-0 bg-[#004c80]/50"></div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center text-white">
          {/* Stat 1 */}
          <div>
            <MapPin className="h-12 w-12 mx-auto mb-3 text-white" />
            <span className="text-5xl font-bold leading-tight">4</span>
            <div className="mt-2 text-lg font-medium">Strategic Locations</div>
          </div>

          {/* Stat 2 */}
          <div>
            <Globe className="h-12 w-12 mx-auto mb-3 text-white" />
            <span className="text-5xl font-bold leading-tight">110+</span>
            <div className="mt-2 text-lg font-medium">Global Clients</div>
          </div>

          {/* Stat 3 */}
          <div>
            <Truck className="h-12 w-12 mx-auto mb-3 text-white" />
            <span className="text-5xl font-bold leading-tight">240+</span>
            <div className="mt-2 text-lg font-medium">Fleet Vehicles</div>
          </div>

          {/* Stat 4 */}
          <div>
            <Umbrella className="h-12 w-12 mx-auto mb-3 text-white" />
            <span className="text-5xl font-bold leading-tight">2340</span>
            <div className="mt-2 text-lg font-medium">Tonnes Transported</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
