import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const getAll = () => {
    return axios.get(BASE_URL + "/orders",  {
      headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
      }
    });
  };

  export const getMyOrders = () => {
    return axios.get(BASE_URL + "/orders/myOrders",  {
      headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
      }
    });
  };

  export const getCancelledOrders = () => {
    return axios.get(BASE_URL + "/orders/admin",  {
      headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
      }
    });
  };

  export const getById = (id) => {
    return axios.get(BASE_URL + "/orders/" + id, {
      headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
      }
    });
  };

  export const create = (newOrder) => {
    return axios.post(BASE_URL + "/orders/placeOrder", newOrder, {
      headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
      }
    });
  };
  
  export const deleteOrder = (id) => {
    return axios.delete(BASE_URL + "/orders/" + id, {
      headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
      }
    });
  };
  
  export const updateOrder = (id) => {
    return axios.put(BASE_URL + "/users/" + id, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
        }
  });
}