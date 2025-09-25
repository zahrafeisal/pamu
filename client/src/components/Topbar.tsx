import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";

const TopBar: React.FC = () => {
  return (
    <div className="w-full bg-[#F8FAFC] text-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
        {/* Left: Email + Address + Phone */}
        <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm">
          {/* Email */}
          <a
            href="mailto:info@pamuservices.co.ke"
            className="flex items-center gap-2 text-gray-900 hover:text-[#0C6088]"
          >
            <Mail size={16} className="text-[#0C6088]" />
            <span>info@pamuservices.co.ke</span>
          </a>

          {/* Address with Google Maps link */}
          <a
            href="https://www.google.com/maps?q=Mombasa+Trade+Center,+5th+Floor,+Nkrumah+Road,+Mombasa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-900 hover:text-[#0C6088]"
          >
            <MapPin size={16} className="text-[#0C6088]" />
            <span>Mombasa Trade Center, 5th Floor, Nkrumah Road</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+254718610546"
            className="flex items-center gap-2 text-gray-900 hover:text-[#0C6088]"
          >
            <Phone size={16} className="text-[#0C6088]" />
            <span>+254 718 610 546</span>
          </a>
        </div>


        {/* Right: Social Icons */}
        <div className="flex items-center gap-4 text-gray-900">
          <a href="#" className="hover:text-[#0C6088]">
            <FaFacebookF className="h-4 w-4" />
          </a>
          <a href="#" className="hover:text-[#0C6088]">
            <FaXTwitter className="h-4 w-4" />
          </a>
          <a href="#" className="hover:text-[#0C6088]">
            <FaLinkedinIn className="h-4 w-4" />
          </a>
          <a href="#" className="hover:text-[#0C6088]">
            <FaInstagram className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
