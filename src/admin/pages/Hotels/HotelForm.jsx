import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HotelForm.css";

function HotelForm() {
  const navigate = useNavigate();

  const [hotel, setHotel] = useState({
    hotelId: "",
    hotelName: "",
    rating: "",
    pricePerNight: "",
    destinationId: "",
    image: null,
  });

  const [imageName, setImageName] = useState("");

  // Example destinations (replace with API later)
  const destinations = [
    { id: "D001", name: "France" },
    { id: "D002", name: "Italy" },
    { id: "D003", name: "Japan" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHotel((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setHotel((prev) => ({
        ...prev,
        image: file,
      }));
      setImageName(file.name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hotel Data:", hotel);
    alert("Hotel added successfully!");
    navigate("/hotels");
  };

  return (
    <div className="hotel-form-page">
      <h1 className="form-title">Add Hotel</h1>

      <form className="hotel-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <input
            type="text"
            name="hotelId"
            placeholder="Eg: H001"
            value={hotel.hotelId}
            onChange={handleChange}
            required
            hidden
          />
        </div>

        <div className="form-group">
          <label>Hotel Name</label>
          <input
            type="text"
            name="hotelName"
            placeholder="Eg: Ocean View Resort"
            value={hotel.hotelName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Rating</label>
          <input
            type="number"
            name="rating"
            step="0.1"
            min="0"
            max="5"
            placeholder="Eg: 4.5"
            value={hotel.rating}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Price Per Night</label>
          <input
            type="number"
            name="pricePerNight"
            placeholder="Eg: 3500"
            value={hotel.pricePerNight}
            onChange={handleChange}
            required
          />
        </div>

        {/* IMAGE UPLOAD */}
        <div className="form-group">
          <label>Upload Image</label>

          <input
            type="file"
            id="hotelImageUpload"
            accept="image/*"
            onChange={handleImageChange}
            hidden
          />

          <label htmlFor="hotelImageUpload" className="upload-btn">
            Choose Image
          </label>

          <span className="image-name">
            {imageName ? imageName : "No file selected"}
          </span>
        </div>

        <div className="form-group">
          <label>Destination</label>
          <select
            name="destinationId"
            value={hotel.destinationId}
            onChange={handleChange}
            required
          >
            <option value="">Select Destination</option>
            {destinations.map((dest) => (
              <option key={dest.id} value={dest.id}>
                {dest.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-actions">
          <button type="submit" className="save-btn">
            Save Hotel
          </button>
          <button
            type="button"
            className="cancel-btn"
            onClick={() => navigate("/hotels")}
          >
            Cancel
          </button>
        </div>

      </form>
    </div>
  );
}

export default HotelForm;
