import axios from "axios";

const baseURL = "localhost:4000";
export const axiosInstance = axios.create({
  baseURL,
});
