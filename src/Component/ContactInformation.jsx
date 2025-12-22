import React from 'react'
import { Link } from 'react-router-dom'
import "./ContactInformation.css"
import contact from "../media/Contact.png"


const ContactInformation = () => {
    return ( <
        >
        <
        div className = "contact-container" >
        <
        section className = "contact-section"
        id = "contact" >
        <
        h1 > Get in touch with us. < /h1> <
        div className = "contact-row" >
        <
        div className = "contact-image-wrapper" >
        <
        img src = { contact }
        className = "contact-image"
        alt = "Contact" / >
        <
        /div>

        <
        div className = "contact-box" >
        <
        h2 >
        Contact us <
        hr / >
        <
        /h2> <
        p > Write to us and we will get back to you shortly. < /p> <
        Link to = "/contactpage" >
        <
        div className = "contact-btn-wrapper" >
        <
        button className = "contact-button" > Contact < /button> < /
        div > <
        /Link> < /
        div > <
        /div> < /
        section > <
        /div> < / >

    )
}

export default ContactInformation