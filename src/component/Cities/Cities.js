import React from 'react'
import './Cities.css'

const Cities = () => {


    return (
        <div className="cities">
            <ul className="Cities-name">
                <div className="current-location">
                    <p > <i class="far fa-location"></i>Use Current Location</p>
                    <p className='adress'>karachi, karachi sindh Pakistan</p>
                </div>
                <hr className='hr' />
                <li><i class="fas fa-map-marker-alt"></i>Sindh </li>
                <li><i class="fas fa-map-marker-alt"></i>Karachi</li>
                <li><i class="fas fa-map-marker-alt"></i>Lahore</li>
                <li><i class="fas fa-map-marker-alt"></i>Islamabad</li>
                <li><i class="fas fa-map-marker-alt"></i>Sindh </li>
                <li><i class="fas fa-map-marker-alt"></i>Karachi</li>
                <li><i class="fas fa-map-marker-alt"></i>Lahore</li>
                <li><i class="fas fa-map-marker-alt"></i>Islamabad</li>
            </ul>
        </div>


    )
}

export default Cities