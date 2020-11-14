import React, { useState, useEffect } from 'react'
import '../../CSS/custom.css'
import ImgMediaCard from '../../ItemCOmponent'
import DropDown from '../../Store/DropDown';
import img from '../../images/laptop.jpg';



const Tablets = ()=>{

    const Length = Array(10).fill()

    return (
        <>
            <div className="ppl-srch">
                <ul> People Searches:
                <li>civic</li>
                    <li>honda</li>
                    <li>vitz</li>
                    <li>alto</li>
                </ul>
            </div>

            <div className="car-section">

                <div className="filter-sec">
                    <p className='filter'>Cars</p>
                    <p className='filter'>Filter</p>
                    <DropDown 
                    categories='Cars'
                    list1='Alto(12234)'
                    list2='Corolla(3313)'
                    list3='Mehran(2344)'
                    list4='Vitz(2343)'
                    />
                    <DropDown
                     categories='Cars'
                     list1='Alto(12234)'
                     list2='Corolla(3313)'
                     list3='Mehran(2344)'
                     list4='Vitz(2343)'
                    />
                    <DropDown 
                     categories='Cars'
                     list1='Alto(12234)'
                     list2='Corolla(3313)'
                     list3='Mehran(2344)'
                     list4='Vitz(2343)'
                    />
                    <DropDown 
                     categories='Cars'
                     list1='Alto(12234)'
                     list2='Corolla(3313)'
                     list3='Mehran(2344)'
                     list4='Vitz(2343)'
                    />
                    <DropDown 
                     categories='Cars'
                     list1='Alto(12234)'
                     list2='Corolla(3313)'
                     list3='Mehran(2344)'
                     list4='Vitz(2343)'
                    />

                  

                </div>
                <div className="car-component">
                    {Length.map(e => (<ImgMediaCard img={img} />))}
                </div>
            </div>
        </>
    )
}

export default Tablets;