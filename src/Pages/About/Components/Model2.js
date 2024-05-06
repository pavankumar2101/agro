import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/img2.png";

const Model2 = () => {
  return (
    <section className="model2">
      <div className="model2-img">
        <div className="img1">
          <img src={img1} alt="" />
        </div>
        <div className="img2">
          <img src={img2} alt="" />
        </div>
      </div>
      <div className="model2-content">
        <div className="content1">
          <h6>Get to Know Us</h6>
          <h2>
            The Best Agriculture <span></span> Market
          </h2>
          <h5>
            There are many variations of passa of lorem available, but <span></span> the
            majority have suffered alteration.
          </h5>
          <p>
            There are many variations of passages of lorem ipsum available but
            the <span></span> majority have suffered alteration in some form by injected humor
            or <span></span> random word which don’t look even.
          </p>
        </div>
        <div className="content2">
          <h5>&#10003; Suspe ndisse suscipit sagittis leo</h5>
          <h5>&#10003; Entum estibulum disgnissim posuere</h5>
          <h5>&#10003; Lorem Ipsum on the tend to repeat</h5>
          <Link><p>Discover More</p></Link>
        </div>
      </div>
    </section>
  );
};

export default Model2;
