//

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

export const initializeCartItems = () => {
  return async (dispatch) => {
    const user = JSON.parse(window.localStorage.getItem("loggedinUser"));
    if (user) {
      const itemsInCart = await orderServices.getCartItems(user);
      const itemsInLocalStorage = JSON.parse(
        window.localStorage.getItem("cartItems")
      );

      if (!itemsInCart.length && itemsInLocalStorage.length) {
        await dispatch(addItemToCart(itemsInLocalStorage[0].id));

        itemsInLocalStorage.forEach((item, index) => {
          if (index !== 0) {
            dispatch(addItemToCart(item.id));
          }

          // console.log(items);
          // const promise = await Promise.all(items);
          // console.log(promise);
        });

        dispatch(setItems(itemsInCart));
      } else {
        const itemsInCart = JSON.parse(
          window.localStorage.getItem("cartItems")
        );
        if (!itemsInCart) {
          window.localStorage.setItem("cartItems", JSON.stringify([]));

          dispatch(setItems([]));
        } else {
          dispatch(setItems(itemsInCart));
        }
      }
      // const itemsInCart = await orderServices.getCartItems();
      // // console.log(itemsInCart);
      // const itemsInCartLocal = JSON.parse(
      //   window.localStorage.getItem("cartItems")
      // );
      // // console.log(itemsInCartLocal);
      // if (!itemsInCart.length && itemsInCartLocal.length) {
      //   // console.log(itemsInCart);
      //   const promiseArray = itemsInCartLocal.map((item) =>
      //     dispatch(addCartItemDatabase(item.id))
      //   );
      //   await Promise.all(promiseArray);

      //   // dispatch(setItems(itemsInCartLocal));
      //   // window.localStorage.setItem("cartItems", JSON.stringify([]));
      // } else if (!itemsInCart.length && !itemsInCartLocal.length) {
      //   dispatch(setItems([]));
      // } else {
      //   const cartItems = itemsInCart.map((item) => {
      //     return { ...item.product, noOfProduct: item.quantity };
      //   });

      //   dispatch(setItems(cartItems));
      // }
    }
  };
};

export const addItemToCart = (productId, quantity = 1) => {
  return async (dispatch) => {
    // console.log("addItemToCart");
    const user = JSON.parse(window.localStorage.getItem("loggedinUser"));
    if (user) {
      const addedItem = await orderServices.createOrder(productId, quantity);

      const products = await productServices.getAll();

      // console.log(addedItem);
      const order = products.find(
        (product) => product.id === addedItem.productId
      );
      order.noOfItems = quantity;
      dispatch(addItem(order));
      // console.log("last of add to cart");
    } else {
      const itemsInCart = JSON.parse(window.localStorage.getItem("cartItems"));

      const products = await productServices.getAll();

      const order = products.find((product) => product.id === productId);
      order.noOfProduct = quantity;
      itemsInCart.push(order);

      window.localStorage.setItem("cartItems", JSON.stringify(itemsInCart));

      dispatch(setItems(itemsInCart));
    }
  };
};

// export const initializeCartItemsLocal = () => {
//   return async (dispatch) => {
//     const itemsInCart = JSON.parse(window.localStorage.getItem("cartItems"));
//     // const cartItems = itemsInCart.map((item) => {
//     //   return { ...item};
//     // });

//     if (!itemsInCart) {
//       dispatch(setItems([]));
//       window.localStorage.setItem("cartItems", JSON.stringify([]));
//     }
//     // const cartItems = itemsInCart.map((item) => {
//     //   return { ...item.product, noOfProduct: item.quantity };
//     // });
//     // console.log(cartItems);
//     else {
//       dispatch(setItems(itemsInCart));
//     }
//   };
// };
// export const addCartItemDatabase = (productId) => {
//   return async (dispatch) => {
//     const order = await orderServices.createOrder(productId);
//     const products = await productServices.getAll();

//     const addedItem = products.find(
//       (product) => product.productId === order.productId
//     );

//     dispatch(addItem({ ...addedItem.product, noOfProduct: 1 }));
//   };
// };

// export const addCartItemLocal = (productId) => {
//   return async (dispatch) => {
//     const products = await productServices.getAll();
//     // console.log(productId, products);
//     const addedItem = products.find((product) => product.id === productId);

//     dispatch(addItem({ ...addedItem, noOfProduct: 1 }));
//     // dispatch(addItem(addedItem));

//     const itemsInCart = JSON.parse(window.localStorage.getItem("cartItems"));
//     itemsInCart.push({ ...addedItem, noOfProduct: 1 });
//     window.localStorage.setItem("cartItems", JSON.stringify(itemsInCart));
//   };
// };

export const { setItems, addItem } = cartItemsSlice.actions;
export default cartItemsSlice.reducer;
