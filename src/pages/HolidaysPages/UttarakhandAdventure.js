import React from 'react'
import { Link } from "react-router-dom";
import "./UttarakhandAdventure.css"

// Hero Image
import ukMain from "../../media/uttarakhand/ukbg.jpg";

// Gallery
import uk1 from "../../media/uttarakhand/pack1.jpg";
import uk2 from "../../media/uttarakhand/pack2.jpg";
import uk3 from "../../media/uttarakhand/pack3.jpg";
import uk4 from "../../media/uttarakhand/pack4.jpg";

// Hotels
import hotel1 from "../../media/uttarakhand/hotel-1.jpg";
import hotel2 from "../../media/uttarakhand/hotel-2.jpg";

const UttarakhandAdventure = () => {
    return ( <
        div className = "utt-container" >

        { /* ================= HERO ================= */ } <
        section className = "utt-hero" >
        <
        img src = { ukMain }
        alt = "Uttarakhand mountains"
        className = "utt-hero-img" / >

        <
        div className = "utt-hero-overlay" >
        <
        h1 className = "utt-title" > Uttarakhand Adventure < /h1> <
        p className = "utt-subtitle" > 6 Days / 5 Nights | ₹28, 000 | ★4.7 < /p> <
        button className = "utt-book-btn" > Book Now < /button> < /
        div > <
        /section>

        { /* ================= HIGHLIGHTS ================= */ } <
        section className = "utt-section" >
        <
        h2 className = "utt-section-title" > 🌄Package Highlights < /h2>

        <
        ul className = "utt-highlights" >
        <
        li > 🏔️Explore < strong > Mussoorie– Queen of Hills < /strong></li >
        <
        li > 🌲Visit < strong > Kempty Falls < /strong></li >
        <
        li > 🚠Ropeway ride at < strong > Gun Hill Point < /strong></li >
        <
        li > 🧗Trek to George Everest Peak < /li> <
        li > 🌊River rafting adventure at < strong > Rishikesh < /strong></li >
        <
        li > 🕉️Ganga Aarti at < strong > Haridwar < /strong></li >
        <
        li > 🏞️Visit Rishikesh’ s Lakshman Jhula < /li> <
        li > 📸Stunning Himalayan view photography < /li> < /
        ul > <
        /section>

        { /* ================= INCLUSIONS ================= */ } <
        section className = "utt-section utt-gray-bg" >
        <
        h2 className = "utt-section-title" > ✅Inclusions in Package < /h2>

        <
        div className = "utt-inclusions" >
        <
        div className = "utt-include-card" > 🏨3 - Star & 4 - Star Hotels < /div> <
        div className = "utt-include-card" > 🚗Private Cab
        for Entire Trip < /div> <
        div className = "utt-include-card" > 🍽️Breakfast & Dinner < /div> <
        div className = "utt-include-card" > 🎟️All Sightseeing Included < /div>

        <
        div className = "utt-include-card" > 🧭Rishikesh River Rafting < /div> <
        div className = "utt-include-card" > 🔥Evening Bonfire(Resort) < /div> <
        div className = "utt-include-card" > 🌅Mussoorie Trek Experience < /div> <
        div className = "utt-include-card" > 📸Complimentary Photography < /div> < /
        div > <
        /section>

        { /* ================= HOTEL DETAILS ================= */ } <
        section className = "utt-section" >
        <
        h2 className = "utt-section-title" > 🏨Hotel Stay Details < /h2>

        <
        div className = "utt-hotel-grid" >

        <
        div className = "utt-hotel-card" >
        <
        img src = { hotel1 }
        alt = "hotel"
        className = "utt-hotel-img" / >
        <
        h3 > ✨Hillside Resort– Mussoorie < /h3> <
        p > < strong > Room Type: < /strong> Deluxe Valley View Room</p >
        <
        p > < strong > Amenities: < /strong> WiFi | Bonfire | Mountain View</p >
        <
        p > < strong > Rating: < /strong> ★4.6</p >
        <
        /div>

        <
        div className = "utt-hotel-card" >
        <
        img src = { hotel2 }
        alt = "hotel"
        className = "utt-hotel-img" / >
        <
        h3 > ✨Riverside Resort– Rishikesh < /h3> <
        p > < strong > Room Type: < /strong> Premium Cottage</p >
        <
        p > < strong > Amenities: < /strong> River View | Pool | Yoga Deck</p >
        <
        p > < strong > Rating: < /strong> ★4.7</p >
        <
        /div>

        <
        /div> < /
        section >

        { /* ================= FOOD DETAILS ================= */ } <
        section className = "utt-section utt-gray-bg" >
        <
        h2 className = "utt-section-title" > 🍽️Food & Meals < /h2>

        <
        ul className = "utt-food-list" >
        <
        li > 🍱Daily Breakfast Buffet < /li> <
        li > 🍛Hot dinner served at hotels < /li> <
        li > 🔥Special Bonfire Dinner in Mussoorie < /li> <
        li > 🍢Vegetarian & Jain options available < /li> <
        li > ☕Evening Tea / Coffee < /li> < /
        ul > <
        /section>

        { /* ================= GALLERY ================= */ } <
        section className = "utt-section" >
        <
        h2 className = "utt-section-title" > 📸Photo Gallery < /h2>

        <
        div className = "utt-gallery" >
        <
        img src = { uk1 }
        alt = "Uttarakhand" / >
        <
        img src = { uk2 }
        alt = "Uttarakhand" / >
        <
        img src = { uk3 }
        alt = "Uttarakhand" / >
        <
        img src = { uk4 }
        alt = "Uttarakhand" / >
        <
        /div> < /
        section >

        { /* ================= ABOUT ================= */ } <
        section className = "utt-section" >
        <
        h2 className = "utt-section-title" > ℹ️ About the Package < /h2>

        <
        p className = "utt-details-text" >
        Uttarakhand Adventure is perfect
        for nature enthusiasts, family tours, and adventure lovers.Explore the best hill stations, rivers, and spiritual destinations in a single trip. <
        /p>

        <
        p className = "utt-details-text" >
        Experience the peaceful Himalayas, thrilling rafting adventures, and serene temples. <
        /p> < /
        section >

        { /* ================= REVIEWS ================= */ } <
        section className = "utt-section utt-gray-bg" >
        <
        h2 className = "utt-section-title" > 💬Traveler Reviews < /h2>

        <
        div className = "utt-reviews" >

        <
        div className = "utt-review-card" >
        <
        p > ⭐⭐⭐⭐⭐ < /p> <
        p > "Beautiful mountains, clean hotels, and amazing itinerary!" < /p> <
        strong > —Kavita Nair < /strong> < /
        div >

        <
        div className = "utt-review-card" >
        <
        p > ⭐⭐⭐⭐⭐ < /p> <
        p > "Rishikesh rafting and Mussoorie trek made our trip unforgettable!" < /p> <
        strong > —Vivek Soni < /strong> < /
        div >

        <
        /div> < /
        section >

        { /* ================= FOOTER ================= */ } <
        div className = "utt-footer" >
        <
        Link to = "/holidaypackages"
        className = "utt-back-btn" > ←Back to Packages < /Link> <
        button className = "utt-book-btn" > Book Now < /button> < /
        div >

        <
        /div>
    )
}

export default UttarakhandAdventure