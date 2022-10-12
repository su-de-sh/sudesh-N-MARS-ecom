import React from "react";
import productImage from "../assets/images/iphone.jpeg";

const Products = () => {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="wrapper ">
      <div className=" flex split-center"> All Products</div>

      <div className="gallery">
        {products.map((product, index) => {
          return (
            <div key={index} className="content">
              <img className="product-img" src={productImage} alt="product" />
              <h3 className="title">Iphone 13 pro max</h3>
              <p className="desc">lorem ipsum a quick brown fox</p>
              <h6 className="price">Rs. 8000</h6>
              <button className="add-to-cart-btn"> Add to cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
