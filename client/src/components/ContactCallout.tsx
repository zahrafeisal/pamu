import React from "react";
import { Clock, Phone, Mail } from "lucide-react";

const ContactCallout: React.FC = () => {
  return (
    <section className="w-full bg-[#004c80] py-16 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Opening Hours */}
          <div className="flex items-start space-x-4">
            <Clock className="w-10 h-10 text-[#c62828]" />
            <div>
              <h5 className="text-lg font-semibold uppercase tracking-wide">
                Opening Hours
              </h5>
              <p className="mt-2 text-gray-200">
                Monday - Friday: 09.00 - 18.00 <br />
                Saturday: 09.00 - 14.00
              </p>
            </div>
          </div>

          {/* Call Us */}
          <div className="flex items-start space-x-4">
            <Phone className="w-10 h-10 text-[#c62828]" />
            <div>
              <h5 className="text-lg font-semibold uppercase tracking-wide">
                Call Us Anytime
              </h5>
              <p className="mt-2 text-gray-200">
                +254 (0) 795 065 062 <br />
                +254 (0) 740 329 273
              </p>
            </div>
          </div>

          {/* Email Us */}
          <div className="flex items-start space-x-4">
            <Mail className="w-10 h-10 text-[#c62828]" />
            <div>
              <h5 className="text-lg font-semibold uppercase tracking-wide">
                Email Us
              </h5>
              <p className="mt-2">
                <a
                  href="mailto:info@pamuservices.co.ke"
                  className="text-gray-200 hover:text-white transition"
                >
                  info@pamuservices.co.ke
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCallout;
