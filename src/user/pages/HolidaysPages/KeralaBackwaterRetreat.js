import React from 'react'
import "./KeralaBackwaterRetreat.css";
import { Link } from "react-router-dom";

import keralaMain from "../../media/kerala/keralabg.jpg";
import k1 from "../../media/kerala/kerala-1.jpg";
import k2 from "../../media/kerala/kerala-2.jpg";
import k3 from "../../media/kerala/kerala-3.jpg";
import k4 from "../../media/kerala/kerala-4.jpg";

// Hotel / Houseboat images
import hotel1 from "../../media/kerala/hotel-1.jpg";
import hotel2 from "../../media/kerala/hotel-2.jpg";

const KeralaBackwaterRetreat = () => {
    return ( <
        div className = "kerala-container" >

        { /* =================== HERO ===================== */ } <
        section className = "kerala-hero" >
        <
        img src = { keralaMain }
        alt = "Kerala Backwaters"
        className = "kerala-hero-img" / >
        <
        div className = "kerala-hero-overlay" >
        <
        h1 className = "kerala-title" > Kerala Backwater Retreat < /h1> <
        p className = "kerala-subtitle" > 5 Days / 4 Nights | ₹45, 000 | ★4.9 < /p> <
        button className = "kerala-booknow-btn" > Book Now < /button> < /
        div > <
        /section>

        { /* =================== HIGHLIGHTS ===================== */ } <
        section className = "kerala-section" >
        <
        h2 className = "kerala-section-title" > 🌟Package Highlights < /h2>

        <
        ul className = "kerala-highlights" >
        <
        li > ⛵Overnight stay in a Luxury < strong > Houseboat < /strong></li >
        <
        li > 🌴Explore < strong > Alleppey Backwaters < /strong></li >
        <
        li > 🌅Sunset boat ride through palm canals < /li> <
        li > 🏝️Visit < strong > Kumarakom Bird Sanctuary < /strong></li >
        <
        li > 💆Authentic Kerala < strong > Ayurvedic Spa < /strong></li >
        <
        li > 🏞️Tea gardens walk in Munnar(Optional) < /li> <
        li > 🛍️Kerala spices & handicraft shopping < /li> <
        li > 🍽️Traditional Kerala Sadya meal < /li> < /
        ul > <
        /section>

        { /* =================== INCLUSIONS ===================== */ } <
        section className = "kerala-section gray-bg" >
        <
        h2 className = "kerala-section-title" > ✅Inclusions in Package < /h2>

        <
        div className = "kerala-inclusions" >
        <
        div className = "kerala-include-card" > 🏨4 - Star Hotel Stay < /div> <
        div className = "kerala-include-card" > ⛵Premium Houseboat Stay < /div> <
        div className = "kerala-include-card" > 🚗Private AC Transfers < /div> <
        div className = "kerala-include-card" > 🍽️Breakfast & Dinner Included < /div>

        <
        div className = "kerala-include-card" > 🛶Backwater Cruise < /div> <
        div className = "kerala-include-card" > 🎟️Kumarakom Entry Tickets < /div> <
        div className = "kerala-include-card" > 💆Ayurvedic Massage Session < /div> <
        div className = "kerala-include-card" > 🧭Guided Nature Tour < /div> < /
        div > <
        /section>

        { /* =================== HOTEL & HOUSEBOAT DETAILS ===================== */ } <
        section className = "kerala-section" >
        <
        h2 className = "kerala-section-title" > 🏨Stay Details < /h2>

        <
        div className = "hotel-grid" >
        <
        div className = "hotel-card" >
        <
        img src = { hotel1 }
        alt = "Kerala Resort"
        className = "hotel-img" / >
        <
        h3 > 🌿4 - Star Backwater Resort– Alleppey < /h3> <
        p > < strong > Room Type: < /strong> Lagoon View Villa</p >
        <
        p > < strong > Amenities: < /strong> Pool | Free WiFi | Spa | Lake View</p >
        <
        p > < strong > Rating: < /strong> ★4.7</p >
        <
        /div>

        <
        div className = "hotel-card" >
        <
        img src = { hotel2 }
        alt = "Kerala Houseboat"
        className = "hotel-img" / >
        <
        h3 > ⛵Luxury Houseboat– Alleppey < /h3> <
        p > < strong > Room Type: < /strong> Air Conditioned Deluxe Cabin</p >
        <
        p > < strong > Amenities: < /strong> Private Deck | Meals | Sunset View</p >
        <
        p > < strong > Rating: < /strong> ★4.9</p >
        <
        /div> < /
        div > <
        /section>

        { /* =================== FOOD DETAILS ===================== */ } <
        section className = "kerala-section gray-bg" >
        <
        h2 className = "kerala-section-title" > 🍽️Food & Meals < /h2>

        <
        ul className = "food-list" >
        <
        li > 🍲Authentic Kerala Breakfast Buffet < /li> <
        li > 🍛Traditional Veg & Non - Veg Dinner < /li> <
        li > 🍱Kerala Sadya served on Banana Leaf < /li> <
        li > 🐟Fresh Fish Fry(Backwater Special) < /li> <
        li > ☕Tea / Coffee served on Houseboat deck < /li> < /
        ul > <
        /section>

        { /* =================== GALLERY ===================== */ } <
        section className = "kerala-section" >
        <
        h2 className = "kerala-section-title" > 📸Photo Gallery < /h2>

        <
        div className = "kerala-gallery" >
        <
        img src = { k1 }
        alt = "Kerala Backwaters" / >
        <
        img src = { k2 }
        alt = "Houseboat" / >
        <
        img src = { k3 }
        alt = "Nature" / >
        <
        img src = { k4 }
        alt = "Resort" / >
        <
        /div> < /
        section >

        { /* =================== ABOUT ===================== */ } <
        section className = "kerala-section" >
        <
        h2 className = "kerala-section-title" > ℹ️ About the Package < /h2>

        <
        p className = "kerala-details-text" >
        Experience the peaceful charm of Kerala with our < strong > Backwater Retreat Package < /strong>. Enjoy nature,
        luxury, food, and culture in one relaxing holiday. <
        /p>

        <
        p className = "kerala-details-text" >
        From staying in a premium resort to floating in a luxury houseboat,
        this package is perfect
        for couples and families. <
        /p> < /
        section >

        { /* =================== REVIEWS ===================== */ } <
        section className = "kerala-section gray-bg" >
        <
        h2 className = "kerala-section-title" > 💬Traveler Reviews < /h2>

        <
        div className = "kerala-reviews" >
        <
        div className = "review-card" >
        <
        p > ⭐⭐⭐⭐⭐ < /p> <
        p > “The houseboat stay was magical.Loved the food and sunset views!” < /p> <
        strong > —Neha K. < /strong> < /
        div >

        <
        div className = "review-card" >
        <
        p > ⭐⭐⭐⭐⭐ < /p> <
        p > “Perfect honeymoon destination.Very peaceful and scenic.” < /p> <
        strong > —Arjun V. < /strong> < /
        div > <
        /div> < /
        section >

        { /* =================== FOOTER ===================== */ } <
        div className = "kerala-footer" >
        <
        Link to = "/holidaypackages"
        className = "kerala-back-btn" > ←Back to Packages < /Link> <
        button className = "kerala-booknow-btn" > Book Now < /button> < /
        div >

        <
        /div>
    )
}

export default KeralaBackwaterRetreat