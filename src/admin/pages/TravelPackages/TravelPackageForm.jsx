import React, { useState } from "react";
import "./TravelPackageForm.css";

function TravelPackageForm() {
  const [pkg, setPkg] = useState({
    packageTitle: "",
    price: "",
    days: "",
    nights: "",
    description: "",
    destinationId: "",
  });

  const destinations = [
    { id: "D001", name: "Paris" },
    { id: "D002", name: "Bali" },
    { id: "D003", name: "Manali" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPkg((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Package:", pkg);
    alert("Travel Package Saved Successfully!");
  };

  return (
    <div className="package-form-page">
      <h1 className="form-title">Add Travel Package</h1>

      <form className="package-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Package Title</label>
          <input
            type="text"
            name="packageTitle"
            placeholder="Eg: Romantic Paris Tour"
            value={pkg.packageTitle}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            name="price"
            placeholder="Eg: 1200"
            value={pkg.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Number of Days</label>
          <input
            type="number"
            name="days"
            placeholder="Eg: 5"
            value={pkg.days}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Number of Nights</label>
          <input
            type="number"
            name="nights"
            placeholder="Eg: 4"
            value={pkg.nights}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            rows="4"
            placeholder="Brief package description"
            value={pkg.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label>Destination</label>
          <select
            name="destinationId"
            value={pkg.destinationId}
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
            Save Package
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

export default TravelPackageForm;
