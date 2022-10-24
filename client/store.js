import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./reducers/messageReducer";
import productReducer from "./reducers/productReducer";
import userReducer from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    products: productReducer,
    users: userReducer,
    messages: messageReducer,
  },
});

export default store;
