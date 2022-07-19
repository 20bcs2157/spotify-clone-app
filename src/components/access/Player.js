import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "../access/Player.css";
import Body from "../Sidebar/Body";
import Footer from "../Sidebar/Footer";

const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>

      <Footer />
    </div>
  );
};

export default Player;
