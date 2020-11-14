import React, { createContext } from 'react'
import Advertise from '../MenuComponenet/Banner'
import Home from '../Home'
import RecommendItem from '../RecommendedItem'
import Mobile from "../images/mobile.jpg";
import Mobile2 from "../images/mobile.jpg";
import shoe from "../images/shoe.jpg";
import shoe2 from "../images/shoe2.jpg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch2.jpg";
import laptop from "../images/laptop.jpg";
import laptop2 from "../images/laptop.jpg";
import handfree from "../images/handfree.jpg";
import handfree2 from "../images/handfree2.jpg";
import camera from "../images/camera.jpg";
import camera2 from "../images/camera2.jpg";



const Product = [
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
  }, {
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
  }, {
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
]

export const Context = createContext();

const DataStore = () => {

  return (
    <>
      <Context.Provider value={Product} >
        <Advertise />
        <RecommendItem />
        <Home />
      </Context.Provider>

    </>
  )
}


export default DataStore;