import React from "react";
import main from "../Images/main.webp";
import "../Styles/Part2.css";
const Part2 = () => {
  return (
    <div className="main">
      <div className="hero_content">
        <div
          className="hero_inner"
          style={{
           
          }}
        >
          <h1
            className="hero_title"
            
          >
            Armenia Tours
          </h1>
          <div className="hero_description body-text-small">
            <p
              className="description"
              style={{
                display: "block",
                marginBlockStart: "1em",
                marginBlockEnd: "1em",
                marginInlineStart: "0px",
                marginInlineEnd: "0px",
                color: "#fff",
              }}
            >
              Where Asia and Europe meet in a symphony of mountains, history and
              tradition
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part2;
