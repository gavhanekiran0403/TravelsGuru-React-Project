import React from 'react';
import "./ContactPage.css";
import DisForm from "../components/DisForm";

import contactbg from "../media/contactus.png";

const ContactPage = () => {
    return ( <
        >
        <
        section className = "contact-section"
        id = "contact" >
        <
        h2 >
        Contact us
        for ticket bookings <
        hr / >
        <
        /h2>

        <
        div className = "contact-row" >
        <
        div className = "contact-image-container" >
        <
        img src = { contactbg }
        className = "contact-image"
        alt = "contact" / >
        <
        /div> <
        DisForm / >
        <
        /div> < /
        section >

        <
        hr id = "divider-line" / >

        <
        div className = "contact-info-container" >
        <
        div className = "contact-info-box" >
        <
        i className = "fas fa-phone" > < /i> +91-7709900772 < /
        div > <
        div className = "contact-info-box" >
        <
        i className = "fas fa-briefcase" > < /i> 7709900772 < /
        div > <
        div className = "contact-info-box" >
        <
        i className = "fas fa-envelope" > < /i> walunjabhiket@gmail.com < /
        div > <
        /div> < /
        >
    );
};

export default ContactPage;