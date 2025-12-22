import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PaymentList.css";

function PaymentList() {
  const navigate = useNavigate();

  const payments = [
    {
      paymentId: "PAY001",
      amount: 1200,
      method: "CARD",
      status: "SUCCESS",
      paymentDate: "2025-01-18T12:45:00",
      bookingIds: "B001",
    },
    {
      paymentId: "PAY002",
      amount: 900,
      method: "UPI",
      status: "PENDING",
      paymentDate: "2025-01-20T15:30:00",
      bookingIds: "B002",
    },
    {
      paymentId: "PAY003",
      amount: 700,
      method: "NET_BANKING",
      status: "FAILED",
      paymentDate: "2025-01-22T10:15:00",
      bookingIds: "B003",
    },
  ];

  const [paymentDateFilter, setPaymentDateFilter] = useState("");
  const [bookingSearch, setBookingSearch] = useState("");

  const filteredPayments = payments.filter((p) => {
    const paymentDateOnly = p.paymentDate.split("T")[0];

    return (
      (!paymentDateFilter || paymentDateOnly === paymentDateFilter) &&
      p.bookingIds.toLowerCase().includes(bookingSearch.toLowerCase())
    );
  });

  return (
    <div className="payment-page">

      {/* FILTERS (CENTERED) */}
      <div className="top-filters">
        <input
          type="text"
          placeholder="Search by Booking ID (Eg: B001)"
          value={bookingSearch}
          onChange={(e) => setBookingSearch(e.target.value)}
        />

        <input
          type="date"
          value={paymentDateFilter}
          onChange={(e) => setPaymentDateFilter(e.target.value)}
        />
      </div>

      {/* TITLE + BUTTON */}
      <div className="payment-top-bar">
        <h1 className="payment-title">Payments</h1>

        <button
          className="report-btn"
          onClick={() => navigate("/payment-reports")}
        >
          View Payment Report
        </button>
      </div>

      {/* TABLE */}
      <div className="table-wrapper">
        <table className="payment-table">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Amount</th>
              <th>Method</th>
              <th>Booking ID</th>
              <th>Payment Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredPayments.map((p, index) => (
              <tr key={p.paymentId}>
                <td>{index + 1}</td>
                <td>${p.amount}</td>
                <td>{p.method}</td>
                <td>{p.bookingIds}</td>
                <td>{new Date(p.paymentDate).toLocaleString()}</td>
                <td>
                  <span
                    className={`status ${
                      p.status === "SUCCESS"
                        ? "status-success"
                        : p.status === "PENDING"
                        ? "status-pending"
                        : "status-failed"
                    }`}
                  >
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}

            {filteredPayments.length === 0 && (
              <tr>
                <td colSpan="6" className="no-data">
                  No payments found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default PaymentList;
