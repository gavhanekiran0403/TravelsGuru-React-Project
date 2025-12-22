import React from 'react';
import bookImg from "../media/booking.png";
import "./Books.css";
import BookingForm from "../components/BookingForm";


const Books = () => {
    return ( <
        >
        <
        section className = "booking-wrapper" >
        <
        div className = "booking-header" >
        <
        h1 > Book Your Dream Vacation✈️ < /h1> <
        p > Fill in your travel details— our team will confirm your booking shortly! < /p> <
        hr / >
        <
        /div>

        <
        div className = "booking-container" >
        <
        div className = "booking-image-box" >
        <
        img src = { bookImg }
        alt = "Booking"
        className = "booking-illustration" / >
        <
        /div> <
        BookingForm / >
        <
        /div> <
        /section> <
        />
    );
};

export default Books;