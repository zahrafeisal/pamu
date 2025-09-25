import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-dark">
          Ready to Streamline Your Logistics?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Get in touch with our experts today and discover how we can optimize your supply chain.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="px-8 py-3 text-lg bg-primary hover:bg-primary/90">
            Request Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Link to="/contact">
            <Button variant="outline" className="px-8 py-3 text-lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
