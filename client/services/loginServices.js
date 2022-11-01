import axios from "axios";
import { basePath } from "../utils";
// const baseUrl = "/api/login";
const baseUrl = basePath + "api/login";
const login = async (email, password) => {
  const response = await axios.post(baseUrl, {
    email,
    password,
  });
  return response.data;
};
//eslint-disable-next-line
export default { login };
