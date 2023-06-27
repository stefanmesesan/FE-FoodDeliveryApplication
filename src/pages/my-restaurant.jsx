import { useEffect, useState } from "react";
import * as client from "../clients/restaurant";
import "../style/restaurant-list.css";
import "../style/global.css";
import loading from "../assets/loading.gif";
import defaultImage from "../assets/cardImage.png";
import Navbar from "../components/navbar-customer";
import { AiOutlineStar, AiFillStar, AiFillCaretDown } from "react-icons/ai";
import { VscSettings } from "react-icons/vsc";

const MyRestaurant = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        client.getMyRestaurant().then((response) => {
            setRestaurants(response.data);
            setIsLoading(false);
        });
    }, []);

    return (
        <div className="restaurant-list-main-container">
            {/* navbar */}
            <Navbar />
            {/* navbar */}
            <div className="restaurant-list">
                <div className="restaurant-list-title">
                    <h1>My Restaurant</h1>
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

export default MyRestaurant;
