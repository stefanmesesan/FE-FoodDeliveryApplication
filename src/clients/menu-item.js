import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const getAllForRestaurant = (restaurantId) => {
  return axios.get(BASE_URL + "/menuItemController/" + restaurantId);
};