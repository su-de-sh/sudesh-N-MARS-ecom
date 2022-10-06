import { Routes, Route } from "react-router-dom";

import FrontPage from "./FrontPage";
// import MessageView from "./MessageView";

const Router = () => (
  <Routes>
    <Route path="/" element={<FrontPage />} />
  </Routes>
);

export default Router;
