import React, { useContext, useState } from "react";
import { myContext } from "../App";
import { Carousel } from "react-bootstrap";
import { toast } from "react-toastify"; // Import toast from react-toastify
import CartTable from "./CartTable";
import "./Style/Cart.css";

const Cart = () => {
  const [data, setdata] = useContext(myContext);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleToggleCart = (id) => {
    setdata((prevData) => {
      return prevData.map((item) => {
        if (item.id === id) {
          return { ...item, isInCart: !item.isInCart };
        }
        return item;
      });
    });
  };

  const handleIncreaseQuantity = (id) => {
    setdata((prevData) => {
      return prevData.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: (item.quantity || 0) + 1 };
        }
        return item;
      });
    });
  };

  const handleDecreaseQuantity = (id) => {
    setdata((prevData) => {
      return prevData.map((item) => {
        if (item.id === id && (item.quantity || 1) > 0) {
          return { ...item, quantity: (item.quantity || 1) - 1 };
        }
        return item;
      });
    });
  };

  const handleAddToCart = (id) => {
    const itemToAdd = data.find((item) => item.id === id);
    if (itemToAdd.quantity < 1) {
      toast.error("Choose quantity to add items to cart");
      return;
    }

    setdata((prevData) => {
      return prevData.map((item) => {
        if (item.id === id) {
          return { ...item, isInCart: true };
        }
        return item;
      });
    });

    setCartItems((prevItems) => [...prevItems, itemToAdd]);
    toast.success("Item added to cart");
  };

  const handleRemoveFromCart = (id) => {
    setdata((prevData) => {
      return prevData.map((item) => {
        if (item.id === id) {
          return { ...item, isInCart: false };
        }
        return item;
      });
    });

    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    toast.success("Item removed from cart");
  };

  const handleViewCart = () => {
    setShowCart(!showCart);
  };

  const handleBackToCart = () => {
    setShowCart(false);
  };

  return (
    <div>
      <div
        className="nav container-fluid navbar-dark sticky-top"
        style={{ background: "#6E6E6E" }}
      >
        <nav
          className="navbar navbar-expand-lg navbar-dark "
          style={{ background: "#6E6E6E" }}
        >
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <li className="nav-link active">
                  Total Quantity&nbsp;:&nbsp;&nbsp;
                  <button className="btn btn-outline-warning" type="submit">
                    <i className="bi-cart-fill me-1"></i>
                    <span className="badge bg-dark text-warning ms-1 rounded-pill">
                      {cartItems.reduce(
                        (total, item) => total + item.quantity,
                        0
                      )}
                    </span>
                  </button>
                </li>
                <li className="nav-link active">
                  Total Price&nbsp;:&nbsp;&nbsp;
                  <button className="btn btn-outline-warning" type="submit">
                    <i className="bi bi-tags-fill me-1"></i>
                    <span className="badge bg-dark text-warning ms-1 rounded-pill">
                      $&nbsp;
                      {cartItems.reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                      )}
                    </span>
                  </button>
                </li>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="container">
        <div className="row">
          {showCart ? (
            <CartTable
              cartItems={cartItems}
              handleRemoveFromCart={handleRemoveFromCart}
              handleBack={handleBackToCart}
            />
          ) : (
            data.map((item, index) => (
              <div key={index} className="col-lg-12 mb-4">
                <div className="card d-flex flex-row align-items-center">
                  <div className="col-md-4">
                    <Carousel>
                      {item.images.map((img, idx) => (
                        <Carousel.Item key={idx}>
                          <img
                            className="d-block w-100"
                            src={img}
                            alt={`Slide ${idx}`}
                            style={{ maxWidth: "100%" }} // Ensure images are responsive
                          />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.description}</p>
                      <p className="card-text">
                        <span className="badge bg-warning">
                          &nbsp;{item.rating}
                        </span>{" "}
                      </p>
                      <p className="card-text">
                        <span className="text-success fw-bold py-2">
                          {item.discountPercentage}% off
                        </span>{" "}
                      </p>
                      <p className="card-text">Price: $&nbsp;{item.price}</p>
                      <p className="card-text">Category: {item.category}</p>
                      <p className="card-text">
                        Stock: &nbsp;
                        <span className="badge bg-secondary py-2">
                          {" "}
                          {item.stock}
                        </span>
                      </p>
                    </div>
                    <div className="card-footer d-flex justify-content-between align-items-center">
                      {item.isInCart ? (
                        <button
                          className="btn btn-danger me-2"
                          onClick={() => handleRemoveFromCart(item.id)}
                        >
                          Remove from Cart
                        </button>
                      ) : (
                        <button
                          className="btn btn-hover-effect  me-2"
                          onClick={() => handleAddToCart(item.id)}
                          style={{
                            background: "#BAFF39",
                            transition: "background 0.3s",
                          }}
                        >
                          Add to Cart
                        </button>
                      )}

                      <button
                        className="btn btn-outline-secondary"
                        onClick={handleViewCart}
                      >
                        View Cart
                      </button>

                      <div className="btn-group">
                        <button
                          className="btn btn-secondary"
                          onClick={() => handleDecreaseQuantity(item.id)}
                        >
                          -
                        </button>
                        <button className="btn btn-secondary text-white disabled">
                          {item.quantity || 0}
                        </button>
                        <button
                          className="btn btn-secondary"
                          onClick={() => handleIncreaseQuantity(item.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <footer
        className=" text-light text-center py-2 mt-4 "
        style={{
          background: "#6E6E6E ",
        }}
      >
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} Azure Cart. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Cart;
