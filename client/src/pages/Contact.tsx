// src/components/Contact.tsx
import React, { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Phone, Mail, MapPin, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactHero from "@/components/ContactHero";
import logo from "@/assets/images/logo_footer.png";

import { createContact } from "@/api";

const offices = [
  {
    city: "Mombasa HQ",
    address: "Mombasa Trade Center, 5th Floor, Nkrumah Road",
    phone: "+254 718 610 546",
    email: "info@pamuservices.co.ke",
  },
  {
    city: "Nairobi",
    address: "Mirage Plaza, 1st Floor, Mombasa Road",
    phone: "+254 723 127 599",
    email: "info@pamuservices.co.ke",
  },
  {
    city: "Juba",
    address: "City Mall, Malakia, Juba, South Sudan",
    phone: "+211 980 387 500",
    email: "pamuservicesltd@gmail.com",
  },
];

const SERVICE_OPTIONS = [
  "Customs Clearances",
  "Sea Freight Import/Export",
  "Transshipment Cargo",
  "Land & Rail Freight",
  "Air Freight",
  "Project Cargo Handling",
  "Motor Vehicle Handling",
  "Import & Export Consultancy",
  "Conventional Cargo Handling",
];

const Contact: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const form = e.currentTarget as HTMLFormElement;
      const fd = new FormData(form);

      const payload = {
        fullName: (fd.get("name") as string) || "",
        email: (fd.get("email") as string) || "",
        service: selectedService || "General Inquiry",
        message: (fd.get("message") as string) || "",
      };

      if (!payload.fullName || !payload.email || !payload.message) {
        setError("Please fill in name, email and message.");
        setLoading(false);
        return;
      }

      await createContact(payload);

      setSuccess("✅ Message sent successfully!");
      form.reset();
      setSelectedService(null);
    } catch (err: any) {
      const errMsg =
        err?.error ||
        err?.message ||
        (err?.response?.data && err.response.data.message) ||
        "Failed to send message";
      setError(errMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Contact Us | Pamu Services"
        description="Contact Pamu Services Limited today for expert logistics, freight forwarding, and customs clearance solutions across East Africa. Our offices in Mombasa, Nairobi, and Juba are ready to assist you."
        keywords="Contact Pamu Services, logistics Kenya, freight forwarding East Africa, customs clearance Nairobi, transport solutions Kenya"
        url="https://pamuservices.co.ke/contact"
        image={logo}
      />

      <ContactHero />

      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Our Offices</h2>
          <div className="space-y-6">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-brand-dark mb-2">
                  {office.city}
                </h3>
                <div className="flex items-center space-x-2 text-gray-600 mb-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>{office.address}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 mb-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href={`tel:${office.phone}`} className="hover:text-primary">
                    {office.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Mail className="h-5 w-5 text-primary" />
                  <a
                    href={`mailto:${office.email}`}
                    className="hover:text-primary"
                  >
                    {office.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Services toggle */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select a Service
              </label>
              <div className="flex flex-wrap gap-3">
                {SERVICE_OPTIONS.map((service) => {
                  const selected = selectedService === service;
                  return (
                    <button
                      key={service}
                      type="button"
                      aria-pressed={selected}
                      className={`px-4 py-2 rounded-lg border text-sm transition ${
                        selected
                          ? "bg-primary text-white border-primary"
                          : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                      }`}
                      onClick={() =>
                        setSelectedService(
                          selectedService === service ? null : service
                        )
                      }
                    >
                      {service}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Message box */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            {/* Submit button + feedback */}
            <div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>

              {success && <p className="text-green-600 mt-3">{success}</p>}
              {error && <p className="text-red-600 mt-3">{error}</p>}
            </div>
          </form>
        </div>
      </section>

      {/* Map Embed */}
      <section className="w-full h-[400px]">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.7899915157213!2d39.66979977526679!3d-4.06318279591056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18401321f95a29df%3A0x7219e5f1e4d405cf!2sMombasa%20Trade%20Centre%20Building!5e0!3m2!1sen!2ske!4v1758727635120!5m2!1sen!2ske"
          loading="lazy"
          className="border-0"
        ></iframe>
      </section>

      {/* Got a Question Section */}
      <section className="relative py-1 bg-gradient-to-b from-black via-black to-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-4 pt-4 pb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
            Got a Question?
          </h2>
          <p className="text-gray-400 text-center mb-4">
            We'd like to talk more about what you need
          </p>

          <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <MapPin className="h-8 w-8 text-primary mx-auto md:mx-0 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p className="text-gray-300 text-sm">
                Mombasa Trade Center, 5th Floor, Nkrumah Road
              </p>
            </div>

            <div className="text-center md:text-left">
              <Mail className="h-8 w-8 text-primary mx-auto md:mx-0 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a
                href="mailto:info@pamuservices.co.ke"
                className="text-gray-300 text-sm hover:text-primary"
              >
                info@pamuservices.co.ke
              </a>
            </div>

            <div className="text-center md:text-left">
              <Phone className="h-8 w-8 text-primary mx-auto md:mx-0 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <a
                href="tel:+254718610546"
                className="text-gray-300 text-sm hover:text-primary"
              >
                +254 718 610 546
              </a>
            </div>

            <div className="text-center md:text-left">
              <User className="h-8 w-8 text-primary mx-auto md:mx-0 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Contact</h3>
              <p className="text-gray-300 text-sm">Customer Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
