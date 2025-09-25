import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import partner1 from "@/assets/images/clients/client1.png"; 
import partner2 from "@/assets/images/clients/client2.png";
import partner3 from "@/assets/images/clients/client3.png";
import partner4 from "@/assets/images/clients/client4.png";
import partner5 from "@/assets/images/clients/client5.png";
import partner6 from "@/assets/images/clients/client6.png";
import partner7 from "@/assets/images/clients/client7.png";


const partners = [partner1, partner2, partner3, partner4, partner5, partner6, partner7];

const PartnersSlider: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-10 text-brand-dark">
          Our Clients
        </h2>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={30}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {partners.map((logo, index) => (
            <SwiperSlide key={index}>
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="h-16 mx-auto object-contain grayscale hover:grayscale-0 transition"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PartnersSlider;
