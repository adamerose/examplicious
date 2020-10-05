import axios from "axios";

const protocol = ["localhost", "127.0.0.1"].includes(process.env.REACT_APP_API_HOSTNAME)
  ? "http"
  : "https";

const baseURL = `${protocol}://${process.env.REACT_APP_API_HOSTNAME}:${process.env.REACT_APP_API_PORT}`;
const api = axios.create({
  baseURL: baseURL,
});

window.axios = axios;

console.log(baseURL);
export default api;
