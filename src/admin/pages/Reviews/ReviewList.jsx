import React from "react";
import "./ReviewList.css";

function ReviewList() {
  const reviews = [
    {
      reviewId: "R001",
      rating: 5,
      comment: "Amazing experience! Everything was perfectly organized.",
      createdAt: "2025-01-15T10:30:00",
      userId: "U001",
      travelPackageId: "PKG01",
    },
    {
      reviewId: "R002",
      rating: 4,
      comment: "Very good trip, hotels were nice.",
      createdAt: "2025-01-20T14:45:00",
      userId: "U002",
      travelPackageId: "PKG02",
    },
    {
      reviewId: "R003",
      rating: 2,
      comment: "Package was okay, but transportation was delayed.",
      createdAt: "2025-01-25T09:10:00",
      userId: "U003",
      travelPackageId: "PKG03",
    },
  ];

  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <div className="review-page">
      <h1 className="review-title">Reviews</h1>

      <div className="table-wrapper">
        <table className="review-table">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Rating</th>
              <th>Comment</th>
              <th>Reviewed On</th>
              <th>User ID</th>
              <th>Package ID</th>
            </tr>
          </thead>

          <tbody>
            {reviews.map((r, index) => (
              <tr key={r.reviewId}>
                <td>{index + 1}</td>
                <td className="rating">{renderStars(r.rating)}</td>
                <td className="comment">{r.comment}</td>
                <td>{new Date(r.createdAt).toLocaleString()}</td>
                <td>{r.userId}</td>
                <td>{r.travelPackageId}</td>
              </tr>
            ))}

            {reviews.length === 0 && (
              <tr>
                <td colSpan="6" className="no-data">
                  No reviews found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReviewList;
