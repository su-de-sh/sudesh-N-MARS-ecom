import React from "react";
import NavBar from "./components/NavBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Router from "./components/Router";

import { initializeProducts } from "./reducers/productReducer";
import { setUserObject } from "./reducers/userReducer";
import { initializeCartItems } from "./reducers/cartItemsReducer";

const App = () => {
  const dispatch = useDispatch();
  const user = window.localStorage.getItem("loggedinUser");
  const cartItems = useSelector((state) => state.cartItems);

  useEffect(() => {
    // load products in store form backend
    dispatch(initializeProducts());
    dispatch(initializeCartItems());
    // set logged in user
    dispatch(setUserObject(JSON.parse(user)));
  }, [dispatch, user]);

  return (
    <>
      <NavBar cartItems={cartItems} />

      <Router cartItems={cartItems} />
    </>
  );
};

export default App;
