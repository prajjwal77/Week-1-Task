import axios from "axios";
import { BASE_URL } from "../constants/config";

export const loginUser = (data) =>
  axios.post(`${BASE_URL}/login`, data).then(res => res.data);

export const signupUser = (data) =>
  axios.post(`${BASE_URL}/signup`, data);
