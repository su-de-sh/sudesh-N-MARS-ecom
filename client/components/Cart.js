import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const user = useSelector((state) => state.users);

  const increaseQnty = () => {
    // console.log("increase");
  };

  const decreaseQnty = () => {
    // console.log("decrease");
  };

  if (!cartItems.length) {
    return (
      <div className="flex split-center">
        <h1>NO items in cart</h1>
      </div>
    );
  }

  const total = cartItems.reduce((a, b) => {
    return (a = a + b.price * b.noOfProduct);
  }, 0);

  const shippingFee = 100;

  if (!user) {
    return (
      <div className="wrapper ">
        <div className=" flex split-center h4"> Cart Items</div>
        <div className="flex cart-gallery ">
          <div>
            <table>
              <tbody>
                {cartItems.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className=" cart-card flex split-pair table-row "
                    >
                      <td>
                        <img
                          className="cart-image"
                          src={item.imagePath}
                          alt={item.productName}
                        />
                      </td>
                      <td style={{ display: "block" }}>
                        {item.productName}
                        <h5 style={{ color: "red" }}>
                          *Only {item.quantity} in stock
                        </h5>
                      </td>
                      <td>Rs. {item.price}</td>
                      <td>
                        <button
                          className="no-button no-button-font-sm"
                          onClick={decreaseQnty}
                        >
                          {" "}
                          -{" "}
                        </button>
                        {item.noOfProduct}
                        <button
                          className="no-button no-button-font-sm"
                          onClick={increaseQnty}
                        >
                          {" "}
                          +{" "}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="order-summary">
            <div className="order-summary-title">Order Summary</div>
            <div className="line-1"></div>
            <div className="margin-md">
              <div className="flex split-pair light-color">
                <div>Subtotal({cartItems.length})</div>
                <div>Rs. {total}</div>
              </div>
              <div className="flex split-pair light-color">
                <div>Shipping fee</div>
                <div>Rs. {shippingFee}</div>
              </div>
              <div className="flex split-pair light-color">
                <div>Total</div>
                <div>Rs. {total + shippingFee}</div>
              </div>
              <div className="line-1"></div>

              {/* <div className="light-color">
                <div>Deliver to:</div>
                <div>Name:</div>
                <div>Address:</div>
                <div>Contact:</div>
              </div> */}

              <Link to="/shipping-address">
                {" "}
                <button className="shipping-button-disable" disabled>
                  + Add Shipping address
                </button>{" "}
              </Link>

              <div className="line-1"></div>
              <p style={{ color: "orangered" }}>Login first to Place order!!</p>
              <button className="checkout-cart-button-disable " disabled>
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    if (!user.shippingAddress) {
      return (
        <div className="wrapper ">
          <div className=" flex split-center h4"> Cart Items</div>
          <div className="flex cart-gallery ">
            <div>
              <table>
                <tbody>
                  {cartItems.map((item, index) => {
                    return (
                      <tr
                        key={index}
                        className=" cart-card flex split-pair table-row "
                      >
                        <td>
                          <img
                            className="cart-image"
                            src={item.imagePath}
                            alt={item.productName}
                          />
                        </td>
                        <td style={{ display: "block" }}>
                          {item.productName}
                          <h5 style={{ color: "red" }}>
                            *Only {item.quantity} in stock
                          </h5>
                        </td>
                        <td>Rs. {item.price}</td>
                        <td>
                          <button
                            className="no-button no-button-font-sm"
                            onClick={decreaseQnty}
                          >
                            {" "}
                            -{" "}
                          </button>
                          {item.noOfProduct}
                          <button
                            className="no-button no-button-font-sm"
                            onClick={increaseQnty}
                          >
                            {" "}
                            +{" "}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="order-summary">
              <div className="order-summary-title">Order Summary</div>
              <div className="line-1"></div>
              <div className="margin-md">
                <div className="flex split-pair light-color">
                  <div>Subtotal({cartItems.length})</div>
                  <div>Rs. {total}</div>
                </div>
                <div className="flex split-pair light-color">
                  <div>Shipping fee</div>
                  <div>Rs. {shippingFee}</div>
                </div>
                <div className="flex split-pair light-color">
                  <div>Total</div>
                  <div>Rs. {total + shippingFee}</div>
                </div>
                <div className="line-1"></div>

                {/* <div className="light-color">
                <div>Deliver to:</div>
                <div>Name:</div>
                <div>Address:</div>
                <div>Contact:</div>
              </div> */}

                <Link to="/shipping-address">
                  {" "}
                  <button className="shipping-button">
                    + Add Shipping address
                  </button>{" "}
                </Link>

                <div className="line-1"></div>

                <button className="checkout-cart-button ">Place Order</button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      const [name, address, phone] = user.shippingAddress.split("~");
      return (
        <div className="wrapper ">
          <div className=" flex split-center h4"> Cart Items</div>
          <div className="flex cart-gallery ">
            <div>
              <table>
                <tbody>
                  {cartItems.map((item, index) => {
                    return (
                      <tr
                        key={index}
                        className=" cart-card flex split-pair table-row "
                      >
                        <td>
                          <img
                            className="cart-image"
                            src={item.imagePath}
                            alt={item.productName}
                          />
                        </td>
                        <td style={{ display: "block" }}>
                          {item.productName}
                          <h5 style={{ color: "red" }}>
                            *Only {item.quantity} in stock
                          </h5>
                        </td>
                        <td>Rs. {item.price}</td>
                        <td>
                          <button
                            className="no-button no-button-font-sm"
                            onClick={decreaseQnty}
                          >
                            {" "}
                            -{" "}
                          </button>
                          {item.noOfProduct}
                          <button
                            className="no-button no-button-font-sm"
                            onClick={increaseQnty}
                          >
                            {" "}
                            +{" "}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="order-summary">
              <div className="order-summary-title">Order Summary</div>
              <div className="line-1"></div>
              <div className="margin-md">
                <div className="flex split-pair light-color">
                  <div>Subtotal({cartItems.length})</div>
                  <div>Rs. {total}</div>
                </div>
                <div className="flex split-pair light-color">
                  <div>Shipping fee</div>
                  <div>Rs. {shippingFee}</div>
                </div>
                <div className="flex split-pair light-color">
                  <div>Total</div>
                  <div>Rs. {total + shippingFee}</div>
                </div>
                <div className="line-1"></div>

                <div className="light-color">
                  <div>Deliver to:</div>
                  <div>Name:{name}</div>
                  <div>Address:{address}</div>
                  <div>Contact:{phone}</div>
                </div>

                <div className="line-1"></div>

                <button className="checkout-cart-button ">Place Order</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
};

export default Cart;
