import './App.css';
//import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
//import data from "../src/Pages/Home/Components/Back/Data"
//import Routees from './Pages/Home/Components/Front/Routees/Routees';
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import { ShopContextProvider } from './context/shop-context';
import Cart from "./Pages/cart/cart";
import Shop from "./Pages/shop/shop";
import Navbar from './Components/navbar';


function App() {
 // const { productItems} = data;
  return (
    <div className="App">
     <ShopContextProvider>
     <Router>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/cart" element={<Cart/>} />
       
      </Routes>
     </Router>
     </ShopContextProvider>
    </div>
  );
}

export default App;



{/* <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div> */}
