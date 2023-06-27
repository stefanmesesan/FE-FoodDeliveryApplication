import { useEffect, useState } from "react";
import * as client from "../clients/restaurant";
import "../style/restaurant-list.css";
import "../style/global.css";
import loading from "../assets/loading.gif";
import defaultImage from "../assets/cardImage.png";
import Navbar from "../components/navbar-customer";
import { AiFillStar } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";

const RestaurantList = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        client.getAllForAdmin().then((response) => {
            setRestaurants(response.data);
            setIsLoading(false);
        });
    }, []);

    const handleDeleteRestaurant = (id) => {
        const answer = window.confirm("Are you sure you want to delete?");
        if (answer === false) return;

        setIsLoading(true);
        client
            .deleteRestaurant(id)
            .then(() => {
                client.getAllForAdmin().then((response) => {
                    setRestaurants(response.data);
                    setIsLoading(false);
                });
            })
            .catch((error) => {
                console.error("Error deleting restaurant:", error);
                // Tratați eroarea în mod corespunzător
                setIsLoading(false);
            });
    };

    return (
        <div className="restaurant-list-main-container">
            {/* navbar */}
            <Navbar />
            {/* navbar */}
            <div className="restaurant-list">
                <div className="restaurant-list-title">
                    <h1>Restaurant list</h1>
                </div>
                <div className="restaurant-list-content">
                    {isLoading ? (
                        <img src={loading} alt="Loading..." />
                    ) : (
                        <div className="restaurant-cards">
                            {restaurants.map((restaurant) => (
                                <li key={restaurant.id}>
                                    <div className="restaurant-card">
                                        <a
                                            href={`/restaurants/${restaurant.id}`}
                                            className="restaurant-card-image"
                                        >
                                            <img
                                                src={defaultImage}
                                                alt="image"
                                            />
                                        </a>
                                        <div className="restaurant-card-title-rating">
                                            <a
                                                href={`/restaurants/${restaurant.id}`}
                                            >
                                                <p className="restaurant-name">
                                                    {restaurant.name}
                                                </p>
                                            </a>
                                            <p>
                                                {restaurant.rating}{" "}
                                                <AiFillStar />
                                            </p>
                                        </div>
                                        <button
                                            onClick={() =>
                                                handleDeleteRestaurant(
                                                    restaurant.id
                                                )
                                            }
                                        >
                                            <BiTrash />
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RestaurantList;
