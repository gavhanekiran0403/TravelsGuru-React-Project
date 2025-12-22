import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ActivityForm.css";

function ActivityForm() {
  const navigate = useNavigate();

  const [activity, setActivity] = useState({
    activityId: "",
    activityTitle: "",
    price: "",
    destinationId: "",
    image: null,
  });

  const [imageName, setImageName] = useState("");

  const destinations = [
    { id: "D001", name: "France" },
    { id: "D002", name: "Italy" },
    { id: "D003", name: "Japan" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setActivity((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setActivity((prev) => ({ ...prev, image: file }));
      setImageName(file.name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Activity Data:", activity);
    alert("Activity added successfully!");
    navigate("/activities");
  };

  return (
    <div className="activity-form-page">
      <h1 className="form-title">Add Activity</h1>

      <form className="activity-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <input
            type="text"
            name="activityId"
            placeholder="Eg: A001"
            value={activity.activityId}
            onChange={handleChange}
            required
            hidden
          />
        </div>

        <div className="form-group">
          <label>Activity Title</label>
          <input
            type="text"
            name="activityTitle"
            placeholder="Eg: City Tour"
            value={activity.activityTitle}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            name="price"
            placeholder="Eg: 1500"
            value={activity.price}
            onChange={handleChange}
            required
          />
        </div>

        {/* IMAGE UPLOAD */}
        <div className="form-group">
          <label>Upload Image</label>

          <input
            type="file"
            id="activityImageUpload"
            accept="image/*"
            hidden
            onChange={handleImageChange}
          />

          <label htmlFor="activityImageUpload" className="upload-btn">
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
            value={activity.destinationId}
            onChange={handleChange}
            required
          >
            <option value="">Select Destination</option>
            {destinations.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-actions">
          <button type="submit" className="save-btn">
            Save Activity
          </button>
          <button
            type="button"
            className="cancel-btn"
            onClick={() => navigate("/activities")}
          >
            Cancel
          </button>
        </div>

      </form>
    </div>
  );
}

export default ActivityForm;
