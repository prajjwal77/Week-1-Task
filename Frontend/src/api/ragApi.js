import axios from "axios";
import { BASE_URL } from "../constants/config";

export const askRag = async (query) => {
  const response = await axios.post(`${BASE_URL}/ask`, {
    query
  });

  return response.data.answer;
};
