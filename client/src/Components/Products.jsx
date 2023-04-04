import React, { useState } from 'react';
import style from "../styles/Products.module.css"
import ProductCard from './ProductCard';
import CartComponent from './CartComponent';

const Products = () => {
  const [products, setProducts] = useState(null)
  const [cartProductsData, setCartProductsData] = useState([])
  console.log("cartProductsData", cartProductsData)

  const handleGetProducts = async () => {
    const response = await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`);
    const products = await response.json();
    setProducts(products)
  }


  return (
    <div className={style.productContainer}>
      <button data-testid="get-btn" className={style.getBtn} onClick={handleGetProducts}>Get Products</button>
      {
        products && 
        <div className="dashboard">
          <h1>Dashboard</h1>
          <div>
            <h1>Cart</h1>
            {/* import cart component here */}
            <CartComponent cartProducts={cartProductsData}/>
          </div>
          <div data-testid="products-container" className={style.productCardStyle}>
            {/* map thorugh products */}
            {products.map(product => (
              <div key={product.id} >
                <ProductCard product={product} setCartProductsData={setCartProductsData}/>
              </div>
            ))}
          </div>
        </div>
      } 
    </div>
  );
};

export default Products;
