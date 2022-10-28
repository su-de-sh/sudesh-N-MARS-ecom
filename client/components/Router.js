import { Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Login from "./Login";

import Products from "./Products";
import ShippingAddress from "./ShippingAddress";
import Signup from "./Signup";
// import MessageView from "./MessageView";

const Router = ({ cartItems }) => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart cartItems={cartItems} />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/shipping-address" element={<ShippingAddress />} />
    </Routes>
  );
};

export default Router;
