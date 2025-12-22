import { Link } from 'react-router-dom';
import Booksections from "../Component/Booksections";
import Packages from "../Component/Packages";
import ContactInformation from "../Component/ContactInformation";
import './Homes.css';
import bgvideo from "../media/bg video.mp4";

const Homes = () => {
    return ( <
        >
        <
        div className = "home-container" >
        <
        section className = "home-section"
        id = "home" >
        <
        div className = "home-content" >
        <
        h3 >
        Begin your < span className = "highlight-text" > A < /span>dventures Tours with us < /
        h3 > <
        p > Explore the world with us
        for the best travel experience < /p> <
        Link className = "home-btn-link"
        to = "/Books" >
        <
        button className = "home-explore-btn" > Book Now < /button> < /
        Link > <
        /div>

        <
        div className = "home-video-container" >
        <
        video src = { bgvideo }
        className = "home-video"
        loop autoPlay muted / >
        <
        /div>

        <
        div className = "home-info" >
        <
        div className = "info-item info-mail" >
        <
        i className = "fas fa-envelope info-icon" > < /i> <
        p > < a href = "mailto:walunjabhikt@gmail.com" > walunjabhikt @gmail.com < /a></p >
        <
        /div> <
        div className = "info-item info-social" >
        <
        i className = "fab fa-instagram info-icon" > < /i> <
        p > Tours & Travels < /p> < /
        div > <
        div className = "info-item info-call" >
        <
        i className = "fas fa-phone-alt info-icon" > < /i> <
        p > < a href = "tel:7709900772" > +91 - 7709900772 < /a></p >
        <
        /div> < /
        div > <
        /section>

        <
        Booksections / >
        <
        Packages / >
        <
        ContactInformation / >
        <
        /div> < /
        >
    );
};

export default Homes;