import React, { useState, useEffect } from "react";
import "./BlinkLoginPage.css";
import { useNavigate } from "react-router-dom";

const BlinkLoginPage = ({ loggedIn }) => {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (loggedIn) return; // stop popup after login

        setVisible(true);

        const interval = setInterval(() => {
            setVisible((prev) => !prev);
        }, 3000);

        return () => clearInterval(interval);
    }, [loggedIn]);

    const goToLogin = () => {
        navigate("/loginpage");
    };

    if (!visible || loggedIn) return null;

    return ( <
        div className = "blink-login-popup" >
        <
        div className = "popup-header" >
        <
        h3 > For Login Click Here!! < /h3> <
        button className = "close-btn"
        onClick = {
            () => setVisible(false)
        } > ✖ < /button> < /
        div > <
        button className = "login-btn"
        onClick = { goToLogin } > Login < /button> < /
        div >
    );
};

export default BlinkLoginPage;