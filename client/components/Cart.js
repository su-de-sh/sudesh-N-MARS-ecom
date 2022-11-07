import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setMessageObject } from "../reducers/messageReducer";
import orderServices from "../services/orderServices";
// import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const user = useSelector((state) => state.users);
  const message = useSelector((state) => state.messages);
  const dispatch = useDispatch();

  const increaseQnty = () => {
    // console.log("increase");
  };

  const decreaseQnty = () => {
    // console.log("decrease");
  };

  const handlePlaceOrder = async () => {
    const response = await orderServices.placeOrder();
    dispatch(setMessageObject(response));
    // dispatch(initializeCartItems());
  };

  if (!cartItems.length) {
    return (
      <div className="flex split-center">
        <h1>NO items in cart</h1>
      </div>
    );
  }

  const total = cartItems.reduce((a, b) => {
    return (a =
      a + (b.price || b.product.price) * (b.noOfProduct || b.quantity));
  }, 0);

  const shippingFee = 100;

  return (
    <div className="wrapper ">
      <div className=" flex split-center h4"> Cart Items</div>
      {message ? <div>{message}</div> : null}
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
                        src={item.imagePath || item.product.imagePath}
                        alt={item.productName || item.product.productName}
                      />
                    </td>
                    <td style={{ display: "block" }}>
                      {item.productName || item.product.productName}
                      <h5 style={{ color: "red" }}>
                        *Only{" "}
                        {(item.product && item.product.quantity) ||
                          item.quantity}{" "}
                        in stock
                      </h5>
                    </td>
                    <td>Rs. {item.price || item.product.price}</td>
                    <td>
                      <button
                        className="no-button no-button-font-sm"
                        onClick={decreaseQnty}
                      >
                        {" "}
                        -{" "}
                      </button>
                      {item.noOfProduct || item.quantity}
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
            {user ? (
              <div>
                {user.shippingAddress ? (
                  <div>
                    <div className="light-color">
                      <div>Deliver to:</div>
                      <div>Name:{user.shippingAddress.split("~")[0]}</div>
                      <div>Address:{user.shippingAddress.split("~")[1]}</div>
                      <div>Contact:{user.shippingAddress.split("~")[2]}</div>
                    </div>
                    <div className="line-1"></div>

                    <button
                      className="checkout-cart-button "
                      onClick={handlePlaceOrder}
                    >
                      Place Order
                    </button>
                  </div>
                ) : (
                  <div>
                    <Link to="/shipping-address">
                      {" "}
                      <button className="shipping-button">
                        + Add Shipping address
                      </button>{" "}
                    </Link>

                    <div className="line-1"></div>

                    <button className="checkout-cart-button-disable " disabled>
                      Place Order
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div>
                {" "}
                <Link to="/shipping-address">
                  {" "}
                  <button className="shipping-button-disable" disabled>
                    + Add Shipping address
                  </button>{" "}
                </Link>
                <div className="line-1"></div>
                <p style={{ color: "orangered" }}>
                  Login first to Place order!!
                </p>
                <button className="checkout-cart-button-disable " disabled>
                  Place Order
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
