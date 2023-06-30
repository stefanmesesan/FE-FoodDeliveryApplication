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

  export const getOrdersToDeliver = () => {
    return axios.get(BASE_URL + "/orders/ordersToDeliver",  {
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
  
  export const pickupOrder = (id) => {
    return axios.put(BASE_URL + "/orders/pickUpOrder/" + id, {}, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
        }
  });
  }

  export const deliverOrder = (id) => {
    return axios.put(BASE_URL + "/orders/deliverOrder" + id, {}, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
        }
  });
  }