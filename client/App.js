import React from "react";
import NavBar from "./components/NavBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Router from "./components/Router";

import { initializeProducts } from "./reducers/productReducer";
import { setUserObject } from "./reducers/userReducer";
import {
  initializeCartItemsDatabase,
  initializeCartItemsLocal,
} from "./reducers/cartItemsReducer";
import { useMatch } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);
  const cartItems = useSelector((state) => state.cartItems);
  const products = useSelector((state) => state.products);

  useEffect(() => {
    // load products in store form backend
    // const user = window.localStorage.getItem("loggedinUser");

    dispatch(initializeProducts());
    if (user) dispatch(initializeCartItemsDatabase());
    else dispatch(initializeCartItemsLocal());

    // set logged in user
    dispatch(setUserObject());
  }, [dispatch]);

  const matchProduct = useMatch("/product/:id");
  // console.log(matchProduct);

  if (!products.length) {
    return null;
  }
  const productDetail = matchProduct
    ? products.find((prod) => {
        return prod.id === Number(matchProduct.params.id);
      })
    : null;

  return (
    <>
      <NavBar cartItems={cartItems} />

      <Router products={products} productDetail={productDetail} />
    </>
  );
};

export default App;
