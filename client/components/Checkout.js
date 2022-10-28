import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cartItems);

  const total = cartItems.reduce((a, b) => {
    return (a = a + b.product.price * b.quantity);
  }, 0);

  const shippingFee = 100;
  return (
    <div className="wrapper ">
      <div className=" flex split-center h4"> Checkout</div>
      <div className="flex checkout-gallery ">
        <div>
          <Link to="/shipping ">
            {" "}
            <button className="shipping-button">
              + Add Shipping address
            </button>{" "}
          </Link>

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
                        src={item.product.imagePath}
                        alt={item.product.productName}
                      />
                    </td>
                    <td>{item.product.productName}</td>
                    <td>Qty.{item.quantity}</td>
                    <td>Rs.{item.quantity * item.product.price}</td>
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
              <div>Rs. {total - shippingFee}</div>
            </div>
            <div className="line-1"></div>

            <div className="light-color">
              <div>Deliver to:</div>
              <div>Name:Sudesh Mate</div>
              <div>Address:Khorsane morang</div>
              <div>Contact:9808563636</div>
            </div>

            <div className="line-1"></div>

            <button className="checkout-cart-button ">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
