import React, { useState } from "react";
import "./DestinationForm.css";

function DestinationForm() {
  const [destination, setDestination] = useState({
    destinationName: "",
    country: "",
    description: "",
    destiCategoryId: "",
    image: null,
  });

  const [imageName, setImageName] = useState("");

  const categories = [
    { id: "CAT01", name: "Domestic" },
    { id: "CAT02", name: "International" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDestination((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setDestination((prev) => ({
        ...prev,
        image: file,
      }));
      setImageName(file.name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", destination);
    alert("Destination saved successfully!");
  };

  return (
    <div className="destination-form-page">
      <h1 className="form-title">Add Destination</h1>

      <form className="destination-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Destination Name</label>
          <input
            type="text"
            name="destinationName"
            placeholder="Eg: Paris"
            value={destination.destinationName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Country</label>
          <input
            type="text"
            name="country"
            placeholder="Eg: France"
            value={destination.country}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            rows="4"
            placeholder="Brief description of the destination"
            value={destination.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* CUSTOM FILE UPLOAD */}
        <div className="form-group">
          <label>Upload Image</label>

          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            onChange={handleImageChange}
            hidden
          />

          <label htmlFor="imageUpload" className="upload-btn">
            Choose Image
          </label>

          <span className="image-name">
            {imageName ? imageName : "No file selected"}
          </span>
        </div>

        <div className="form-group">
          <label>Category</label>
          <select
            name="destiCategoryId"
            value={destination.destiCategoryId}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-actions">
          <button type="submit" className="save-btn">
            Save Destination
          </button>
          <button
            type="button"
            className="cancel-btn"
            onClick={() => window.history.back()}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default DestinationForm;
