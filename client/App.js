import React from "react";
import NavBar from "./components/NavBar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Router from "./components/Router";

import { initializeProducts } from "./reducers/productReducer";
import { setUserObject } from "./reducers/userReducer";

const App = () => {
  const dispatch = useDispatch();
  const user = window.localStorage.getItem("loggedinUser");

  useEffect(() => {
    // load products in store form backend
    dispatch(initializeProducts());
    // set logged in user
    dispatch(setUserObject(JSON.parse(user)));
  }, [dispatch, user]);

  return (
    <>
      <NavBar />

      <Router />
    </>
  );
};

export default App;
