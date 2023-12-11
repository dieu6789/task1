import React from "react";
import "./Welcome.css";
import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import welcome_icon from "../assets/welcome_icon.png";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="welcome-hand-icon">
            <p>new</p>
            <img src={hand_icon}></img>
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="welcome-lastest-btn">
          <div>Lastest Collection</div>
          <img style={{ marginLeft: "10px" }} src={arrow_icon}></img>
        </div>
      </div>
      <div className="welcome-right">
        <img style={{ height: "1000px" }} src={welcome_icon}></img>
      </div>
    </div>
  );
};

export default Welcome;
