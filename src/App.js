import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Sidebar from "./admin/components/Sidebar/Sidebar";
import Navbar from "./admin/components/Navbar/Navbar";
import Dashboard from "./admin/pages/Dashboard/Dashboard";
import DestinationList from "./admin/pages/Destinations/DestinationList";
import DestinationForm from "./admin/pages/Destinations/DestinationForm";
import CategoryForm from "./admin/pages/Categories/CategoryForm";
import CategoryList from "./admin/pages/Categories/CategoryList";
import TravelPackageForm from "./admin/pages/TravelPackages/TravelPackageForm";
import TravelPackageList from "./admin/pages/TravelPackages/TravelPackageList";
import UserList from "./admin/pages/Users/UserList";
import BookingList from "./admin/pages/Bookings/BookingList";
import ReviewList from "./admin/pages/Reviews/ReviewList";
import PaymentList from "./admin/pages/Payments/PaymentList";
import PaymentReport from "./admin/pages/PaymentReports/PaymentReport";
import HotelList from "./admin/pages/Hotels/HotelList";
import HotelForm from "./admin/pages/Hotels/HotelForm";
import CityList from "./admin/pages/Citys/CityList";
import CityForm from "./admin/pages/Citys/CityForm";
import ActivityList from "./admin/pages/Activities/ActivityList";
import ActivityForm from "./admin/pages/Activities/ActivityForm";
import ContactEnquiryList from "./admin/pages/Contacts/ContactEnquiryList";
import DayPlanList from "./admin/pages/DayPlans/DayPlanList";
import DayPlanForm from "./admin/pages/DayPlans/DayPlanForm";

function App() {
  return (
    <BrowserRouter>
    <div className="app-layout">
      <Sidebar />

      <div className="page-content">
        <Navbar />
  
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/destinations" element={<DestinationList />}></Route>
          <Route path="/destinations/add" element={<DestinationForm />} />
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/categories/add" element={<CategoryForm />} />
          <Route path="/categories/edit/:id" element={<CategoryForm />} />
          <Route path="/packages" element={<TravelPackageList />} />
          <Route path="/packages/add" element={<TravelPackageForm />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/bookings" element={<BookingList />} />
          <Route path="/reviews" element={<ReviewList />} />
          <Route path="/payments" element={<PaymentList />}/>
          <Route path="/payment-reports" element={<PaymentReport />}/>
          <Route path="/hotels" element={<HotelList />} />
          <Route path="/hotels/add" element={<HotelForm />} />
          <Route path="/cities" element={<CityList />} />
          <Route path="/cities/add" element={<CityForm />} />
          <Route path="/activities" element={<ActivityList />} />
          <Route path="/activities/add" element={<ActivityForm />} />
          <Route path="/contact-enquiries" element={<ContactEnquiryList />} />
          <Route path="/day-plans" element={<DayPlanList />} />
          <Route path="/day-plans/add" element={<DayPlanForm />} />
        </Routes>

      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
