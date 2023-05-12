import { useEffect, useState } from "react";
import * as client from "../clients/restaurant";

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
    <div>
      <h1>Restaurant list</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <a href={`/restaurants/${restaurant.id}`}>{restaurant.name}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RestaurantList;
