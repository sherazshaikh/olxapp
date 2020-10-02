import React from "react";
import ImgMediaCard from "./ItemCOmponent";
import "./CSS/SearchRecommend.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Mobile from "./images/mobile.jpg";
import Mobile2 from "./images/mobile.jpg";
import shoe from "./images/shoe.jpg";
import shoe2 from "./images/shoe2.jpg";
import watch from "./images/watch.jpg";
import watch2 from "./images/watch2.jpg";
import laptop from "./images/laptop.jpg";
import laptop2 from "./images/laptop.jpg";
import handfree from "./images/handfree.jpg";
import handfree2 from "./images/handfree2.jpg";
import camera from "./images/camera.jpg";
import camera2 from "./images/camera2.jpg";


const Products = [
  {
    img: Mobile2,
    price: "25,000",
    description: "Best Smart Phone in Budget Price ",
  },
  {
    img: handfree,
    price: "500",
    description: "Black hnad Free Boost Sound",
  },
  {
    img: watch,
    price: "15,000",
    description: "branded watch  in best price",
  },
  {
    img: shoe,
    price: "5000",
    description: "Best Shoes In Good price ",
  },
  {
    img: laptop,
    price: "42,000",
    description: "Laptop For Sell ",
  },
  {
    img: Mobile,
    price: "35,000",
    description: "Best Smart Phone in Budget Price",
  },
  {
    img: camera,
    price: "32,000",
    description: "Besst Camera In Low Price",
  },
  {
    img: watch2,
    price: "10,000",
    description: "branded watch  in best price",
  },
  {
    img: handfree2,
    price: "1,000",
    description: "Black hnad Free Boost Sound",
  },
  {
    img: shoe2,
    price: "10,000",
    description: "Best Shoes In Good price ",
  },
  {
    img: laptop2,
    price: "70,000",
    description: "Laptop For Sell ",
  },
  {
    img: camera2,
    price: "50,000",
    description: "Besst Camera In Low Price ",
  },
  {
    img: watch2,
    price: "15,000",
    description: "branded watch  in best price",
  },
];

function scroll(onScroll) {
  const slider = document.getElementById("ContenSlider");
  slider.scrollLeft += onScroll;
}

const SearchRecommend = () => {
   

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
          {Products.map((product, index) => (
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

export default SearchRecommend;
