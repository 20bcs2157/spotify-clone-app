import React from "react";
import Header from "../access/Body/Header";
import "../Sidebar/Body.css";

const Body = ({ spotify }) => {
  return (
    <div className="body">
      <Header spotify={spotify} />
    </div>
  );
};

export default Body;
