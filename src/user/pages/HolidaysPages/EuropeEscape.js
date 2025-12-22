import React from "react";
import "./EuropeEscape.css";
import { Link } from "react-router-dom";

// Main image
import europeMain from "../../media/europe/europebg.jpg";

// Gallery images
import e1 from "../../media/europe/europe1.jpg";
import e2 from "../../media/europe/europe2.jpg";
import e3 from "../../media/europe/europe3.jpg";
import e4 from "../../media/europe/europe4.jpg";

// Hotel images
import h1 from "../../media/europe/hotel-majestic-1157570_1280.jpg";
import h2 from "../../media/europe/resort europe.jpg";

const EuropeEscape = () => {
    return ( <
        div className = "europe-container" >

        { /* =============== HERO SECTION =============== */ } <
        section className = "europe-hero" >
        <
        img src = { europeMain }
        alt = "Europe"
        className = "europe-hero-img" / >
        <
        div className = "europe-hero-overlay" >
        <
        h1 className = "europe-title" > Europe Escape < /h1> <
        p className = "europe-subtitle" > 10 Days / 9 Nights | ₹2, 45, 000 | ★4.8 < /p> <
        button className = "europe-booknow-btn" > Book Now < /button> < /
        div > <
        /section>

        { /* =============== HIGHLIGHTS =============== */ } <
        section className = "europe-section" >
        <
        h2 className = "europe-section-title" > 🌍Package Highlights < /h2> <
        ul className = "europe-highlights" >
        <
        li > 🇫🇷Paris City Tour + Eiffel Tower < /li> <
        li > 🇨🇭Mt.Titlis Snow Experience < /li> <
        li > 🇮🇹Gondola Ride in Venice < /li> <
        li > 🚆Scenic Swiss Train Ride < /li> <
        li > 🏰Visit the Louvre Museum < /li> <
        li > 🛍️Shopping in Milan & Lucerne < /li> <
        li > 🍫Swiss Chocolate Tasting < /li> <
        li > 🌄Lake Lucerne Boat Cruise < /li> < /
        ul > <
        /section>

        { /* =============== INCLUSIONS =============== */ } <
        section className = "europe-section gray-bg" >
        <
        h2 className = "europe-section-title" > ✅Inclusions in Package < /h2>

        <
        div className = "europe-inclusions" >
        <
        div className = "europe-include-card" > 🏨Premium Hotel Stay < /div> <
        div className = "europe-include-card" > ✈️Round - trip Flights < /div> <
        div className = "europe-include-card" > 🚐Airport Transfers < /div> <
        div className = "europe-include-card" > 🍽️Breakfast & Dinner < /div>

        <
        div className = "europe-include-card" > 🎟️Mt.Titlis Tickets < /div> <
        div className = "europe-include-card" > 🌊Venice Gondola Ride < /div> <
        div className = "europe-include-card" > 🏰Museum Entry Pass < /div> <
        div className = "europe-include-card" > 🧭Guided City Tours < /div> < /
        div > <
        /section>

        { /* =============== HOTEL DETAILS =============== */ } <
        section className = "europe-section" >
        <
        h2 className = "europe-section-title" > 🏨Hotel Stay Details < /h2>

        <
        div className = "hotel-grid" >
        <
        div className = "hotel-card" >
        <
        img src = { h1 }
        alt = "Europe Hotel"
        className = "hotel-img" / >
        <
        h3 > ✨Paris– Luxury Hotel < /h3> <
        p > < strong > Room Type: < /strong> Superior View Room</p >
        <
        p > < strong > Amenities: < /strong> WiFi | Breakfast | City View</p >
        <
        p > < strong > Rating: < /strong> ★4.7</p >
        <
        /div>

        <
        div className = "hotel-card" >
        <
        img src = { h2 }
        alt = "Swiss Hotel"
        className = "hotel-img" / >
        <
        h3 > ✨Switzerland– Mountain Resort < /h3> <
        p > < strong > Room Type: < /strong> Alpine View Suite</p >
        <
        p > < strong > Amenities: < /strong> Heating | Balcony | Buffet</p >
        <
        p > < strong > Rating: < /strong> ★4.9</p >
        <
        /div> < /
        div > <
        /section>

        { /* =============== FOOD SECTION =============== */ } <
        section className = "europe-section gray-bg" >
        <
        h2 className = "europe-section-title" > 🍽️Food & Meals < /h2> <
        ul className = "food-list" >
        <
        li > 🥐Daily Continental Breakfast < /li> <
        li > 🍝4 European - Style Dinners < /li> <
        li > 🧀Swiss Cheese & Chocolate Tastings < /li> <
        li > 🍕Italian Pizza Experience < /li> <
        li > ☕Unlimited Tea / Coffee at Hotels < /li> < /
        ul > <
        /section>

        { /* =============== GALLERY =============== */ } <
        section className = "europe-section" >
        <
        h2 className = "europe-section-title" > 📸Photo Gallery < /h2>

        <
        div className = "europe-gallery" >
        <
        img src = { e1 }
        alt = "Europe Tour" / >
        <
        img src = { e2 }
        alt = "Switzerland" / >
        <
        img src = { e3 }
        alt = "Venice" / >
        <
        img src = { e4 }
        alt = "Paris" / >
        <
        /div> < /
        section >

        { /* =============== ABOUT =============== */ } <
        section className = "europe-section" >
        <
        h2 className = "europe-section-title" > ℹ️ About the Package < /h2> <
        p className = "europe-details-text" >
        Experience iconic Europe in 10 days— covering France, Switzerland, and Italy.Enjoy breathtaking landscapes, world - famous attractions, and unforgettable European charm. <
        /p> <
        p className = "europe-details-text" >
        This package includes luxury stays, guided tours, premium meals, and scenic journeys curated
        for the perfect European holiday. <
        /p> < /
        section >

        { /* =============== REVIEWS =============== */ } <
        section className = "europe-section gray-bg" >
        <
        h2 className = "europe-section-title" > 💬Traveler Reviews < /h2>

        <
        div className = "europe-reviews" >
        <
        div className = "review-card" >
        <
        p > ⭐⭐⭐⭐⭐ < /p> <
        p > “Best Europe trip ever!Switzerland was magical.” < /p> <
        strong > —Riya Mehta < /strong> < /
        div >

        <
        div className = "review-card" >
        <
        p > ⭐⭐⭐⭐ < /p> <
        p > “Hotels, food and itinerary were perfect.” < /p> <
        strong > —Amit Sharma < /strong> < /
        div > <
        /div> < /
        section >

        { /* =============== FOOTER =============== */ } <
        div className = "europe-footer" >
        <
        Link to = "/holidaypackages"
        className = "europe-back-btn" > ←Back to Packages < /Link> < Link to = "/books
        "><
        button className = "europe-booknow-btn" > Book Now < /button> </Link > < /
        div >

        <
        /div>
    );
};

export default EuropeEscape;