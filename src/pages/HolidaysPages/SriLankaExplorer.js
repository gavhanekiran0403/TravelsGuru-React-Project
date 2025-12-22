import React from "react";
import "./SriLankaExplorer.css";
import { Link } from "react-router-dom";

/* --- Import Images (replace with your actual image paths) --- */
import slMain from "../../media/srilanka/ports1.jpg";
import sl1 from "../../media/srilanka/pack1.jpg";
import sl2 from "../../media/srilanka/pack2.jpg";
import sl3 from "../../media/srilanka/pack3.jpg";
import sl4 from "../../media/srilanka/pack4.jpg";

// Hotel Images
import hotel1 from "../../media/srilanka/hotels1.jpg";
import hotel2 from "../../media/srilanka/hotels2.jpg";

const SriLankaExplorer = () => {
    return ( <
        div className = "sl-container" >

        { /* =================== HERO ===================== */ } <
        section className = "sl-hero" >
        <
        img src = { slMain }
        alt = "Sri Lanka Nature"
        className = "sl-hero-img" / >

        <
        div className = "sl-hero-overlay" >
        <
        h1 className = "sl-title" > Sri Lanka Explorer < /h1> <
        p className = "sl-subtitle" > 7 Days / 6 Nights | ₹95, 000 | ★4.7 < /p> <
        button className = "sl-booknow-btn" > Book Now < /button> < /
        div > <
        /section>

        { /* =================== HIGHLIGHTS ===================== */ } <
        section className = "sl-section" >
        <
        h2 className = "sl-section-title" > 🌴Package Highlights < /h2>

        <
        ul className = "sl-highlights" >
        <
        li > 🏞️Visit Sigiriya Rock Fortress < /li> <
        li > 🐘Pinnawala Elephant Orphanage Experience < /li> <
        li > 🚂Scenic Train Ride from Kandy to Ella < /li> <
        li > 🏖️Relax at Mirissa & Bentota Beaches < /li> <
        li > 🕌Cultural Tour of Kandy Temple < /li> <
        li > 🌄Visit Nuwara Eliya– Mini Switzerland < /li> <
        li > 🍃Tea Factory Visit & Plantation Walk < /li> <
        li > 🛍️Local shopping + Traditional Shows < /li> < /
        ul > <
        /section>

        { /* =================== INCLUSIONS ===================== */ } <
        section className = "sl-section gray-bg" >
        <
        h2 className = "sl-section-title" > ✅Inclusions in Package < /h2>

        <
        div className = "sl-inclusions" >
        <
        div className = "sl-include-card" > 🏨4 - Star Hotel Stay < /div> <
        div className = "sl-include-card" > 🚗Private AC Transportation < /div> <
        div className = "sl-include-card" > 🍽️Daily Breakfast < /div> <
        div className = "sl-include-card" > 🎫Sightseeing Tickets < /div>

        <
        div className = "sl-include-card" > 🚂Kandy– Ella Train Ride < /div> <
        div className = "sl-include-card" > 🌄Tea Factory Visit < /div> <
        div className = "sl-include-card" > 🏖️Beach Activities < /div> <
        div className = "sl-include-card" > 🧭Local Tour Guide < /div> < /
        div > <
        /section>

        { /* =================== HOTEL DETAILS ===================== */ } <
        section className = "sl-section" >
        <
        h2 className = "sl-section-title" > 🏨Hotel Stay Details < /h2>

        <
        div className = "hotel-grid" >
        <
        div className = "hotel-card" >
        <
        img src = { hotel1 }
        alt = "Hotel Sri Lanka"
        className = "hotel-img" / >
        <
        h3 > ✨Kandy– 3 Nights < /h3> <
        p > < strong > Room Type: < /strong> Deluxe Mountain View Room</p >
        <
        p > < strong > Amenities: < /strong> Free WiFi | Breakfast | Balcony</p >
        <
        p > < strong > Rating: < /strong> ★4.6</p >
        <
        /div>

        <
        div className = "hotel-card" >
        <
        img src = { hotel2 }
        alt = "Resort Sri Lanka"
        className = "hotel-img" / >
        <
        h3 > ✨Bentota– 3 Nights < /h3> <
        p > < strong > Room Type: < /strong> Sea Facing Premium Room</p >
        <
        p > < strong > Amenities: < /strong> Beach Access | Pool | Spa</p >
        <
        p > < strong > Rating: < /strong> ★4.8</p >
        <
        /div> < /
        div > <
        /section>

        { /* =================== FOOD DETAILS ===================== */ } <
        section className = "sl-section gray-bg" >
        <
        h2 className = "sl-section-title" > 🍽️Food & Meals < /h2>

        <
        ul className = "sl-food-list" >
        <
        li > 🍛Daily Breakfast Included < /li> <
        li > 🍲Sri Lankan Traditional Dinner(1 Day) < /li> <
        li > 🥥Coconut & Tropical Fruit Treats < /li> <
        li > 🍽️Sea Food Dinner(Optional Add - on) < /li> <
        li > ☕Free Tea / Coffee at Hotels < /li> < /
        ul > <
        /section>

        { /* =================== GALLERY ===================== */ } <
        section className = "sl-section" >
        <
        h2 className = "sl-section-title" > 📸Photo Gallery < /h2>

        <
        div className = "sl-gallery" >
        <
        img src = { sl1 }
        alt = "Sri Lanka" / >
        <
        img src = { sl2 }
        alt = "Sri Lanka" / >
        <
        img src = { sl3 }
        alt = "Sri Lanka" / >
        <
        img src = { sl4 }
        alt = "Sri Lanka" / >
        <
        /div> < /
        section >

        { /* =================== ABOUT ===================== */ } <
        section className = "sl-section" >
        <
        h2 className = "sl-section-title" > ℹ️ About the Package < /h2>

        <
        p className = "sl-details-text" >
        Discover Sri Lanka’ s breathtaking beauty— lush greenery, peaceful oceanside towns,
        ancient temples, and incredible wildlife. <
        /p> <
        p className = "sl-details-text" >
        This 7 - day journey is packed with nature, culture, adventure, and relaxation, making it perfect
        for couples, families, and solo travelers. <
        /p> < /
        section >

        { /* =================== REVIEWS ===================== */ } <
        section className = "sl-section gray-bg" >
        <
        h2 className = "sl-section-title" > 💬Traveler Reviews < /h2>

        <
        div className = "sl-reviews" >
        <
        div className = "sl-review-card" >
        <
        p > ⭐⭐⭐⭐⭐ < /p> <
        p > “The Kandy– Ella train was unforgettable!Amazing trip!” < /p> <
        strong > —Neha Kulkarni < /strong> < /
        div >

        <
        div className = "sl-review-card" >
        <
        p > ⭐⭐⭐⭐⭐ < /p> <
        p > “Loved the beaches and hotels.Great package!” < /p> <
        strong > —Arun Pawar < /strong> < /
        div > <
        /div> < /
        section >

        { /* =================== FOOTER ===================== */ } <
        div className = "sl-footer" >
        <
        Link to = "/holidaypackages"
        className = "sl-back-btn" > ←Back to Packages < /Link> <
        button className = "sl-booknow-btn" > Book Now < /button> < /
        div >

        <
        /div>
    );
};

export default SriLankaExplorer;