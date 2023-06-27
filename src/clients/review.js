import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const getAllForRestaurant = (restaurantId) => {
  return axios.get(BASE_URL + "/restaurants/reviews/" + restaurantId,  {
    headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
    }
  });
};


export const create = (restaurantId, newReview) => {
  return axios.put(BASE_URL + "/restaurants/reviews/" + restaurantId, newReview, {
    headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
    }
  });
};
