
import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const register = (role, data) => {
  return axios.post(BASE_URL + "/auth/register/" + role, data);
};

export const login = (data) => {
  return axios.post(BASE_URL + "/auth/login", data);
};
