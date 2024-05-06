
import React from 'react'
// import Product from "../Product/Product"s

const ProductList = ({product , addToCart}) => {
  return (
    <>
    <h1 className="heading">ProductList</h1>
    <div className='product'>
    {
        product.map((productItem , productIndex)=>{
            return (
                <div>
                    <div className="product-item">
                        <img src={productItem.img} alt="" />
                        <h5>{productItem.name}</h5>
                        <p>Rs.{productItem.price}/-</p>
                        <button onClick={()=> addToCart(productItem)}>Add To Cart</button>

                    </div>
                </div>
            )
        })
    }
    
    </div>
    </>
    
  )
}

export default ProductList
