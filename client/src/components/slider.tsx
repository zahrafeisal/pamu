import React, { useEffect, useState } from "react";
import banner1 from "@/assets/images/banner_slider.jpg";
import banner2 from "@/assets/images/banner_slider_2.jpg";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: banner1,
    title: "PAMU SERVICES LIMITED",
    subtitle: "From Pickup to Destination",
    description: "Reliable Logistics & Transport Solutions Across Kenya",
    button: "Learn More",
  },
  {
    id: 2,
    image: banner2,
    title: "Ready For Any Obstacle",
    subtitle: "From freight forwarding to last-mile delivery",
    description: "We move your business forward with speed and trust",
    button: "Read More",
  },
];

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hovered, setHovered] = useState(false);

  // Auto slide every 10s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Alternate Ken Burns effect
  const isZoomIn = currentSlide % 2 === 0;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-white group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[currentSlide].id}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Ken Burns effect */}
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            initial={{ scale: isZoomIn ? 1 : 1.2 }}
            animate={{ scale: isZoomIn ? 1.2 : 1 }}
            transition={{ duration: 10, ease: "linear" }}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Text content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <motion.h1
              className="text-4xl md:text-6xl font-bold"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.p
              className="mt-4 text-lg md:text-2xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {slides[currentSlide].subtitle}
            </motion.p>
            <motion.p
              className="mt-2 text-sm md:text-lg max-w-2xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {slides[currentSlide].description}
            </motion.p>
            <motion.button
              className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 transition rounded-lg shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              {slides[currentSlide].button}
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons - fade in/out on hover */}
      <AnimatePresence>
        {hovered && (
          <>
            <motion.button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full hover:bg-black/70 transition z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              &#10094;
            </motion.button>
            <motion.button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full hover:bg-black/70 transition z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              &#10095;
            </motion.button>
          </>
        )}
      </AnimatePresence>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          key={currentSlide}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 10, ease: "linear" }}
          className="h-2 bg-gray-500 rounded-full"
        />
      </div>
    </section>
  );
};

export default Slider;
