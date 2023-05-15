import { useEffect, useState } from "react";
import * as client from "../clients/restaurant";
import "../style/restaurant-list.css";
import "../style/global.css";
import loading from "../assets/loading.gif";
import {BsSearch, BsPerson} from 'react-icons/bs'
import {SlLocationPin} from "react-icons/sl"
import {IoCartOutline, IoAdd} from "react-icons/io5"

const RestaurantList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    client.getAll().then((response) => {
      setRestaurants(response.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="restaurant-list-main-container">
      {/* navbar */}
      <div className="restaurant-list-nav-bar">
        <div className="restaurant-list-nav-bar-center">
          <div className="restaurant-list-nav-bar-left">
            <div>
              <h1 className="nav-bar-logo">FUUD|EP</h1>
            </div>
            <div className="nav-bar-input">
              {/* <SlLocationPin onClick={}/> */}
              <SlLocationPin/>
              <input className="restaurant-address-input" type="text" placeholder="Adauga adresa ta"/>
              <IoAdd className="nav-bar-icon"/>
            </div>
            <div className="nav-bar-input">
              <input className="restaurant-list-search" type="text" placeholder="Cauta in restaurante"/> 
              <BsSearch className="nav-bar-icon"/>
            </div>
          </div>
          <div className="restaurant-list-nav-bar-right">
            <div className="nav-bar-user-profile">
              <BsPerson/>
              <p>Contul meu</p></div>
            <div className="nav-bar-user-profile">
              <IoCartOutline/>
              <p>Cos</p></div>
          </div>
        </div>
      </div>
      {/* navbar */}
      <div className="restaurant-list">
        <h1>Restaurant list</h1>
        <div className="restaurant-list-content">
          {isLoading ? (
            <img src={loading} alt="Loading..." />
          ) : (
            <ul>
              {restaurants.map((restaurant) => (
                <li key={restaurant.id}>
                  <a href={`/restaurants/${restaurant.id}`}>
                    {restaurant.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantList;
