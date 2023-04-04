import React from 'react';
import styles from "../styles/ProductCard.module.css"

const ProductCard = (props) => {
  const handleAddToCart = () => {
    props.setCartProductsData(prev => [...prev, props])
  }
  return (
    <div data-testid="product-card" className={styles.productCardContainer}>
      <h3 data-testid="name" className={styles.name}>Name : {props?.product?.name}</h3>
      <h5 data-testid="price" className={styles.price}>Price : {props?.product?.price}</h5>
      <p data-testid="quantity" className={styles.quantity}>Quantity : {props?.product?.stock} units</p>
      <button data-testid="add-btn" onClick={props.product.stock > 0 ? handleAddToCart : ""} className={`${props.product.stock > 0 ? styles.addBtn : styles.outOfStock}`}>{props?.product?.stock > 0 ? "ADD TO CART" : "OUT OF STOCKS"}</button>
    </div>
  );
};

export default ProductCard;
