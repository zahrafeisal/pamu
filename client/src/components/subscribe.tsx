import React, { useState } from "react";
import { subscribeNewsletter } from "@/api"; 

const Subscribe: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      if (!email) {
        setError("Please enter a valid email address.");
        setLoading(false);
        return;
      }

      const res = await subscribeNewsletter(email);
      setSuccess(res.message || "🎉 Subscribed successfully!");
      setEmail(""); // reset field
    } catch (err: any) {
      const errMsg =
        err?.error ||
        err?.message ||
        (err?.response?.data && err.response.data.message) ||
        "Subscription failed";
      setError(errMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-white text-black pt-8 pb-4 rounded-t-3xl">
      {/* ⬅️ More padding top (pt-8) and less padding bottom (pb-4) */}
      <div className="max-w-7xl mx-auto px-12">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-6">
          {/* Left Section */}
          <div className="text-center xl:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
              Subscribe for latest <br /> updates & insights
            </h2>
          </div>

          {/* Right Section */}
          <form onSubmit={handleSubmit} className="w-full xl:w-auto">
            <div className="flex items-stretch bg-gray-100 rounded-3xl p-2 shadow-sm">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email Address"
                className="flex-1 px-4 py-2 text-gray-700 text-sm focus:outline-none rounded-l-3xl bg-transparent"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-black hover:bg-gray-900 text-white font-medium rounded-r-3xl transition disabled:opacity-50"
              >
                {loading ? "Subscribing..." : "Subscribe Now"}
              </button>
            </div>

            {/* Feedback */}
            {success && <p className="text-green-600 mt-2">{success}</p>}
            {error && <p className="text-red-600 mt-2">{error}</p>}
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Subscribe;
