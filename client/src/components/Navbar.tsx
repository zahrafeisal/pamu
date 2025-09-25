import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TopBar from "@/components/Topbar";
import { ChevronDown } from "lucide-react";
import logo from "@/assets/images/logo_footer.png";
import FreeQuote from "@/components/FreeQuote"; // 👈 import FreeQuote modal

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false); // mobile menu open
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<boolean>(false);
  const [showQuote, setShowQuote] = useState<boolean>(false); // 👈 controls modal
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <TopBar />

      <nav className="bg-white border-b border-[#0C6088] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo + Text */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img src={logo} alt="Pamu Logo" className="h-10 w-auto" />
              <div>
                <span className="text-xl font-bold uppercase text-[#0C6088]">
                  PAMU SERVICES LIMITED
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8 relative">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors duration-300 hover:text-[#0C6088] ${
                  isActive("/")
                    ? "text-[#0C6088] border-b-2 border-[#0C6088] pb-1"
                    : "text-gray-700"
                }`}
              >
                Home
              </Link>

              <Link
                to="/about"
                className={`text-sm font-medium transition-colors duration-300 hover:text-[#0C6088] ${
                  isActive("/about")
                    ? "text-[#0C6088] border-b-2 border-[#0C6088] pb-1"
                    : "text-gray-700"
                }`}
              >
                About Us
              </Link>

              {/* Services Dropdown Desktop */}
              <div className="relative group">
                <div
                  className={`flex items-center gap-1 cursor-pointer text-sm font-medium 
                    ${
                      location.pathname.startsWith("/services")
                        ? "text-[#0C6088] border-b-2 border-[#0C6088] pb-1"
                        : "text-gray-700 hover:text-[#0C6088]"
                    }`}
                >
                  <span>Services</span>
                  <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                </div>

                <div
                  className="absolute left-0 mt-2 w-56 bg-white border border-[#0C6088]/30 rounded-md shadow-lg z-50 
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                >
                  <Link
                    to="/services"
                    className={`block px-4 py-2 text-sm hover:bg-[#0C6088]/10 hover:text-[#0C6088] ${
                      isActive("/services")
                        ? "font-semibold text-[#0C6088]"
                        : "text-gray-700"
                    }`}
                  >
                    Services
                  </Link>
                  <Link
                    to="/servicesdetails"
                    className={`block px-4 py-2 text-sm hover:bg-[#0C6088]/10 hover:text-[#0C6088] ${
                      isActive("/servicesdetails")
                        ? "font-semibold text-[#0C6088]"
                        : "text-gray-700"
                    }`}
                  >
                    Services Details
                  </Link>
                </div>
              </div>

              <Link
                to="/contact"
                className={`text-sm font-medium transition-colors duration-300 hover:text-[#0C6088] ${
                  isActive("/contact")
                    ? "text-[#0C6088] border-b-2 border-[#0C6088] pb-1"
                    : "text-gray-700"
                }`}
              >
                Contact
              </Link>

              {/* Request Quote Button */}
              <Button
                onClick={() => setShowQuote(true)} // 👈 open modal
                className="bg-[#0C6088] hover:bg-[#0C6088]/90 text-white shadow-md hover:shadow-lg transition-all duration-300"
              >
                Request Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-[#0C6088] transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Nav */}
          {isOpen && (
            <div className="md:hidden border-t border-[#0C6088]">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-[#0C6088]/5">
                <Link
                  to="/"
                  className="block px-3 py-2 text-base text-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block px-3 py-2 text-base text-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>

                {/* Mobile Dropdown */}
                <div className="px-3">
                  <button
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    className="flex w-full items-center justify-between text-gray-700 font-medium hover:text-[#0C6088]"
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        mobileDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileDropdownOpen && (
                    <div className="ml-4 mt-2 bg-[#0C6088]/5 rounded-md">
                      <Link
                        to="/services"
                        className="block px-3 py-2 text-gray-700"
                        onClick={() => setIsOpen(false)}
                      >
                        Services
                      </Link>
                      <Link
                        to="/servicesdetails"
                        className="block px-3 py-2 text-gray-700"
                        onClick={() => setIsOpen(false)}
                      >
                        Services Details
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  to="/contact"
                  className="block px-3 py-2 text-base text-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>

                {/* Mobile Request Quote */}
                <div className="px-3 py-2">
                  <Button
                    onClick={() => {
                      setShowQuote(true);
                      setIsOpen(false);
                    }}
                    className="w-full bg-[#0C6088] hover:bg-[#0C6088]/90 text-white"
                  >
                    Request Quote
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Quote Modal */}
      {showQuote && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-3xl p-6 rounded-lg shadow-lg relative">
            <button
              onClick={() => setShowQuote(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-xl"
            >
              ✕
            </button>
            <FreeQuote variant="modal" /> {/* 👈 modal layout */}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
