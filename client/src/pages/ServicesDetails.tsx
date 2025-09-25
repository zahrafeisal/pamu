import SEOHead from "@/components/SEOHead";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import logo from "@/assets/images/logo_footer.png";
import Hero from "@/components/ServicesDetsHero"

// ✅ Import service images
import img1 from "@/assets/images/service-img-01.jpg";
import img2 from "@/assets/images/service-img-02.jpg";
import img3 from "@/assets/images/service-img-03.jpg";
import img4 from "@/assets/images/service-img-04.jpg";
import img5 from "@/assets/images/service-img-05.jpg";
import img6 from "@/assets/images/service-img-06.jpg";
import img7 from "@/assets/images/service-img-07.jpg";
import img8 from "@/assets/images/service-img-08.jpg";

// 🌍 Engaging & Client-Focused Services Data
const services = {
  customs: {
    title: "Customs Clearance",
    image: img1,
    description:
      "Smooth border crossings, zero stress. Our licensed customs experts take care of all paperwork and compliance, ensuring your cargo moves quickly and without delays.",
    features: [
      "Import & Export Documentation",
      "Duty Optimization Strategies",
      "Seamless KRA Compliance",
      "Special Handling (Reefer & Hazardous Cargo)",
      "Cross Trade & Transshipment Support",
    ],
  },
  "sea-freight": {
    title: "Sea Freight Import & Export",
    image: img2,
    description:
      "From Mombasa to the world — and back. We partner with major shipping lines to secure competitive rates and reliable schedules, whether it’s full containers or oversized project cargo.",
    features: [
      "Full Container Load (FCL) Shipping",
      "Flat Racks & Out-of-Gauge Solutions",
      "Breakbulk & Heavy Lift Expertise",
      "Direct & Indirect Transshipments",
      "Global Network with Port-to-Door Options",
    ],
  },
  land: {
    title: "Land Freight",
    image: img3,
    description:
      "Your cargo, safely across East Africa. With our modern fleet and regional partnerships, we deliver reliably across borders — by road and rail.",
    features: [
      "Cross-Border Road Transport (Kenya, Uganda, Rwanda, Tanzania, DRC, South Sudan)",
      "LTL, FTL & Bulk Cargo Solutions",
      "Oversized & Heavy Cargo Transport",
      "GPS Real-Time Tracking",
      "SGR/MGR Rail Freight for Cost Savings",
    ],
  },
  air: {
    title: "Air Freight",
    image: img4,
    description:
      "When speed is non-negotiable, we fly your cargo safely and fast. Our air freight team ensures imports cleared in 48 hours and exports in just 24 hours.",
    features: [
      "Express Air Cargo Handling",
      "Global Network of Airlines",
      "24–48 Hour Clearance & Delivery",
      "Secure Handling for Fragile/High-Value Goods",
      "Custom Air Solutions for Urgent Shipments",
    ],
  },
  project: {
    title: "Project Cargo Handling",
    image: img5,
    description:
      "From heavy lifts to complex routes, we manage large-scale cargo projects with precision. No matter the size, we make it possible — safely and on time.",
    features: [
      "Oversized & Heavy Lift Cargo Solutions",
      "Route Planning & Feasibility Studies",
      "Special Equipment (Cranes, Low Loaders, Forklifts)",
      "Risk Management & Safety First",
      "Tailored Solutions for Oil, Gas & Construction Projects",
    ],
  },
  vehicle: {
    title: "Motor Vehicle Handling",
    image: img6,
    description:
      "Drive your imports home hassle-free. We handle vehicle clearance, transport, and inspections — ensuring your cars arrive safely and ready to roll.",
    features: [
      "Vehicle Clearance at Port & Border Points",
      "Secure Transport Inland",
      "Pre-Delivery Vehicle Inspection",
      "Fleet Importation Support",
    ],
  },
  cargo: {
    title: "Conventional Cargo Handling",
    image: img7,
    description:
      "Bulk or breakbulk, we’ve got it covered. Our team ensures safe handling, secure storage, and efficient delivery of your conventional cargo.",
    features: [
      "Bulk & General Cargo Handling",
      "Secure Storage Facilities",
      "Inventory Management Systems",
      "On-Site Cargo Quality Checks",
      "Flexible Solutions for All Cargo Types",
    ],
  },
  consultancy: {
    title: "Import & Export Consultancy",
    image: img8,
    description:
      "Trade smarter, not harder. Our advisory team helps you navigate compliance, reduce costs, and unlock new markets with confidence.",
    features: [
      "International Trade Compliance Guidance",
      "Market Entry & Analysis",
      "Duty & Tax Optimization",
      "Risk Assessment & Mitigation",
      "Custom Logistics Planning",
    ],
  },
};


type ServiceKey = keyof typeof services;

// ✅ FAQ data
const faqs = [
  {
    q: "Do you handle Less than Container Load (LCL) shipments?",
    a: "No — we only handle Full Container Load (FCL) shipments. This ensures faster handling, reduced risk, and secure delivery of goods.",
  },
  {
    q: "How long does shipping usually take?",
    a: "Transit times depend on the origin and destination. On average, sea freight to Mombasa takes 25–40 days depending on the port of loading, while inland delivery across East Africa can take an additional 2–7 days.",
  },
  {
    q: "Can you arrange cargo insurance?",
    a: "Yes, we assist clients in arranging cargo insurance to protect goods against risks such as loss, theft, or damage during transit.",
  },
  {
    q: "Which countries do you serve?",
    a: "We serve Kenya, Uganda, Tanzania, Rwanda, and South Sudan — offering seamless customs clearance and freight forwarding across East Africa.",
  },
];

const ServicesDetails = () => {
  const { id } = useParams<{ id: ServiceKey }>();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const service = id && services[id] ? services[id] : services["customs"];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        title={`${service.title} | Pamu Services`}
        description={service.description}
        keywords={`${service.title}, logistics Kenya, freight forwarding East Africa, customs clearance, transport services, supply chain partner`}
        url={`https://pamuservices.co.ke/services/${id}`}
        image={logo}
      />

     <Hero/>

      {/* Content */}
      <section className="py-16 w-full px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <aside className="bg-white shadow rounded-lg p-6 lg:col-span-1 h-fit">
            <h2 className="text-lg font-semibold mb-4">Our Services</h2>
            <ul className="space-y-2">
              {(Object.keys(services) as ServiceKey[]).map((key) => (
                <li key={key}>
                  <Link
                    to={`/services/${key}`}
                    className={`block w-full px-3 py-2 rounded-md transition ${
                      id === key
                        ? "bg-primary text-white"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    {services[key].title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow mb-8"
            />
            <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
            <p className="mb-4 text-gray-700 text-lg leading-relaxed">{service.description}</p>
            <ul className="mt-6 space-y-3">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 mt-1" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* FAQ */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="border rounded-lg bg-white shadow-sm">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="flex justify-between items-center w-full px-4 py-3 text-left font-medium text-gray-800"
                    >
                      {faq.q}
                      {openFaq === i ? (
                        <ChevronUp className="w-5 h-5 text-primary" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </button>
                    {openFaq === i && (
                      <div className="px-4 pb-4 text-gray-600">{faq.a}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesDetails;
