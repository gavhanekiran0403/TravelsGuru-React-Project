import React from 'react'
import "./MaldivesIsland.css";
import { Link } from "react-router-dom";

// Main image
import maldivesMain from "../../media/maldives/maldivesbg.jpg";

// Gallery images
import m1 from "../../media/maldives/mpack1.jpg";
import m2 from "../../media/maldives/mpack2.jpg";
import m3 from "../../media/maldives/mpack3.jpg";
import m4 from "../../media/maldives/mpack4.jpg";

// Hotel images
import h1 from "../../media/maldives/mhotels1.jpg";
import h2 from "../../media/maldives/mhotels2.jpg";

const MaldivesIsland = () => {
    return ( <
        div className = "maldives-container" >

        { /* =============== HERO SECTION =============== */ } <
        section className = "maldives-hero" >
        <
        img src = { maldivesMain }
        alt = "Maldives"
        className = "maldives-hero-img" / >
        <
        div className = "maldives-hero-overlay" >
        <
        h1 className = "maldives-title" > Maldives Island Escape < /h1> <
        p className = "maldives-subtitle" > 5 Days / 4 Nights | ₹1, 60, 000 | ★4.9 < /p> <
        button className = "maldives-book-btn" > Book Now < /button> < /
        div > <
        /section>

        { /* =============== HIGHLIGHTS =============== */ } <
        section className = "maldives-section" >
        <
        h2 className = "maldives-section-title" > 🌴Package Highlights < /h2>

        <
        ul className = "maldives-highlights" >
        <
        li > 🏝️Stay in a Water Villa with ocean view < /li> <
        li > 🚤Speedboat Airport Transfers < /li> <
        li > 🌅Sunset Dolphin Cruise < /li> <
        li > 🤿Coral Reef Snorkeling Experience < /li> <
        li > 🍹Private Beach Candlelight Dinner < /li> <
        li > 🧘‍♀️Spa & Wellness Activities < /li> <
        li > 📸Island Photography Session < /li> <
        li > 🌊Lagoon Kayaking & Canoeing < /li> < /
        ul > <
        /section>

        { /* =============== INCLUSIONS =============== */ } <
        section className = "maldives-section gray-bg" >
        <
        h2 className = "maldives-section-title" > ✅Inclusions in Package < /h2>

        <
        div className = "maldives-inclusions" >
        <
        div className = "maldives-include-card" > 🏨Water Villa Stay < /div> <
        div className = "maldives-include-card" > 🍽️All Meals Included < /div> <
        div className = "maldives-include-card" > 🚤Airport Transfers < /div> <
        div className = "maldives-include-card" > 🍹Welcome Drinks < /div>

        <
        div className = "maldives-include-card" > 🤿Snorkeling Gear < /div> <
        div className = "maldives-include-card" > 🛶Kayaking < /div> <
        div className = "maldives-include-card" > 📶Free WiFi < /div> <
        div className = "maldives-include-card" > 🧭Guided Island Tour < /div> < /
        div > <
        /section>

        { /* =============== HOTEL DETAILS =============== */ } <
        section className = "maldives-section" >
        <
        h2 className = "maldives-section-title" > 🏨Hotel Stay Details < /h2>

        <
        div className = "hotel-grid" >
        <
        div className = "hotel-card" >
        <
        img src = { h1 }
        alt = "Water Villa"
        className = "hotel-img" / >
        <
        h3 > ✨Luxury Water Villa < /h3> <
        p > < strong > Room Type: < /strong> Ocean Lagoon Villa</p >
        <
        p > < strong > Amenities: < /strong> Private Deck | WiFi | Sea View</p >
        <
        p > < strong > Rating: < /strong> ★4.9</p >
        <
        /div>

        <
        div className = "hotel-card" >
        <
        img src = { h2 }
        alt = "Beach Resort"
        className = "hotel-img" / >
        <
        h3 > ✨Beachside Resort Villa < /h3> <
        p > < strong > Room Type: < /strong> Deluxe Beach Villa</p >
        <
        p > < strong > Amenities: < /strong> Private Beach | Open Shower</p >
        <
        p > < strong > Rating: < /strong> ★4.8</p >
        <
        /div> < /
        div > <
        /section>

        { /* =============== FOOD SECTION =============== */ } <
        section className = "maldives-section gray-bg" >
        <
        h2 className = "maldives-section-title" > 🍽️Food & Meals < /h2>

        <
        ul className = "food-list" >
        <
        li > 🥗Daily Buffet Breakfast < /li> <
        li > 🍲Multi - cuisine Lunch & Dinner < /li> <
        li > 🍛Special Maldivian Seafood Platter < /li> <
        li > 🍹Unlimited Mocktails & Juices < /li> <
        li > 🍽️Private Candlelight Dinner < /li> < /
        ul > <
        /section>

        { /* =============== GALLERY =============== */ } <
        section className = "maldives-section" >
        <
        h2 className = "maldives-section-title" > 📸Photo Gallery < /h2>

        <
        div className = "maldives-gallery" >
        <
        img src = { m1 }
        alt = "Maldives" / >
        <
        img src = { m2 }
        alt = "Resort" / >
        <
        img src = { m3 }
        alt = "Water Villa" / >
        <
        img src = { m4 }
        alt = "Beach" / >
        <
        /div> < /
        section >

        { /* =============== ABOUT =============== */ } <
        section className = "maldives-section" >
        <
        h2 className = "maldives-section-title" > ℹ️ About the Package < /h2>

        <
        p className = "maldives-details-text" >
        Maldives Island Escape offers a luxurious vacation with crystal - clear waters,
        beach villas, and exclusive resort experiences perfect
        for honeymooners,
        couples, and families. <
        /p>

        <
        p className = "maldives-details-text" >
        Enjoy curated activities including snorkeling, island tours, spa sessions,
        sunset cruises, and gourmet dining— all included
        for a premium Maldives holiday. <
        /p> < /
        section >

        { /* =============== REVIEWS =============== */ } <
        section className = "maldives-section gray-bg" >
        <
        h2 className = "maldives-section-title" > 💬Traveler Reviews < /h2>

        <
        div className = "maldives-reviews" >
        <
        div className = "review-card" >
        <
        p > ⭐⭐⭐⭐⭐ < /p> <
        p > “Heaven on Earth!Our water villa stay was breathtaking.” < /p> <
        strong > —Sneha & Kunal < /strong> < /
        div >

        <
        div className = "review-card" >
        <
        p > ⭐⭐⭐⭐⭐ < /p> <
        p > “Perfect honeymoon destination.Great food and amazing staff!” < /p> <
        strong > —Rohit & Meera < /strong> < /
        div > <
        /div> < /
        section >

        { /* =============== FOOTER =============== */ } <
        div className = "maldives-footer" >
        <
        Link to = "/holidaypackages"
        className = "maldives-back-btn" > ←Back to Packages < /Link> <
        button className = "maldives-book-btn" > Book Now < /button> < /
        div >

        <
        /div>
    )
}

export default MaldivesIsland