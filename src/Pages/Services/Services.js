import React from 'react'
import More from './Components/More'
import "../Services/ServiceStyles.css"
import Fresh3 from './Components/Fresh3';
import Fresh4 from "./Components/Fresh4";
import Service1 from './Components/Service1';
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";


const Services = () => {
  return (
   <>
    <div>
      <Navbar/>
      <Service1/>
      <More/>
      <Fresh3/>
      <Fresh4/>
      <Footer/>
     
      
    </div>
   </>
    
  )
}

export default Services