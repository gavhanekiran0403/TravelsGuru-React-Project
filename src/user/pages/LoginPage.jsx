import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginApi from "../../services/LoginService";
import "./LoginPage.css";
import BlinkLoginPage from "../components/BlinkLoginPage";


const LoginPage = ({ setLoggedIn }) => {
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
      const response = await loginApi.post("/login", formData);

      const { role, userId } = response.data;

      // Save login info (optional)
      localStorage.setItem("userId", userId);
      localStorage.setItem("role", role);

      setLoggedIn(true);

      // 🔀 Role-based redirect
      if (role === "ADMIN") {
        navigate("/admin/dashboard", { replace: true });
      } else {
        navigate("/", { replace: true });
      }

    } catch (err) {
      setError(
        err.response?.data?.message || "Invalid email or password"
      );
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
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>

            <p className="signup-text">
              Don’t have an account? <a href="/signuppage">Sign up</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
