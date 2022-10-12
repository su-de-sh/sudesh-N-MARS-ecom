import React from "react";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import Router from "./components/Router";
import productServices from "./services/productServices";

const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    productServices.getAll().then((result) => setProducts(result));
  }, []);
  console.log(products);
  return (
    <>
      <NavBar />

      <Router />
    </>
  );
};

export default App;
