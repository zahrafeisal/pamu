export type ServiceKey = 
  | "customs"
  | "sea-freight"
  | "land"
  | "air"
  | "project"
  | "vehicle"
  | "cargo"
  | "consultancy";

export const services: Record<ServiceKey, {
  title: string;
  image: string;
  short: string;   // For Services.tsx overview
  details: string; // For ServicesDetails.tsx
  features: string[];
  seoTitle: string;
  seoDescription: string;
}> = {
  customs: {
    title: "Customs Clearance",
    image: "/assets/images/service-img-01.jpg",
    short: "Expert handling of all customs procedures and documentation for seamless border crossings.",
    details: `Our Customs Clearance service ensures your goods move smoothly across borders with 
expertise in local regulations, compliance, and documentation. We manage the full clearance 
process — import/export paperwork, tariff classification, duty optimization, and compliance 
with customs law.

Backed by decades of experience and strong ties with customs authorities, we deliver faster 
clearances and minimize risks for your cargo. Whether you’re importing vehicles, project cargo, 
or bulk goods, our professional team guarantees efficiency and reliability.`,
    features: ["Import & Export Documentation", "Duty Optimization", "Compliance Management"],
    seoTitle: "Customs Clearance Services | Pamu Services",
    seoDescription: "Expert customs clearance in Kenya & East Africa. Import/export documentation, duty optimization & compliance for fast clearance.",
  },
  "sea-freight": {
    title: "Sea Freight Import/Export",
    image: "/assets/images/service-img-02.jpg",
    short: "Efficient sea freight services with global coverage for both imports and exports.",
    details: `Our Sea Freight solutions cover both import and export cargo, offering clients a reliable 
and cost-efficient way of moving goods internationally. With Full Container Load (FCL) only, 
we guarantee security, speed, and predictability for your supply chain.

From port handling to inland transport across East Africa, we provide an end-to-end solution 
that reduces lead times and costs. Our partnerships with global shipping lines ensure 
competitive rates and guaranteed space during peak seasons.`,
    features: ["Full Container Load Only", "Global Network", "Port-to-Door Delivery"],
    seoTitle: "Sea Freight Import & Export | Pamu Services",
    seoDescription: "Reliable sea freight in East Africa. Full container load shipping with global network, port handling, and inland delivery.",
  },
  land: {
    title: "Land Freight",
    image: "/assets/images/service-img-03.jpg",
    short: "Reliable road and rail freight services across East Africa.",
    details: `We specialize in cross-border transport across Kenya, Uganda, Tanzania, Rwanda, and South Sudan. 
With a modern fleet and trusted partner network, we ensure your goods arrive safely and on time.

Our Land Freight services include container haulage, bulk transport, and project cargo handling 
with real-time tracking systems. We understand the unique challenges of East African trade 
corridors and provide solutions that balance speed, safety, and cost.`,
    features: ["Cross-border Transport", "Modern Fleet", "Real-time Tracking"],
    seoTitle: "Land & Rail Freight Solutions | Pamu Services",
    seoDescription: "Trusted land freight in East Africa. Cross-border transport with modern fleet, secure delivery, and tracking.",
  },
  air: {
    title: "Air Freight",
    image: "/assets/images/service-img-04.jpg",
    short: "Fast and secure air freight solutions for urgent shipments.",
    details: `Our Air Freight solutions are designed for speed and reliability. We manage urgent shipments 
and high-value cargo with strict compliance to global standards. 

Whether it’s perishable goods, pharmaceuticals, or machinery, we provide express handling, 
customs clearance, and door-to-door delivery. Our global partnerships with leading airlines 
ensure efficiency at every step.`,
    features: ["Express Shipping", "Global Coverage", "Cargo Handling Expertise"],
    seoTitle: "Air Freight Services | Pamu Services",
    seoDescription: "Fast, secure air freight services worldwide. Express solutions for urgent and high-value cargo.",
  },
  project: {
    title: "Project Cargo Handling",
    image: "/assets/images/service-img-05.jpg",
    short: "Specialized handling for large-scale and complex cargo projects.",
    details: `Our Project Cargo services cover oversized and heavy cargo requiring tailored logistics 
solutions. From engineering equipment to energy infrastructure, we handle route planning, 
heavy lifting, permits, and escorts. 

We work closely with government authorities and local agencies to ensure safe and efficient 
transport of project cargo throughout East Africa.`,
    features: ["Heavy Lift", "Route Planning", "Risk Management"],
    seoTitle: "Project Cargo Handling | Pamu Services",
    seoDescription: "Oversized cargo handling with route planning, permits & risk management.",
  },
  vehicle: {
    title: "Motor Vehicle Handling",
    image: "/assets/images/service-img-06.jpg",
    short: "Safe and efficient handling of imported and exported vehicles.",
    details: `We provide vehicle clearance, inspection, and secure delivery from port to destination. 
Our team ensures all regulatory requirements are met, minimizing delays and costs. 

Whether you’re an individual importer, dealer, or fleet manager, we guarantee safe handling 
and customs compliance for all types of vehicles.`,
    features: ["Vehicle Clearance", "Secure Transport", "Inspection Services"],
    seoTitle: "Motor Vehicle Handling | Pamu Services",
    seoDescription: "Expert clearance and secure delivery of vehicles across East Africa.",
  },
  cargo: {
    title: "Conventional Cargo Handling",
    image: "/assets/images/service-img-07.jpg",
    short: "Professional handling of bulk and conventional cargo.",
    details: `Our conventional cargo solutions include secure warehousing, inventory management, 
and bulk cargo handling. We manage goods that don’t fit into containers with precision 
and care. 

From steel to agricultural produce, our facilities and staff ensure quality control 
and smooth distribution.`,
    features: ["Secure Storage", "Inventory Management", "Quality Control"],
    seoTitle: "Conventional Cargo Handling | Pamu Services",
    seoDescription: "Bulk & conventional cargo handling with secure storage & quality control.",
  },
  consultancy: {
    title: "Import & Export Consultancy",
    image: "/assets/images/service-img-08.jpg",
    short: "Expert advisory services for international trade compliance and optimization.",
    details: `Our consultancy services help businesses navigate the complex world of international trade. 
We advise on tariff structures, compliance, market entry, and risk management. 

With decades of expertise, we empower businesses to cut costs, avoid penalties, and expand 
successfully into East African and global markets.`,
    features: ["Trade Compliance", "Market Analysis", "Risk Assessment"],
    seoTitle: "Import & Export Consultancy | Pamu Services",
    seoDescription: "Trusted consultancy for imports & exports. Compliance, market analysis, and risk management solutions.",
  },
};
