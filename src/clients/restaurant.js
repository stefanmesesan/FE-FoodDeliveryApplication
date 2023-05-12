import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const getAll = () => {
  return axios.get(BASE_URL + "/restaurantController");
};

export const getById = (id) => {
  return axios.get(BASE_URL + "/restaurantController/" + id);
};

export const create = (newRestaurant) => {
  return axios.post(BASE_URL + "/restaurantController", newRestaurant);
};
