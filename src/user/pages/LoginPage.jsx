import React, { useState } from "react";
import "./LoginPage.css";
import BlinkLoginPage from "../components/BlinkLoginPage";


const LoginPage = ({ setLoggedIn }) => {
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Welcome back, ${formData.email || "User"}!`);
        setLoggedIn(true); // ⬅ close popup after successful login
        setFormData({ email: "", password: "" });
    };

    return ( <
        >
        { /* 🚨 Popup visible above login page */ } <
        BlinkLoginPage loggedIn = { false }
        />

        <
        div className = "login-container" >
        <
        div className = "login-card" >
        <
        h2 className = "login-title" > Welcome Back < /h2> <
        p className = "login-subtitle" > Login to your account < /p>

        <
        form onSubmit = { handleSubmit }
        className = "login-form" >
        <
        div className = "input-group" >
        <
        label > Email < /label> <
        input type = "email"
        name = "email"
        placeholder = "Enter your email"
        value = { formData.email }
        onChange = { handleChange }
        required /
        >
        <
        /div>

        <
        div className = "input-group" >
        <
        label > Password < /label> <
        input type = "password"
        name = "password"
        placeholder = "Enter your password"
        value = { formData.password }
        onChange = { handleChange }
        required /
        >
        <
        /div>

        <
        div className = "options" >
        <
        label >
        <
        input type = "checkbox"
        required / > Remember Me <
        /label> <
        a href = "/"
        className = "forgot-link" > Forgot Password ? < /a> < /
        div >

        <
        button type = "submit"
        className = "login-btn" > Login < /button>

        <
        p className = "signup-text" >
        Don’ t have an account ? < a href = "/signuppage" > Sign up < /a> < /
        p > <
        /form> < /
        div > <
        /div> < / >
    );
};

export default LoginPage;