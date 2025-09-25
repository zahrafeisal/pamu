import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import client1 from "@/assets/images/clients/client1.png";
import client2 from "@/assets/images/clients/client2.png";
import client3 from "@/assets/images/clients/client3.png";
import client4 from "@/assets/images/clients/client4.png";
import client6 from "@/assets/images/clients/client6.png";
import client7 from "@/assets/images/clients/client7.png";
import bgImage from "@/assets/images/bg_3.jpg";

const ClientsSection: React.FC = () => {
  const clientLogos = [
    { id: 1, src: client1, alt: "Client 1" },
    { id: 2, src: client2, alt: "Client 2" },
    { id: 3, src: client3, alt: "Client 3" },
    { id: 4, src: client4, alt: "Client 4" },
    { id: 6, src: client6, alt: "Client 6" },
    { id: 7, src: client7, alt: "Client 7" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000, // wait 2s before sliding again
    speed: 600, // slide transition speed
    slidesToShow: 6,
    slidesToScroll: 1, // <– slides 1 logo at a time
    arrows: false,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1400, settings: { slidesToShow: 5 } },
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      className="py-14 bg-fixed bg-center bg-cover relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          <span className="block text-gray-200 text-lg mb-2">SOME OF OUR</span>
          Clients
        </h1>

        <Slider {...settings}>
          {clientLogos.map((client) => (
            <div key={client.id} className="px-0">
              <div className="bg-white shadow flex items-center justify-center h-20 w-40 mx-auto">
                <img
                  src={client.src}
                  alt={client.alt}
                  className="max-h-16 max-w-[120px] object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ClientsSection;
