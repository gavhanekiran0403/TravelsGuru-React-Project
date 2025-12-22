import { Link } from "react-router-dom";
import Booksections from "../components/Booksections";
import Packages from "../components/Packages";
import ContactInformation from "../components/ContactInformation";

import bgVideo from "../media/bg video.mp4";
import "./Homes.css";

const Homes = () => {
  return (
    <div className="home-container">
      <section className="home-section" id="home">
        <div className="home-content">
          <h3>
            Begin your{" "}
            <span className="highlight-text">Adventures</span> Tours with us
          </h3>

          <p>
            Explore the world with us for the best travel experience
          </p>

          <Link className="home-btn-link" to="/books">
            <button type="button" className="home-explore-btn">
              Book Now
            </button>
          </Link>
        </div>

        {/* Background Video */}
        <div className="home-video-container">
          <video
            className="home-video"
            src={bgVideo} 
            autoPlay
            loop
            muted
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Contact Info Bar */}
        <div className="home-info">
          <div className="info-item info-mail">
            <i className="fas fa-envelope info-icon" aria-hidden="true"></i>
            <p>
              <a href="mailto:walunjabhikt@gmail.com">
                walunjabhikt@gmail.com
              </a>
            </p>
          </div>

          <div className="info-item info-social">
            <i className="fab fa-instagram info-icon" aria-hidden="true"></i>
            <p>Tours & Travels</p>
          </div>

          <div className="info-item info-call">
            <i className="fas fa-phone-alt info-icon" aria-hidden="true"></i>
            <p>
              <a href="tel:7709900772">+91 - 7709900772</a>
            </p>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <Booksections />
      <Packages />
      <ContactInformation />
    </div>
  );
};

export default Homes;
