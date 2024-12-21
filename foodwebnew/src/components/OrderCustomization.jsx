import React from 'react';
import '../styles/OrderCustomization.css';


function OrderCustomization() {
  return (
    <div className="customization-container">
      <h2>Customize Your Order</h2>
      <div className="customization-options">
        <label>
          Size:
          <select>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </label>
        <label>
          Add-ons:
          <input type="checkbox" /> Extra Cheese
          <input type="checkbox" /> Olives
        </label>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
}

export default OrderCustomization;
