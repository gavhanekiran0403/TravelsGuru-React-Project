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
              alt="Bookings"
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

            <Link to="/books">
              <div className="booking-button-wrapper">
                <button className="booking-btn">Book Now</button>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booksections;
