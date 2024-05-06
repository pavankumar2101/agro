import React, { useState } from "react";
import ProductList from "./ProductList";
import CartList from "./CartList";
import Header from "./Header";
// import {Link} from "react-router-dom"
const Product = () => {
  const [product , setProduct] = useState([
    {
      img: require("../../../../assets/grapes.png"),
      name: "Grapes",
      price: 40,
    },
    {
      img: require("../../../../assets/carrot.png"),
      name: "Carrot",
      price: 50,
    },
    {
      img: require("../../../../assets/Tomato.png"),
      name: "Tomato",
      price: 40,
    },
    {
      img: require("../../../../assets/garlic.png"),
      name: "Garlic",
      price: 60,
    },
    {
      img: require("../../../../assets/spinach.png"),
      name: "Spinach",
      price: 30,
    },
    {
      img: require("../../../../assets/onions.png"),
      name: "Onions",
      price: 50,
    },
  ]);

  const [cart, setCart] = useState([]);
  console.log(cart);

  const [showCart , setShowCart] = useState(false)

  const handleShow = (value)=>{
setShowCart(value)
  }


  const addToCart = (data) => {
    // console.log(data)
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  return (
    <section className="section1">
      <Header count={cart.length} handleShow={handleShow}></Header>

      {showCart ? (
        <CartList cart={cart}></CartList>
      ) : (
        <ProductList product={product} addToCart={addToCart}></ProductList>
      )}

      {/* <div className="section1-content">
            <h4>Recently Added</h4>
            <h2>Latest Products</h2>
        </div>
        <div className="section1-cards">
            <div className="card">
                <img src={require("../../../../assets/onions.png")} alt="" />
                <h4>Onions</h4>
                <p>$20.00</p>
                <Link>Add to Cart</Link>
            </div>
            <div className="card">
                <img src={require("../../../../assets/carrot.png")} alt="" />
                <h4>Carrot</h4>
                <p>$50.00</p>
                <Link>Add to Cart</Link>
            </div>
            <div className="card">
                <img src={require("../../../../assets/tomato.png")} alt="" />
                <h4>Tomato</h4>
                <p>$50.00</p>
                <Link>Add to Cart</Link>
            </div>
            <div className="card">
                <img src={require("../../../../assets/grapes.png")} alt="" />
                <h4>Black Grapes</h4>
                <p>$100.00</p>
                <Link>Add to Cart</Link>
            </div>
            <div className="card">
                <img src={require("../../../../assets/garlic.png")} alt="" />
                <h4>Garlic</h4>
                <p>$20.00</p>
                <Link>Add to Cart</Link>
            </div>
            <div className="card">
                <img src={require("../../../../assets/lettuce.png")} alt="" />
                <h4>Lettuce</h4>
                <p>$30.00</p>
                <Link>Add to Cart</Link>
            </div>
        </div> */}
    </section>
  );
};

export default Product;
