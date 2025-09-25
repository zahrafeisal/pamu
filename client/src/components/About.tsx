import React from "react";
import aboutImage from "@/assets/images/about-01.jpg";
import freightBg from "@/assets/images/blog_img_10.jpg"; // replace with your actual freight image

const AboutUs: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="block text-gray-500 text-sm uppercase tracking-wide mb-2">
              Who We Are
            </span>
            <span className="text-[#c62828]">About Us</span>
          </h1>
        </div>

        {/* Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Side */}
          <div className="lg:col-span-8">
            <div className="bg-[#f0f6fa] h-full p-6 flex items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                {/* Image */}
                <div className="order-1 sm:order-1">
                  <img
                    src={aboutImage}
                    alt="About Pamu Services"
                    className="w-full h-auto object-contain"
                  />
                </div>
                {/* Text */}
                <div className="order-2 sm:order-2 relative">
                  {/* Quote Icon */}
                <div className="text-5xl text-gray-300 absolute -top-6 -left-4">
                    ❝
                  </div>
                  <blockquote className="text-gray-800 text-base md:text-lg leading-relaxed pl-6">
                    <p>
                      Founded in 2004, <strong>Pamu Services Limited</strong> is
                      a trusted logistics partner licensed by the Kenya Revenue
                      Authority. We specialize in customs clearance, freight
                      forwarding, and transport solutions across East Africa.
                      Our mission is to deliver fast, reliable, and
                      cost-effective cargo handling by sea, land, air, and rail
                      — helping businesses trade with confidence.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-4">
            <div
              className="relative h-full overflow-hidden flex items-center justify-center text-center"
              style={{
                backgroundImage: `url(${freightBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>
              {/* Text */}
              <div className="relative z-10 text-white px-6 py-12 text-base md:text-lg leading-relaxed">
                Whether you need freight forwarding, transport, or a complete
                supply chain solution, Pamu is your trusted partner every step
                of the way.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
