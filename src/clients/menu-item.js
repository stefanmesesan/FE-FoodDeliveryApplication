import axios from "axios";

const BASE_URL = "http://localhost:8080";


export const getByRestaurantId = (id) => {
  return axios.get(BASE_URL + "/menuItems/getAll/" + id, {
    headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
    }
  });
};

export const getById = (id) => {
  return axios.get(BASE_URL + "/menuItems/" + id, {
    headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
    }
  });
};

export const create = (newMenuItem) => {
  return axios.post(BASE_URL + "/menuItems", newMenuItem, {
    headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
    }
  });
};

export const deleteMenuItem = (id) => {
  return axios.delete(BASE_URL + "/menuItems/" + id, {
    headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
    }
  });
};

export const updateMenuItem = (id) => {
  return axios.put(BASE_URL + "/menuItem/" + id, {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
      }
});
}