import React from "react";
import productImage from "../assets/images/iphone.jpeg";

const Products = ({ products }) => {
  console.log(products);
  return (
    <div className="wrapper ">
      <div className=" flex split-center"> All Products</div>

      <div className="gallery">
        {products.map((product, index) => {
          product.specification.length > 30
            ? (product.specification = `${product.specification.slice(
                0,
                30
              )}...`)
            : products.specification;
          return (
            <div key={index} className="content">
              <img className="product-img" src={productImage} alt="product" />
              <h3 className="title">{product.productName}</h3>
              <p className="desc">{product.specification}</p>
              <h6 className="price">Rs.{product.price}</h6>
              <button className="add-to-cart-btn"> Add to cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
