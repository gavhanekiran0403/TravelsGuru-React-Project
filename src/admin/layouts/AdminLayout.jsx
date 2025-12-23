import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/Sidebar/AdminSidebar";
import AdminNavbar from "../components/Navbar/AdminNavbar";

const AdminLayout = () => {
  return (
    <div
      className="admin-layout"
      style={{ display: "flex", minHeight: "100vh" }}
    >
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main area */}
      <div
        className="admin-main"
        style={{ flex: 1, display: "flex", flexDirection: "column" }}
      >
        <AdminNavbar />

        {/* Page Content */}
        <div className="admin-content" style={{ flex: 1}}>
          <Outlet />
        </div>

        {/* Admin Footer */}
        {/* <AdminFooter /> */}
      </div>
    </div>
  );
};

export default AdminLayout;
