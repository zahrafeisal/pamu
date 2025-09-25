import { Trophy, Medal, Award, Star } from "lucide-react"; // ✅ import icons
import "@/styles/awards.css";

const awards = [
  {
    icon: Trophy,
    text: "City for the Sustainable Transport Award",
  },
  {
    icon: Medal,
    text: "Top 10 Agency Use Sustainable Material",
  },
  {
    icon: Award,
    text: "The Sustainable Transport Award Committee",
  },
  {
    icon: Star,
    text: "Global Award Site of year 2024",
  },
  {
    icon: Medal,
    text: "Women Professional in Logistics & Transport",
  },
];

const Awards = () => {
  return (
    <section className="awards-section">
      <div className="container">
        <div className="heading text-center">
          <h4 className="subtitle">Awards & Achievements</h4>
          <h2 className="title">Recognitions That Inspire Us</h2>
        </div>

        <div className="awards-grid">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <div key={index} className="award-item">
                <span className="award-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="award-icon">
                  <Icon className="icon" />
                </div>
                <p className="award-text">{award.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Awards;
