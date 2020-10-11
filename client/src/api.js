import axios from "axios";

// Set up API URL
const protocol = ["localhost", "127.0.0.1"].includes(
  process.env.REACT_APP_API_HOSTNAME
)
  ? "http"
  : "https";
const host = process.env.REACT_APP_API_HOSTNAME || "localhost";
const port = process.env.REACT_APP_API_PORT || 8000;
const baseURL = `${protocol}://${host}:${port}`;

const api = axios.create({
  baseURL: baseURL,
});

console.log("API: ", baseURL);

// Create global axios error handler
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (!error.response) {
      console.log("A network error occurred.");
    }

    return Promise.reject(error);
  }
);

export default api;
