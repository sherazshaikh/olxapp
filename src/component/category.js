import React from 'react'
import './CSS/category.css'
import { Link } from 'react-router-dom'


const Category = () => {

    return (
        <>
        <div className="category_div d-none d-md-flex">

            <Link className="Link" exact to="">AllCategory</Link>
            <Link className="Link" to="/mobile">Mobile Phones</Link>
            <Link className="Link" to="/cars">Cars</Link>
            <Link className="Link" to="/motorcycle">MotorCycles</Link>
            <Link className="Link" to="/houses">Houses</Link>
            <Link className="Link" to="/tv-audio-video">Tv-Audio-Video</Link>
            <Link className="Link" to="tablets">Tablets</Link>
            <Link className="Link" to="land-plot">Land Plot</Link>
        </div>
        </>
    )


}

export default Category;