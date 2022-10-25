import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeCartItems } from "../reducers/cartItemsReducer";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);
  console.log(cartItems);
  useEffect(() => {
    dispatch(initializeCartItems());
  }, []);
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
    console.log("increase");
  };

  const decreaseQnty = () => {
    console.log("decrease");
  };

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
