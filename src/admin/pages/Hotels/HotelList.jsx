import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HotelList.css";

function HotelList() {
  const navigate = useNavigate();

  const hotels = [
    {
      hotelId: "H001",
      hotelName: "Ocean View Resort",
      rating: 4.5,
      pricePerNight: 3500,
      image: "https://via.placeholder.com/80",
      destinationId: "D001",
    },
    {
      hotelId: "H002",
      hotelName: "Mountain Palace",
      rating: 4.2,
      pricePerNight: 2800,
      image: "https://via.placeholder.com/80",
      destinationId: "D002",
    },
    {
      hotelId: "H003",
      hotelName: "City Comfort Inn",
      rating: 3.8,
      pricePerNight: 1800,
      image: "https://via.placeholder.com/80",
      destinationId: "D001",
    },
  ];

  const [search, setSearch] = useState("");

  const filteredHotels = hotels.filter((h) =>
    h.hotelName.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (hotelId) => {
    if (window.confirm("Are you sure you want to delete this hotel?")) {
      console.log("Delete hotel:", hotelId);
    }
  };

  return (
    <div className="hotel-page">

      {/* TOP CONTROLS */}
      <div className="hotel-top-controls">
        <button
          className="add-hotel-btn"
          onClick={() => navigate("/hotels/add")}
        >
          + Add Hotel
        </button>

        <input
          type="text"
          placeholder="Search Hotel Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* TITLE */}
      <div className="hotel-header">
        <h1 className="hotel-title">Hotels</h1>
      </div>

      {/* TABLE */}
      <div className="table-wrapper">
        <table className="hotel-table">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Rating</th>
              <th>Price / Night</th>
              <th>Destination ID</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredHotels.map((hotel, index) => (
              <tr key={hotel.hotelId}>
                <td>{index + 1}</td>

                <td>
                  <img
                    src={hotel.image}
                    alt={hotel.hotelName}
                    className="hotel-img"
                  />
                </td>

                <td>{hotel.hotelName}</td>
                <td>{hotel.rating} ⭐</td>
                <td>₹{hotel.pricePerNight}</td>
                <td>{hotel.destinationId}</td>

                {/* ACTIONS */}
                <td className="action-cell">
                  <button
                    className="edit-btn"
                    onClick={() =>
                      navigate(`/hotels/edit/${hotel.hotelId}`)
                    }
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(hotel.hotelId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {filteredHotels.length === 0 && (
              <tr>
                <td colSpan="7" className="no-data">
                  No hotels found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default HotelList;
