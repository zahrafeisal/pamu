import { Clock, Globe, Users } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support to keep your cargo moving."
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Extensive partnerships across East Africa and worldwide."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Professionals with deep knowledge of logistics and customs."
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-dark to-brand-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Choose Pamu Services?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="h-8 w-8 text-brand-sky" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-brand-sky">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
