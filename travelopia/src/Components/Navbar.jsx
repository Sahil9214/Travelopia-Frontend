import React, { useState } from "react";
import "../Styles/Navbar.css";
import data from "../Images/download.png";
const Navbar = () => {
  const [responsive, setResponsive] = useState(false);

  const toggleNavbar = () => {
    setResponsive(!responsive);
  };

  return (
    <div className={`navbar ${responsive ? "responsive" : ""}`} id="myNavbar">
      <a href="#" className="active">
        <img src={data} width={"60px"} />
      </a>
      <a href="#">Destination</a>
      <a href="#">Activities</a>
      <a href="#">Way To Travel</a>
      <a href="#">Offer</a>
      <a href="#">Trust Pilot</a>
      <a href="#">Rated Excellent</a>
      <div className="icon" onClick={toggleNavbar}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;
