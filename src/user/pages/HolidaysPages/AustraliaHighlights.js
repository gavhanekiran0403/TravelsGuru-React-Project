import React from 'react'
import "./AustraliaHighlights.css";
import { Link } from "react-router-dom";

// Hero
import ausMain from "../../media/australia/austeriliabg.jpg";

// Gallery
import aus1 from "../../media/australia/aust-1.jpg";
import aus2 from "../../media/australia/aust-2.jpg";
import aus3 from "../../media/australia/aust-3.jpg";
import aus4 from "../../media/australia/aust-4.jpg";

// Hotels
import hotel1 from "../../media/australia/hotel-1.jpg";
import hotel2 from "../../media/australia/hotel-2.jpg";

const AustraliaHighlights = () => {
    return ( <
        div className = "aus-container" >

        { /* HERO */ } <
        section className = "aus-hero" >
        <
        img src = { ausMain }
        alt = "Australia"
        className = "aus-hero-img" / >
        <
        div className = "aus-hero-overlay" >
        <
        h1 className = "aus-title" > Australia Highlights Tour < /h1> <
        p className = "aus-subtitle" > 7 Days / 6 Nights | ₹2, 20, 000 | ★4.9 < /p> <
        button className = "aus-booknow-btn" > Book Now < /button> < /
        div > <
        /section>

        { /* HIGHLIGHTS */ } <
        section className = "aus-section" >
        <
        h2 className = "aus-section-title" > 🌟Package Highlights < /h2> <
        ul className = "aus-highlights" >
        <
        li > 🦘Explore * Sydney Opera House * & Harbour Bridge < /li> <
        li > 🏖️Visit * Bondi Beach * & coastal walk < /li> <
        li > 🌊Full - day tour of * Great Barrier Reef * < /li> <
        li > 🏜️Experience * Uluru Sunset Tour * < /li> <
        li > 🚡Ride * Skyrail Rainforest Cableway * < /li> <
        li > 🛥️Darling Harbour Dinner Cruise < /li> <
        li > 🐨Visit Koala Conservation Sanctuary < /li> <
        li > 🎡Explore Melbourne City & Eureka Skydeck < /li> < /
        ul > <
        /section>

        { /* INCLUSIONS */ } <
        section className = "aus-section gray-bg" >
        <
        h2 className = "aus-section-title" > ✅Inclusions in Package < /h2>

        <
        div className = "aus-inclusions" >
        <
        div className = "aus-include-card" > 🏨5 - Star Hotel Stay < /div> <
        div className = "aus-include-card" > ✈️Round - trip Airfare < /div> <
        div className = "aus-include-card" > 🚗Airport Transfers < /div> <
        div className = "aus-include-card" > 🍽️Daily Breakfast & Dinner < /div>

        <
        div className = "aus-include-card" > 🎟️Sydney Opera House Tour < /div> <
        div className = "aus-include-card" > 🛥️Darling Harbour Cruise < /div> <
        div className = "aus-include-card" > 🌊Great Barrier Reef Entry < /div> <
        div className = "aus-include-card" > 🧭Full City Sightseeing Tour < /div> < /
        div > <
        /section>

        { /* HOTEL DETAILS */ } <
        section className = "aus-section" >
        <
        h2 className = "aus-section-title" > 🏨Hotel Stay Details < /h2>

        <
        div className = "hotel-grid" >
        <
        div className = "hotel-card" >
        <
        img src = { hotel1 }
        className = "hotel-img"
        alt = "Sydney Hotel" / >
        <
        h3 > ✨5 - Star Luxury Hotel– Sydney < /h3> <
        p > < strong > Room Type: < /strong> Harbour View Deluxe Room</p >
        <
        p > < strong > Amenities: < /strong> Pool | Gym | Free WiFi | Ocean View</p >
        <
        p > < strong > Rating: < /strong> ★4.8</p >
        <
        /div>

        <
        div className = "hotel-card" >
        <
        img src = { hotel2 }
        className = "hotel-img"
        alt = "Melbourne Hotel" / >
        <
        h3 > ✨Premium Resort– Melbourne < /h3> <
        p > < strong > Room Type: < /strong> Executive Suite</p >
        <
        p > < strong > Amenities: < /strong> Spa | Infinity Pool | Restaurant</p >
        <
        p > < strong > Rating: < /strong> ★4.7</p >
        <
        /div> < /
        div > <
        /section>

        { /* FOOD DETAILS */ } <
        section className = "aus-section gray-bg" >
        <
        h2 className = "aus-section-title" > 🍽️Food & Meals < /h2>

        <
        ul className = "food-list" >
        <
        li > 🍳Daily Australian Breakfast Buffet < /li> <
        li > 🥗Two Fine - Dining Dinners Included < /li> <
        li > 🍖BBQ Dinner during Uluru Experience < /li> <
        li > 🛥️Dinner on Harbour Cruise < /li> <
        li > ☕Unlimited Tea / Coffee in Rooms < /li> < /
        ul > <
        /section>

        { /* GALLERY */ } <
        section className = "aus-section" >
        <
        h2 className = "aus-section-title" > 📸Photo Gallery < /h2>

        <
        div className = "aus-gallery" >
        <
        img src = { aus1 }
        alt = "Sydney" / >
        <
        img src = { aus2 }
        alt = "Great Barrier Reef" / >
        <
        img src = { aus3 }
        alt = "Melbourne" / >
        <
        img src = { aus4 }
        alt = "Uluru" / >
        <
        /div> < /
        section >

        { /* ABOUT */ } <
        section className = "aus-section" >
        <
        h2 className = "aus-section-title" > ℹ️ About the Package < /h2>

        <
        p className = "aus-details-text" >
        Discover the best of Australia— from beaches to wildlife to world - famous landmarks.This 7 - day tour lets you explore Sydney, Melbourne, and the Great Barrier Reef in complete luxury. <
        /p>

        <
        p className = "aus-details-text" >
        Perfect
        for families, couples, and adventure lovers wanting a mix of relaxation and exploration. <
        /p> < /
        section >

        { /* REVIEWS */ } <
        section className = "aus-section gray-bg" >
        <
        h2 className = "aus-section-title" > 💬Traveler Reviews < /h2>

        <
        div className = "aus-reviews" >
        <
        div className = "review-card" >
        <
        p > ⭐⭐⭐⭐⭐ < /p> <
        p > “Great Barrier Reef tour was unforgettable!” < /p> <
        strong > —Ananya Patel < /strong> < /
        div >

        <
        div className = "review-card" >
        <
        p > ⭐⭐⭐⭐⭐ < /p> <
        p > “Loved the Sydney city tour and hotel stays!” < /p> <
        strong > —Rohan Deshmukh < /strong> < /
        div > <
        /div> < /
        section >

        { /* FOOTER */ } <
        div className = "aus-footer" >
        <
        Link to = "/holidaypackages"
        className = "aus-back-btn" > ←Back to Packages < /Link> <Link to="/books
        "> <
        button className = "aus-booknow-btn" >
        Book Now <
        /button> < /
        Link > < /
        div >

        <
        /div>
    )
}

export default AustraliaHighlights