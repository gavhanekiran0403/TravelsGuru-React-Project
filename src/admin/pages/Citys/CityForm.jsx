import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CityForm.css";

function CityForm() {
  const navigate = useNavigate();

  const [city, setCity] = useState({
    cityId: "",
    cityName: "",
    description: "",
    destinationId: "",
    image: null,
  });

  const [imageName, setImageName] = useState("");

  // Example destinations (later load from API)
  const destinations = [
    { id: "D001", name: "France" },
    { id: "D002", name: "Italy" },
    { id: "D003", name: "Japan" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCity((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCity((prev) => ({
        ...prev,
        image: file,
      }));
      setImageName(file.name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("City Data:", city);
    alert("City added successfully!");
    navigate("/cities");
  };

  return (
    <div className="city-form-page">
      <h1 className="form-title">Add City</h1>

      <form className="city-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <input
            type="text"
            name="cityId"
            placeholder="Eg: C001"
            value={city.cityId}
            onChange={handleChange}
            required
            hidden
          />
        </div>

        <div className="form-group">
          <label>City Name</label>
          <input
            type="text"
            name="cityName"
            placeholder="Eg: Paris"
            value={city.cityName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            rows="4"
            placeholder="Brief description of the city"
            value={city.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* CUSTOM FILE UPLOAD */}
        <div className="form-group">
          <label>Upload Image</label>

          <input
            type="file"
            id="cityImageUpload"
            accept="image/*"
            onChange={handleImageChange}
            hidden
          />

          <label htmlFor="cityImageUpload" className="upload-btn">
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
            value={city.destinationId}
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
            Save City
          </button>
          <button
            type="button"
            className="cancel-btn"
            onClick={() => navigate("/cities")}
          >
            Cancel
          </button>
        </div>

      </form>
    </div>
  );
}

export default CityForm;
