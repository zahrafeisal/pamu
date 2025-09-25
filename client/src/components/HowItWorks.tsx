import { useState } from "react";
import step1Img from "@/assets/images/service-img-08.jpg";
import step2Img from "@/assets/images/static-box-02.png";
import step3Img from "@/assets/images/static-box-03.jpg";
import step4Img from "@/assets/images/static-box-04.jpg";

const steps = [
  { 
    id: 1, 
    number: "01", 
    title: "Shipment Booking & Documentation", 
    desc: "We gather shipment details, prepare all customs and compliance paperwork, and coordinate with all relevant stakeholders to ensure a seamless shipment process. Our dedicated documentation team minimizes errors, reduces delays, and provides detailed tracking updates, helping you save time and avoid unexpected costs while ensuring full regulatory compliance.", 
    img: step1Img 
  },
  { 
    id: 2, 
    number: "02", 
    title: "Customs Clearance", 
    desc: "Our licensed customs experts liaise directly with authorities to expedite clearance while adhering to all local and international regulations. We manage all permits, tariffs, and inspections, ensuring your goods move quickly and smoothly. This proactive approach reduces risk of hold-ups and ensures your supply chain operates efficiently.", 
    img: step2Img 
  },
  { 
    id: 3, 
    number: "03", 
    title: "Freight Forwarding", 
    desc: "We coordinate multi-modal transport — air, sea, and land — to move your cargo securely from origin to destination. With a strong network of trusted partners, we optimize routes, reduce shipping costs, and maintain real-time visibility of your shipment. Our solutions are tailored to meet your business needs, ensuring reliability, speed, and efficiency.", 
    img: step3Img 
  },
  { 
    id: 4, 
    number: "04", 
    title: "Final Handover", 
    desc: "Your cargo is delivered safely to its final destination with full support at every step. We handle last-mile logistics, provide proof of delivery, and offer post-delivery assistance if needed. Our goal is to provide a worry-free shipping experience so you can focus on growing your business while we manage the complexities of logistics.", 
    img: step4Img 
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="w-full py-20 bg-[#f1f5f9]">
      <div className="px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-700 text-base md:text-lg font-semibold uppercase tracking-wider mb-3">
            How it works
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#1e2a5e] leading-tight">
            Streamlined logistics solutions <br /> for your business
          </h2>
        </div>

        {/* Steps */}
        <div className="flex bg-gray-100 rounded-3xl p-4 gap-3 h-[480px] w-full">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`cursor-pointer flex relative overflow-hidden rounded-2xl shadow-lg transition-all duration-700 ease-in-out [will-change:flex] ${
                activeStep === step.id ? "flex-[6]" : "flex-[0.8]"
              }`}
              onMouseEnter={() => setActiveStep(step.id)}
            >
              {/* Collapsed */}
              {activeStep !== step.id && (
                <div className="w-full h-full flex flex-col items-center justify-between py-6 bg-white rounded-2xl shadow-inner">
                  <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-lg font-bold text-[#1e2a5e]">{step.number}</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-[#1e2a5e] [writing-mode:vertical-rl] rotate-180 whitespace-nowrap">
                    {step.title}
                  </h3>
                </div>
              )}

              {/* Expanded */}
              {activeStep === step.id && (
                <div className="flex w-full animate-fadeIn bg-white rounded-2xl shadow-lg overflow-hidden">
                  {/* Image */}
                  <div className="w-[45%] h-full transition-all duration-700 ease-in-out">
                    <img
                      src={step.img}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="w-[55%] flex flex-col relative p-8 transition-all duration-700 ease-in-out justify-center items-start">
                    {/* Number in top-right */}
                    <div className="absolute top-5 right-5 w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-lg font-bold text-[#1e2a5e]">{step.number}</span>
                    </div>

                    {/* Centered heading + desc */}
                    <div className="flex flex-col justify-center h-full text-left">
                      <h3 className="text-3xl md:text-4xl font-extrabold text-[#1e2a5e] mb-6 text-center md:text-left">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-base md:text-lg leading-relaxed text-justify">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
