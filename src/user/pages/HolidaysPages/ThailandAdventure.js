import React from 'react'
import "./ThailandAdventure.css";
import { Link } from "react-router-dom";

// HERO IMAGE
import thaiMain from "../../media/thailand/thailandbg.jpg";

// Gallery Images
import thai1 from "../../media/thailand/pack1.jpg";
import thai2 from "../../media/thailand/pack2.jpg";
import thai3 from "../../media/thailand/pack3.jpg";
import thai4 from "../../media/thailand/pack4.jpg";

// Hotel Images
import hotel1 from "../../media/thailand/hotel1.jpg";
import hotel2 from "../../media/thailand/hotel2.jpg";

const ThailandAdventure = () => {
    return ( <
        div className = "thai-container" >

        { /* ================= HERO ================= */ } <
        section className = "thai-hero" >
        <
        img src = { thaiMain }
        alt = "Thailand Beach"
        className = "thai-hero-img" / >

        <
        div className = "thai-hero-overlay" >
        <
        h1 className = "thai-title" > Thailand Adventure < /h1> <
        p className = "thai-subtitle" > 7 Days / 6 Nights | ₹95, 000 | ★4.7 < /p> <
        button className = "thai-booknow-btn" > Book Now < /button> < /
        div > <
        /section>

        { /* ================= HIGHLIGHTS ================= */ } <
        section className = "thai-section" >
        <
        h2 className = "thai-section-title" > 🌟Package Highlights < /h2>

        <
        ul className = "thai-highlights" >
        <
        li > 🏝️Visit Phuket Beaches & Phi Phi Island < /li> <
        li > ⛵Coral Island + Water Sports < /li> <
        li > 🛕Explore Bangkok Temples & City Tour < /li> <
        li > 🐘Elephant Jungle Sanctuary Visit < /li> <
        li > 🚤James Bond Island Long - Tail Boat Ride < /li> <
        li > 🛍️Shopping at Bangkok Floating Market < /li> <
        li > 🍹Phuket Night Market Experience < /li> <
        li > 💆Relaxing Thai Spa Session < /li> < /
        ul > <
        /section>

        { /* ================= INCLUSIONS (8 ITEMS) ================= */ } <
        section className = "thai-section gray-bg" >
        <
        h2 className = "thai-section-title" > ✅Inclusions in Package < /h2>

        <
        div className = "thai-inclusions" >
        <
        div className = "thai-include-card" > 🏨4 - Star & 5 - Star Hotels < /div> <
        div className = "thai-include-card" > ✈️Round - Trip Flights < /div> <
        div className = "thai-include-card" > 🚖Airport Transfers < /div> <
        div className = "thai-include-card" > 🛥️Phi Phi Island Tour < /div>

        <
        div className = "thai-include-card" > 🥗Daily Breakfast < /div> <
        div className = "thai-include-card" > 🎟️Bangkok Temple Tickets < /div> <
        div className = "thai-include-card" > 💆Thai Spa Session < /div> <
        div className = "thai-include-card" > 🧭Full - Day Phuket City Tour < /div> < /
        div > <
        /section>

        { /* ================= HOTEL DETAILS ================= */ } <
        section className = "thai-section" >
        <
        h2 className = "thai-section-title" > 🏨Hotel Stay Details < /h2>

        <
        div className = "hotel-grid" >
        <
        div className = "hotel-card" >
        <
        img src = { hotel1 }
        alt = "Phuket Hotel"
        className = "hotel-img" / >
        <
        h3 > ✨Luxury Beach Resort– Phuket < /h3>

        <
        p > < strong > Room Type: < /strong> Ocean View Deluxe</p >
        <
        p > < strong > Amenities: < /strong> Pool | Spa | Beach Access | WiFi</p >
        <
        p > < strong > Rating: < /strong> ★4.7</p >
        <
        /div>

        <
        div className = "hotel-card" >
        <
        img src = { hotel2 }
        alt = "Bangkok Hotel"
        className = "hotel-img" / >
        <
        h3 > ✨5 - Star Hotel– Bangkok < /h3>

        <
        p > < strong > Room Type: < /strong> Premium City View</p >
        <
        p > < strong > Amenities: < /strong> Rooftop Pool | Gym | Breakfast</p >
        <
        p > < strong > Rating: < /strong> ★4.8</p >
        <
        /div> < /
        div > <
        /section>

        { /* ================= FOOD DETAILS ================= */ } <
        section className = "thai-section gray-bg" >
        <
        h2 className = "thai-section-title" > 🍽️Food & Meals < /h2>

        <
        ul className = "food-list" >
        <
        li > 🍳Daily Breakfast Buffet < /li> <
        li > 🍛Authentic Thai Dinner(2 Days) < /li> <
        li > 🍤Seafood Buffet Night < /li> <
        li > 🥘Lunch During Island Tour < /li> <
        li > ☕Coffee / Tea Complimentary < /li> < /
        ul > <
        /section>

        { /* ================= GALLERY ================= */ } <
        section className = "thai-section" >
        <
        h2 className = "thai-section-title" > 📸Photo Gallery < /h2>

        <
        div className = "thai-gallery" >
        <
        img src = { thai1 }
        alt = "Island" / >
        <
        img src = { thai2 }
        alt = "Temple" / >
        <
        img src = { thai3 }
        alt = "Market" / >
        <
        img src = { thai4 }
        alt = "Beach" / >
        <
        /div> < /
        section >

        { /* ================= ABOUT ================= */ } <
        section className = "thai-section" >
        <
        h2 className = "thai-section-title" > ℹ️ About the Package < /h2>

        <
        p className = "thai-details-text" >
        Thailand Adventure is designed
        for beach lovers, adventure seekers,
        food enthusiasts, and culture explorers.Experience the magic of Phuket, Phi Phi, Coral Island, and Bangkok in one amazing journey. <
        /p>

        <
        p className = "thai-details-text" >
        Enjoy guided tours, luxury stays, delicious meals, and seamless travel— giving you the perfect holiday getaway. <
        /p> < /
        section >

        { /* ================= REVIEWS ================= */ } <
        section className = "thai-section gray-bg" >
        <
        h2 className = "thai-section-title" > 💬Traveler Reviews < /h2>

        <
        div className = "thai-reviews" >

        <
        div className = "review-card" >
        <
        p > ⭐⭐⭐⭐⭐ < /p> <
        p > “Best experience ever!Loved the beaches and food!” < /p> <
        strong > —Neha Patil < /strong> < /
        div >

        <
        div className = "review-card" >
        <
        p > ⭐⭐⭐⭐ < /p> <
        p > “Very well managed trip and amazing hotel service.” < /p> <
        strong > —Kunal Deshmukh < /strong> < /
        div >

        <
        /div> < /
        section >

        { /* ================= FOOTER ================= */ } <
        div className = "thai-footer" >
        <
        Link to = "/holidaypackages"
        className = "thai-back-btn" > ←Back to Packages <
        /Link>

        <
        button className = "thai-booknow-btn" > Book Now < /button> < /
        div >

        <
        /div>
    )
}

export default ThailandAdventure