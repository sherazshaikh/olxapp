import React from 'react';
import Header from './component/header'
import Category from './component/category'
import Advertise from './component/MenuComponenet/advertise';
import './App.css';
import SearchRecommend from './component/searcRecommended';
import Home from './component/Home'
import Data from './component/Data/Data';
import BottomBanner from './component/BottomBanner';
import Bottom from './component/Bottom'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="All_Content">
        <Category />
        <Advertise />


        <Data>
          <Home />
          <SearchRecommend />
        </Data>
        <BottomBanner />
        <Bottom />
      </div>
    </div>
  );
}

export default App;
