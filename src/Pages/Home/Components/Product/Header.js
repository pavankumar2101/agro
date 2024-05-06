// import "../HomeStyles.css"
// import { FaShoppingCart } from "react-icons/fa";

// function Header(props) {
//     return (
//         <div className='flex shopping-card'>
//             {/* <div onClick={() => props.handleShow(false)} >< img src={logo} /></div> */}
//             <div onClick={() => props.handleShow(true)}> <FaShoppingCart size="20"/>
//                 <sup> {props.count} </sup>
//             </div>
//         </div>
//     );
// }

// export default Header;

import React from "react";
import { FaShoppingCart } from "react-icons/fa";
const Header = (props) => {
  return (
    <>
        <div className="header">
          <div className="header-list">
            <button onClick={()=> props.handleShow(true)}>
            <FaShoppingCart size={20} />
            <sup size>{props.count}</sup>
            </button>
            {/* <FaShoppingCart size={25} /> */}
            {/* <sup>{props.count}</sup> */}
          </div>
        </div>
          </>
  );
};

export default Header;
