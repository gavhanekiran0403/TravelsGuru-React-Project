import React from "react";
import { NavLink } from "react-router-dom";
import "./AdminSidebar.css";

export default function AdminSidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">TravelsGuru</h2>

      <ul className="menu">
        <li>
          <NavLink to="/admin/dashboard">Dashboard</NavLink>
        </li>

        <li>
          <NavLink to="/admin/users">Users</NavLink>
        </li>

        <li>
          <NavLink to="/admin/categories">Categories</NavLink>
        </li>

        <li>
          <NavLink to="/admin/destinations">Destinations</NavLink>
        </li>

        <li>
          <NavLink to="/admin/packages">Travel Packages</NavLink>
        </li>

        <li>
          <NavLink to="/admin/bookings">Bookings</NavLink>
        </li>

        <li>
          <NavLink to="/admin/payments">Payments</NavLink>
        </li>

        <li>
          <NavLink to="/admin/hotels">Hotels</NavLink>
        </li>

        <li>
          <NavLink to="/admin/cities">Cities</NavLink>
        </li>

        <li>
          <NavLink to="/admin/activities">Activities</NavLink>
        </li>

        <li>
          <NavLink to="/admin/day-plans">Day Plan</NavLink>
        </li>

        <li>
          <NavLink to="/admin/contact-enquiries">Contact Enquiries</NavLink>
        </li>

        <li>
          <NavLink to="/admin/reviews">Reviews</NavLink>
        </li>
      </ul>
    </div>
  );
}
