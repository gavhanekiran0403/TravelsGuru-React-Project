import React from "react";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <div className="cards">
        <div className="card">
          <h3>Total Tours</h3>
          <p>86</p>
        </div>

        <div className="card">
          <h3>Total Bookings</h3>
          <p>1,240</p>
        </div>

        <div className="card">
          <h3>Total Revenue</h3>
          <p>$128,400</p>
        </div>

        <div className="card">
          <h3>Active Customers</h3>
          <p>3,450</p>
        </div>
      </div>
    </div>
  );
}
