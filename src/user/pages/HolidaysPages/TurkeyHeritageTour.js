import React from 'react'
import "./TurkeyHeritageTour.css";
import { Link } from "react-router-dom";

// Main Hero image
import turkeyMain from "../../media/turky/turkybg.jpg";

// Gallery images
import turkey1 from "../../media/turky/tpack1.jpg";
import turkey2 from "../../media/turky/tpack2.jpg";
import turkey3 from "../../media/turky/tpack3.jpg";
import turkey4 from "../../media/turky/tpack4.jpg";

// Hotel images
import hotel1 from "../../media/turky/hotel-1.jpg";
import hotel2 from "../../media/turky/hotel-2.jpg";


const TurkeyHeritageTour = () => {
    return ( <
        div className = "turkey-container" >

        { /* =================== HERO SECTION =================== */ } <
        section className = "turkey-hero" >
        <
        img src = { turkeyMain }
        alt = "Turkey Landscape"
        className = "turkey-hero-img" / >

        <
        div className = "turkey-hero-overlay" >
        <
        h1 className = "turkey-title" > Turkey Heritage Tour < /h1> <
        p className = "turkey-subtitle" > 7 Days / 6 Nights | ₹1, 45, 000 | ★4.9 < /p> <
        button className = "turkey-booknow-btn" > Book Now < /button> < /
        div > <
        /section>

        { /* =================== HIGHLIGHTS =================== */ } <
        section className = "turkey-section" >
        <
        h2 className = "turkey-section-title" > 🌟Package Highlights < /h2>

        <
        ul className = "turkey-highlights" >
        <
        li > 🏛️Explore the ancient city of < strong > Ephesus < /strong></li >
        <
        li > 🕌Visit the stunning < strong > Blue Mosque < /strong> in Istanbul</li >
        <
        li > 🎈Hot Air Balloon Ride in < strong > Cappadocia < /strong></li >
        <
        li > 🏰Explore < strong > Topkapi Palace < /strong> & Bosphorus Cruise</li >
        <
        li > 🌋Visit the natural wonder < strong > Pamukkale Thermal Pools < /strong></li >
        <
        li > 🛍️Grand Bazaar Shopping Experience < /li> <
        li > 🌄Sunset Point View in Cappadocia < /li> <
        li > 🚶Guided walking tour through historic streets < /li> < /
        ul > <
        /section>

        { /* =================== INCLUSIONS =================== */ } <
        section className = "turkey-section gray-bg" >
        <
        h2 className = "turkey-section-title" > ✅Inclusions in Package < /h2>

        <
        div className = "turkey-inclusions" >
        <
        div className = "turkey-include-card" > 🏨5 - Star Hotel Stay < /div> <
        div className = "turkey-include-card" > ✈️Round - trip Airfare < /div> <
        div className = "turkey-include-card" > 🚗Airport Transfers < /div> <
        div className = "turkey-include-card" > 🍽️Daily Breakfast & Dinner < /div>

        <
        div className = "turkey-include-card" > 🎫Cappadocia Balloon Ride < /div> <
        div className = "turkey-include-card" > 🏛️Ephesus Historical Tour < /div> <
        div className = "turkey-include-card" > 🕌Istanbul City Tour < /div> <
        div className = "turkey-include-card" > 🚢Bosphorus Cruise < /div> < /
        div > <
        /section>

        { /* =================== HOTEL SECTION =================== */ } <
        section className = "turkey-section" >
        <
        h2 className = "turkey-section-title" > 🏨Hotel Stay Details < /h2>

        <
        div className = "hotel-grid" >
        <
        div className = "hotel-card" >
        <
        img src = { hotel1 }
        alt = "Istanbul Hotel"
        className = "hotel-img" / >
        <
        h3 > ✨5 - Star Hotel– Istanbul < /h3> <
        p > < strong > Room Type: < /strong> Executive City View Room</p >
        <
        p > < strong > Amenities: < /strong> Spa | WiFi | Turkish Bath | Restaurant</p >
        <
        p > < strong > Rating: < /strong> ★4.9</p >
        <
        /div>

        <
        div className = "hotel-card" >
        <
        img src = { hotel2 }
        alt = "Cappadocia Cave Hotel"
        className = "hotel-img" / >
        <
        h3 > ✨Cave Hotel– Cappadocia < /h3> <
        p > < strong > Room Type: < /strong> Authentic Cave Suite</p >
        <
        p > < strong > Amenities: < /strong> Terrace View | Breakfast | Hot Tub</p >
        <
        p > < strong > Rating: < /strong> ★4.8</p >
        <
        /div> < /
        div > <
        /section>

        { /* =================== FOOD DETAILS =================== */ } <
        section className = "turkey-section gray-bg" >
        <
        h2 className = "turkey-section-title" > 🍽️Food & Meals < /h2>

        <
        ul className = "food-list" >
        <
        li > 🥙Daily Turkish Breakfast < /li> <
        li > 🍲Special Turkish Dinner(2 Nights) < /li> <
        li > 🍢Outdoor BBQ Dinner Experience < /li> <
        li > 🍽️Bosphorus Cruise Dinner Buffet < /li> <
        li > ☕Unlimited Tea & Coffee at Hotels < /li> < /
        ul > <
        /section>

        { /* =================== GALLERY =================== */ } <
        section className = "turkey-section" >
        <
        h2 className = "turkey-section-title" > 📸Photo Gallery < /h2>

        <
        div className = "turkey-gallery" >
        <
        img src = { turkey1 }
        alt = "Cappadocia" / >
        <
        img src = { turkey2 }
        alt = "Istanbul Mosque" / >
        <
        img src = { turkey3 }
        alt = "Pamukkale" / >
        <
        img src = { turkey4 }
        alt = "Ephesus" / >
        <
        /div> < /
        section >

        { /* =================== ABOUT =================== */ } <
        section className = "turkey-section" >
        <
        h2 className = "turkey-section-title" > ℹ️ About the Package < /h2>

        <
        p className = "turkey-details-text" >
        The < strong > Turkey Heritage Tour < /strong> is a perfect blend of culture,
        adventure, and historical exploration.From ancient ruins to hot air balloons,
        this tour lets you experience Turkey’ s natural beauty and rich heritage. <
        /p>

        <
        p className = "turkey-details-text" >
        Enjoy premium hotels, guided tours, shopping, breathtaking landscapes, and authentic Turkish food across the country. <
        /p> < /
        section >

        { /* =================== REVIEWS =================== */ } <
        section className = "turkey-section gray-bg" >
        <
        h2 className = "turkey-section-title" > 💬Traveler Reviews < /h2>

        <
        div className = "turkey-reviews" >
        <
        div className = "review-card" >
        <
        p > ⭐⭐⭐⭐⭐ < /p> <
        p > “Hot air balloon ride was magical!Best experience ever.” < /p> <
        strong > —Sneha Patil < /strong> < /
        div >

        <
        div className = "review-card" >
        <
        p > ⭐⭐⭐⭐ < /p> <
        p > “Loved Istanbul markets & Cappadocia landscapes!” < /p> <
        strong > —Vivek Deshmukh < /strong> < /
        div > <
        /div> < /
        section >

        { /* =================== FOOTER =================== */ } <
        div className = "turkey-footer" >
        <
        Link to = "/holidaypackages"
        className = "turkey-back-btn" > ←Back to Packages < /Link> <
        button className = "turkey-booknow-btn" > Book Now < /button> < /
        div >

        <
        /div>
    )
}

export default TurkeyHeritageTour