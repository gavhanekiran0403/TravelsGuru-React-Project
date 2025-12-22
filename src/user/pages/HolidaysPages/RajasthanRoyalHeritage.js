import React from 'react'
import "./RajasthanRoyalHeritage.css";
import { Link } from "react-router-dom";

// HERO IMAGE
import rajMain from "../../media/rajasthan/rajbg.jpg";

// GALLERY IMAGES
import r1 from "../../media/rajasthan/pack1.jpg";
import r2 from "../../media/rajasthan/pack2.jpg";
import r3 from "../../media/rajasthan/pack3.jpg";
import r4 from "../../media/rajasthan/pack4.jpg";

// HOTEL IMAGES
import hotel1 from "../../media/rajasthan/food1.jpg";
import hotel2 from "../../media/rajasthan/food2.jpg";

const RajasthanRoyalHeritage = () => {
    return ( <
        div className = "raj-container" >

        { /* =================== HERO ===================== */ } <
        section className = "raj-hero" >
        <
        img src = { rajMain }
        alt = "Rajasthan Heritage"
        className = "raj-hero-img" / >
        <
        div className = "raj-hero-overlay" >
        <
        h1 className = "raj-title" > Rajasthan Royal Heritage < /h1> <
        p className = "raj-subtitle" > 6 Days / 5 Nights | ₹55, 000 | ★4.9 < /p> <
        button className = "raj-booknow-btn" > Book Now < /button> < /
        div > <
        /section>

        { /* =================== HIGHLIGHTS ===================== */ } <
        section className = "raj-section" >
        <
        h2 className = "raj-section-title" > 🌟Package Highlights < /h2> <
        ul className = "raj-highlights" >
        <
        li > 🏰Visit Jaipur’ s < strong > Amber Fort < /strong> & City Palace</li >
        <
        li > 🕌Explore < strong > Jodhpur Mehrangarh Fort < /strong></li >
        <
        li > 🌅Sunset at < strong > Udaipur Lake Pichola < /strong></li >
        <
        li > 🐪Camel Safari in < strong > Thar Desert < /strong></li >
        <
        li > 💃Rajasthani Folk Dance & Cultural Evening < /li> <
        li > 🛍️Handicraft & Traditional Rajasthani Bazaar < /li> <
        li > 🍛Royal Rajasthani Thali Dinner < /li> <
        li > 📸Heritage palace photography experience < /li> < /
        ul > <
        /section>

        { /* =================== INCLUSIONS ===================== */ } <
        section className = "raj-section gray-bg" >
        <
        h2 className = "raj-section-title" > ✅Inclusions in Package < /h2>

        <
        div className = "raj-inclusions" >
        <
        div className = "raj-include-card" > 🏨4 / 5 - Star Heritage Hotels < /div> <
        div className = "raj-include-card" > 🚗AC Private Transfers < /div> <
        div className = "raj-include-card" > 🍽️Breakfast & Dinner Included < /div> <
        div className = "raj-include-card" > 🐪Camel Safari in Jaisalmer < /div>

        <
        div className = "raj-include-card" > 🎟️Fort & Palace Entry Tickets < /div> <
        div className = "raj-include-card" > 💃Cultural Folk Dance Show < /div> <
        div className = "raj-include-card" > 🛶Boat Ride in Lake Pichola < /div> <
        div className = "raj-include-card" > 🧭Guided Local Sightseeing < /div> < /
        div > <
        /section>

        { /* =================== HOTEL DETAILS ===================== */ } <
        section className = "raj-section" >
        <
        h2 className = "raj-section-title" > 🏨Hotel Stay Details < /h2>

        <
        div className = "hotel-grid" >
        <
        div className = "hotel-card" >
        <
        img src = { hotel1 }
        className = "hotel-img"
        alt = "Heritage Hotel Jaipur" / >
        <
        h3 > ✨Royal Heritage Hotel– Jaipur < /h3> <
        p > < strong > Room Type: < /strong> Maharaja Suite</p >
        <
        p > < strong > Amenities: < /strong> Pool | Spa | Fort View | Cultural Shows</p >
        <
        p > < strong > Rating: < /strong> ★4.8</p >
        <
        /div>

        <
        div className = "hotel-card" >
        <
        img src = { hotel2 }
        className = "hotel-img"
        alt = "Luxury Palace Udaipur" / >
        <
        h3 > ✨Lake View Heritage Palace– Udaipur < /h3> <
        p > < strong > Room Type: < /strong> Deluxe Lake View Room</p >
        <
        p > < strong > Amenities: < /strong> Private Balcony | Spa | Rooftop Dining</p >
        <
        p > < strong > Rating: < /strong> ★4.9</p >
        <
        /div> < /
        div > <
        /section>

        { /* =================== FOOD DETAILS ===================== */ } <
        section className = "raj-section gray-bg" >
        <
        h2 className = "raj-section-title" > 🍽️Food & Meals < /h2>

        <
        ul className = "food-list" >
        <
        li > 🍛Authentic Rajasthani Dal Baati Churma < /li> <
        li > 🍗Laal Maas(Non - Veg Special) < /li> <
        li > 🥘Royal Thali Dinner Experience < /li> <
        li > 🍱Breakfast Buffet at Heritage Hotels < /li> <
        li > ☕Evening Tea on Rooftop Fort Café < /li> < /
        ul > <
        /section>

        { /* =================== GALLERY ===================== */ } <
        section className = "raj-section" >
        <
        h2 className = "raj-section-title" > 📸Photo Gallery < /h2>

        <
        div className = "raj-gallery" >
        <
        img src = { r1 }
        alt = "Rajasthan Fort" / >
        <
        img src = { r2 }
        alt = "Desert Safari" / >
        <
        img src = { r3 }
        alt = "Udaipur Lake" / >
        <
        img src = { r4 }
        alt = "Palace" / >
        <
        /div> < /
        section >

        { /* =================== ABOUT ===================== */ } <
        section className = "raj-section" >
        <
        h2 className = "raj-section-title" > ℹ️ About the Package < /h2>

        <
        p className = "raj-details-text" >
        Discover Rajasthan 's royal culture, vast deserts, and magnificent palaces 
        with our < strong > Royal Heritage Package < /strong>. Explore Jaipur, Jodhpur, 
        Jaisalmer, Udaipur and enjoy the true essence of Rajasthan. <
        /p>

        <
        p className = "raj-details-text" >
        Perfect
        for families, couples, and culture lovers. <
        /p> < /
        section >

        { /* =================== REVIEWS ===================== */ } <
        section className = "raj-section gray-bg" >
        <
        h2 className = "raj-section-title" > 💬Traveler Reviews < /h2>

        <
        div className = "raj-reviews" >
        <
        div className = "review-card" >
        <
        p > ⭐⭐⭐⭐⭐ < /p> <
        p > “Loved the camel safari and heritage hotel experience!” < /p> <
        strong > —Sneha M. < /strong> < /
        div >

        <
        div className = "review-card" >
        <
        p > ⭐⭐⭐⭐⭐ < /p> <
        p > “Rajasthan feels like a royal dream.Great planning!” < /p> <
        strong > —Karan P. < /strong> < /
        div > <
        /div> < /
        section >

        { /* =================== FOOTER ===================== */ } <
        div className = "raj-footer" >
        <
        Link to = "/holidaypackages"
        className = "raj-back-btn" > ←Back to Packages < /Link> <
        button className = "raj-booknow-btn" > Book Now < /button> < /
        div >

        <
        /div>
    )
}

export default RajasthanRoyalHeritage