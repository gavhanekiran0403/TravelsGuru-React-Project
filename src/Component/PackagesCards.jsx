import React from "react";
import "./PackagesCards.css";

const PackagesCards = ({ pkg, navigate }) => {
    return ( <
        div className = "package-card" >
        <
        div className = "package-image" >
        <
        img src = { pkg.img }
        alt = { pkg.placeName }
        className = "package-img" / >
        <
        /div>

        <
        div className = "package-content" >
        <
        div className = "package-name" >
        <
        i className = "fas fa-map-marker-alt" > < /i> {pkg.placeName} < /
        div >

        <
        div className = "package-description" > { pkg.info } < /div> <
        div className = "package-price" > { pkg.price } < /div>

        <
        div className = "package-button-container" >
        <
        button className = "package-button"
        onClick = {
            () => navigate(pkg.route)
        } >
        View Details <
        /button> < /
        div > <
        /div> < /
        div >
    );
};

export default PackagesCards;