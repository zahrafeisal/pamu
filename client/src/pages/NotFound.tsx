import SEOHead from "@/components/SEOHead";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import logoFooter from "@/assets/images/logo_footer.png"; // ✅ Import image

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      {/* ✅ SEO metadata */}
      <SEOHead
        title="404 Page Not Found | Pamu Services"
        description="Oops! The page you're looking for does not exist on Pamu Services. Return to the homepage for logistics, freight forwarding, and customs clearance solutions."
        keywords="404 not found, Pamu Services, logistics Kenya, freight forwarding, customs clearance"
        url={`https://pamuservices.co.ke${location.pathname}`}
        image={logoFooter} // ✅ imported image used here
      />

      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
        <a href="/" className="text-blue-500 underline hover:text-blue-700">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
