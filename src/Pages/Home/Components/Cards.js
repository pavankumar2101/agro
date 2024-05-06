import React from "react";
import SingleCard from "./SingleCard";

const Cards = () => {
  return (
    <>
      <div className="cards">
        <h3 className>Recently Added</h3>
        <h2 className>Latest products</h2>
        <SingleCard/> 
      </div>

    </>
  );
};

export default Cards;
