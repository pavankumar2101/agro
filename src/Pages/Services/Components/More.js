
import { useState } from "react";
import React from "react";
import ag1 from "../../../assets/ag1.png";
import icon1 from "../../../assets/icon1.png";
import ag2 from "../../../assets/ag2.png";
import icon2 from "../../../assets/icon2.png";
import ag3 from "../../../assets/ag3.png";
import icon3 from "../../../assets/icon3.png";
import ag4 from "../../../assets/ag4.png";
import icon4 from "../../../assets/icon4.png";

const More = () => {
  const [isVisible, setVisible] = useState(false);
  const [isVisible1,setVisible1] = useState(false);
  const [click,setClick] = useState(false);
  const [click1,setClick1]= useState(false);


  // const handleSelect = (i)=>{
  //   if(selected===i){
  //     return setSelected(null)
  //   }
  //   setSelected(i);
  // }

  return (
    <section className="fresh2">
      <div className="fresh2-cards">
        <div className="card1">
          <div className="img">
            <img src={ag1} alt="" />
          </div>
          <div className="content">
            {/* <img src={icon1} alt="" /> */}
            <h5>
            Agriculture Products
            </h5>
            <button onClick={() => setVisible(!isVisible)}>
              Read More</button>
            {isVisible && (
              <div>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellat, quidem?
                adipisicing elit.Repellat
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="card2">
          <div className="img">
            <img src={ag2} alt="" />
          </div>
          <div className="content1">
            {/* <img src={icon2} alt="" /> */}
            <h5>
              Organic Products
            </h5>
            <button onClick={() => setVisible1(!isVisible1)}>
              Read More</button>
            {isVisible1 && (
              <div>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellat, quidem?
                adipisicing elit.Repellat
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="card3">
          <div className="img">
            <img src={ag3} alt="" />
          </div>
          <div className="content2">
            {/* <img src={icon3} alt="" /> */}
            <h5>
              Vegetables
            </h5>
            <button onClick={() => setClick(!click)}>
              Read More</button>
            {click && (
              <div>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellat, quidem?
                adipisicing elit.Repellat
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="card4">
          <div className="img">
            <img src={ag4} alt="" />
          </div>
          <div className="content3">
            {/* <img src={icon4} alt="" /> */}
            <h5>
              Dairy
            </h5>
            <button onClick={() => setClick1(!click1)}>
              Read More</button>
            {click1 && (
              <div>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellat, quidem?
                adipisicing elit.Repellat
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default More;









// import React, { useState } from "react";
// import "../../Services/ServiceStyles.css";

// const More = () => {
//   const [isVisible, setVisible] = useState(false);
//   const [click, setClick] = useState(false);
//   const [isVisible1, setVisible1] = useState(false);
//   const [click1, setClick1] = useState(false);
//   return (
    
//       <div className="fresh2">
//         <div>
//           <img
//             src={require("../../../assets/ag1.png")}
//             alt=""
//             height="150px"
//             width="150px"
//           />
//           <button onClick={() => setVisible(!isVisible)}>
//             {isVisible ? "Hide content" : "show content"}
//           </button>
//           {isVisible && (
//             <div>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Repellat, quidem? 
//               </p>
//             </div>
//           )}
//         </div>
//         <div>
//           <img
//             src={require("../../../assets/ag2.png")}
//             alt=""
//             height="150px"
//             width="150px"
//           />
//           <button onClick={() => setClick(!click)}>
//             {click ? "Hide content" : "show content"}
//           </button>
//           {click && (
//             <div>
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
//                 saepe.
//               </p>
//             </div>
//           )}
//         </div>

//         <div>
//           <img
//             src={require("../../../assets/ag3.png")}
//             alt=""
//             height="150px"
//             width="150px"
//           />
//           <button onClick={() => setClick1(!click1)}>
//             {click1 ? "Hide content" : "show content"}
//           </button>
//           {click1 && (
//             <div>
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
//                 saepe.
//               </p>
//             </div>
//           )}
//         </div>

//         <div>
//           <img
//             src={require("../../../assets/ag4.png")}
//             alt=""
//             height="150px"
//             width="150px"
//           />
//           <button onClick={() => setVisible1(!isVisible1)}>
//             {isVisible1 ? "Hide content" : "show content"}
//           </button>
//           {isVisible1 && (
//             <div>
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
//                 saepe.
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
    
//   );
// };

// export default More;