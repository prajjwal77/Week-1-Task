import axios from "axios";
import { BASE_URL } from "../constants/config";

export const askAI = (query) =>
  axios.post(`${BASE_URL}/ai-search`, { query })
       .then(res => res.data.answer);
