import axios from "axios";

const api = axios.create({
  baseURL: `https://${process.env.REACT_APP_API_HOSTNAME}:${process.env.REACT_APP_API_PORT}`,
});

export default api;
