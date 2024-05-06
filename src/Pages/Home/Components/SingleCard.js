import React from "react";
import Tomato from "../../../assets/Tomato.png";
import garlic from "../../../assets/garlic.png";
import grapes from "../../../assets/grapes.png";
import carrot from "../../../assets/carrot.png";
import spinach from "../../../assets/spinach.png";
import onions from "../../../assets/onions.png";
// import bg2 from "../../../assets/bg2.jpg";
// import token3 from "../../../assets/token3.jpeg";
// import token2 from "../../../assets/token2.jpeg";

const SingleCard = () => {
  return (
    <>
      <div className="card">
        <div className="content">
          <img src={Tomato} alt="" />
          <p>20$</p>
          <button>Add</button>
        </div>
        <div className="content">
          <img src={garlic} alt="" />
          <p>20$</p>
          <button>Add</button>
        </div>
        <div className="content">
          <img src={carrot} alt="" />
          <p>20$</p>
          <button>Add</button>
        </div>
        <div className="content">
          <img src={grapes} alt="" />
          <p>20$</p>
          <button>Add</button>
        </div>
        <div className="content">
          <img src={spinach} alt="" />
          <p>20$</p>
          <button>Add</button>
        </div>
        <div className="content">
          <img src={onions} alt="" />
          <p>20$</p>
          <button>Add</button>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
