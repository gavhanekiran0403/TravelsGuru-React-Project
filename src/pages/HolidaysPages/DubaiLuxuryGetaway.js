import React from "react";
import "./DubaiLuxuryGetaway.css";
import { Link } from "react-router-dom";

import dubaiMain from "../../media/dubai/dubaibg.jpg";
import dubai1 from "../../media/dubai/dpack1.jpg";
import dubai2 from "../../media/dubai/dpack2.jpg";
import dubai3 from "../../media/dubai/dpack3.jpg";
import dubai4 from "../../media/dubai/dpack4.jpg";

// Hotel images
import hotel1 from "../../media/dubai/hotel-1749602_1280.jpg";
import hotel2 from "../../media/dubai/dinner-4656333_1280.jpg";

const DubaiLuxuryGetaway = () => {
    return ( <
        div className = "dubai-container" >

        { /* =================== HERO ===================== */ } <
        section className = "dubai-hero" >
        <
        img src = { dubaiMain }
        alt = "Dubai skyline"
        className = "dubai-hero-img" / >
        <
        div className = "dubai-hero-overlay" >
        <
        h1 className = "dubai-title" > Dubai Luxury Getaway < /h1> <
        p className = "dubai-subtitle" > 6 Days / 5 Nights | ₹1, 10, 000 | ★4.8 < /p> <
        button className = "dubai-booknow-btn" > Book Now < /button> < /
        div > <
        /section>

        { /* =================== HIGHLIGHTS ===================== */ } <
        section className = "dubai-section" >
        <
        h2 className = "dubai-section-title" > 🌟Package Highlights < /h2> <
        ul className = "dubai-highlights" >
        <
        li > 🏙️Visit the iconic < strong > Burj Khalifa < /strong> & Dubai Mall</li >
        <
        li > 🏜️Thrilling < strong > Desert Safari < /strong> with BBQ dinner</li >
        <
        li > 🚤 < strong > Luxury Marina Cruise < /strong> with candlelight dinner</li >
        <
        li > 🕌Explore < strong > Dubai Frame < /strong> & Palm Jumeirah</li >
        <
        li > 🏖️Relax at < strong > Jumeirah Beach < /strong> & Gold Souk shopping</li >
        <
        li > 🛍️Shopping experience at Deira Market < /li> <
        li > 🎡Visit Global Village(Seasonal) < /li> <
        li > 🎢Motiongate Dubai(Optional add - on) < /li> < /
        ul > <
        /section>

        { /* =================== INCLUSIONS (8 ITEMS) ===================== */ } <
        section className = "dubai-section gray-bg" >
        <
        h2 className = "dubai-section-title" > ✅Inclusions in Package < /h2>

        <
        div className = "dubai-inclusions" >
        <
        div className = "dubai-include-card" > 🏨5 - Star Hotel Stay < /div> <
        div className = "dubai-include-card" > ✈️Round - trip Airfare < /div> <
        div className = "dubai-include-card" > 🚗Airport Transfers < /div> <
        div className = "dubai-include-card" > 🍽️Daily Breakfast & Dinner < /div>

        <
        div className = "dubai-include-card" > 🎟️Burj Khalifa Tickets < /div> <
        div className = "dubai-include-card" > 🏜️Desert Safari With BBQ < /div> <
        div className = "dubai-include-card" > 🚤Marina Cruise Dinner < /div> <
        div className = "dubai-include-card" > 🧭Full Day Guided City Tour < /div> < /
        div > <
        /section>

        { /* =================== HOTEL DETAILS ===================== */ } <
        section className = "dubai-section" >
        <
        h2 className = "dubai-section-title" > 🏨Hotel Stay Details < /h2>

        <
        div className = "hotel-grid" >
        <
        div className = "hotel-card" >
        <
        img src = { hotel1 }
        alt = "Dubai Hotel"
        className = "hotel-img" / >
        <
        h3 > ✨5 - Star Hotel– Downtown Dubai < /h3> <
        p > < strong > Room Type: < /strong> Premium Executive Room</p >
        <
        p > < strong > Amenities: < /strong> Pool | Gym | Free WiFi | City View</p >
        <
        p > < strong > Rating: < /strong> ★4.8</p >
        <
        /div>

        <
        div className = "hotel-card" >
        <
        img src = { hotel2 }
        alt = "Hotel Dubai"
        className = "hotel-img" / >
        <
        h3 > ✨Luxury Resort– Palm Jumeirah < /h3> <
        p > < strong > Room Type: < /strong> Deluxe Sea View Room</p >
        <
        p > < strong > Amenities: < /strong> Private Beach | Spa | Infinity Pool</p >
        <
        p > < strong > Rating: < /strong> ★4.9</p >
        <
        /div> < /
        div > <
        /section>

        { /* =================== FOOD DETAILS ===================== */ } <
        section className = "dubai-section gray-bg" >
        <
        h2 className = "dubai-section-title" > 🍽️Food & Meals < /h2>

        <
        ul className = "food-list" >
        <
        li > 🍳Daily International Breakfast Buffet < /li> <
        li > 🍱Two Multi - Cuisine Dinners Included < /li> <
        li > 🥘BBQ Dinner during Desert Safari < /li> <
        li > 🍽️3 - Course Dinner on Marina Cruise < /li> <
        li > ☕Unlimited Tea / Coffee in Hotel Rooms < /li> < /
        ul > <
        /section>

        { /* =================== GALLERY ===================== */ } <
        section className = "dubai-section" >
        <
        h2 className = "dubai-section-title" > 📸Photo Gallery < /h2>

        <
        div className = "dubai-gallery" >
        <
        img src = { dubai1 }
        alt = "Burj Khalifa" / >
        <
        img src = { dubai2 }
        alt = "Desert Safari" / >
        <
        img src = { dubai3 }
        alt = "Marina Cruise" / >
        <
        img src = { dubai4 }
        alt = "Dubai Night View" / >
        <
        /div> < /
        section >

        { /* =================== ABOUT ===================== */ } <
        section className = "dubai-section" >
        <
        h2 className = "dubai-section-title" > ℹ️ About the Package < /h2>

        <
        p className = "dubai-details-text" >
        Experience pure luxury with our < strong > Dubai Luxury Getaway < /strong>. Explore skyscrapers,
        beaches, deserts, and premium malls
        while staying in world - class 5 - star hotels. <
        /p> <
        p className = "dubai-details-text" >
        This perfectly curated package gives you city tours, adventure, relaxation, and luxury— all in one unforgettable trip. <
        /p> < /
        section >

        { /* =================== REVIEWS ===================== */ } <
        section className = "dubai-section gray-bg" >
        <
        h2 className = "dubai-section-title" > 💬Traveler Reviews < /h2>

        <
        div className = "dubai-reviews" >
        <
        div className = "review-card" >
        <
        p > ⭐⭐⭐⭐⭐ < /p> <
        p > “The desert safari and cruise dinner were the best part of the trip!” < /p> <
        strong > —Priya Sharma < /strong> < /
        div >

        <
        div className = "review-card" >
        <
        p > ⭐⭐⭐⭐ < /p> <
        p > “Well - planned itinerary and amazing hotel with a great view!” < /p> <
        strong > —Rahul Mehta < /strong> < /
        div > <
        /div> < /
        section >

        { /* =================== FOOTER ===================== */ } <
        div className = "dubai-footer" >
        <
        Link to = "/holidaypackages"
        className = "dubai-back-btn" > ←Back to Packages <
        /Link> < Link to = "/books
        "> <
        button className = "dubai-booknow-btn" > Book Now < /button> </Link > < /
        div >

        <
        /div>
    );
};

export default DubaiLuxuryGetaway;