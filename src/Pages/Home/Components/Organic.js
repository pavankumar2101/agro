import React from "react";

const Organic = () => {
  return (
    <section className="organic">
      <div className="organic-img">
        <img src={require("../../../assets/organic.png")} alt="" />
      </div>
      <div className="organic-content">
        <div className="content1">
          <h5>Quality Products</h5>
          <h2>Only Organic Food</h2>
          <p>
            There are many variations of passages of lorem ipsum available but
            the <span></span> majority have suffered alteration in some form by
            injected humor or <span></span> random word.
          </p>
        </div>
        <div className="content2">
          <div className="card">
            <div className="img">
              <img src={require("../../../assets/logo02.png")} alt="" />
            </div>
            <div className="img-con">
              <h4>Professional Farmers</h4>
              <p>There are many variation of passages of lorem ipsum.</p>
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img src={require("../../../assets/logo3.png")} alt="" />
            </div>
            <div className="img-con">
              <h4>Solution for Farming</h4>
              <p>There are many variation of passages of lorem ipsum.</p>
            </div>
          </div>
        </div>
        <button>Shop Now</button>
      </div>
    </section>
  );
};

export default Organic;
