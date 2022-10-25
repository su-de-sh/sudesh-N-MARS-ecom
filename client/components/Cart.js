import React from "react";

const Cart = () => {
  const cartItems = [
    {
      productName: "phone",
      price: 2000,
      quantity: 1,
    },
    { productName: "earphone", price: 900, quantity: 2 },
    { productName: "earphone", price: 900, quantity: 2 },
    { productName: "earphone", price: 900, quantity: 2 },
  ];

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
                  <img className="cart-image" src="" alt="" />
                </td>
                <td>{item.productName}</td>
                <td>Rs. {item.price}</td>
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
