import axios from "axios";
import { basePath } from "../utils";
// const baseUrl = "/api/users/shipping";
const baseUrl = basePath + "api/users/shipping";
const add = async (shippingAddress) => {
  const token = await JSON.parse(window.localStorage.getItem("loggedinUser"))
    .token;

  const config = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };
  const response = await axios.put(
    baseUrl,
    {
      shippingAddress,
    },
    config
  );
  return response.data;
};
//eslint-disable-next-line
export default { add };
