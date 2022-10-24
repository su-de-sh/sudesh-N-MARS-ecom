import axios from "axios";
const baseUrl = "/api/users";

const signUp = async (firstName, lastName, email, password) => {
  const response = await axios.post(baseUrl, {
    firstName,
    lastName,
    email,
    password,
  });
  return response.data;
};
//eslint-disable-next-line
export default { signUp };
