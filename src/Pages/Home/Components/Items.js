

// import "../HomeStyles.css";
// import Header from "../Components/Header";
// import ProductList from "../Components/ProductList";
// import CartList from "../Components/CartList";
// import { useState } from 'react';

// function App() {

//   const [product, setProduct] = useState([
//     {
//       // img: './assets/Tomato.jpg',
//       img: require('../../../assets/Tomato.png'),
//       name: "Tomato",
//       price: 40
//     },
//     {
//       img: require('../../../assets/grapes.png'),
//       name: "Grapes",
//       price: 50
//     },
//     {
//       img: require('../../../assets/onions.png'),
//       name: "onions",
//       price: 45
//     },
//     {
//       img: require('../../../assets/garlic.png'),
//       name: "Garlic",
//       price: 65
//     },
//     {
//       img: require('../../../assets/spinach.png'),
//       name: "Spinach",
//       price: 25
//     },
//     {
//       img: require('../../../assets/carrot.png'),
//       name: "Carrot",
//       price: 55
//     },
//   ])

//   const [cart, setCart] = useState([])
//   const [showCart, setShowCart] = useState(false)

//   const addToCart = (data) => {
//     setCart([...cart, { ...data, quantity: 1 }])
//   }

//   const handleShow = (value) => {
//     setShowCart(value)
//   }

//   return (
//     <div>
//       <Header count={cart.length}
//         handleShow={handleShow} ></Header>

//       {
//         showCart ?
//           <CartList cart={cart} ></CartList> :
//           <ProductList product={product} addToCart={addToCart} ></ProductList>
//       }


//     </div>
//   );
// }

// export default App;