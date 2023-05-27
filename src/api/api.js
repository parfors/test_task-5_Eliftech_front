import axios from "axios";

const BASE_URL = "http://localhost:3001";

const instance = axios.create({
  baseURL: BASE_URL,
});

export const getAllProducts = async () => {
  const { data } = await instance.get("api/products");
  return data;
};
