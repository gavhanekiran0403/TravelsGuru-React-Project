import React from "react";
import "./GujaratEscape.css";
import { Link } from "react-router-dom";

// Hero Image
import gujMain from "../../media/gujrat/gujratbg.jpg";

// Gallery Images
import guj1 from "../../media/gujrat/guj-1.jpg";
import guj2 from "../../media/gujrat/guj-2.jpg";
import guj3 from "../../media/gujrat/guj-3.jpg";
import guj4 from "../../media/gujrat/guj-4.jpg";

// Hotel Images
import hotel1 from "../../media/gujrat/hotel-1.jpg";
import hotel2 from "../../media/gujrat/hotel-2.jpg";

const GujaratEscape = () => {
    return ( <
        div className = "gujarat-container" >

        { /* ================= HERO ================= */ } <
        section className = "gujarat-hero" >
        <
        img src = { gujMain }
        alt = "Gujarat landscape"
        className = "gujarat-hero-img" / >

        <
        div className = "gujarat-hero-overlay" >
        <
        h1 className = "gujarat-title" > Gujarat Escape < /h1> <
        p className = "gujarat-subtitle" > 5 Days / 4 Nights | ₹32, 000 | ★4.7 < /p>   < 
        button className = "gujarat-booknow-btn" > Book Now < /button> < /
        div > <
        /section>

        { /* ================= HIGHLIGHTS ================= */ } <
        section className = "gujarat-section" >
        <
        h2 className = "gujarat-section-title" > 🌟Package Highlights < /h2>

        <
        ul className = "gujarat-highlights" >
        <
        li > 🛕Visit the iconic < strong > Somnath Temple < /strong></li >
        <
        li > 🐅Explore < strong > Gir National Park < /strong></li >
        <
        li > 🕍Visit < strong > Dwarkadhish Temple < /strong></li >
        <
        li > 🏝️Enjoy peaceful views of < strong > Diu Beach < /strong></li >
        <
        li > 🕌Explore < strong > Rani ki Vav < /strong> (UNESCO Site)</li >
        <
        li > 🛣️Scenic drive through Sasan Gir Forest < /li> <
        li > 🛍️Shopping in local Gujarati markets < /li> <
        li > 🍛Taste authentic Gujarati Thali < /li> < /
        ul > <
        /section>

        { /* ================= INCLUSIONS ================= */ } <
        section className = "gujarat-section gray-bg" >
        <
        h2 className = "gujarat-section-title" > ✅Inclusions in Package < /h2>

        <
        div className = "gujarat-inclusions" >
        <
        div className = "gujarat-include-card" > 🏨4 - Star Hotel Stay < /div> <
        div className = "gujarat-include-card" > 🚗Private AC Cab < /div> <
        div className = "gujarat-include-card" > 🍽️Breakfast & Dinner < /div> <
        div className = "gujarat-include-card" > 🎟️Entry Tickets to Attractions < /div>

        <
        div className = "gujarat-include-card" > 🧭Full Day City Tour < /div> <
        div className = "gujarat-include-card" > 🛕Temple Visits < /div> <
        div className = "gujarat-include-card" > 🐅Gir Jungle Safari(Optional) < /div> <
        div className = "gujarat-include-card" > 📸Photography Sessions < /div> < /
        div > <
        /section>

        { /* ================= HOTEL DETAILS ================= */ } <
        section className = "gujarat-section" >
        <
        h2 className = "gujarat-section-title" > 🏨Hotel Stay Details < /h2>

        <
        div className = "gujarat-hotel-grid" >

        <
        div className = "gujarat-hotel-card" >
        <
        img src = { hotel1 }
        alt = "Gujarat Hotel"
        className = "gujarat-hotel-img" / >
        <
        h3 > ✨Premium Hotel– Somnath < /h3> <
        p > < strong > Room Type: < /strong> Deluxe AC Room</p >
        <
        p > < strong > Amenities: < /strong> WiFi | Pool | Multi-Cuisine Restaurant</p >
        <
        p > < strong > Rating: < /strong> ★4.5</p >
        <
        /div>

        <
        div className = "gujarat-hotel-card" >
        <
        img src = { hotel2 }
        alt = "Gujarat Hotel"
        className = "gujarat-hotel-img" / >
        <
        h3 > ✨Nature Resort– Sasan Gir < /h3> <
        p > < strong > Room Type: < /strong> Eco Cottage</p >
        <
        p > < strong > Amenities: < /strong> Nature Trails | Restaurant | Campfire</p >
        <
        p > < strong > Rating: < /strong> ★4.6</p >
        <
        /div>

        <
        /div> < /
        section >

        { /* ================= FOOD DETAILS ================= */ } <
        section className = "gujarat-section gray-bg" >
        <
        h2 className = "gujarat-section-title" > 🍽️Food & Meals < /h2>

        <
        ul className = "gujarat-food-list" >
        <
        li > 🍱Daily Breakfast Buffet < /li> <
        li > 🍛Authentic Gujarati Dinner < /li> <
        li > 🍲Special Kathiyawadi Dinner Night < /li> <
        li > ☕Tea / Coffee served twice a day < /li> <
        li > 🍽️Optional: Street Food Tour in Dwarka < /li> < /
        ul > <
        /section>

        { /* ================= GALLERY ================= */ } <
        section className = "gujarat-section" >
        <
        h2 className = "gujarat-section-title" > 📸Photo Gallery < /h2>

        <
        div className = "gujarat-gallery" >
        <
        img src = { guj1 }
        alt = "Gujarat" / >
        <
        img src = { guj2 }
        alt = "Gujarat" / >
        <
        img src = { guj3 }
        alt = "Gujarat" / >
        <
        img src = { guj4 }
        alt = "Gujarat" / >
        <
        /div> < /
        section >

        { /* ================= ABOUT ================= */ } <
        section className = "gujarat-section" >
        <
        h2 className = "gujarat-section-title" > ℹ️ About the Package < /h2>

        <
        p className = "gujarat-details-text" >
        Discover the cultural and natural beauty of Gujarat.From ancient temples to rich wildlife,
        this tour offers a perfect blend of spirituality, nature, and heritage. <
        /p>

        <
        p className = "gujarat-details-text" >
        Ideal
        for families, couples, and nature lovers looking
        for a peaceful escape. <
        /p> < /
        section >

        { /* ================= REVIEWS ================= */ } <
        section className = "gujarat-section gray-bg" >
        <
        h2 className = "gujarat-section-title" > 💬Traveler Reviews < /h2>

        <
        div className = "gujarat-reviews" >

        <
        div className = "gujarat-review-card" >
        <
        p > ⭐⭐⭐⭐⭐ < /p> <
        p > "Somnath Temple darshan was unforgettable. Great arrangements!" < /p> <
        strong > —Neha Patel < /strong> < /
        div >

        <
        div className = "gujarat-review-card" >
        <
        p > ⭐⭐⭐⭐⭐ < /p> <
        p > "Loved the food, hotels, and Gir forest ride!" < /p> <
        strong > —Amit Sharma < /strong> < /
        div >

        <
        /div> < /
        section >

        { /* ================= FOOTER ================= */ } <
        div className = "gujarat-footer" >
        <
        Link to = "/holidaypackages"
        className = "gujarat-back-btn" > ←Back to Packages < /Link> < Link to = "/books
        "> <
        button className = "gujarat-booknow-btn" > Book Now < /button> </Link > < /
        div >

        <
        /div>
    );
};

export default GujaratEscape;