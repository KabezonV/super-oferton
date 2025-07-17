// Vendors
import axios from "axios";

const BASE_URL = "https://api.jsonbin.io/";
const api = axios.create({ baseURL: BASE_URL });

export { api };
