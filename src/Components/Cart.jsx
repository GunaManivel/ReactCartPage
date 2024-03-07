import React, { useContext } from "react";
import { myContext } from "../App";
import { Carousel } from "react-bootstrap";
import "./Style/Cart.css";

const Cart = () => {
  const [data, setdata] = useContext(myContext);
  const TotalPrice = data.reduce(
    (total, data) => total + data.price * (data.quantity || 1),
    0
  );
  const TotalQuantity = data.reduce(
    (total, data) => total + (data.quantity || 1),
    0
  );

  const handleToggleCart = (id, quantity) => {
    setdata((preData) => {
      return preData.map((item) => {
        if (item.id === id) {
          const newQuantity = item.isInCart
            ? item.quantity - quantity
            : item.quantity + quantity;
          return { ...item, isInCart: !item.isInCart, quantity: newQuantity };
        }
        return item;
      });
    });
  };

  const handleIncreaseQuantity = (id) => {
    setdata((preData) => {
      return preData.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: (item.quantity || 0) + 1 };
        }
        return item;
      });
    });
  };

  const handleDecreaseQuantity = (id) => {
    setdata((preData) => {
      return preData.map((item) => {
        if (item.id === id && (item.quantity || 0) > 0) {
          return { ...item, quantity: (item.quantity || 0) - 1 };
        }
        return item;
      });
    });
  };

  return (
    <div>
      <div className="nav container-fluid navbar-dark bg-dark sticky-top">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <li className="nav-link active">
                  Total Quantity&nbsp;:&nbsp;&nbsp;
                  <button className="btn btn-outline-warning" type="submit">
                    <i className="bi-cart-fill me-1"></i>
                    <span className="badge bg-dark text-warning ms-1 rounded-pill">
                      {TotalQuantity}
                    </span>
                  </button>
                </li>
                <li className="nav-link active">
                  Total Price&nbsp;:&nbsp;&nbsp;
                  <button className="btn btn-outline-warning" type="submit">
                    <i className="bi bi-tags-fill me-1"></i>
                    <span className="badge bg-dark text-warning ms-1 rounded-pill">
                      $&nbsp;{TotalPrice}
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
          {data.map((item, index) => (
            <div key={index} className="col-lg-4 mb-4">
              <div className="card">
                <Carousel>
                  {item.images.map((img, idx) => (
                    <Carousel.Item key={idx}>
                      <img
                        className="d-block w-100"
                        src={img}
                        alt={`Slide ${idx}`}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text">
                    <span className="badge bg-warning">
                      &nbsp;{item.rating}
                    </span>{" "}
                  </p>
                  <p className="card-text">
                    <span className=" text-success fw-bold py-2">
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
                <div className="card-footer">
                  {item.isInCart ? (
                    <button
                      className="btn btn-danger me-2"
                      onClick={() => handleToggleCart(item.id, item.quantity)}
                    >
                      Remove from Cart
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary me-2"
                      onClick={() => handleToggleCart(item.id, 1)}
                    >
                      Add to Cart
                    </button>
                  )}
                  <div className="btn-group">
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleDecreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    <button className="btn btn-secondary text-white disabled ">
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
