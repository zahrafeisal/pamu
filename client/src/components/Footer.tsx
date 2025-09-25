import { FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";
import logo from "@/assets/images/logo_footer.png"; // ✅ update with your actual logo path

const FooterWithLogo: React.FC = () => {
  return (
    <footer className="w-full bg-white px-6 py-4">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-0 gap-x-8 text-center md:justify-between">
        {/* ✅ Logo */}
        <img src={logo} alt="Pamu Services Logo" className="w-8" />

        {/* ✅ Navigation Links */}
        <ul className="flex flex-wrap items-center gap-x-6 text-sm">
          <li>
            <a
              href="/about"
              className="font-normal text-gray-700 transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="/services"
              className="font-normal text-gray-700 transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="font-normal text-gray-700 transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      {/* ✅ Divider */}
      <hr className="my-3 border-gray-200" />

      {/* ✅ Copyright */}
      <p className="text-center text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Pamu Services Limited. All rights reserved.
      </p>
            {/* Right: Social Icons */}
      <div className="flex items-center gap-4 text-gray-900 mt-4">
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
    </footer>
  );
};

export default FooterWithLogo;
