import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DayPlanList.css";

function DayPlanList() {
  const navigate = useNavigate();

  const dayPlans = [
    {
      packageId: "TP001",
      packageName: "Paris Tour - 5 Days",
      destinationId: "D001",
      destinationName: "France",
      days: [
        {
          dayNumber: 1,
          description: "Arrival and city sightseeing",
          activities: ["City Sightseeing", "Food Tasting"],
        },
        {
          dayNumber: 2,
          description: "Museum visits and river cruise",
          activities: ["Museum Visit", "Boat Ride"],
        },
      ],
    },
    {
      packageId: "TP002",
      packageName: "Italy Highlights - 7 Days",
      destinationId: "D002",
      destinationName: "Italy",
      days: [
        {
          dayNumber: 1,
          description: "Rome city tour",
          activities: ["City Sightseeing"],
        },
      ],
    },
  ];

  const [search, setSearch] = useState("");
  const [destinationFilter, setDestinationFilter] = useState("");

  const filteredPlans = dayPlans.filter(
    (pkg) =>
      pkg.packageName.toLowerCase().includes(search.toLowerCase()) &&
      (!destinationFilter || pkg.destinationId === destinationFilter)
  );

  const handleDelete = (packageId) => {
    if (window.confirm("Delete all day plans for this package?")) {
      console.log("Delete package:", packageId);
    }
  };

  return (
    <div className="dayplan-page">

      {/* TOP CONTROLS */}
      <div className="dayplan-top-controls">

        <button
          className="add-btn"
          onClick={() => navigate("/day-plans/add")}
        >
          + Add Day Plan
        </button>

        <input
          type="text"
          className="dayplan-input"
          placeholder="Search Package Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="dayplan-input"
          value={destinationFilter}
          onChange={(e) => setDestinationFilter(e.target.value)}
        >
          <option value="">All Destinations</option>
          <option value="D001">France</option>
          <option value="D002">Italy</option>
        </select>

      </div>

      {/* TITLE */}
      <h1 className="dayplan-title">Day Plans</h1>

      {/* TABLE */}
      <div className="table-wrapper">
        <table className="dayplan-table">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Package Name</th>
              <th>Day</th>
              <th>Description</th>
              <th>Activities</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredPlans.map((pkg, pkgIndex) =>
              pkg.days.map((day, dayIndex) => (
                <tr key={`${pkg.packageId}-${day.dayNumber}`}>

                  {/* SR NO */}
                  {dayIndex === 0 && (
                    <td rowSpan={pkg.days.length}>
                      {pkgIndex + 1}
                    </td>
                  )}

                  {/* PACKAGE NAME */}
                  {dayIndex === 0 && (
                    <td
                      rowSpan={pkg.days.length}
                      className="package-cell"
                    >
                      <strong>{pkg.packageName}</strong>
                      <br />
                      <span className="destination-name">
                        {pkg.destinationName}
                      </span>
                    </td>
                  )}

                  {/* DAY */}
                  <td>Day {day.dayNumber}</td>

                  {/* DESCRIPTION */}
                  <td className="desc-cell">{day.description}</td>

                  {/* ACTIVITIES */}
                  <td>
                    <div className="activity-cell">
                      {day.activities.map((act, i) => (
                        <span key={i} className="activity-chip">
                          {act}
                        </span>
                      ))}
                    </div>
                  </td>

                  {/* ACTIONS */}
                  {dayIndex === 0 && (
                    <td
                      rowSpan={pkg.days.length}
                      className="action-cell"
                    >
                      <button
                        className="edit-btn"
                        onClick={() =>
                          navigate(`/edit-dayplan/${pkg.packageId}`)
                        }
                      >
                        Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(pkg.packageId)}
                      >
                        Delete
                      </button>
                    </td>
                  )}

                </tr>
              ))
            )}

            {filteredPlans.length === 0 && (
              <tr>
                <td colSpan="6" className="no-data">
                  No day plans found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default DayPlanList;
