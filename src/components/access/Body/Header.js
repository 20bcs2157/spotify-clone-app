import React from "react";
import "../Body/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="Search for Artist, Songs, Album" type="text" />
      </div>

      <div className="header__right">
        <Avatar src="" alt="Rq" />
        <h4>Refeh Qazi</h4>
      </div>
    </div>
  );
};

export default Header;
