import React from "react";
import { useNavigate } from "react-router-dom";
import PackagesCards from "./PackagesCards";
import "./Packages.css";

// Import images
import Kashmir from "../media/jammu/jkbg.jpg";
import goa from "../media/goa/goabg.jpg";
import kerala from "../media/kerala/keralabg.jpg";
import rajasthan from "../media/rajasthan/rajbg.jpg";
import dubai from "../media/dubai/dubaibg.jpg";
import europe from "../media/europebg.jpg";
import thailand from "../media/dubai/dubaibg.jpg";
import maldives from "../media/maldives/maldivesbg.jpg";

const Packages = () => {
    const navigate = useNavigate();

    const domesticPackages = [{
            id: 12,
            placeName: "Kashmir",
            img: Kashmir,
            info: "Amazing mountains and scenic beauty.",
            price: "₹45,000 / person",
            route: "/kashmir-heaven-tour",
        },
        {
            id: 9,
            placeName: "Goa",
            img: goa,
            info: "Beautiful beaches and vibrant nightlife.",
            price: "₹25,000 / person",
            route: "/goa-beach-fun",
        },
        {
            id: 11,
            placeName: "Kerala",
            img: kerala,
            info: "Backwater retreats and serene nature.",
            price: "₹42,000 / person",
            route: "/kerala-backwater-retreat",
        },
        {
            id: 13,
            placeName: "Rajasthan",
            img: rajasthan,
            info: "Palaces, forts and royal heritage.",
            price: "₹60,000 / person",
            route: "/rajasthan-royal-heritage",
        },
    ];

    const internationalPackages = [{
            id: 3,
            placeName: "Dubai",
            img: dubai,
            info: "Luxury city tour and desert safari.",
            price: "₹1,10,000 / person",
            route: "/dubai-luxury-getaway",
        },
        {
            id: 2,
            placeName: "Europe",
            img: europe,
            info: "Explore iconic landmarks and culture.",
            price: "₹95,000 / person",
            route: "/europe-escape",
        },
        {
            id: 6,
            placeName: "Thailand",
            img: thailand,
            info: "Beaches, temples and adventure.",
            price: "₹72,000 / person",
            route: "/thailand-adventure",
        },
        {
            id: 4,
            placeName: "Maldives",
            img: maldives,
            info: "Island paradise and water sports.",
            price: "₹1,75,000 / person",
            route: "/maldives-island",
        },
    ];

    return ( <
        div className = "packages-container" >
        <
        h1 className = "packages-main-title" > Best Selling Destinations < /h1>

        <
        h2 className = "packages-subtitle" > 🏞️Domestic Packages < /h2> <
        div className = "packages-grid" > {
            domesticPackages.map((pkg) => ( <
                PackagesCards key = { pkg.id }
                pkg = { pkg }
                navigate = { navigate }
                />
            ))
        } <
        /div>

        <
        h2 className = "packages-subtitle" > 🌍International Packages < /h2> <
        div className = "packages-grid" > {
            internationalPackages.map((pkg) => ( <
                PackagesCards key = { pkg.id }
                pkg = { pkg }
                navigate = { navigate }
                />
            ))
        } <
        /div> < /
        div >
    );
};

export default Packages;