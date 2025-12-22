import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">TravelsGuru</h2>

      <ul className="menu">
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
        <li>
          <NavLink to="/categories">Categories</NavLink>
        </li>
        <li>
          <NavLink to="/destinations">Destinations</NavLink>
        </li>
        <li>
          <NavLink to="/packages">TravelPackages</NavLink>
        </li>
        <li>
          <NavLink to="/bookings">Bookings</NavLink>
        </li>
        <li>
          <NavLink to="/payments">Payments</NavLink>
        </li>
        <li>
          <NavLink to="/hotels">Hotels</NavLink>
        </li>
        <li>
          <NavLink to="/cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="/activities">Activities</NavLink>
        </li>
        <li>
          <NavLink to="/day-plans">Day Plan</NavLink>
        </li>
        <li>
          <NavLink to="/contact-enquiries">Contact Enquiries</NavLink>
        </li>
        <li>
          <NavLink to="/reviews">Reviews</NavLink>
        </li>
        {/* <li>
          <NavLink to="/settings">Settings</NavLink>
        </li> */}
      </ul>
    </div>
  );
}
