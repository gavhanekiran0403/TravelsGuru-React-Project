import React from "react";
import "./AdminNavbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-right">
        <div className="notification">
          🔔
          <span className="badge">3</span>
        </div>

        <button className="logout-btn">Logout</button>
      </div>
    </div>
  );
}
