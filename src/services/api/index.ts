import axios from "axios";
import md5 from "md5";

export const PUBLIC_KEY = "7a166a8fc69b0145a9fbf6fd9a085f42";
export const PRIVATE_KEY = "2a749b99b9824dc0cca02d194a265439a08a189c";

let API_HOST = "https://gateway.marvel.com:443";

const API_BASE_URL = `${API_HOST}/v1/public`;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    ts: new Date().getTime(),
    apikey: PUBLIC_KEY,
    hash: md5(new Date().getTime() + PRIVATE_KEY + PUBLIC_KEY),
  },
});

export default api;
