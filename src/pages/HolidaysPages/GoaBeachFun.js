import React from 'react'
import "./GoaBeachFun.css";
import { Link } from "react-router-dom";

// Main hero image
import goaMain from "../../media/goa/goabg.jpg";

// Gallery images
import goa1 from "../../media/goa/pack1.jpg";
import goa2 from "../../media/goa/pack2.jpg";
import goa3 from "../../media/goa/pack3.jpg";
import goa4 from "../../media/goa/pack4.jpg";

// Hotel images
import hotel1 from "../../media/goa/hotel1.jpg";
import hotel2 from "../../media/goa/hotel2.jpg";

const GoaBeachFun = () => {
    return ( <
        div className = "goa-container" >

        { /* =================== HERO ===================== */ } <
        section className = "goa-hero" >
        <
        img src = { goaMain }
        alt = "Goa Beach"
        className = "goa-hero-img" / >
        <
        div className = "goa-hero-overlay" >
        <
        h1 className = "goa-title" > Goa Beach Fun < /h1> <
        p className = "goa-subtitle" > 4 Days / 3 Nights | ₹32, 000 | ★4.7 < /p> <
        button className = "goa-booknow-btn" > Book Now < /button> < /
        div > <
        /section>

        { /* =================== HIGHLIGHTS ===================== */ } <
        section className = "goa-section" >
        <
        h2 className = "goa-section-title" > 🌴Package Highlights < /h2> <
        ul className = "goa-highlights" >
        <
        li > 🏖️Calangute & Baga Beach Visit < /li> <
        li > ⛵Dolphin Trip Adventure < /li> <
        li > 🎉Nightlife at Tito’ s Lane < /li> <
        li > 🕌Old Goa Church Tour < /li> <
        li > 🚤Water Sports: Jet Ski, Parasailing < /li> <
        li > 🍲Authentic Goan Seafood Experience < /li> <
        li > 🌅Sunset at Vagator Beach < /li> <
        li > 🛍️Local Flea Market Shopping < /li> < /
        ul > <
        /section>

        { /* =================== INCLUSIONS ===================== */ } <
        section className = "goa-section gray-bg" >
        <
        h2 className = "goa-section-title" > ✅Inclusions in Package < /h2>

        <
        div className = "goa-inclusions" >
        <
        div className = "goa-include-card" > 🏨4 - Star Beach Resort < /div> <
        div className = "goa-include-card" > 🛫Return Flight / Train < /div> <
        div className = "goa-include-card" > 🚗Airport Transfers < /div> <
        div className = "goa-include-card" > 🍽️Breakfast Included < /div>

        <
        div className = "goa-include-card" > 🎟️North Goa Sightseeing < /div> <
        div className = "goa-include-card" > 🏖️South Goa Tour < /div> <
        div className = "goa-include-card" > ⛵Dolphin Boat Ride < /div> <
        div className = "goa-include-card" > 🧭Guided Assistance < /div> < /
        div > <
        /section>

        { /* =================== HOTEL DETAILS ===================== */ } <
        section className = "goa-section" >
        <
        h2 className = "goa-section-title" > 🏨Hotel Stay Details < /h2>

        <
        div className = "hotel-grid" >

        <
        div className = "hotel-card" >
        <
        img src = { hotel1 }
        alt = "Goa Resort"
        className = "hotel-img" / >
        <
        h3 > ✨4 - Star Beach Resort– North Goa < /h3> <
        p > < strong > Room Type: < /strong> Deluxe Balcony Room</p >
        <
        p > < strong > Amenities: < /strong> Pool | Bar | Free WiFi | Sea View</p >
        <
        p > < strong > Rating: < /strong> ★4.6</p >
        <
        /div>

        <
        div className = "hotel-card" >
        <
        img src = { hotel2 }
        alt = "Goa Hotel"
        className = "hotel-img" / >
        <
        h3 > ✨Luxury Stay– Candolim < /h3> <
        p > < strong > Room Type: < /strong> Premium Suite</p >
        <
        p > < strong > Amenities: < /strong> Spa | Gym | Private Beach Access</p >
        <
        p > < strong > Rating: < /strong> ★4.8</p >
        <
        /div>

        <
        /div> < /
        section >

        { /* =================== FOOD ===================== */ } <
        section className = "goa-section gray-bg" >
        <
        h2 className = "goa-section-title" > 🍽️Food & Meals < /h2>

        <
        ul className = "food-list" >
        <
        li > 🍛Daily Breakfast Buffet < /li> <
        li > 🍤Goan Seafood Thali Once < /li> <
        li > 🍹Welcome Drink on Arrival < /li> <
        li > 🥘Candlelight Dinner(Optional) < /li> <
        li > ☕Tea / Coffee Maker in Rooms < /li> < /
        ul > <
        /section>

        { /* =================== GALLERY ===================== */ } <
        section className = "goa-section" >
        <
        h2 className = "goa-section-title" > 📸Photo Gallery < /h2>

        <
        div className = "goa-gallery" >
        <
        img src = { goa1 }
        alt = "" / >
        <
        img src = { goa2 }
        alt = "" / >
        <
        img src = { goa3 }
        alt = "" / >
        <
        img src = { goa4 }
        alt = "" / >
        <
        /div> < /
        section >

        { /* =================== ABOUT ===================== */ } <
        section className = "goa-section" >
        <
        h2 className = "goa-section-title" > ℹ️ About the Package < /h2>

        <
        p className = "goa-details-text" >
        Experience the vibrant beaches, nightlife, and tropical charm of Goa.This package blends relaxation, adventure, and delicious food
        for a perfect holiday. <
        /p>

        <
        p className = "goa-details-text" >
        Explore scenic beaches, enjoy water sports, visit historic churches,
        and taste authentic Goan cuisine during your stay. <
        /p> < /
        section >

        { /* =================== REVIEWS ===================== */ } <
        section className = "goa-section gray-bg" >
        <
        h2 className = "goa-section-title" > 💬Traveler Reviews < /h2>

        <
        div className = "goa-reviews" >
        <
        div className = "review-card" >
        <
        p > ⭐⭐⭐⭐⭐ < /p> <
        p > “Amazing beaches & wonderful nightlife!Had a great time.” < /p> <
        strong > —Sneha Patil < /strong> < /
        div >

        <
        div className = "review-card" >
        <
        p > ⭐⭐⭐⭐ < /p> <
        p > “Hotel was superb!Dolphin trip was unforgettable.” < /p> <
        strong > —Karan Thakur < /strong> < /
        div > <
        /div> < /
        section >

        { /* =================== FOOTER ===================== */ } <
        div className = "goa-footer" >
        <
        Link to = "/holidaypackages"
        className = "goa-back-btn" > ←Back to Packages < /Link> < Link to = "/books
        "><
        button className = "goa-booknow-btn" > Book Now < /button> </Link > < /
        div >

        <
        /div>
    )
}

export default GoaBeachFun