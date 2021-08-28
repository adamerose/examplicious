/////////////
// api
import axios from "axios";
const host = process.env.REACT_APP_API_HOSTNAME;
const port = process.env.REACT_APP_API_PORT;
// const baseURL = `http://${host}:${port}`;
const baseURL = " http://localhost:3000";
console.log("API baseURL: ", baseURL);

export const api = axios.create({ baseURL: baseURL });

/////////////
// ids
export const ids = {
  create(): string {
    return Date.now().toString();
  },
};
