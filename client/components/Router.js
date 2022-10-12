import { Routes, Route } from "react-router-dom";

import Products from "./Products";
// import MessageView from "./MessageView";

const Router = ({ products }) => (
  <Routes>
    <Route path="/" element={<Products products={products} />} />
  </Routes>
);

export default Router;
