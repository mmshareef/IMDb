import React from "react";
import "./Nav.css";
import { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import WatchLaterIcon from "@material-ui/icons/WatchLater";

function Nav(props) {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
        alt="IMDb"
      />
      <div className="menu">
        <MenuIcon className="menuIcon" />
        <span className="header__optionLineOne">MENU</span>
      </div>
      <div className="header__search">
        <input
          placeholder="Search IMDb"
          type="text"
          className="header__searchInput"
        />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">IMDbPro</span>
        </div>
        <div className="watchlist">
          <span className="header__optionLineOne">WatchList</span>
          <WatchLaterIcon className="watchLaterIcon" />
        </div>
        <div className="signin">
          <span className="header__optionLineOne">Signin</span>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
