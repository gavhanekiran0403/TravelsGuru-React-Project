import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TravelPackageList.css";

function TravelPackageList() {
  const navigate = useNavigate();

  const packages = [
    {
      packageId: "PKG01",
      packageTitle: "Romantic Paris Tour",
      price: 1200,
      days: 5,
      nights: 4,
      destinationId: "D001",
      categoryId: "CAT01",
    },
    {
      packageId: "PKG02",
      packageTitle: "Bali Adventure",
      price: 900,
      days: 6,
      nights: 5,
      destinationId: "D002",
      categoryId: "CAT02",
    },
    {
      packageId: "PKG03",
      packageTitle: "Manali Snow Trip",
      price: 700,
      days: 4,
      nights: 3,
      destinationId: "D003",
      categoryId: "CAT01",
    },
  ];

  const categories = {
    CAT01: "Domestic",
    CAT02: "International",
  };

  const destinations = {
    D001: "Paris",
    D002: "Bali",
    D003: "Manali",
  };

  const [categoryFilter, setCategoryFilter] = useState("ALL");
  const [destinationFilter, setDestinationFilter] = useState("ALL");

  const filteredPackages = packages.filter((pkg) => {
    return (
      (categoryFilter === "ALL" || pkg.categoryId === categoryFilter) &&
      (destinationFilter === "ALL" || pkg.destinationId === destinationFilter)
    );
  });

  return (
    <div className="package-page">
      {/* TOP ACTIONS */}
      <div className="top-actions">
        <button
          className="add-package-btn"
          onClick={() => navigate("/packages/add")}
        >
          + Add Travel Package
        </button>

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="filter-select"
        >
          <option value="ALL">All Categories</option>
          <option value="CAT01">Domestic</option>
          <option value="CAT02">International</option>
        </select>

        <select
          value={destinationFilter}
          onChange={(e) => setDestinationFilter(e.target.value)}
          className="filter-select"
        >
          <option value="ALL">All Destinations</option>
          <option value="D001">Paris</option>
          <option value="D002">Bali</option>
          <option value="D003">Manali</option>
        </select>
      </div>

      {/* TITLE */}
      <h1 className="package-title">Travel Packages</h1>

      {/* TABLE */}
      <div className="table-wrapper">
        <table className="package-table">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Title</th>
              <th>Price</th>
              <th>Days</th>
              <th>Nights</th>
              <th>Category</th>
              <th>Destination</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredPackages.map((pkg, index) => (
              <tr key={pkg.packageId}>
                <td>{index + 1}</td>
                <td>{pkg.packageTitle}</td>
                <td>${pkg.price}</td>
                <td>{pkg.days}</td>
                <td>{pkg.nights}</td>
                <td>{categories[pkg.categoryId]}</td>
                <td>{destinations[pkg.destinationId]}</td>
                <td className="action-cell">
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}

            {filteredPackages.length === 0 && (
              <tr>
                <td colSpan="8" className="no-data">
                  No travel packages found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TravelPackageList;
