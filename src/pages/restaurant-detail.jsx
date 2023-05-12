import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as client from "../clients/restaurant";

const RestaurantDetail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [restaurant, setRestaurant] = useState({});

  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    client.getById(id).then((response) => {
      setRestaurant(response.data);
      setIsLoading(false);
    });
  }, [id]);

  return (
    <div>
      <h1>Restaurant detail</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>
            <strong>Name:</strong> {restaurant.name}
          </p>
          <p>
            <strong>Address:</strong> {restaurant.address}
          </p>
          <p>
            <strong>Phone:</strong> {restaurant.phoneNumber}
          </p>
        </div>
      )}
    </div>
  );
};

export default RestaurantDetail;
