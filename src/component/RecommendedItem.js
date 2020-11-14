import React, { useContext, useState } from "react";
import { Context } from './Store/StoreData'
import ImgMediaCard from "./ItemCOmponent";
import "./CSS/SearchRecommend.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function scroll(onScroll) {
  const slider = document.getElementById("ContenSlider");
  slider.scrollLeft += onScroll;
}

const RecommendItem = () => {
  const data = useContext(Context)

  return (
    <div className="MainSectionStyle">
      <div className="ContentSection">
        <div className="ContentHeading">
          <h3>Based on your last search</h3>
          <a href="JavaScript">view more</a>
        </div>
        <button id="scrollBack" onClick={() => scroll(-500)}>
          <ArrowBackIosIcon />
        </button>
        <div className="ContentSlider" id="ContenSlider">
          {data.slice(0, 10).map((product, index) => (
            <ImgMediaCard
              key={index}
              img={product.img}
              price={product.price}
              descr={product.description}
            />
          ))}
        </div>
        <button id="scrollFarword" onClick={() => scroll(500)}>
          <ArrowForwardIosIcon />
        </button>
      </div>
    </div>
  );
};

export default RecommendItem;
