import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const getAll = () => {
    return axios.get(BASE_URL + "/users",  {
      headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
      }
    });
  };
  
  export const deleteUser = (id) => {
    return axios.delete(BASE_URL + "/users/" + id, {
      headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
      }
    });
  }
  
  export const updateUser = (id, newUser) => {
    return axios.put(BASE_URL + "/users/" + id, newUser, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
        }
    });
  }

  export const getById = (id) => {
    return axios.get(BASE_URL + "/users/" + id, {
      headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
      }
    });
  };