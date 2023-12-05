import React from "react";
import "../Styles/Part1.css";
import star from "../Images/star.webp";
import right from "../Images/right.webp";
import calender from "../Images/calender.webp";
import tracking from "../Images/Tracking.webp";
const Part1 = () => {
  return (
    <div>
      <div className="part1">
        <div style={{ display: "flex", borderRight: "1px solid #e6e6e6 " }}>
          <img src={star} alt="star" />
          <div>
            <p className="div_p">TRUSTPILOT</p>
            <p className="div_p">RATED EXCELLENT</p>
          </div>
        </div>
        <div style={{ display: "flex", borderRight: "1px solid #e6e6e6 " }}>
          <img src={right} alt="star" />
          <div>
            <p className="div_p">REFUND </p>
            <p className="div_p">GAURENTEE</p>
          </div>
        </div>
        <div style={{ display: "flex", borderRight: "1px solid #e6e6e6 " }}>
          <img src={calender} alt="star" />
          <div>
            <p className="div_p">FLEXIBLE</p>
            <p className="div_p">BOOKINGS</p>
          </div>
        </div>
        <div style={{ display: "flex", borderRight: "1px solid #e6e6e6 " }}>
          <img src={tracking} alt="star" />
          <div>
            <p className="div_p">EXPERT LOCAL</p>
            <p className="div_p">GUIDE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;
