import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footers from "../components/Footers";

const UserLayout = () => {
  return (
    <div className="user-layout">
      <Navbar />
      <main className="user-content">
        <Outlet />
      </main>
      <Footers />
    </div>
  );
};

export default UserLayout;
