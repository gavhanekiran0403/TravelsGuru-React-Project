import React from "react";
import { useNavigate } from "react-router-dom";
import "./HolidayPackages.css";

// ✅ Import local images
import russiaImg from "../media/russia/pack1.jpg";
import europeImg from "../media/europe/london.jpg";
import dubaiImg from "../media/dubai/dpack1.jpg";
import maldivesImg from "../media/maldives/mpack1.jpg";
import srilankaImg from "../media/srilanka/srilankabg.jpg";
import thailandImg from "../media/thailand/pack4.jpg";
import turkeyImg from "../media/turky/turkybg.jpg";
import australiaImg from "../media/australia/austeriliabg.jpg";

import goaImg from "../media/goa/goabg.jpg";
import chennaiImg from "../media/chennai/chennaibg.jpg";
import keralaImg from "../media/kerala/keralabg.jpg";
import kashmirImg from "../media/jammu/jkbg.jpg";
import rajasthanImg from "../media/rajasthan/pack3.jpg";
import delhiImg from "../media/delhi/delhibg.jpg";
import gujratImg from "../media/gujrat/gujratbg.jpg";
import uttarakhandImg from "../media/uttarakhand/ukbg.jpg";

const packagesData = {
    international: [{
            id: 1,
            name: "Russia Delight",
            image: russiaImg,
            duration: "7 Days / 6 Nights",
            rating: 4.9,
            price: "₹1,45,000 / person",
            features: ["Eiffel Tower", "Swiss Alps", "Luxury Hotels"],
            route: "/russia-delight",
        },
        {
            id: 2,
            name: "Europe Escape",
            image: europeImg,
            duration: "5 Days / 4 Nights",
            rating: 4.7,
            price: "₹95,000 / person",
            features: ["Private Villa", "Spa & Dinner", "Water Sports"],
            route: "/europe-escape",
        },
        {
            id: 3,
            name: "Dubai Luxury Getaway",
            image: dubaiImg,
            duration: "6 Days / 5 Nights",
            rating: 4.8,
            price: "₹1,10,000 / person",
            features: ["Burj Khalifa", "Desert Safari", "City Tour"],
            route: "/dubai-luxury-getaway",
        },
        {
            id: 4,
            name: "Maldives Island",
            image: maldivesImg,
            duration: "5 Days / 4 Nights",
            rating: 4.9,
            price: "₹1,75,000 / person",
            features: ["Beach Villa", "Snorkeling", "Private Dinner"],
            route: "/maldives-island",
        },
        {
            id: 5,
            name: "Sri Lanka Explorer",
            image: srilankaImg,
            duration: "4 Days / 3 Nights",
            rating: 4.6,
            price: "₹88,000 / person",
            features: ["Universal Studios", "Marina Bay Sands", "Night Safari"],
            route: "/sri-lanka-explorer",
        },
        {
            id: 6,
            name: "Thailand Adventure",
            image: thailandImg,
            duration: "6 Days / 5 Nights",
            rating: 4.5,
            price: "₹72,000 / person",
            features: ["Bangkok", "Pattaya", "Coral Island"],
            route: "/thailand-adventure",
        },
        {
            id: 7,
            name: "Turkey Heritage Tour",
            image: turkeyImg,
            duration: "7 Days / 6 Nights",
            rating: 4.8,
            price: "₹1,35,000 / person",
            features: ["Istanbul", "Cappadocia", "Hot Air Balloon"],
            route: "/turkey-heritage-tour",
        },
        {
            id: 8,
            name: "Australia Highlights",
            image: australiaImg,
            duration: "8 Days / 7 Nights",
            rating: 4.9,
            price: "₹2,25,000 / person",
            features: ["Sydney Opera House", "Great Barrier Reef", "Gold Coast"],
            route: "/australia-highlights",
        },
    ],

    domestic: [{
            id: 9,
            name: "Goa Beach Fun",
            image: goaImg,
            duration: "4 Days / 3 Nights",
            rating: 4.7,
            price: "₹25,000 / person",
            features: ["Beach Resort", "Cruise", "Water Sports"],
            route: "/goa-beach-fun",
        },
        {
            id: 10,
            name: "Chennai Escape",
            image: chennaiImg,
            duration: "6 Days / 5 Nights",
            rating: 4.8,
            price: "₹35,000 / person",
            features: ["Snow Activities", "Solang Valley", "Local Sightseeing"],
            route: "/chennai-escape",
        },
        {
            id: 11,
            name: "Kerala Backwater Retreat",
            image: keralaImg,
            duration: "5 Days / 4 Nights",
            rating: 4.6,
            price: "₹42,000 / person",
            features: ["Houseboat Stay", "Munnar Visit", "Spa Experience"],
            route: "/kerala-backwater-retreat",
        },
        {
            id: 12,
            name: "Kashmir Heaven Tour",
            image: kashmirImg,
            duration: "6 Days / 5 Nights",
            rating: 4.9,
            price: "₹55,000 / person",
            features: ["Gulmarg", "Pahalgam", "Shikara Ride"],
            route: "/kashmir-heaven-tour",
        },
        {
            id: 13,
            name: "Rajasthan Royal Heritage",
            image: rajasthanImg,
            duration: "7 Days / 6 Nights",
            rating: 4.8,
            price: "₹60,000 / person",
            features: ["Jaipur", "Udaipur", "Jaisalmer Fort"],
            route: "/rajasthan-royal-heritage",
        },
        {
            id: 14,
            name: "Delhi Bliss",
            image: delhiImg,
            duration: "5 Days / 4 Nights",
            rating: 4.7,
            price: "₹48,000 / person",
            features: ["Red Fort", "Gate way of India", "Caves"],
            route: "/delhi-bliss",
        },
        {
            id: 15,
            name: "Gujrat Escape",
            image: gujratImg,
            duration: "5 Days / 4 Nights",
            rating: 4.6,
            price: "₹32,000 / person",
            features: ["Tea Estates", "Boating", "Botanical Garden"],
            route: "/gujarat-escape"
        },
        {
            id: 16,
            name: "Uttarakhand Adventure",
            image: uttarakhandImg,
            duration: "7 Days / 6 Nights",
            rating: 4.9,
            price: "₹68,000 / person",
            features: ["Pangong Lake", "Nubra Valley", "Monasteries"],
            route: "/uttarakhand-adventure"
        },
    ],
};

