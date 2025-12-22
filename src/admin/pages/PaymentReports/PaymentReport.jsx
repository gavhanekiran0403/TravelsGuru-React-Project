import React, { useState } from "react";
import "./PaymentReport.css";

function PaymentReport() {
  const payments = [
    { amount: 1200, paymentDate: "2025-01-18T12:45:00" },
    { amount: 900, paymentDate: "2025-01-20T15:30:00" },
    { amount: 700, paymentDate: "2025-01-22T10:15:00" },
    { amount: 1500, paymentDate: "2025-01-22T18:10:00" },
  ];

  const today = new Date();

  const isSameDay = (d1, d2) =>
    d1.toDateString() === d2.toDateString();

  const isSameWeek = (date) => {
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    return date >= startOfWeek && date <= endOfWeek;
  };

  const isSameMonth = (date) =>
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();

  const sumAmount = (filterFn) =>
    payments
      .filter((p) => filterFn(new Date(p.paymentDate)))
      .reduce((sum, p) => sum + p.amount, 0);

  const todayTotal = sumAmount((d) => isSameDay(d, today));
  const weekTotal = sumAmount(isSameWeek);
  const monthTotal = sumAmount(isSameMonth);

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const customTotal =
    fromDate && toDate
      ? payments
          .filter((p) => {
            const d = new Date(p.paymentDate);
            return d >= new Date(fromDate) && d <= new Date(toDate);
          })
          .reduce((sum, p) => sum + p.amount, 0)
      : 0;

  return (
    <div className="payment-report-page">
      <h1 className="report-title">Payment Report</h1>

      {/* SUMMARY CARDS */}
      <div className="report-cards">
        <div className="report-card">
          <h3>Today</h3>
          <p>${todayTotal}</p>
        </div>

        <div className="report-card">
          <h3>This Week</h3>
          <p>${weekTotal}</p>
        </div>

        <div className="report-card">
          <h3>This Month</h3>
          <p>${monthTotal}</p>
        </div>
      </div>

      {/* CUSTOM PERIOD */}
      <div className="custom-period">
        <h3>Custom Period</h3>

        <div className="date-filters">
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
        </div>

        <div className="custom-total">
          Total Collection: <span>${customTotal}</span>
        </div>
      </div>
    </div>
  );
}

export default PaymentReport;
