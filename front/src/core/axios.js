import axios from "axios";

axios.defaults.baseURL = "http://localhost:3003";

window.axios = axios;

export default axios;