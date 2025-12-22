import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import logo from "../media/Blue_Minimalist_Traveling_Logo_-removebg-preview.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="nav-container">
      {/* Logo */}
      <div className="nav-logo">
        <Link to="/" className="nav-logo-link" onClick={closeMenu}>
          <img
            src={logo}
            alt="Tours and Travel logo"
            className="nav-logo-img"
          />
        </Link>
      </div>

      {/* Toggle Button */}
      <button
        type="button"
        className="nav-toggle-btn"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <i
          className={isOpen ? "fa fa-times" : "fa fa-bars"}
          aria-hidden="true"
        />
      </button>

      {/* Navigation Menu */}
      <ul className={`nav-list ${isOpen ? "open" : ""}`}>
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={closeMenu}>
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/books" className="nav-link" onClick={closeMenu}>
            Book
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/holidaypackages"
            className="nav-link"
            onClick={closeMenu}
          >
            Holiday Packages
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/contactpage"
            className="nav-link"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/loginpage"
            className="nav-link"
            onClick={closeMenu}
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
