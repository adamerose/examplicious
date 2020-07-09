import axios from "axios";

const protocol = ["localhost", "127.0.0.1"].includes(
  process.env.REACT_APP_API_HOSTNAME
)
  ? "http"
  : "https";

const api = axios.create({
  baseURL: `${protocol}://${process.env.REACT_APP_API_HOSTNAME}:${process.env.REACT_APP_API_PORT}`,
});

window.axios = axios;
export default api;
