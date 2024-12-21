import React from 'react';
import '../styles/ShoppingCart.css';


function ShoppingCart() {
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <div className="cart-item">
        <p>Margherita Pizza - $12</p>
        <button className="remove-item">Remove</button>
      </div>
      <div className="cart-total">
        <h3>Total: $12</h3>
        <button className="checkout">Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default ShoppingCart;
