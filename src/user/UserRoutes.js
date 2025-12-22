import { Routes, Route } from "react-router-dom";
import { useState } from "react";

/* shared user components */
import Navbar from "../Component/Navbar";
import Packages from "../Component/Packages";
import PackagesCards from "../Component/PackagesCards";
import ContactInformation from "../Component/ContactInformation";
import DisForm from "../Component/DisForm";
import BookingForm from "../Component/BookingForm";
import BlinkLoginPage from "../Component/BlinkLoginPage";
import Footers from "../Component/Footers";

/* user pages */
import Home from "./pages/Homes";
import Books from "./pages/Books";
import HolidayPackages from "./pages/HolidayPackages";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

/* holiday detail pages */
import DubaiLuxuryGetaway from "./pages/HolidaysPages/DubaiLuxuryGetaway";
import RussiaDelight from "./pages/HolidaysPages/RussiaDelight";
import EuropeEscape from "./pages/HolidaysPages/EuropeEscape";
import MaldivesIsland from "./pages/HolidaysPages/MaldivesIsland";
import SriLankaExplorer from "./pages/HolidaysPages/SriLankaExplorer";
import ThailandAdventure from "./pages/HolidaysPages/ThailandAdventure";
import TurkeyHeritageTour from "./pages/HolidaysPages/TurkeyHeritageTour";
import AustraliaHighlights from "./pages/HolidaysPages/AustraliaHighlights";
import GoaBeachFun from "./pages/HolidaysPages/GoaBeachFun";
import ChennaiEscape from "./pages/HolidaysPages/ChennaiEscape";
import KeralaBackwaterRetreat from "./pages/HolidaysPages/KeralaBackwaterRetreat";
import KashmirHeavenTour from "./pages/HolidaysPages/KashmirHeavenTour";
import RajasthanRoyalHeritage from "./pages/HolidaysPages/RajasthanRoyalHeritage";
import DelhiBliss from "./pages/HolidaysPages/DelhiBliss";
import GujaratEscape from "./pages/HolidaysPages/GujaratEscape";
import UttarakhandAdventure from "./pages/HolidaysPages/UttarakhandAdventure";

function UserRoutes() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="Apps">
      {/* Navbar always visible */}
      <Navbar />

      <Routes>
        {/* Home & main pages */}
        <Route path="/" element={<Home />} />
        <Route path="books" element={<Books />} />
        <Route path="holidaypackages" element={<HolidayPackages />} />

        {/* Holiday detail pages */}
        <Route path="dubai-luxury-getaway" element={<DubaiLuxuryGetaway />} />
        <Route path="russia-delight" element={<RussiaDelight />} />
        <Route path="europe-escape" element={<EuropeEscape />} />
        <Route path="maldives-island" element={<MaldivesIsland />} />
        <Route path="sri-lanka-explorer" element={<SriLankaExplorer />} />
        <Route path="thailand-adventure" element={<ThailandAdventure />} />
        <Route path="turkey-heritage-tour" element={<TurkeyHeritageTour />} />
        <Route path="australia-highlights" element={<AustraliaHighlights />} />
        <Route path="goa-beach-fun" element={<GoaBeachFun />} />
        <Route path="chennai-escape" element={<ChennaiEscape />} />
        <Route
          path="kerala-backwater-retreat"
          element={<KeralaBackwaterRetreat />}
        />
        <Route path="kashmir-heaven-tour" element={<KashmirHeavenTour />} />
        <Route
          path="rajasthan-royal-heritage"
          element={<RajasthanRoyalHeritage />}
        />
        <Route path="delhi-bliss" element={<DelhiBliss />} />
        <Route path="gujarat-escape" element={<GujaratEscape />} />
        <Route path="uttarakhand-adventure" element={<UttarakhandAdventure />} />

        {/* Components as pages */}
        <Route path="packages" element={<Packages />} />
        <Route path="packagescards" element={<PackagesCards />} />
        <Route
          path="contactinformation"
          element={<ContactInformation />}
        />
        <Route path="contactpage" element={<ContactPage />} />
        <Route path="disform" element={<DisForm />} />
        <Route path="bookingform" element={<BookingForm />} />

        {/* Login / Signup */}
        <Route
          path="loginpage"
          element={
            <>
              <BlinkLoginPage loggedIn={loggedIn} />
              <LoginPage setLoggedIn={setLoggedIn} />
            </>
          }
        />
        <Route path="signuppage" element={<SignupPage />} />
      </Routes>

      {/* Footer always visible */}
      <Footers />
    </div>
  );
}

export default UserRoutes;
