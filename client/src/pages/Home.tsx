import SEOHead from "@/components/SEOHead";
import Slider from "@/components/slider";
import ContactCallout from "@/components/ContactCallout";
import Services from "@/components/Services";
import WhatMakesUsSpecial from "@/components/WhatMakesUsSpecial";
import Stats from "@/components/Stats";
import About from "@/components/About";
import FreeQuote from "@/components/FreeQuote";
import Testimonials from "@/components/Testimonials";
import Client from "@/components/Clients";
import Map from "@/components/map";
import logo from "@/assets/images/logo_footer.png";


export default function HomePage() {
  return (
    <div>
      <SEOHead
        title="Home | Pamu Services Limited"
        description="Pamu Services Limited is a trusted logistics and freight forwarding partner in East Africa. We provide customs clearance, sea & air freight, land transport, and supply chain solutions with on-time delivery."
        keywords="Pamu Services, logistics Kenya, freight forwarding East Africa, customs clearance, transport services, supply chain solutions, warehousing, cargo handling"
        url="https://pamuservices.co.ke"
        image={logo}  
      />
      <Slider />
      <ContactCallout />
      <Services />
      <WhatMakesUsSpecial />
      <Stats />
      <About />
      <FreeQuote />
      <Testimonials />
      <Client />
      <Map />
    </div>
  );
}
