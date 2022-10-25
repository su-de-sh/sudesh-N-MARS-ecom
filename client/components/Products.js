import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessageObject } from "../reducers/messageReducer";
import orderServices from "../services/orderServices";

const Products = () => {
  const dispatch = useDispatch();
  //retrive all products from redux store
  const products = useSelector((state) => state.products);
  const addToCart = async (productId) => {
    const response = await orderServices.createOrder(productId);
    dispatch(setMessageObject("Added item to cart successfully!!"));
  };
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
              <h3 className="title">{product.productName.slice(0, 20)}</h3>
              <p className="desc">{product.specification.slice(0, 50)}...</p>
              <h6 className="price">Rs.{product.price}</h6>
              <button
                className="add-to-cart-btn"
                onClick={() => addToCart(product.id)}
              >
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
