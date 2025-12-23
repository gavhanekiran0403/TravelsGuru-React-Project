import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/LoginService";
import "./LoginPage.css";
import BlinkLoginPage from "../components/BlinkLoginPage";

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // 🔹 API call
      const response = await loginUser(formData);

      console.log("LOGIN RESPONSE:", response.data); // 🔍 DEBUG

      // 🔹 Adjust this if backend wraps data differently
      const { userId, role } = response.data;

      if (!userId || !role) {
        throw new Error("Invalid login response");
      }

      // 🔹 Save login info (PERSISTENT)
      localStorage.setItem("userId", userId);
      localStorage.setItem("role", role);
      localStorage.setItem("isLoggedIn", "true");

      // 🔹 Role-based redirect
      if (role === "ADMIN") {
        navigate("/admin/dashboard", { replace: true });
      } else {
        navigate("/", { replace: true }); // or "/dashboard" if you have one
      }
    } catch (err) {
      console.error("LOGIN ERROR:", err);
      setError("Invalid email or password");
    }
  };

  return (
    <>
      <BlinkLoginPage loggedIn={false} />

      <div className="login-container">
        <div className="login-card">
          <h2 className="login-title">Welcome Back</h2>
          <p className="login-subtitle">Login to your account</p>

          {error && <p className="error-text">{error}</p>}

          <form onSubmit={handleSubmit} className="login-form">
            {/* Email */}
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* Options */}
            <div className="options">
              <label htmlFor="rememberMe">
                <input id="rememberMe" type="checkbox" />
                Remember Me
              </label>

              <a href="/" className="forgot-link">
                Forgot Password?
              </a>
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>

            <p className="signup-text">
              Don’t have an account?{" "}
              <a href="/signuppage">Sign up</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
