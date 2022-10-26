import { createSlice } from "@reduxjs/toolkit";
import orderServices from "../services/orderServices";
import cartItemsServices from "../services/orderServices";

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState: [],
  reducers: {
    setItems(state, action) {
      return action.payload;
    },
    addItem(state, action) {
      state.push(action.payload);
    },
  },
});
export default cartItemsSlice.reducer;

export const initializeCartItems = () => {
  return async (dispatch) => {
    const cartItems = await cartItemsServices.getCartItems();
    dispatch(setItems(cartItems));
  };
};
export const addCartItem = (productId) => {
  return async (dispatch) => {
    const order = await orderServices.createOrder(productId);
    dispatch(addItem(order));
  };
};

export const { setItems, addItem } = cartItemsSlice.actions;
