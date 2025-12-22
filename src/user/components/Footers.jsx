import React from "react";
import { Link } from "react-router-dom";
import "./Footers.css";

const Footers = () => {
  return (
    <>
      <footer className="travel-footer">
        {/* Top Section */}
        <div className="footer-grid">
          {/* About */}
          <div className="footer-box">
            <h2 className="footer-title">🌍 About Us</h2>
            <p>
              We turn travel dreams into reality—offering worldwide tours,
              customized trips and unforgettable holiday experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-box">
            <h2 className="footer-title">⛱ Quick Links</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/books">Book</Link>
              </li>
              <li>
                <Link to="/holidaypackages">Holiday Packages</Link>
              </li>
              <li>
                <Link to="/contactpage">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-box">
            <h2 className="footer-title">📍 Help & Support</h2>
            <ul>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/terms">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/cancellation">Cancellation Policy</Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="footer-box">
            <h2 className="footer-title">⭐ Connect With Us</h2>
            <div className="social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copy */}
        <hr />
        <p className="footer-bottom">
          © Tours 2022–23 | All Rights Reserved
        </p>
      </footer>
    </>
  );
};

export default Footers;
