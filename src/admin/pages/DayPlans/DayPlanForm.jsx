import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DayPlanForm.css";

function DayPlanForm() {
  const navigate = useNavigate();

  const [travelPackageId, setTravelPackageId] = useState("");
  const [days, setDays] = useState([
    {
      dayNumber: 1,
      description: "",
      activities: [],
      selectedActivity: "",
    },
  ]);

  const travelPackages = [
    { id: "TP001", name: "Paris Tour - 5 Days" },
    { id: "TP002", name: "Italy Highlights - 7 Days" },
  ];

  const activities = [
    { id: "A001", name: "City Sightseeing" },
    { id: "A002", name: "Museum Visit" },
    { id: "A003", name: "Boat Ride" },
    { id: "A004", name: "Food Tasting" },
  ];

  /* ADD DAY */
  const addDay = () => {
    setDays([
      ...days,
      {
        dayNumber: days.length + 1,
        description: "",
        activities: [],
        selectedActivity: "",
      },
    ]);
  };

  /* REMOVE DAY */
  const removeDay = (index) => {
    const updated = days.filter((_, i) => i !== index);
    setDays(updated.map((d, i) => ({ ...d, dayNumber: i + 1 })));
  };

  /* DAY CHANGE */
  const handleDayChange = (index, field, value) => {
    const updated = [...days];
    updated[index][field] = value;
    setDays(updated);
  };

  /* ADD ACTIVITY */
  const addActivity = (dayIndex) => {
    const updated = [...days];
    const selected = updated[dayIndex].selectedActivity;

    if (
      selected &&
      !updated[dayIndex].activities.includes(selected)
    ) {
      updated[dayIndex].activities.push(selected);
      updated[dayIndex].selectedActivity = "";
      setDays(updated);
    }
  };

  /* REMOVE ACTIVITY */
  const removeActivity = (dayIndex, actId) => {
    const updated = [...days];
    updated[dayIndex].activities = updated[dayIndex].activities.filter(
      (a) => a !== actId
    );
    setDays(updated);
  };

  /* SUBMIT */
  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      travelPackageId,
      dayPlans: days.map(({ selectedActivity, ...rest }) => rest),
    };

    console.log("Payload:", payload);
    alert("Day plans saved!");
    navigate("/day-plans");
  };

  return (
    <div className="dayplan-form-page">
      <h1 className="form-title">Create Day Plan</h1>

      <form className="dayplan-form" onSubmit={handleSubmit}>

        {/* PACKAGE */}
        <div className="form-group">
          <label>Travel Package</label>
          <select
            value={travelPackageId}
            onChange={(e) => setTravelPackageId(e.target.value)}
            required
          >
            <option value="">Select Package</option>
            {travelPackages.map((pkg) => (
              <option key={pkg.id} value={pkg.id}>
                {pkg.name}
              </option>
            ))}
          </select>
        </div>

        {/* DAYS */}
        {days.map((day, dayIndex) => (
          <div className="day-box" key={dayIndex}>

            <div className="day-header">
              <h3>Day {day.dayNumber}</h3>
              {days.length > 1 && (
                <button
                  type="button"
                  className="remove-day-btn"
                  onClick={() => removeDay(dayIndex)}
                >
                  ✕
                </button>
              )}
            </div>

            {/* DESCRIPTION */}
            <div className="form-group">
              <label>Description</label>
              <textarea
                rows="3"
                value={day.description}
                onChange={(e) =>
                  handleDayChange(dayIndex, "description", e.target.value)
                }
                required
              />
            </div>

            {/* ACTIVITY SELECT */}
            <div className="form-group">
              <label>Select Activity</label>
              <div className="activity-select-row">
                <select
                  value={day.selectedActivity}
                  onChange={(e) =>
                    handleDayChange(dayIndex, "selectedActivity", e.target.value)
                  }
                >
                  <option value="">Select Activity</option>
                  {activities.map((act) => (
                    <option key={act.id} value={act.id}>
                      {act.name}
                    </option>
                  ))}
                </select>

                <button
                  type="button"
                  className="add-activity-btn"
                  onClick={() => addActivity(dayIndex)}
                >
                  Add
                </button>
              </div>
            </div>

            {/* SELECTED ACTIVITIES */}
            {day.activities.length > 0 && (
              <div className="selected-activities">
                {day.activities.map((actId) => {
                  const act = activities.find((a) => a.id === actId);
                  return (
                    <div className="activity-chip" key={actId}>
                      {act?.name}
                      <span
                        className="remove-chip"
                        onClick={() =>
                          removeActivity(dayIndex, actId)
                        }
                      >
                        ✕
                      </span>
                    </div>
                  );
                })}
              </div>
            )}

          </div>
        ))}

        {/* ADD DAY */}
        <button type="button" className="add-day-btn" onClick={addDay}>
          + Add Day
        </button>

        {/* ACTIONS */}
        <div className="form-actions">
          <button type="submit" className="save-btn">
            Save Day Plans
          </button>
          <button
            type="button"
            className="cancel-btn"
            onClick={() => navigate("/day-plans")}
          >
            Cancel
          </button>
        </div>

      </form>
    </div>
  );
}

export default DayPlanForm;
