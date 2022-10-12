import axios from "axios";

const baseUrl = "http://localhost:3001/api/products";

const getAll = async () => {
  const request = await axios.get(baseUrl);
  console.log(request);
  return request.data;
};

export default { getAll };
