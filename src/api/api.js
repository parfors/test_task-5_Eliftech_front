import axios from "axios";

const BASE_URL = "http://localhost:3001";

const instance = axios.create({
  baseURL: BASE_URL,
});

export const getAllProducts = async () => {
  const { data } = await instance.get("api/products");
  return data;
};

export const postOrder = async (body) => {
  const { data } = await instance.post("api/order", body);
  return data;
};

export const getHistory = async () => {
  const { data } = await instance.get("api/order");
  return data;
};
