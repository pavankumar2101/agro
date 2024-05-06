import React from "react";
import background from "../../../assets/background.png";
import Agriculture from "../../../assets/Agriculture.png";
import section02 from "../../../assets/section02.png";

const Hero = () => {
  return (
    <div className="hero">
      <img src={background} alt="" />
      <div className="content">
        <img src={Agriculture} alt="" />
        <h1>& Organic Market</h1>
        <button>Show Now</button>
        <div className="section1">
          <img src={section02} alt="" height="200px" width="300px" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
