import React from 'react'
import './CSS/category.css'
import AllCategory from'./MenuComponenet/allCategory'
import MobilePhone from'./MenuComponenet/mobile'
import Cars from'./MenuComponenet/cars'
import MotorCycle from'./MenuComponenet/motorcycle';
import Houses from'./MenuComponenet/houses';
import TvAudioVideos from'./MenuComponenet/audioVideo';
import Tablets from'./MenuComponenet/tablets';
import LandPlot from'./MenuComponenet/landplot';


const Category = ()=>{

return(
    <div className="category_div">
        <AllCategory />
        <MobilePhone />
        <Cars/>
        <MotorCycle/>
        <Houses/>
        <TvAudioVideos/>
        <Tablets/>
        <LandPlot/>
    </div>
)


}

export default Category;