import React from "react";
import { Link } from "react-router-dom";
import bookingImg from "../media/booking.png";
import "./Booksection.css";

const Booksections = () => {
  return (
    <div className="booking-container">
      <section className="booking-section" id="booking-section">
        <h1>Book your tickets now!</h1>

        <div className="booking-row">
          <div className="booking-image">
            <img
              src={bookingImg}
              className="booking-image-file"
              alt="Ticket booking illustration"
            />
          </div>

          <div className="booking-content">
            <h2>
              Book Your Tickets
              <hr />
            </h2>

            <p>
              One step away from your trip! What are you waiting for?
            </p>

            <Link to="/books" className="booking-link">
              <button type="button" className="booking-btn">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booksections;
