import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./BookingForm.css";

const BookingForm = () => {

    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("isLoggedIn")) {
            navigate("/loginpage");
        }
    }, []);
    const [selectedList, setSelectedList] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const form = useRef();

    const international = [
        "Russia Delight", "Europe Escape", "Dubai Luxury Getaway", "Maldives Island",
        "Sri Lanka Explorer", "Thailand Adventure", "Turkey Heritage Tour", "Australia Highlights"
    ];

    const domestic = [
        "Goa Beach Fun", "Chennai Escape", "Kerala Backwater Retreat", "Kashmir Heaven Tour",
        "Rajasthan Royal Heritage", "Delhi Bliss", "Gujarat Escape", "Uttarakhand Adventure"
    ];

    const handleOnSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_24uj09", "template_e9xf3b", form.current, "wCz72hokb8Sp7cTP")
            .then(
                () => setShowPopup(true),
                () => alert("❌ Error! Unable to send booking request. Please try again.")
            );
        e.target.reset();
    };

    return ( <
            >
            <
            form ref = { form }
            className = "travel-booking-form"
            onSubmit = { handleOnSubmit } >

            <
            div className = "input-box" >
            <
            label > Your Name * < /label> <
            input type = "text"
            name = "name"
            placeholder = "Full Name"
            required / >
            <
            /div>

            <
            div className = "input-box" >
            <
            label > Email Address * < /label> <
            input type = "email"
            name = "email"
            placeholder = "abc@gmail.com"
            required / >
            <
            /div>

            <
            div className = "input-box" >
            <
            label > Contact Number * < /label> <
            input type = "tel"
            name = "contact"
            maxLength = "10"
            placeholder = "1234567890"
            required / >
            <
            /div>

            <
            div className = "destination-btn-box" >
            <
            button type = "button"
            className = "dest-btn"
            onClick = {
                () => setSelectedList(international)
            } > International Packages < /button> <
            button type = "button"
            className = "dest-btn"
            onClick = {
                () => setSelectedList(domestic)
            } > Domestic Packages < /button> < /
            div >

            <
            div className = "input-box" >
            <
            label > Select Destination * < /label> <
            select name = "destination"
            required >
            <
            option value = "" > --Choose Destination-- < /option> {
            selectedList.map((pkg, index) => ( <
                option key = { index } > { pkg } < /option>
            ))
        } <
        /select> < /
    div >

        <
        div className = "side-by-side" >
        <
        div className = "input-box" >
        <
        label > Arrival Date * < /label> <
    input type = "date"
    name = "arrival"
    required / >
        <
        /div> <
    div className = "input-box" >
        <
        label > Departure Date * < /label> <
    input type = "date"
    name = "dept"
    required / >
        <
        /div> < /
    div >

        <
        div className = "input-box" >
        <
        label > No.of People * < /label> <
    input type = "number"
    name = "people"
    min = "1"
    max = "20"
    required / >
        <
        /div>

    <
    button className = "booking-submit-btn"
    type = "submit" >
        Confirm Booking <
        /button> < /
    form >

        {
            showPopup && ( <
                div className = "popup-overlay" >
                <
                div className = "popup-box" >
                <
                h2 > 🎉Booking Successful! < /h2> <
                p > Your booking request has been successfully placed. < /p> <
                p > We will contact you shortly on your registered email / mobile number. < /p> <
                button className = "close-popup"
                onClick = {
                    () => setShowPopup(false)
                } > OK < /button> < /
                div > <
                /div>
            )
        } <
        />
);
};

export default BookingForm;