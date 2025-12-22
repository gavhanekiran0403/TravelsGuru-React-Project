import React from "react";
import "./ContactInformation.css";
import contactImg from "../user/media/Contact.png";

function ContactInformation() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>

      <img
        src={contactImg}
        alt="Contact"
        style={{ width: "300px", margin: "20px auto", display: "block" }}
      />

      <p>Email: walunjabhikt@gmail.com</p>
      <p>Phone: +91 7709900772</p>
    </div>
  );
}

export default ContactInformation;
