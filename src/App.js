import React from 'react';
import Header from './component/header'
import Category from './component/category'
import Advertise from './component/MenuComponenet/advertise';
import './App.css';
import SearchRecommend from './component/searcRecommended';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="All_Content">
      <Category />
      <Advertise/>
      <SearchRecommend />
      </div>
      
    </div>
  );
}

export default App;
