import { createSlice } from "@reduxjs/toolkit";
import orderServices from "../services/orderServices";
import productServices from "../services/productServices";

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState: [],
  reducers: {
    setItems(state, action) {
      return action.payload;
    },
    addItem(state, action) {
      state.push(action.payload);

      // return [...state, action.payload];
    },
  },
});

export const initializeCartItemsDatabase = () => {
  return async (dispatch) => {
    const itemsInCart = await orderServices.getCartItems();
    // console.log(itemsInCart);
    const itemsInCartLocal = JSON.parse(
      window.localStorage.getItem("cartItems")
    );
    // console.log(itemsInCartLocal);
    if (!itemsInCart.length && itemsInCartLocal.length) {
      // console.log(itemsInCart);
      // const promiseArray = itemsInCartLocal.map((item) =>
      //   dispatch(addCartItemDatabase(item.id))
      // );
      // await Promise.all(promiseArray);

      dispatch(setItems(itemsInCartLocal));
      // window.localStorage.setItem("cartItems", JSON.stringify([]));
    } else if (!itemsInCart.length && !itemsInCartLocal.length) {
      dispatch(setItems([]));
    } else {
      const cartItems = itemsInCart.map((item) => {
        return { ...item.product, noOfProduct: item.quantity };
      });

      dispatch(setItems(cartItems));
    }
  };
};
export const initializeCartItemsLocal = () => {
  return async (dispatch) => {
    const itemsInCart = JSON.parse(window.localStorage.getItem("cartItems"));
    // const cartItems = itemsInCart.map((item) => {
    //   return { ...item};
    // });

    if (!itemsInCart) {
      dispatch(setItems([]));
      window.localStorage.setItem("cartItems", JSON.stringify([]));
    }
    // const cartItems = itemsInCart.map((item) => {
    //   return { ...item.product, noOfProduct: item.quantity };
    // });
    // console.log(cartItems);
    else {
      dispatch(setItems(itemsInCart));
    }
  };
};
export const addCartItemDatabase = (productId) => {
  return async (dispatch) => {
    const order = await orderServices.createOrder(productId);
    const products = await orderServices.getAll();

    const addedItem = products.find(
      (product) => product.productId === order.productId
    );

    dispatch(addItem({ ...addedItem.product, noOfProduct: 1 }));
  };
};

export const addCartItemLocal = (productId) => {
  return async (dispatch) => {
    const products = await productServices.getAll();
    // console.log(productId, products);
    const addedItem = products.find((product) => product.id === productId);

    dispatch(addItem({ ...addedItem, noOfProduct: 1 }));
    // dispatch(addItem(addedItem));

    const itemsInCart = JSON.parse(window.localStorage.getItem("cartItems"));
    itemsInCart.push({ ...addedItem, noOfProduct: 1 });
    window.localStorage.setItem("cartItems", JSON.stringify(itemsInCart));
  };
};

export const { setItems, addItem } = cartItemsSlice.actions;
export default cartItemsSlice.reducer;
