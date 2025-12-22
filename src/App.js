import { BrowserRouter, Routes, Route } from "react-router-dom";
//import AdminRoutes from "./admin/AdminRoutes";
import UserRoutes from "./user/UserRoutes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/admin/*" element={<AdminRoutes />} /> */}
        <Route path="/*" element={<UserRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
