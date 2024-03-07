// CartPage.js

import React from "react";
import { useCart } from "./CartContext";

const CartPage = () => {
  const { cartItems, increaseQuantity, decreaseQuantity } = useCart();

  const handleIncreaseQuantity = (itemId) => {
    increaseQuantity(itemId);
  };

  const handleDecreaseQuantity = (itemId) => {
    decreaseQuantity(itemId);
  };

  const calculateTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div>
      <h1>Cart Page</h1>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => handleDecreaseQuantity(item.id)}>
                  -
                </button>
                {item.quantity}
                <button onClick={() => handleIncreaseQuantity(item.id)}>
                  +
                </button>
              </td>
              <td>{item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <p>Total Quantity: {calculateTotalQuantity()}</p>
        <p>Total Amount: {calculateTotalAmount()}</p>
      </div>
    </div>
  );
};

export default CartPage;
