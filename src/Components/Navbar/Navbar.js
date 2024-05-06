import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "../../Pages/Home/HomeStyles.css";
import { FaShoppingCart } from "react-icons/fa";
import Items from "../../Pages/Home/Components/Items";
import { LuShoppingCart } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";

const Navbar = (props) => {
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
      <div className="menu2">
        {/* <Link onClick={() => props.handleShow(true)}> 
      <CiSearch size={24}/>
      <LuShoppingCart size={24}/>
      
      </Link>  */}
        {/* <Link>
          <div onClick={() => props.handleShow(true)}>
            {" "}
            <FaShoppingCart size="20" />
            <sup> {props.count} </sup>
          </div>
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;

// <div onClick={() => props.handleShow(true)}> <FaShoppingCart size="20"/>
// <sup> {props.count} </sup>
// </div>
