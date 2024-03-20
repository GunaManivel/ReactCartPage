import React from "react";
import { useCart } from "./CartContext";
import CartTable from "./CartTable"; // Import the new component

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
      <button onClick={() => console.log("View Cart")}>View Cart</button>{" "}
      {/* Add View Cart button */}
      <CartTable cartItems={cartItems} /> {/* Render the CartTable component */}
      <div>
        <p>Total Quantity: {calculateTotalQuantity()}</p>
        <p>Total Amount: {calculateTotalAmount()}</p>
      </div>
    </div>
  );
};

export default CartPage;
