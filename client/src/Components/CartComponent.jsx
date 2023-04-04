import React from 'react';

const CartComponent = ({ cartProducts }) => {
  console.log(cartProducts)
  // return <h2 data-testid="empty-text">The cart is empty!</h2>;

  return (
    <div data-testid="cart-container">
      <table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Name</th>
            <th>Price</th>
            <th>Units</th>
          </tr>
        </thead>
        <tbody data-testid="cart-body">
          {/* map thorugh tht cart items and display in rows */}
          {cartProducts.map((product, index) => (
            <tr>
              {console.log(product.product.name)}
              <td>{index + 1}</td>
              <td>{product.product.name}</td>
              <td>{product.product.price}</td>
              <td>{}</td>
              <td data-testid="total-price"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default CartComponent;
