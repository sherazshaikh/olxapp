import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from "./svg/logo.svg";
import Btn from "./svg/Sell.png";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import Cities from './Cities/Cities';
import "./CSS/header.css";


const Header = () => {
  const [ToggleManu, setToggleManu] = useState(false);

  const MenuToggle = () => {
    if (ToggleManu) {
      setToggleManu(false);
    } else {
      setToggleManu(true);
    }
  };
  return (

    <div className="header">
      <div className="logo">
        <Link to={'/'}>
          <Logo />
        </Link>
      </div>
      <div className="input-city">
        <span className="search-icon">
          <SearchIcon fontSize="large" color="action" />
        </span>
        <input
          id="citySearch"
          type="text"
          placeholder="Search city, area or local"
        />
        <span>
          {ToggleManu ? (
            <ArrowDropUpIcon
              fontSize="large"
              color="action"
              onClick={MenuToggle}
              className="DropDown"
            />
          ) : (
              <ArrowDropDownIcon
                fontSize="large"
                color="action"
                onClick={MenuToggle}
                className="DropDown"
              />

            )}
        </span>
        {ToggleManu ? (<Cities />) : (" ")}
      </div>
      <div className="input-search">
        <input
          type="text"
          id="search"
          placeholder="Find Cars, Mobile Phones And More"
        />
      </div>
      <button id="searchButton">
        <SearchIcon className="Search" fontSize="large" />
      </button>
      <div className="login">
        <a href="JavaScript;">login</a>
      </div>
      <div className="sell">
        <a href="JavaScript">
          <img src={Btn} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Header;
