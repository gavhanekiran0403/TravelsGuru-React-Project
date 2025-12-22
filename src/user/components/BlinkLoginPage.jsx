import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./BlinkLoginPage.css";

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
  }, [loggedIn]); // ✅ dependency is correct

  const goToLogin = () => {
    navigate("/loginpage");
  };

  // Hide popup if not visible or already logged in
  if (!visible || loggedIn) return null;

  return (
    <div className="blink-login-popup">
      <div className="popup-header">
        <h3>For Login Click Here!!</h3>
        <button
          type="button"
          className="close-btn"
          onClick={() => setVisible(false)}
          aria-label="Close login popup"
        >
          ✖
        </button>
      </div>

      <button
        type="button"
        className="login-btn"
        onClick={goToLogin}
      >
        Login
      </button>
    </div>
  );
};

export default BlinkLoginPage;
