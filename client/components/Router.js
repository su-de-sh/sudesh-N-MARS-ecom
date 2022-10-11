import { Routes, Route } from "react-router-dom";

import Products from "./Products";
// import MessageView from "./MessageView";

const Router = () => (
  <Routes>
    <Route path="/" element={<Products />} />
  </Routes>
);

export default Router;
