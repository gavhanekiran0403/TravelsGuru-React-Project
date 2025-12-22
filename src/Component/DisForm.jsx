import React from "react";
import "./DisForm.css";
import emailjs from "@emailjs/browser";

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

    return ( <
        form className = "contact-form-section"
        id = "contact-form"
        onSubmit = { handleSubmit } >
        <
        div className = "contact-input-box" >
        <
        h3 > Your Name * < /h3> <
        input type = "text"
        required name = "fullName" / >
        <
        /div>

        <
        div className = "contact-input-box" >
        <
        h3 > Email Address * < /h3> <
        input type = "email"
        className = "contact-email"
        placeholder = "abc@gmail.com"
        required pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        name = "email" /
        >
        <
        /div>

        <
        div className = "contact-input-box" >
        <
        h3 > Contact Number * < /h3> <
        input type = "tel"
        maxLength = "10"
        placeholder = "Number"
        required pattern = "[0-9]{10}"
        name = "contact" /
        >
        <
        /div>

        <
        div className = "contact-input-box" >
        <
        h3 > Description * < /h3> <
        textarea placeholder = "Write to us"
        required name = "info" > < /textarea> <
        /div>

        <
        div className = "contact-submit-wrapper" >
        <
        button type = "submit"
        className = "contact-submit-btn" >
        Submit <
        /button> <
        /div> <
        /form>
    );
};

export default DisForm;