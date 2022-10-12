import axios from "axios";

const baseUrl = "http://localhost:3001/api/products";

const getAll = async () => {
  const request = await axios.get(`${baseUrl}?limit=10`);

  return request.data;
};

export default { getAll };
