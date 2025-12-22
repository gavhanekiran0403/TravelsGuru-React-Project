import React from "react";
import { Routes, Route } from "react-router-dom";
import "../App.css";

import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";

import Dashboard from "./pages/Dashboard/Dashboard";
import DestinationList from "./pages/Destinations/DestinationList";
import DestinationForm from "./pages/Destinations/DestinationForm";
import CategoryForm from "./pages/Categories/CategoryForm";
import CategoryList from "./pages/Categories/CategoryList";
import TravelPackageForm from "./pages/TravelPackages/TravelPackageForm";
import TravelPackageList from "./pages/TravelPackages/TravelPackageList";
import UserList from "./pages/Users/UserList";
import BookingList from "./pages/Bookings/BookingList";
import ReviewList from "./pages/Reviews/ReviewList";
import PaymentList from "./pages/Payments/PaymentList";
import PaymentReport from "./pages/PaymentReports/PaymentReport";
import HotelList from "./pages/Hotels/HotelList";
import HotelForm from "./pages/Hotels/HotelForm";
import CityList from "./pages/Citys/CityList";
import CityForm from "./pages/Citys/CityForm";
import ActivityList from "./pages/Activities/ActivityList";
import ActivityForm from "./pages/Activities/ActivityForm";
import ContactEnquiryList from "./pages/Contacts/ContactEnquiryList";
import DayPlanList from "./pages/DayPlans/DayPlanList";
import DayPlanForm from "./pages/DayPlans/DayPlanForm";

function AdminRoutes() {
  return (
    <div className="app-layout">
      <Sidebar />

      <div className="page-content">
        <Navbar />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="destinations" element={<DestinationList />} />
          <Route path="destinations/add" element={<DestinationForm />} />

          <Route path="categories" element={<CategoryList />} />
          <Route path="categories/add" element={<CategoryForm />} />
          <Route path="categories/edit/:id" element={<CategoryForm />} />

          <Route path="packages" element={<TravelPackageList />} />
          <Route path="packages/add" element={<TravelPackageForm />} />

          <Route path="users" element={<UserList />} />
          <Route path="bookings" element={<BookingList />} />
          <Route path="reviews" element={<ReviewList />} />

          <Route path="payments" element={<PaymentList />} />
          <Route path="payment-reports" element={<PaymentReport />} />

          <Route path="hotels" element={<HotelList />} />
          <Route path="hotels/add" element={<HotelForm />} />

          <Route path="cities" element={<CityList />} />
          <Route path="cities/add" element={<CityForm />} />

          <Route path="activities" element={<ActivityList />} />
          <Route path="activities/add" element={<ActivityForm />} />

          <Route path="contact-enquiries" element={<ContactEnquiryList />} />

          <Route path="day-plans" element={<DayPlanList />} />
          <Route path="day-plans/add" element={<DayPlanForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminRoutes;
