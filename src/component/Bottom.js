import React from 'react'
import './CSS/Bottom.css'




const Bottom = ()=> {
    return(
        <>
    <div className="bottom-section">
        <ul>POPULAR CATEGORIES
            <li>Cars</li>
            <li>Flats for rent</li>
            <li>Jobs</li>
            <li>Mobile Phones</li>
        </ul>
        <ul>TRENDING SEARCHES
            <li>Bikes</li>
            <li>Watches</li>
            <li>Books</li>
            <li>Dogs</li>
        </ul>
        <ul>ABOUT US
            <li>About OLX Group</li>
            <li>OLX Blog</li>
            <li>Contact Us</li>
            <li>OLX for Businesses</li>
        </ul>
        <ul>OLX
            <li>Help</li>
            <li>Sitemap</li>
            <li>Legal & Privacy information</li>
        </ul>
        <div className="icon">
            <h4>FOLLOW US</h4>
            <div className="icon-div">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fas fa-play-circle"></i>
            <i className="fab fa-instagram"></i>            
            </div>
            <div className="link">
            <img width="80" src="https://statics.olx.com.pk/external/base/img/appstore_2x.png" alt="ios-app-store" ></img>
                <img width="80" src="https://statics.olx.com.pk/external/base/img/playstore_2x.png" alt="android-app-store" ></img>
            </div>
        </div>
    </div>
    <div className="copy-rights">
        <h4>Other Countries India - South Africa - Indonesia</h4>
        <h4>Free Classifieds in Pakistan. © 2006-2020 OLX</h4>
    </div>
    </>
    
    )
}

export default Bottom;