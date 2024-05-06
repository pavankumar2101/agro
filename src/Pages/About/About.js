import React from 'react';
import Model from './Components/Model';
import Model2 from './Components/Model2';
import Model3 from './Components/Model3';
import Model4 from './Components/Model4';
import Video from './Components/Video';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import "../About/AboutStyles.css"

const About = () => {
  return (
    <>
    <Navbar/>
    <Model/>
    <Model2/>
    <Model3/>
    <Video/>
    <Model4/>
    <Footer/>
    </>
    
  )
}

export default About