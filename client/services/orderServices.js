import axios from "axios";

const baseUrl = "/api/orderDetails";

const createOrder = async (productId) => {
  const token = await JSON.parse(window.localStorage.getItem("loggedinUser"))
    .token;

  const config = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };
  const response = await axios.post(baseUrl, { productId }, config);

  return response.data;
};

export default { createOrder };