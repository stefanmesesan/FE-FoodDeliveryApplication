
import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const placeOrder = (restaurantId, menuItemIds, quantities) => {
  return axios.post(BASE_URL + "/orders/placeOrder/" + restaurantId, {menuItemIds, quantities}, {
    headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
    }
  });
};

