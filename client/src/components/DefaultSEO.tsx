// src/components/DefaultSEO.tsx
import { Helmet } from "react-helmet-async";

const DefaultSEO = () => {
  return (
    <Helmet>
      <title>
        Pamu Services | Logistics, Freight Forwarding & Customs Clearance in East
        Africa
      </title>
      <meta
        name="description"
        content="Pamu Services Limited provides reliable logistics, freight forwarding, transport, and customs clearance solutions across East Africa."
      />
      <meta
        name="keywords"
        content="Pamu Services, logistics Kenya, freight forwarding East Africa, customs clearance Nairobi, transport solutions Kenya, cargo, shipping, warehousing, supply chain"
      />
      <meta property="og:site_name" content="Pamu Services" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="twitter:card" content="summary_large_image" />
      <link rel="canonical" href="https://pamuservices.com" />
    </Helmet>
  );
};

export default DefaultSEO;
