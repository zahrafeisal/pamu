import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import hero1 from "@/assets/images/banner_slider.jpg"; // First background image
import hero2 from "@/assets/images/banner_slider_2.jpg"; // Second background image
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSlider: React.FC = () => {
  const slides = [
    {
      image: hero1,
      title: "PAMU SERVICES LIMITED",
      subtitle:
        "Clearing • Forwarding • Transport — Delivering Excellence Across East Africa",
      cta: "/about",
    },
    {
      image: hero2,
      title: "Ready For Any Obstacle",
      subtitle:
        "From freight forwarding to last-mile delivery — we move your business forward with speed and trust.",
      cta: "/services",
    },
  ];

  return (
    <section className="relative h-[95vh] w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        navigation
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-[95vh] w-full flex items-center justify-center text-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Content */}
              <div className="relative z-10 text-white px-4 max-w-4xl">
                {/* Animate title differently for each slide */}
                <motion.h1
                  key={slide.title}
                  initial={{ opacity: 0, y: index === 0 ? 50 : 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  key={slide.subtitle}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
                >
                  {slide.subtitle}
                </motion.p>

                <Button asChild className="bg-primary hover:bg-primary/90 px-8 py-3 text-lg">
                  <Link to={slide.cta}>Read More</Link>
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
          <div className="swiper-pagination-progressbar-fill bg-primary h-1"></div>
        </div>
      </Swiper>
    </section>
  );
};

export default HeroSlider;
