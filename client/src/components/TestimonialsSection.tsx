import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, Users } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Kamau",
      role: "Operations Director",
      content: "We rely on Pamu for both sea and land freight. Their communication is excellent, and deliveries always arrive on time. They've helped us reduce costs and avoid unnecessary delays.",
      rating: 5,
      image: "/assets/images/reviewer-02.jpg"
    },
    {
      id: 2,
      name: "Peter Okello",
      role: "CEO",
      content: "Moving cargo from Mombasa to Uganda used to be stressful. With Pamu, it's hassle-free. Their knowledge of cross-border regulations is outstanding.",
      rating: 4,
      image: "/assets/images/reviewer-03.jpg"
    },
    {
      id: 3,
      name: "Omar Abdi",
      role: "Procurement Officer",
      content: "Pamu Services managed our heavy machinery shipment with professionalism from start to finish. Everything arrived safely, and their team was very supportive throughout the process.",
      rating: 5,
      image: "/assets/images/reviewer-04.jpg"
    },
    {
      id: 4,
      name: "James Mwangi",
      role: "Import Manager",
      content: "Pamu Services Limited made our import process seamless. Their team handled all customs paperwork quickly, and our goods were cleared without any delays. Highly reliable partner!",
      rating: 4,
      image: "/assets/images/reviewer-01.jpg"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-center">
          {/* Left Column - Testimonial Badge */}
          <div className="text-center lg:text-left">
            <div className="w-32 h-32 mx-auto lg:mx-0 mb-6 relative">
              <div className="absolute inset-0 border-4 border-orange-500 rounded-full animate-spin-slow opacity-20"></div>
              <div className="w-full h-full bg-orange-100 rounded-full flex items-center justify-center">
                <Users className="w-12 h-12 text-orange-500" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Testimonial</h3>
            <p className="text-gray-600">Trusted by clients</p>
          </div>

          {/* Right Column - Testimonial Content */}
          <div className="lg:col-span-3">
            <Card className="p-8 shadow-lg">
              <CardContent className="p-0">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex space-x-1">
                    {renderStars(testimonials[currentTestimonial].rating)}
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline"
                      size="sm"
                      onClick={prevTestimonial}
                      className="w-10 h-10 p-0"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <Button 
                      variant="default"
                      size="sm"
                      onClick={nextTestimonial}
                      className="w-10 h-10 p-0 bg-orange-500 hover:bg-orange-600"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
                
                <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pagination dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-orange-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}