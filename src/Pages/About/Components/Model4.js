import React from "react";
import avtr from "../../../assets/avtr.png"
import avtr2 from "../../../assets/avtr2.png"
const Model4 = () => {
  return (
    <section className="model4">
      <div className="model4-content">
        <h5>Our Testimonials</h5>
        <h2>What They Say</h2>
      </div>
      <div className="model-cards">
        <div className="card">
          <div className="img">
            <img src={avtr} alt="" />
          </div>
          <div className="content">
            <p>
              There are many variations of passage of <span></span> available but the majority
              have suffered <span></span> alteration in some form by injected <span></span> humor or
              randomed.
            </p>
            <div className="content1">
              <h6>Bonnie Tolbet</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>
        <div className="card1">
          <div className="img">
            <img src={avtr2} alt="" />
          </div>
          <div className="content">
            <p>
              There are many variations of passage of <span></span> available but the majority
              have suffered <span></span> alteration in some form by injected <span></span> humor or
              randomed.
            </p>
            <div className="content1">
              <h6>Sarah Albert</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model4;
