import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/Testimonials.css";
import team1 from "@/assets/images/reviewer-02.jpg";
import team2 from "@/assets/images/reviewer-01.jpg";
import team3 from "@/assets/images/reviewer-03.jpg";

const testimonials = [
  {
    img: team1,
    text: "Pamu Services has been an outstanding logistics partner. Their customs clearance process is smooth and always on time.",
    author: "John Mwangi",
    role: "CEO, TradeAfrica Ltd.",
  },
  {
    img: team2,
    text: "Their freight forwarding service is reliable and efficient. We trust Pamu for all our international cargo handling.",
    author: "Sarah Kimani",
    role: "Operations Manager, EastPort",
  },
  {
    img: team3,
    text: "The Pamu team provides excellent support 24/7. They truly go above and beyond to deliver.",
    author: "Michael Otieno",
    role: "Importer, Nairobi",
  },
];

const Testimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div>
      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="heading">
          <h1>
            <span>What Our</span> Customers Saying
          </h1>
        </div>

        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <img src={t.img} alt={t.author} className="client-img" />
              <p>“{t.text}”</p>
              <footer>
                <strong>{t.author}</strong> — {t.role}
              </footer>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default Testimonials;
