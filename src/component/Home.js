import React, { useContext, useEffect, useState } from 'react'
import ImgMediaCard from './ItemCOmponent'
import { Context } from './Data/Data.js'
import './CSS/Home.css'




const Home = () => {
    const getContext = useContext(Context)
    const [LoadMore, setLoadMore] = useState(10)
    const TotalLength = getContext.length
    function UpdateData() {
        setLoadMore(() => LoadMore + 5)
    }
  


    return (

        <div className="section">
            <h2 className="heading">Fresh recommendations</h2>
            <div className="content">
                {
                    getContext.slice(0, LoadMore).map((item, index) => (
                        <ImgMediaCard
                            key={index}
                            img={item.img}
                            price={item.price}
                            descr={item.description}
                        />))
                }
            </div>
            { LoadMore <= TotalLength ? <button id="ViewMore" onClick={UpdateData}>Load More</button> : ""}
        </div>


    )

}
export default Home;