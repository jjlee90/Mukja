import axios from "axios";

let baseURL;

if (process.env.NODE_ENV === "development") {
  // Running locally
  baseURL = "http://localhost:3001/api";
} else {
  // Running on Netlify
  baseURL = "/.netlify/functions";
}

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-type": "application/json",
  },
});

export default api;
