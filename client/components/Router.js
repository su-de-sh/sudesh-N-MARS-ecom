import { Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import Login from "./Login";

import Products from "./Products";
import Signup from "./Signup";
// import MessageView from "./MessageView";

const Router = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Products />} /> */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Router;
