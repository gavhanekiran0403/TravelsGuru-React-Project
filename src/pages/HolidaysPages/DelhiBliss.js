import React from 'react'
import "./DelhiBliss.css";
import { Link } from "react-router-dom";

// Hero Image
import delhiMain from "../../media/delhi/delhibg.jpg";

// Gallery Images
import delhi1 from "../../media/delhi/pack1.jpg";
import delhi2 from "../../media/delhi/pack2.jpg";
import delhi3 from "../../media/delhi/pack3.jpg";
import delhi4 from "../../media/delhi/pack4.jpg";

// Hotel Images
import hotel1 from "../../media/delhi/hotel1.jpg";
import hotel2 from "../../media/delhi/hotel2.jpg";

const DelhiBliss = () => {
    return ( <
        div className = "dubai-container" >

        { /* ============= HERO ============= */ } <
        section className = "dubai-hero" >
        <
        img src = { delhiMain }
        alt = "Delhi landscape"
        className = "dubai-hero-img" / >

        <
        div className = "dubai-hero-overlay" >
        <
        h1 className = "dubai-title" > Delhi Bliss < /h1> <
        p className = "dubai-subtitle" > 4 Days / 3 Nights | ₹22, 000 | ★4.7 < /p> <
        button className = "dubai-booknow-btn" > Book Now < /button> < /
        div > <
        /section>

        { /* ============= HIGHLIGHTS ============= */ } <
        section className = "dubai-section" >
        <
        h2 className = "dubai-section-title" > 🌟Package Highlights < /h2>

        <
        ul className = "dubai-highlights" >
        <
        li > 🕌Visit < strong > India Gate < /strong> & Rashtrapati Bhavan</li >
        <
        li > 🕌Explore < strong > Qutub Minar < /strong> & Humayun’s Tomb</li >
        <
        li > 🛍️Shopping at < strong > Connaught Place < /strong> & Chandni Chowk</li >
        <
        li > 🙏Visit the beautiful < strong > Lotus Temple < /strong></li >
        <
        li > 🚇Delhi Metro Experience < /li> <
        li > 🍲Taste authentic Delhi street food < /li> <
        li > 📸Red Fort Photography Tour < /li> <
        li > 🎭Light & Sound Show at Old Fort < /li> < /
        ul > <
        /section>

        { /* ============= INCLUSIONS (8 ITEMS) ============= */ } <
        section className = "dubai-section gray-bg" >
        <
        h2 className = "dubai-section-title" > ✅Inclusions in Package < /h2>

        <
        div className = "dubai-inclusions" >
        <
        div className = "dubai-include-card" > 🏨4 - Star Hotel Stay < /div> <
        div className = "dubai-include-card" > 🚗Airport Pick & Drop < /div> <
        div className = "dubai-include-card" > 🍽️Breakfast Included < /div> <
        div className = "dubai-include-card" > 🎟️Entry Tickets
        for Major Attractions < /div>

        <
        div className = "dubai-include-card" > 🧭Full Day City Tour < /div> <
        div className = "dubai-include-card" > 🕌Guided Heritage Walk < /div> <
        div className = "dubai-include-card" > 🚇Metro Ride Experience < /div> <
        div className = "dubai-include-card" > 📸Photography Sessions < /div> < /
        div > <
        /section>

        { /* ============= HOTEL DETAILS ============= */ } <
        section className = "dubai-section" >
        <
        h2 className = "dubai-section-title" > 🏨Hotel Stay Details < /h2>

        <
        div className = "hotel-grid" >

        <
        div className = "hotel-card" >
        <
        img src = { hotel1 }
        alt = "Delhi Hotel"
        className = "hotel-img" / >
        <
        h3 > ✨Luxury Hotel– Central Delhi < /h3> <
        p > < strong > Room Type: < /strong> Premium Deluxe Room</p >
        <
        p > < strong > Amenities: < /strong> WiFi | Gym | Rooftop Dining</p >
        <
        p > < strong > Rating: < /strong> ★4.6</p >
        <
        /div>

        <
        div className = "hotel-card" >
        <
        img src = { hotel2 }
        alt = "Delhi Hotel"
        className = "hotel-img" / >
        <
        h3 > ✨Heritage Boutique Stay < /h3> <
        p > < strong > Room Type: < /strong> Heritage Suite</p >
        <
        p > < strong > Amenities: < /strong> Courtyard Café | Spa | 24/
        7 Service < /p> <
        p > < strong > Rating: < /strong> ★4.8</p >
        <
        /div>

        <
        /div> < /
        section >

        { /* ============= FOOD DETAILS ============= */ } <
        section className = "dubai-section gray-bg" >
        <
        h2 className = "dubai-section-title" > 🍽️Food & Meals < /h2>

        <
        ul className = "food-list" >
        <
        li > 🍱Daily Breakfast Included < /li> <
        li > 🍛Special Delhi Street Food Evening < /li> <
        li > 🥘North Indian Thali Dinner < /li> <
        li > ☕Tea / Coffee served twice a day < /li> <
        li > 🍽️Optional: Old Delhi Food Walk < /li> < /
        ul > <
        /section>

        { /* ============= GALLERY ============= */ } <
        section className = "dubai-section" >
        <
        h2 className = "dubai-section-title" > 📸Photo Gallery < /h2>

        <
        div className = "dubai-gallery" >
        <
        img src = { delhi1 }
        alt = "Delhi" / >
        <
        img src = { delhi2 }
        alt = "Delhi" / >
        <
        img src = { delhi3 }
        alt = "Delhi" / >
        <
        img src = { delhi4 }
        alt = "Delhi" / >
        <
        /div> < /
        section >

        { /* ============= ABOUT ============= */ } <
        section className = "dubai-section" >
        <
        h2 className = "dubai-section-title" > ℹ️ About the Package < /h2>

        <
        p className = "dubai-details-text" >
        Discover India 's heart—Delhi. A beautiful blend of history, culture, and modern
        lifestyle.Explore historical monuments, local markets, delicious food, and lively streets. <
        /p>

        <
        p className = "dubai-details-text" >
        Ideal
        for families, couples, and first - time India travelers. <
        /p> < /
        section >

        { /* ============= REVIEWS ============= */ } <
        section className = "dubai-section gray-bg" >
        <
        h2 className = "dubai-section-title" > 💬Traveler Reviews < /h2>

        <
        div className = "dubai-reviews" >

        <
        div className = "review-card" >
        <
        p > ⭐⭐⭐⭐⭐ < /p> <
        p > "Amazing food tour! Loved India Gate night view." < /p> <
        strong > —Rohan Verma < /strong> < /
        div >

        <
        div className = "review-card" >
        <
        p > ⭐⭐⭐⭐⭐ < /p> <
        p > "Clean hotel, great city tour. Very well arranged." < /p> <
        strong > —Meera Patel < /strong> < /
        div >

        <
        /div> < /
        section >

        { /* ============= FOOTER ============= */ } <
        div className = "dubai-footer" >
        <
        Link to = "/holidaypackages"
        className = "dubai-back-btn" > ←Back to Packages < /Link> < Link to = "/books
        "><
        button className = "dubai-booknow-btn" > Book Now < /button> </Link > < /
        div >

        <
        /div>
    )
}

export default DelhiBliss