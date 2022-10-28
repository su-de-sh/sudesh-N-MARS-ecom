import React from "react";

const Cart = ({ cartItems }) => {
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
    return (a = a + b.product.price * b.quantity);
  }, 0);

  const shippingFee = 100;

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
                        src={item.product.imagePath}
                        alt={item.product.productName}
                      />
                    </td>
                    <td>{item.product.productName}</td>
                    <td>Rs. {item.product.price}</td>
                    <td>
                      <button
                        className="no-button no-button-font-sm"
                        onClick={decreaseQnty}
                      >
                        {" "}
                        -{" "}
                      </button>
                      {item.quantity}
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
            <div className="line-1"></div>
            <div className="flex split-pair light-color">
              <div>Total</div>
              <div>Rs. {total - shippingFee}</div>
            </div>

            <button className="checkout-button ">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
