import axios from "axios";

const baseUrl = "/api/products";

const getAll = async () => {
  const response = await axios.get(`${baseUrl}?limit=10`);

  return response.data;
};

export default { getAll };
