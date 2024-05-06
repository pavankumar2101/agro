import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from './Components/Hero'
import "../Home/HomeStyles.css"
//import Cards from './Components/Cards'
import Hero2 from './Components/Hero2'
import { Deals } from './Components/Deals'
import Organic from './Components/Organic'
import Products from './Components/Products'
import Test from './Components/Test'
import Slck from './Components/Slck'
//import Items from "./Components/Items";
import Footer from '../../Components/Footer/Footer'
// import Product from "../Home/Components/Product/Product";
// import Cart from '../cart/cart'
import Shop from '../shop/shop'

const Home = () => {
 
  return (

    <div>  
      {/* <Navbar/> */}
      <Hero/>
      {/* <Cards/> */}
      {/* <Items/> */}
      {/* <Product/> */}
      {/* <Cart/> */}
      <Shop/>
      <Hero2/>
      <Deals/>
      <Organic/>
      <Products/>
      <Test/>
      <Slck/>
      <Footer/>
    </div>
    
  )
}

export default Home