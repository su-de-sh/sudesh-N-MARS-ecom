import { Routes, Route } from "react-router-dom";

import Products from "./Products";
// import MessageView from "./MessageView";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
    </Routes>
  );
};

export default Router;
