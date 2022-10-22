import { Routes, Route } from "react-router-dom";
import Login from "./Login";

import Products from "./Products";
import Signup from "./Signup";
// import MessageView from "./MessageView";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
