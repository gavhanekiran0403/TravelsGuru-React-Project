import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ActivityList.css";

function ActivityList() {
  const navigate = useNavigate();

  const activities = [
    {
      activityId: "A001",
      activityTitle: "Eiffel Tower Visit",
      price: 1200,
      image: "https://via.placeholder.com/80",
      destinationId: "D001",
    },
    {
      activityId: "A002",
      activityTitle: "Colosseum Tour",
      price: 1500,
      image: "https://via.placeholder.com/80",
      destinationId: "D002",
    },
    {
      activityId: "A003",
      activityTitle: "Mount Fuji Trip",
      price: 2000,
      image: "https://via.placeholder.com/80",
      destinationId: "D003",
    },
  ];

  const [search, setSearch] = useState("");
  const [destinationFilter, setDestinationFilter] = useState("");

  const filteredActivities = activities.filter(
    (a) =>
      a.activityTitle.toLowerCase().includes(search.toLowerCase()) &&
      (!destinationFilter || a.destinationId === destinationFilter)
  );

  const handleDelete = (activityId) => {
    if (window.confirm("Are you sure you want to delete this activity?")) {
      console.log("Delete activity:", activityId);
    }
  };

  return (
    <div className="activity-page">

      {/* TOP CONTROLS */}
      <div className="activity-top-controls">
        <button
          className="add-btn"
          onClick={() => navigate("/activities/add")}
        >
          + Add Activity
        </button>

        <input
          type="text"
          className="activity-input"
          placeholder="Search Activity"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="activity-input"
          value={destinationFilter}
          onChange={(e) => setDestinationFilter(e.target.value)}
        >
          <option value="">All Destinations</option>
          <option value="D001">France</option>
          <option value="D002">Italy</option>
          <option value="D003">Japan</option>
        </select>
      </div>

      {/* TITLE */}
      <h1 className="activity-title">Activities</h1>

      {/* TABLE */}
      <div className="table-wrapper">
        <table className="activity-table">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Destination</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredActivities.map((activity, index) => (
              <tr key={activity.activityId}>
                <td>{index + 1}</td>

                <td>
                  <img
                    src={activity.image}
                    alt={activity.activityTitle}
                    className="activity-img"
                  />
                </td>

                <td>{activity.activityTitle}</td>
                <td>₹{activity.price}</td>
                <td>{activity.destinationId}</td>

                {/* ACTIONS */}
                <td className="action-cell">
                  <button
                    className="action-btn edit-btn"
                    onClick={() =>
                      navigate(`/activities/edit/${activity.activityId}`)
                    }
                  >
                    Edit
                  </button>

                  <button
                    className="action-btn delete-btn"
                    onClick={() => handleDelete(activity.activityId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {filteredActivities.length === 0 && (
              <tr>
                <td colSpan="6" className="no-data">
                  No activities found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default ActivityList;
