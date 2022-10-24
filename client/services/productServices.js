import axios from "axios";

const baseUrl = "/api/products";

const getAll = async () => {
  const request = await axios.get(`${baseUrl}?limit=10`);

  return request.data;
};

export default { getAll };
