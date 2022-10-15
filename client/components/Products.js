import React from "react";
import { useSelector } from "react-redux";

const Products = () => {
  //retrive all products from redux store
  const products = useSelector((state) => state.products);

  return (
    <div className="wrapper ">
      <div className=" flex split-center"> All Products</div>

      <div className="gallery">
        {products.map((product, index) => {
          return (
            <div key={index} className="content">
              <img
                className="product-img"
                src={product.imagePath}
                alt={`$product.productName`}
              />
              <h3 className="title">{product.productName}</h3>
              <p className="desc">{product.specification.slice(0, 50)}...</p>
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
