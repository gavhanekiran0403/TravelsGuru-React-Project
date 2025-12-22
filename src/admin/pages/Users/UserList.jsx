import React from "react";
import "./UserList.css";

function UserList() {
  const users = [
    {
      userId: "U001",
      fullName: "John Doe",
      email: "john@example.com",
      mobileNo: "9876543210",
      activeStatus: "ACTIVE",
    },
    {
      userId: "U002",
      fullName: "Jane Smith",
      email: "jane@example.com",
      mobileNo: "9123456780",
      activeStatus: "INACTIVE",
    },
    {
      userId: "U003",
      fullName: "Rahul Kumar",
      email: "rahul@example.com",
      mobileNo: "9988776655",
      activeStatus: "ACTIVE",
    },
  ];

  const handleForceLogout = (userId) => {
    const confirmLogout = window.confirm(
      "Are you sure you want to force logout this user?"
    );

    if (confirmLogout) {
      console.log("Force logout user:", userId);
      alert(`User ${userId} has been force logged out`);
    }
  };

  return (
    <div className="user-page">
      <h1 className="user-title">Users List</h1>

      <div className="table-wrapper">
        <table className="user-table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Mobile No</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.userId}>
                <td>{user.userId}</td>
                <td>{user.fullName}</td>
                <td>{user.email}</td>
                <td>{user.mobileNo}</td>
                <td>
                  <span
                    className={
                      user.activeStatus === "ACTIVE"
                        ? "status-active"
                        : "status-inactive"
                    }
                  >
                    {user.activeStatus}
                  </span>
                </td>
                <td className="action-cell">
                  {user.activeStatus === "ACTIVE" ? (
                    <button
                      className="force-logout-btn"
                      onClick={() => handleForceLogout(user.userId)}
                    >
                      Force Logout
                    </button>
                  ) : (
                    <span className="disabled-text">Not Logged In</span>
                  )}
                </td>
              </tr>
            ))}

            {users.length === 0 && (
              <tr>
                <td colSpan="6" className="no-data">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserList;
