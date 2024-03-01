import axios from "axios";

let baseURL;

if (process.env.NODE_ENV === "production") {
  // Running locally
  baseURL = "http://localhost:3001/api";
  // baseURL = "/.client/functions";
} else {
  // Running on Netlify
  baseURL = "http://localhost:3001/api"; //"http://ec2-18-209-7-174.compute-1.amazonaws.com:8080/api"; //"https://mukja.netlify.app/.netlify/functions";
}

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-type": "application/json",
  },
});

export default api;
