import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const getAll = () => {
  return axios.get(BASE_URL + "/restaurants",  {
    headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
    }
  });
};

export const search = (searchTerm) => {
  return axios.get(BASE_URL + "/restaurants/search?name=" + searchTerm,  {
    headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
    }
  });
};

export const getById = (id) => {
  return axios.get(BASE_URL + "/restaurants/" + id, {
    headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
    }
  });
};

export const create = (newRestaurant) => {
  return axios.post(BASE_URL + "/restaurants", newRestaurant, {
    headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
    }
  });
};

export const deleteRestaurant = (id) => {
  return axios.delete(BASE_URL + "/restaurants/" + id, {
    headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
    }
  });
}

export const updateRestaurant = (restaurant, newRestaurant) => {
  return axios.put(BASE_URL + "/restaurants/" + restaurant.id, newRestaurant, {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
      }
  }
  )
}
