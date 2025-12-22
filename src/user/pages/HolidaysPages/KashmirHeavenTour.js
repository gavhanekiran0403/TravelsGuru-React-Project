import React from 'react'
import "./KashmirHeavenTour.css";
import { Link } from "react-router-dom";

// Main hero image
import kashmirMain from "../../media/himachal/himachalbg.jpg";

// Gallery images
import k1 from "../../media/himachal/pack1.jpg";
import k2 from "../../media/himachal/pack2.jpg";
import k3 from "../../media/himachal/pack3.jpg";
import k4 from "../../media/himachal/pack4.jpg";

// Hotel / Food images
import hotel1 from "../../media/himachal/hotel-1.jpg";
import hotel2 from "../../media/himachal/hotel-2.jpg";

const KashmirHeavenTour = () => {
    return ( <
        div className = "kashmir-container" >

        { /* ================= HERO ================= */ } <
        section className = "kashmir-hero" >
        <
        img src = { kashmirMain }
        className = "kashmir-hero-img" / >
        <
        div className = "kashmir-hero-overlay" >
        <
        h1 className = "kashmir-title" > Kashmir Heaven Tour < /h1> <
        p className = "kashmir-subtitle" > 7 Days / 6 Nights | ₹85, 000 | ★4.9 < /p> <
        button className = "kashmir-booknow-btn" > Book Now < /button> < /
        div > <
        /section>

        { /* ================= HIGHLIGHTS ================= */ } <
        section className = "kashmir-section" >
        <
        h2 className = "kashmir-section-title" > 🌟Package Highlights < /h2>

        <
        ul className = "kashmir-highlights" >
        <
        li > 🏞️Shikara Ride on Dal Lake < /li> <
        li > ❄️Gondola Ride at Gulmarg < /li> <
        li > 🌲Pahalgam Valley Sightseeing < /li> <
        li > 🏔️Sonmarg Glacier Visit < /li> <
        li > 🕌Mughal Garden Tour < /li> <
        li > 🛍️Srinagar Local Shopping < /li> <
        li > 🔥Kashmiri Cultural Evening(Optional) < /li> <
        li > 🍵Hot Kahwa Experience < /li> < /
        ul > <
        /section>

        { /* ================= INCLUSIONS (8 Items) ================= */ } <
        section className = "kashmir-section gray-bg" >
        <
        h2 className = "kashmir-section-title" > ✅Inclusions in Package < /h2>

        <
        div className = "kashmir-inclusions" >
        <
        div className = "kashmir-include-card" > 🏨4 - Star Hotel Stay < /div> <
        div className = "kashmir-include-card" > 🚗Private Cab
        for Sightseeing < /div> <
        div className = "kashmir-include-card" > 🍽️Daily Breakfast & Dinner < /div> <
        div className = "kashmir-include-card" > ⛰️Gulmarg Gondola Phase - 1 Ticket < /div>

        <
        div className = "kashmir-include-card" > 🛶Dal Lake Shikara Ride < /div> <
        div className = "kashmir-include-card" > 🧭Full Day Tours < /div> <
        div className = "kashmir-include-card" > 📸Photoshoot(Optional) < /div> <
        div className = "kashmir-include-card" > 🛡️Travel Insurance < /div> < /
        div > <
        /section>

        { /* ================= HOTEL DETAILS ================= */ } <
        section className = "kashmir-section" >
        <
        h2 className = "kashmir-section-title" > 🏨Hotel Stay Details < /h2>

        <
        div className = "hotel-grid" >
        <
        div className = "hotel-card" >
        <
        img src = { hotel1 }
        className = "hotel-img" / >
        <
        h3 > 4 - Star Luxury Hotel– Srinagar < /h3> <
        p > < strong > Room Type: < /strong> Premium Mountain View</p >
        <
        p > < strong > Amenities: < /strong> Heater | WiFi | Garden View</p >
        <
        p > < strong > Rating: < /strong> ★4.7</p >
        <
        /div>

        <
        div className = "hotel-card" >
        <
        img src = { hotel2 }
        className = "hotel-img" / >
        <
        h3 > Traditional Houseboat– Dal Lake < /h3> <
        p > < strong > Room Type: < /strong> Deluxe Heritage Room</p >
        <
        p > < strong > Amenities: < /strong> Heating | Wooden Interior | Balcony</p >
        <
        p > < strong > Rating: < /strong> ★4.8</p >
        <
        /div> < /
        div > <
        /section>

        { /* ================= FOOD DETAILS ================= */ } <
        section className = "kashmir-section gray-bg" >
        <
        h2 className = "kashmir-section-title" > 🍽️Food & Meals < /h2>

        <
        ul className = "food-list" >
        <
        li > 🍛Authentic Kashmiri Wazwan(One Dinner Included) < /li> <
        li > 🍳Daily Breakfast Buffet < /li> <
        li > 🥘Hot Vegetarian / Non - Veg Dinners < /li> <
        li > ☕Kashmiri Kahwa & Noon Chai Experience < /li> <
        li > 🍲Dinner Served on Houseboat < /li> < /
        ul > <
        /section>

        { /* ================= GALLERY ================= */ } <
        section className = "kashmir-section" >
        <
        h2 className = "kashmir-section-title" > 📸Photo Gallery < /h2>

        <
        div className = "kashmir-gallery" >
        <
        img src = { k1 }
        /> <
        img src = { k2 }
        /> <
        img src = { k3 }
        /> <
        img src = { k4 }
        /> < /
        div > <
        /section>

        { /* ================= ABOUT ================= */ } <
        section className = "kashmir-section" >
        <
        h2 className = "kashmir-section-title" > ℹ️ About the Package < /h2>

        <
        p className = "kashmir-details-text" >
        Known as * Heaven on Earth * , Kashmir offers snow mountains,
        apple valleys, and beautiful lakes.This 7 - day tour combines adventure, culture, and nature. <
        /p>

        <
        p className = "kashmir-details-text" >
        Enjoy a peaceful shikara ride, stay in a royal houseboat,
        explore valleys, glaciers, and experience pure Kashmiri hospitality. <
        /p> < /
        section >

        { /* ================= REVIEWS ================= */ } <
        section className = "kashmir-section gray-bg" >
        <
        h2 className = "kashmir-section-title" > 💬Traveler Reviews < /h2>

        <
        div className = "kashmir-reviews" >
        <
        div className = "review-card" >
        <
        p > ⭐⭐⭐⭐⭐ < /p> <
        p > "The best trip ever! Houseboat stay was magical!" < /p> <
        strong > —Anjali Verma < /strong> < /
        div >

        <
        div className = "review-card" >
        <
        p > ⭐⭐⭐⭐ < /p> <
        p > "Loved Gulmarg and Sonmarg. Perfect family trip!" < /p> <
        strong > —Sameer Khan < /strong> < /
        div > <
        /div> < /
        section >

        { /* ================= FOOTER ================= */ } <
        div className = "kashmir-footer" >
        <
        Link to = "/holidaypackages"
        className = "kashmir-back-btn" > ←Back to Packages < /Link> <
        button className = "kashmir-booknow-btn" > Book Now < /button> < /
        div > <
        /div>
    )
}

export default KashmirHeavenTour