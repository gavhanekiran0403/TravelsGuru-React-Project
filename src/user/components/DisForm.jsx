import React from "react";
import emailjs from "@emailjs/browser";
import "./DisForm.css";

const DisForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ovl2n1s",
        "template_hgehiwa",
        e.target,
        "QT5ltA7BuoH7IMiRu"
      )
      .then(
        () => alert("Mail sent successfully!"),
        () => alert("An error occurred! Please try again later.")
      );

    e.target.reset();
  };

  return (
    <form
      className="contact-form-section"
      id="contact-form"
      onSubmit={handleSubmit}
    >
      <div className="contact-input-box">
        <h3>Your Name *</h3>
        <input
          type="text"
          name="fullName"
          required
        />
      </div>

      <div className="contact-input-box">
        <h3>Email Address *</h3>
        <input
          type="email"
          className="contact-email"
          placeholder="abc@gmail.com"
          name="email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
      </div>

      <div className="contact-input-box">
        <h3>Contact Number *</h3>
        <input
          type="tel"
          name="contact"
          maxLength="10"
          placeholder="Number"
          required
          pattern="[0-9]{10}"
        />
      </div>

      <div className="contact-input-box">
        <h3>Description *</h3>
        <textarea
          name="info"
          placeholder="Write to us"
          required
        ></textarea>
      </div>

      <div className="contact-submit-wrapper">
        <button
          type="submit"
          className="contact-submit-btn"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default DisForm;
