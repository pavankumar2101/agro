import React from 'react'

export const Deals = () => {
  return (
    <>
       <div className="heading">
       <h3>Special Offers</h3>
        <h2>Todays Hot Deals</h2>
       </div>
        
     <div className="cards01">
        <div className="content1">
          <img src={require("../../../assets/grapes.png")} alt="" />
          <p>20$</p>
          <button>Add</button>
        </div>
        <div className="content1">
          <img src={require("../../../assets/carrot.png")} alt="" />
          <p>20$</p>
          <button>Add</button>
        </div>
        <div className="content1">
          <img src={require("../../../assets/onions.png")} alt="" />
          <p>20$</p>
          <button>Add</button>
        </div>
        <div className="content1">
          <img src={require("../../../assets/spinach.png")} alt="" />
          <p>20$</p>
          <button>Add</button>
        </div>
        <div className="content1">
          <img src={require("../../../assets/Tomato.png")} alt="" />
          <p>20$</p>
          <button>Add</button>
        </div>
      </div>
    </>
  )
}
