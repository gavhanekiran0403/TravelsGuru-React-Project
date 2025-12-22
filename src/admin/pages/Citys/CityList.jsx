import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CityList.css";

function CityList() {
  const navigate = useNavigate();

  const cities = [
    {
      cityId: "C001",
      cityName: "Paris",
      description: "City of Lights",
      image: "https://via.placeholder.com/80",
      destinationId: "D001",
    },
    {
      cityId: "C002",
      cityName: "Rome",
      description: "Historic city",
      image: "https://via.placeholder.com/80",
      destinationId: "D001",
    },
    {
      cityId: "C003",
      cityName: "Tokyo",
      description: "Modern city",
      image: "https://via.placeholder.com/80",
      destinationId: "D002",
    },
  ];

  const [search, setSearch] = useState("");
  const [destinationFilter, setDestinationFilter] = useState("");

  const filteredCities = cities.filter(
    (city) =>
      city.cityName.toLowerCase().includes(search.toLowerCase()) &&
      (!destinationFilter || city.destinationId === destinationFilter)
  );

  const handleDelete = (cityId) => {
    if (window.confirm("Are you sure you want to delete this city?")) {
      console.log("Delete city:", cityId);
    }
  };

  return (
    <div className="city-page">

      {/* TOP CONTROLS */}
      <div className="city-top-controls">
        <button
          className="add-btn"
          onClick={() => navigate("/cities/add")}
        >
          + Add City
        </button>

        <input
          type="text"
          className="city-input"
          placeholder="Search City Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="city-input"
          value={destinationFilter}
          onChange={(e) => setDestinationFilter(e.target.value)}
        >
          <option value="">All Destinations</option>
          <option value="D001">D001</option>
          <option value="D002">D002</option>
        </select>
      </div>

      {/* TITLE */}
      <h1 className="city-title">Cities</h1>

      {/* TABLE */}
      <div className="table-wrapper">
        <table className="city-table">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Image</th>
              <th>City Name</th>
              <th>Description</th>
              <th>Destination ID</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredCities.map((city, index) => (
              <tr key={city.cityId}>
                <td>{index + 1}</td>

                <td>
                  <img
                    src={city.image}
                    alt={city.cityName}
                    className="city-img"
                  />
                </td>

                <td>{city.cityName}</td>
                <td>{city.description}</td>
                <td>{city.destinationId}</td>

                {/* ACTIONS */}
                <td className="action-cell">
                  <button
                    className="action-btn edit-btn"
                    onClick={() =>
                      navigate(`/cities/edit/${city.cityId}`)
                    }
                  >
                    Edit
                  </button>

                  <button
                    className="action-btn delete-btn"
                    onClick={() => handleDelete(city.cityId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {filteredCities.length === 0 && (
              <tr>
                <td colSpan="6" className="no-data">
                  No cities found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default CityList;