const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    return ( <
        div className = "holiday-stars" > { "★".repeat(fullStars) } { halfStar ? "☆" : "" } <
        span className = "holiday-rating" > { rating } < /span> < /
        div >
    );
};

const PackageCard = ({ pkg, navigate }) => ( <
    div className = "holiday-card" >
    <
    img src = { pkg.image }
    alt = { pkg.name }
    className = "holiday-card-img" / >
    <
    div className = "holiday-card-content" >
    <
    h3 className = "holiday-card-title" > { pkg.name } < /h3> <
    StarRating rating = { pkg.rating }
    /> <
    p className = "holiday-card-duration" > { pkg.duration } < /p> <
    ul className = "holiday-card-features" > {
        pkg.features.map((f, i) => ( <
            li key = { i } > ✅{ f } < /li>
        ))
    } <
    /ul> <
    div className = "holiday-card-bottom" >
    <
    p className = "holiday-card-price" > { pkg.price } < /p> <
    button className = "holiday-card-btn"
    onClick = {
        () => {
            if (pkg.route) navigate(pkg.route);
        }
    } >
    View Details <
    /button> < /
    div > <
    /div> < /
    div >
);

const HolidayPackages = () => {
    const navigate = useNavigate();

    return ( <
        div className = "holiday-page" >
        <
        h1 className = "holiday-page-title" > 🌴Holiday Packages < /h1> <
        p className = "holiday-page-subtitle" >
        Explore our exclusive International and Domestic holiday deals. <
        /p>

        <
        section className = "holiday-section" >
        <
        h2 className = "holiday-section-title" > 🌍International Packages < /h2> <
        div className = "holiday-grid" > {
            packagesData.international.map((pkg) => ( <
                PackageCard key = { pkg.id }
                pkg = { pkg }
                navigate = { navigate }
                />
            ))
        } <
        /div> < /
        section >

        <
        section className = "holiday-section" >
        <
        h2 className = "holiday-section-title" > 🏞️Domestic Packages < /h2> <
        div className = "holiday-grid" > {
            packagesData.domestic.map((pkg) => ( <
                PackageCard key = { pkg.id }
                pkg = { pkg }
                navigate = { navigate }
                />
            ))
        } <
        /div> < /
        section > <
        /div>
    );
};

export default HolidayPackages;