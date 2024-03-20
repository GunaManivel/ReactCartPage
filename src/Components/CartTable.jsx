// CartTable.js

import React from "react";

const CartTable = ({ cartItems, handleRemoveFromCart, handleBack }) => {
  return (
    <div>
      <button className="btn btn-outline-warning" onClick={handleBack}>
        Back
      </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Total</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>${item.price}</td>
              <td>${item.price * item.quantity}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
