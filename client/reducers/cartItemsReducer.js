import { createSlice } from "@reduxjs/toolkit";
import cartItemsServices from "../services/orderServices";

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState: [],
  reducers: {
    setcartItems(state, action) {
      return action.payload;
    },
  },
});
export default cartItemsSlice.reducer;

export const initializeCartItems = () => {
  return async (dispatch) => {
    const cartItems = await cartItemsServices.getCartItems();
    dispatch(setcartItems(cartItems));
  };
};

export const { setcartItems } = cartItemsSlice.actions;
