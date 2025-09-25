import shipImg from "@/assets/images/ship.png";
import "@/styles/experience.css";

export default function Experience() {
  return (
    <div className="experience-outer">
      <section className="experience-ship-section">
        <div className="experience-content">
          {/* Left Content */}
          <div className="experience-left">
            <h4 className="experience-subtitle">Our experience</h4>
            <h1 className="experience-title">
              Connecting Borders <br />
              Delivering &amp; Opportunities
            </h1>

            <div className="experience-features">
              <ul className="experience-list">
                <li>
                  <span className="icon"></span>
                  Licensed Customs Clearance
                </li>
                <li>
                  <span className="icon"></span>
                  Multi-Modal Freight Forwarding
                </li>
                <li>
                  <span className="icon"></span>
                  Professional consultancy for imports &amp; exports
                </li>
              </ul>
              <ul className="experience-list">
                <li>
                  <span className="icon"></span>
                  On-Time Delivery
                </li>
                <li>
                  <span className="icon"></span>
                  Transparent and cost-effective services
                </li>
                <li>
                  <span className="icon"></span>
                  Trusted partner across East Africa
                </li>
              </ul>
            </div>
          </div>

          {/* Middle Ship Image */}
          <div className="experience-ship-wrapper">
            <img src={shipImg} alt="Ship" className="ship-image" />
          </div>

          {/* Right Counters */}
          <div className="experience-right">
            <div className="counter-box">
              <h3 className="counter-value">25k+</h3>
              <p className="counter-text">
                Successful Import &amp; Export Clearances Completed
              </p>
            </div>
            <div className="counter-box">
              <h3 className="counter-value">5+</h3>
              <p className="counter-text">
                Countries served: Kenya, Uganda, Tanzania, Rwanda &amp; South Sudan
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
