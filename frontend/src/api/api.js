import axios from "axios";

// Set up API URL
const host = process.env.REACT_APP_API_HOSTNAME;
const port = process.env.REACT_APP_API_PORT;
// const baseURL = `http://${host}:${port}`;
const baseURL = " http://localhost:3000";

const api = axios.create({ baseURL: baseURL });

console.log("API baseURL: ", baseURL);

export default api;
