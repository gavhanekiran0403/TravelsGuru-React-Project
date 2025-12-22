import React from 'react'
import "./ChennaiEscape.css";
import { Link } from "react-router-dom";

// Hero + gallery images
import chennaiMain from "../../media/chennai/chennaibg.jpg";
import ce1 from "../../media/chennai/pack1.jpg";
import ce2 from "../../media/chennai/pack2.jpg";
import ce3 from "../../media/chennai/pack3.jpg";
import ce4 from "../../media/chennai/pack4.jpg";

// Hotel images
import hotel1 from "../../media/chennai/hotel-1.jpg";
import hotel2 from "../../media/chennai/food12.jpg";

const ChennaiEscape = () => {
    return ( <
        div className = "ce-container" >

        { /* =============== HERO SECTION ================= */ } <
        section className = "ce-hero" >
        <
        img src = { chennaiMain }
        className = "ce-hero-img"
        alt = "Chennai Beach" / >

        <
        div className = "ce-hero-overlay" >
        <
        h1 className = "ce-title" > Chennai Escape < /h1> <
        p className = "ce-subtitle" > 4 Days / 3 Nights | ₹25, 000 | ★4.7 < /p> <
        button className = "ce-book-btn" > Book Now < /button> < /
        div > <
        /section>

        { /* =============== HIGHLIGHTS ================= */ } <
        section className = "ce-section" >
        <
        h2 className = "ce-section-title" > 🌟Package Highlights < /h2>

        <
        ul className = "ce-highlights" >
        <
        li > 🏖️Sunrise at < strong > Marina Beach < /strong></li >
        <
        li > 🏛️Visit the historic < strong > Fort St.George < /strong></li >
        <
        li > ⛪Walk through < strong > Santhome Cathedral < /strong></li >
        <
        li > 🛕Explore < strong > Kapaleeshwarar Temple < /strong></li >
        <
        li > 🛍️Shopping at < strong > T Nagar < /strong></li >
        <
        li > 🥥Authentic Tamil Nadu traditional lunch < /li> <
        li > 🎭Visit Government Museum & Art Gallery < /li> <
        li > 🌅Evening relaxing at Besant Nagar Beach < /li> < /
        ul > <
        /section>

        { /* =============== INCLUSIONS ================= */ } <
        section className = "ce-section gray-bg" >
        <
        h2 className = "ce-section-title" > ✅Inclusions in Package < /h2>

        <
        div className = "ce-inclusions" >
        <
        div className = "ce-include-card" > 🏨3 - Star Hotel Stay < /div> <
        div className = "ce-include-card" > 🚗Local Transfers < /div> <
        div className = "ce-include-card" > 🍽️Breakfast & Dinner < /div> <
        div className = "ce-include-card" > 🏛️Museum & Temple Entry < /div>

        <
        div className = "ce-include-card" > 🛕Guided City Tour < /div> <
        div className = "ce-include-card" > 🏖️Marina Beach Visit < /div> <
        div className = "ce-include-card" > 🍱Traditional Tamil Lunch < /div> <
        div className = "ce-include-card" > 📸Photo Session Add - on < /div> < /
        div > <
        /section>

        { /* =============== HOTEL DETAILS ================= */ } <
        section className = "ce-section" >
        <
        h2 className = "ce-section-title" > 🏨Hotel Stay Details < /h2>

        <
        div className = "hotel-grid" >
        <
        div className = "hotel-card" >
        <
        img src = { hotel1 }
        className = "hotel-img"
        alt = "Hotel Chennai" / >
        <
        h3 > 3 - Star Hotel– T Nagar < /h3> <
        p > < strong > Room Type: < /strong> Deluxe AC Room</p >
        <
        p > < strong > Amenities: < /strong> WiFi | Breakfast | TV | City View</p >
        <
        p > < strong > Rating: < /strong> ★4.5</p >
        <
        /div>

        <
        div className = "hotel-card" >
        <
        img src = { hotel2 }
        className = "hotel-img"
        alt = "Resort Chennai" / >
        <
        h3 > Luxury Resort– ECR Road < /h3> <
        p > < strong > Room Type: < /strong> Premium Sea View Cottage</p >
        <
        p > < strong > Amenities: < /strong> Pool | Spa | Private Beach Access</p >
        <
        p > < strong > Rating: < /strong> ★4.8</p >
        <
        /div> < /
        div > <
        /section>

        { /* =============== FOOD DETAILS ================= */ } <
        section className = "ce-section gray-bg" >
        <
        h2 className = "ce-section-title" > 🍽️Food & Meals < /h2>

        <
        ul className = "food-list" >
        <
        li > 🍛Daily Complimentary South Indian Breakfast < /li> <
        li > 🍽️Authentic Tamil Nadu Veg / Non - Veg Dinner < /li> <
        li > 🥥Traditional Banana Leaf Lunch < /li> <
        li > 🍤Special Marina Beach Street Food Tasting < /li> <
        li > ☕Tea / Coffee in Hotel Rooms < /li> < /
        ul > <
        /section>

        { /* =============== GALLERY ================= */ } <
        section className = "ce-section" >
        <
        h2 className = "ce-section-title" > 📸Photo Gallery < /h2>

        <
        div className = "ce-gallery" >
        <
        img src = { ce1 }
        alt = "Chennai View" / >
        <
        img src = { ce2 }
        alt = "Temple" / >
        <
        img src = { ce3 }
        alt = "Beach" / >
        <
        img src = { ce4 }
        alt = "Marina Night" / >
        <
        /div> < /
        section >

        { /* =============== ABOUT ================= */ } <
        section className = "ce-section" >
        <
        h2 className = "ce-section-title" > ℹ️ About the Package < /h2>

        <
        p className = "ce-details-text" >
        Explore the cultural beauty of Tamil Nadu with our < strong > Chennai Escape < /strong>.
        Experience temples, beaches, heritage sites, and authentic food. <
        /p>

        <
        p className = "ce-details-text" >
        Perfect
        for families, couples, and solo travelers looking
        for a peaceful getaway. <
        /p> < /
        section >

        { /* =============== REVIEWS ================= */ } <
        section className = "ce-section gray-bg" >
        <
        h2 className = "ce-section-title" > 💬Traveler Reviews < /h2>

        <
        div className = "ce-reviews" >
        <
        div className = "review-card" >
        <
        p > ⭐⭐⭐⭐⭐ < /p> <
        p > “Loved the ECR resort stay and the cultural tour!” < /p> <
        strong > —Meera N. < /strong> < /
        div >

        <
        div className = "review-card" >
        <
        p > ⭐⭐⭐⭐ < /p> <
        p > “Great tour guide and amazing Tamil food experience.” < /p> <
        strong > —Suresh P. < /strong> < /
        div > <
        /div> < /
        section >

        { /* FOOTER */ } <
        div className = "ce-footer" >
        <
        Link to = "/holidaypackages"
        className = "ce-back-btn" > ←Back to Packages < /Link> < Link to = "/books
        "><
        button className = "ce-book-btn" > Book Now < /button> </Link > < /
        div >

        <
        /div>
    )
}

export default ChennaiEscape