import React, { useState } from "react";
import "./ContactEnquiryList.css";

function ContactEnquiryList() {
  const enquiries = [
    {
      id: "E001",
      fullName: "John Doe",
      email: "john@example.com",
      contactNumber: "9876543210",
      description: "I want to know about Paris tour packages.",
      createdAt: "2025-01-20T10:30:00",
    },
    {
      id: "E002",
      fullName: "Emma Watson",
      email: "emma@example.com",
      contactNumber: "9123456789",
      description: "Please share hotel details in Rome.",
      createdAt: "2025-01-21T14:15:00",
    },
  ];

  const [search, setSearch] = useState("");

  const filteredEnquiries = enquiries.filter(
    (e) =>
      e.fullName.toLowerCase().includes(search.toLowerCase()) ||
      e.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="enquiry-page">

      {/* SEARCH */}
      <div className="enquiry-top-controls">
        <input
          type="text"
          placeholder="Search by Name or Email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* TITLE */}
      <h1 className="enquiry-title">Contact Enquiries</h1>

      {/* TABLE */}
      <div className="table-wrapper">
        <table className="enquiry-table">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Contact Number</th>
              <th>Description</th>
              <th>Created At</th>
            </tr>
          </thead>

          <tbody>
            {filteredEnquiries.map((enquiry, index) => (
              <tr key={enquiry.id}>
                <td>{index + 1}</td>
                <td>{enquiry.fullName}</td>
                <td>{enquiry.email}</td>
                <td>{enquiry.contactNumber}</td>
                <td className="desc-cell">{enquiry.description}</td>
                <td>{new Date(enquiry.createdAt).toLocaleString()}</td>
              </tr>
            ))}

            {filteredEnquiries.length === 0 && (
              <tr>
                <td colSpan="5" className="no-data">
                  No enquiries found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default ContactEnquiryList;
