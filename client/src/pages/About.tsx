import SEOHead from "@/components/SEOHead";
import AboutHero from "@/components/AboutHero";
import CompanyOverview from "@/components/CompanyOverview";
import ServiceMarquee from "@/components/ServicesMarquee";
import HowItWorks from "@/components/HowItWorks";
import Experience from "@/components/Experience";
import logo from "@/assets/images/logo_footer.png";

export default function AboutPage() {
  return (
    <div>
      <SEOHead 
        title="About Us | Pamu Services"
        description="Discover the story of Pamu Services Limited, a leading logistics partner in East Africa. From licensed customs clearance to multimodal freight forwarding, we deliver seamless, cost-effective transport and supply chain solutions."
        keywords="About Pamu Services, logistics Kenya, freight forwarding East Africa, customs clearance, supply chain solutions, transport services"
        url="https://pamuservices.co.ke/about"
        image={logo}  // ✅ Uses imported image
      />
      <AboutHero />
      <CompanyOverview />
      <ServiceMarquee />
      <HowItWorks />    
      <Experience />
    </div>
  );
}
