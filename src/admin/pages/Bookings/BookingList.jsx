import React, { useState } from "react";
import "./BookingList.css";

function BookingList() {
  const bookings = [
    {
      bookingId: "B001",
      bookingType: "PACKAGE",
      travellerType: "FAMILY",
      departureLocation: "Delhi",
      duration: "5 Days / 4 Nights",
      startDate: "2025-01-10",
      createdAt: "2025-01-01",
      destinationId: "D001",
      travelPackageId: "PKG01",
      userId: "U001",
      totalAmount: "1200",
      status: "CONFIRMED",
    },
    {
      bookingId: "B002",
      bookingType: "DESTINATION",
      travellerType: "COUPLE",
      departureLocation: "Mumbai",
      duration: "6 Days / 5 Nights",
      startDate: "2025-02-05",
      createdAt: "2025-02-01",
      destinationId: "D002",
      travelPackageId: "PKG02",
      userId: "U002",
      totalAmount: "950",
      status: "PENDING",
    },
    {
      bookingId: "B003",
      bookingType: "PACKAGE",
      travellerType: "SOLO",
      departureLocation: "Bangalore",
      duration: "4 Days / 3 Nights",
      startDate: "2025-03-01",
      createdAt: "2025-03-01",
      destinationId: "D003",
      travelPackageId: "PKG03",
      userId: "U003",
      totalAmount: "700",
      status: "CANCELLED",
    },
  ];

  const [bookingTypeFilter, setBookingTypeFilter] = useState("ALL");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [createdAtFilter, setCreatedAtFilter] = useState("");

  const filteredBookings = bookings.filter((b) => {
    return (
      (bookingTypeFilter === "ALL" ||
        b.bookingType === bookingTypeFilter) &&
      (statusFilter === "ALL" || b.status === statusFilter) &&
      (!createdAtFilter || b.createdAt === createdAtFilter)
    );
  });

  return (
    <div className="booking-page">

      {/* FILTERS */}
      <div className="top-filters">
        <select
          value={bookingTypeFilter}
          onChange={(e) => setBookingTypeFilter(e.target.value)}
        >
          <option value="ALL">All Booking Types</option>
          <option value="PACKAGE">Package</option>
          <option value="DESTINATION">Destination</option>
        </select>

        <input
          type="date"
          value={createdAtFilter}
          onChange={(e) => setCreatedAtFilter(e.target.value)}
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="ALL">All Status</option>
          <option value="CONFIRMED">Confirmed</option>
          <option value="PENDING">Pending</option>
          <option value="CANCELLED">Cancelled</option>
        </select>
      </div>

      {/* TITLE */}
      <h1 className="booking-title">Bookings</h1>

      {/* TABLE */}
      <div className="table-wrapper">
        <table className="booking-table">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Booking Type</th>
              <th>Traveller</th>
              <th>Departure</th>
              <th>Duration</th>
              <th>Start Date</th>
              <th>Created At</th>
              <th>Destination</th>
              <th>Package</th>
              <th>User</th>
              <th>Total Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredBookings.map((b, index) => (
              <tr key={b.bookingId}>
                <td>{index + 1}</td>
                <td>
                  <span className="type-badge">{b.bookingType}</span>
                </td>
                <td>{b.travellerType}</td>
                <td>{b.departureLocation}</td>
                <td>{b.duration}</td>
                <td>{b.startDate}</td>
                <td>{b.createdAt}</td>
                <td>{b.destinationId}</td>
                <td>{b.travelPackageId}</td>
                <td>{b.userId}</td>
                <td>${b.totalAmount}</td>
                <td>
                  <span
                    className={`status ${
                      b.status === "CONFIRMED"
                        ? "status-confirmed"
                        : b.status === "PENDING"
                        ? "status-pending"
                        : "status-cancelled"
                    }`}
                  >
                    {b.status}
                  </span>
                </td>
              </tr>
            ))}

            {filteredBookings.length === 0 && (
              <tr>
                <td colSpan="12" className="no-data">
                  No bookings found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BookingList;
