// import React from "react";
// import { Link } from "react-router-dom";
// import { FaShoppingCart } from "react-icons/fa";
// import "./navbar.css";

// export const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div className="links">
//         {/* <Link to="/"> Shop </Link>
//         <Link to="/contact"> Contact </Link> */}
//         <Link to="/cart">
//         <FaShoppingCart size={32}/>
//         </Link>
//       </div>
//     </div>
//   );
// };


import React from "react";
import "./navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
// import "../../Pages/Home/HomeStyles.css";
import { FaShoppingCart } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link>Projects</Link>
        <Link>News</Link>
        <Link>Shop</Link>
        <Link>Contact</Link>
      </div>
      <Link to="/cart">
         <FaShoppingCart size={25}/>
         </Link>
    </nav>
  );
};

export default Navbar;
