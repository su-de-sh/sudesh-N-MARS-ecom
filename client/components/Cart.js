import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeCartItems } from "../reducers/cartItemsReducer";

const Cart = ({ cartItems }) => {
  // const cartItems = [
  //   {
  //     productName: "phone",
  //     price: 2000,
  //     quantity: 1,
  //   },
  //   { productName: "earphone", price: 900, quantity: 2 },
  //   { productName: "earphone", price: 900, quantity: 2 },
  //   { productName: "earphone", price: 900, quantity: 2 },
  // ];

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

  return (
    <div className="wrapper cart-container ">
      <table>
        <tbody>
          {cartItems.map((item, index) => {
            return (
              <tr key={index} className=" cart-card flex split-pair table-row ">
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
  );
};

export default Cart;
