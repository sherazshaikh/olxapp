import React from 'react';
import Advertise from './MenuComponenet/Banner';
import RecommendedItem from './RecommendedItem';
import StoreData from './Store/StoreData';
import Home from './Home';
const HomePage = () => {
    return (
        <div>
             <StoreData>
                <Advertise />
                <RecommendedItem />
                <Home />
            </StoreData>
        </div>
    )
};

export default HomePage;
