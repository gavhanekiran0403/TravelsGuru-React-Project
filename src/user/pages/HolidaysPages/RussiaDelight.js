import React from "react";
import "./RussiaDelight.css";
import { Link } from "react-router-dom";

// Main Images
import rMain from "../../media/russia/pack1.jpg";
import r1 from "../../media/russia/pack2.jpg";
import r2 from "../../media/russia/pack3.jpg";
import r3 from "../../media/russia/pack4.jpg";

// Hotel Images
import hotel1 from "../../media/russia/hotel1.jpg";
import hotel2 from "../../media/russia/hotel2.jpg";

const RussiaDelight = () => {
    return ( <
        div className = "russia-container" >

        { /* ================= HERO ================= */ } <
        section className = "russia-hero" >
        <
        img src = { rMain }
        alt = "Russia"
        className = "russia-hero-img" / >

        <
        div className = "russia-hero-overlay" >
        <
        h1 className = "russia-title" > Russia Delight < /h1> <
        p className = "russia-subtitle" > 7 Days / 6 Nights | ₹1, 45, 000 | ★4.9 < /p> <
        button className = "russia-book-btn" > Book Now < /button> <
        /div> <
        /section>

        { /* ================= HIGHLIGHTS ================= */ } <
        section className = "russia-section" >
        <
        h2 className = "russia-section-title" > 🌟Package Highlights < /h2>

        <
        ul className = "russia-highlights" >
        <
        li > 🏰Visit Red Square, Kremlin & St.Basil’ s Cathedral < /li> <
        li > 🚄High - Speed Sapsan Train to St.Petersburg < /li> <
        li > 🏛️Hermitage Museum & Winter Palace Tour < /li> <
        li > 🌉Neva River Cruise with scenic views < /li> <
        li > ❄️Snow Park Activities < /li> <
        li > 🛍️Shopping at Nevsky Prospect & GUM Mall < /li> <
        li > 🎭Russian Ballet(Optional add - on) < /li> <
        li > 🚡Cable Car experience(Seasonal) < /li> <
        /ul> <
        /section>

        { /* ================= INCLUSIONS ================= */ } <
        section className = "russia-section gray-bg" >
        <
        h2 className = "russia-section-title" > ✅Inclusions in Package < /h2>

        <
        div className = "russia-inclusions" >
        <
        div className = "russia-include-card" > 🏨4 & 5 - Star Hotel Stay < /div> <
        div className = "russia-include-card" > 🍽️Breakfast & 3 Dinners < /div> <
        div className = "russia-include-card" > 🚗Airport Transfers < /div> <
        div className = "russia-include-card" > 🚄Sapsan High - Speed Train < /div>

        <
        div className = "russia-include-card" > 🏛️Museum Entry Tickets < /div> <
        div className = "russia-include-card" > 🌉Neva River Cruise < /div> <
        div className = "russia-include-card" > 🎧Guided City Tours < /div> <
        div className = "russia-include-card" > ❄️Snow Adventure Park < /div> <
        /div> <
        /section>

        { /* ================= HOTEL DETAILS ================= */ } <
        section className = "russia-section" >
        <
        h2 className = "russia-section-title" > 🏨Hotel Stay Details < /h2>

        <
        div className = "hotel-grid" >
        <
        div className = "hotel-card" >
        <
        img src = { hotel1 }
        className = "hotel-img"
        alt = "Moscow Hotel" / >
        <
        h3 > ✨Moscow– 3 Nights < /h3> <
        p > < strong > Hotel: < /strong> Hilton Garden Inn /
        Holiday Inn Express < /p> <
        p > < strong > Room Type: < /strong> Deluxe City View Room</p >
        <
        p > < strong > Amenities: < /strong> Free WiFi | Breakfast | Heating</p >
        <
        p > < strong > Rating: < /strong> ★4.8</p >
        <
        /div>

        <
        div className = "hotel-card" >
        <
        img src = { hotel2 }
        className = "hotel-img"
        alt = "St Petersburg Hotel" / >
        <
        h3 > ✨St.Petersburg– 3 Nights < /h3> <
        p > < strong > Hotel: < /strong> Park Inn /
        Crowne Plaza < /p> <
        p > < strong > Room Type: < /strong> Superior Double</p >
        <
        p > < strong > Amenities: < /strong> River View | Buffet Breakfast | Central Location</p >
        <
        p > < strong > Rating: < /strong> ★4.7</p >
        <
        /div> <
        /div> <
        /section>

        { /* ================= FOOD SECTION ================= */ } <
        section className = "russia-section gray-bg" >
        <
        h2 className = "russia-section-title" > 🍽️Food & Meals < /h2>

        <
        ul className = "food-list" >
        <
        li > 🍳Daily Continental Breakfast < /li> <
        li > 🍱3 Premium Russian Dinners < /li> <
        li > 🥟Taste Local Dishes: Pelmeni, Borscht, Stroganoff < /li> <
        li > ☕Unlimited Tea / Coffee in Rooms < /li> <
        /ul> <
        /section>

        { /* ================= GALLERY ================= */ } <
        section className = "russia-section" >
        <
        h2 className = "russia-section-title" > 📸Photo Gallery < /h2>

        <
        div className = "russia-gallery" >
        <
        img src = { r1 }
        alt = "Red Square" / >
        <
        img src = { r2 }
        alt = "Hermitage Museum" / >
        <
        img src = { r3 }
        alt = "Neva River Cruise" / >
        <
        /div> <
        /section>

        { /* ================= ABOUT ================= */ } <
        section className = "russia-section" >
        <
        h2 className = "russia-section-title" > ℹ️ About the Package < /h2>

        <
        p className = "russia-details-text" >
        Explore the magnificent cities of Moscow and St.Petersburg with this premium 7 - day Russia Delight tour.Enjoy guided tours, river cruises, museum visits,
        snow adventures, and luxury hotel stays. <
        /p>

        <
        p className = "russia-details-text" >
        This trip blends culture, architecture, adventure, and comfort— perfect
        for families, couples, and explorers. <
        /p> <
        /section>

        { /* ================= REVIEWS ================= */ } <
        section className = "russia-section gray-bg" >
        <
        h2 className = "russia-section-title" > 💬Traveler Reviews < /h2>

        <
        div className = "russia-reviews" >
        <
        div className = "review-card" >
        <
        p > ⭐⭐⭐⭐⭐ < /p> <
        p > “Russia is magical!The cruise and museums were breathtaking.” < /p> <
        strong > —Aditi Sharma < /strong> <
        /div>

        <
        div className = "review-card" >
        <
        p > ⭐⭐⭐⭐ < /p> <
        p > “Hotels were very comfortable and the guides were excellent.” < /p> <
        strong > —Karan Patel < /strong> <
        /div> <
        /div> <
        /section>

        { /* ================= FOOTER ================= */ } <
        div className = "russia-footer" >
        <
        Link to = "/holidaypackages"
        className = "russia-back-btn" > ←Back to Packages <
        /Link>

        <
        button className = "russia-book-btn" > Book Now < /button> <
        /div>

        <
        /div>
    );
};

export default RussiaDelight;