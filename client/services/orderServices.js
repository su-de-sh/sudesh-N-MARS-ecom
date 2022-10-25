import axios from "axios";
import { useSelector } from "react-redux";

const baseUrl = "/api/orders";

const createOrder = async (userId) => {
  const request = await axios.post(baseUrl, { userId });

  return request.data;
};

export default { createOrder };
