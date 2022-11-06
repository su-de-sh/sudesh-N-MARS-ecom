import axios from "axios";
import { basePath } from "../utils";

const baseUrl = basePath + "api/orderDetails";

const getCartItems = async (user) => {
  // const token = await JSON.parse(window.localStorage.getItem("loggedinUser"))
  //   .token;

  const config = {
    headers: {
      Authorization: `bearer ${user.token}`,
    },
  };
  const response = await axios.get(`${baseUrl}/cart`, config);

  return response.data;
};

const getAll = async () => {
  const response = await axios.get(`${baseUrl}`);
  return response.data;
};

const createOrder = async (productId, quantity) => {
  const token = await JSON.parse(window.localStorage.getItem("loggedinUser"))
    .token;
  console.log("token", token);
  const config = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };
  const response = await axios.post(baseUrl, { productId, quantity }, config);

  return response.data;
};

const placeOrder = async () => {
  const token = await JSON.parse(window.localStorage.getItem("loggedinUser"))
    .token;

  const config = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };
  // console.log(config, "config");
  const response = await axios.put("/api/orders", {}, config);
  return response.data;
};

export default { createOrder, getCartItems, getAll, placeOrder };
