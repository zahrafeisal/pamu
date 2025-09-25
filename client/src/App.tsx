import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServicesDetails from "./pages/ServicesDetails";
import Contact from "./pages/Contact";
import { HelmetProvider } from "react-helmet-async";
import DefaultSEO from "@/components/DefaultSEO";
import Subscribe from "@/components/subscribe";
import FooterWithLogo from "@/components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <DefaultSEO />

      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Router>
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              {/* ✅ Dynamic route for details */}
              <Route path="/services/:id" element={<ServicesDetails />} />
              {/* ✅ Redirect old /servicesDetails to /services/customs */}
              <Route path="/servicesDetails" element={<Navigate to="/services/customs" replace />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>


            <Subscribe />
            <FooterWithLogo />

            <Toaster />
            <Sonner />
          </Router>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
