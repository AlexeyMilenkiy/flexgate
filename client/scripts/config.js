import axios from "axios";

const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000/api/v1"
    : "/api/v1";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});
