import React from "react";
import healthy from "../../../assets/healthy.png";
import fencing from "../../../assets/fencing.png";
import maintain from "../../../assets/maintain.png";
import harvest from "../../../assets/harvest.png";

const Fresh4 = () => {
  return (
    <section className="fresh4">
      <div className="fresh4-img">
        <img src={healthy} alt="" />
      </div>
      <div className="fresh4-content">
        <h5>What We Do</h5>
        <h2>Healthy Food for Good <br /> Growth</h2>
        <p>
          Lorem ipsum dolor sit amet nsectetur cing elit. Suspe ndisse suscipit <br />
          sagittis leo sit met entum estibu dignissim posuere cubilia durae. Leo
          sit met <br /> entum cubilia crae onec.
        </p>
        <p>
          Lorem ipsum dolor sit amet adipiscing elit. Nulla placerat posuere
          dui. <br /> Pellentesque venenatis sem non lacus ac auctor.
        </p>
        <div className="card">
            <img src={fencing} alt="" />
            <img src={maintain} alt="" />
            <img src={harvest} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Fresh4;
