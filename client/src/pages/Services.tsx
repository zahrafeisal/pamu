import SEOHead from "@/components/SEOHead";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import ServicesHero from "@/components/ServicesHero"; 
import logo from "@/assets/images/logo_footer.png";

// Import service images
import img1 from "@/assets/images/service-img-01.jpg";
import img2 from "@/assets/images/service-img-02.jpg";
import img3 from "@/assets/images/service-img-03.jpg";
import img4 from "@/assets/images/service-img-04.jpg";
import img5 from "@/assets/images/service-img-05.jpg";
import img6 from "@/assets/images/service-img-06.jpg";
import img7 from "@/assets/images/service-img-07.jpg";
import img8 from "@/assets/images/service-img-08.jpg";

interface Service {
  key: string;
  image: string;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    key: "customs",
    image: img1,
    title: "Customs Clearance",
    description: "Expert handling of all customs procedures and documentation for seamless border crossings.",
    features: ["Import & Export Documentation", "Duty Optimization", "Compliance Management"],
  },
  {
    key: "sea-freight",
    image: img2,
    title: "Sea Freight Import/Export",
    description: "Efficient sea freight services with global coverage for both imports and exports.",
    features: ["Full Container Load", "Global Network", "Port-to-Door Delivery"],
  },
  {
    key: "land",
    image: img3,
    title: "Land Freight",
    description: "Reliable road and rail freight services across East Africa.",
    features: ["Cross-border Transport", "Modern Fleet"],
  },
  {
    key: "air",
    image: img4,
    title: "Air Freight",
    description: "Fast and secure air freight solutions for urgent shipments.",
    features: ["Express Shipping", "Global Coverage", "Cargo Handling Expertise"],
  },
  {
    key: "project",
    image: img5,
    title: "Project Cargo Handling",
    description: "Specialized handling for large-scale and complex cargo projects.",
    features: ["Heavy Lift", "Route Planning", "Risk Management"],
  },
  {
    key: "vehicle",
    image: img6,
    title: "Motor Vehicle Handling",
    description: "Safe and efficient handling of imported and exported vehicles.",
    features: ["Vehicle Clearance", "Secure Transport", "Inspection Services"],
  },
  {
    key: "cargo",
    image: img7,
    title: "Conventional Cargo Handling",
    description: "Professional handling of bulk and conventional cargo.",
    features: ["Secure Storage", "Inventory Management", "Quality Control"],
  },
  {
    key: "consultancy",
    image: img8,
    title: "Import & Export Consultancy",
    description: "Expert advisory services for international trade compliance and optimization.",
    features: ["Trade Compliance", "Market Analysis", "Risk Assessment"],
  },
];

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        title="Services | Pamu Services"
        description="Explore Pamu Services Limited’s logistics and freight forwarding solutions including customs clearance, sea, land, and air freight across East Africa."
        keywords="logistics services Kenya, customs clearance, freight forwarding East Africa, transport solutions, supply chain partner"
        url="https://pamuservices.co.ke/services"
        image={logo}
      />
      <ServicesHero />

      {/* Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Link
              key={index}
              to={`/services/${service.key}`}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col min-h-[420px]"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="h-56 w-full object-cover rounded-t-2xl"
              />

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-brand-dark mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-1">{service.description}</p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600 text-sm">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
