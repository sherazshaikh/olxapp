import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './component/header';
import HomePage from './component/HomePage';
import Category from './component/category';
import BottomBanner from './component/BottomBanner';
import Bottom from './component/Bottom';
import Cars from './component/MenuComponenet/Cars/Cars';
import MobilePhone from './component/MenuComponenet/MobilePhone/Mobile';
import MotorCycle from './component/MenuComponenet/MotorCycle/Motorcycle';
import Houses from './component/MenuComponenet/Houses/Houses';
import TvAudioVideos from './component/MenuComponenet/AudioVideos/AudioVideo';
import Tablets from './component/MenuComponenet/Tablets/Tablets';
import LandPlot from './component/MenuComponenet/LandPlot/LandPlot';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="All_Content">
        <Category />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/mobile" component={MobilePhone} />
          <Route  path="/cars" component={Cars} />
          <Route  path="/motorcycle" component={MotorCycle} />
          <Route  path="/houses" component={Houses} />
          <Route  path="/tv-audio-video" component={TvAudioVideos} />
          <Route  path="/tablets" component={Tablets} />
          <Route  path="/land-plot" component={LandPlot} />
        </Switch>
        <BottomBanner />
        <Bottom />
      </div>
    </div>
  );
};

export default App;
