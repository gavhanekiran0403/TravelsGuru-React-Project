import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DestinationList.css";

function Destinations() {
  const navigate = useNavigate();

  const destinations = [
    {
      destinationId: "D001",
      destinationName: "Paris",
      country: "France",
      image: "https://via.placeholder.com/80",
      description: "City of lights and love.",
      destiCategoryId: "CAT01",
    },
    {
      destinationId: "D002",
      destinationName: "Bali",
      country: "Indonesia",
      image: "https://via.placeholder.com/80",
      description: "Tropical paradise with beaches.",
      destiCategoryId: "CAT02",
    },
    {
      destinationId: "D003",
      destinationName: "Manali",
      country: "India",
      image: "https://via.placeholder.com/80",
      description: "Hill station with snow views.",
      destiCategoryId: "CAT01",
    },
  ];

  const categories = {
    CAT01: "Domestic",
    CAT02: "International",
  };

  const [categoryFilter, setCategoryFilter] = useState("ALL");

  const filteredDestinations =
    categoryFilter === "ALL"
      ? destinations
      : destinations.filter(
          (dest) => dest.destiCategoryId === categoryFilter
        );

  return (
    <div className="destinations-page">
      <div className="top-actions-center">
        <button
          className="add-btn"
          onClick={() => navigate("/destinations/add")}
        >
          + Add Destination
        </button>

        <select
          className="filter-select"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="ALL">All Categories</option>
          <option value="CAT01">Domestic</option>
          <option value="CAT02">International</option>
        </select>
      </div>

      <h1 className="table-title">Destinations List</h1>

      <div className="table-wrapper">
        <table className="destinations-table">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Country</th>
              <th>Description</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredDestinations.map((dest, index) => (
              <tr key={dest.destinationId}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={dest.image}
                    alt={dest.destinationName}
                    className="table-img"
                  />
                </td>
                <td>{dest.destinationName}</td>
                <td>{dest.country}</td>
                <td className="desc">{dest.description}</td>
                <td>{categories[dest.destiCategoryId]}</td>
                <td className="action-cell">
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}

            {filteredDestinations.length === 0 && (
              <tr>
                <td colSpan="7" className="no-data">
                  No destinations found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Destinations;
