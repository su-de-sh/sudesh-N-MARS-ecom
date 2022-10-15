import React from "react";
import NavBar from "./components/NavBar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Router from "./components/Router";

import { initializeProducts } from "./reducers/productReducer";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // load products in store form backend
    dispatch(initializeProducts());
  }, [dispatch]);

  return (
    <>
      <NavBar />

      <Router />
    </>
  );
};

export default App;
