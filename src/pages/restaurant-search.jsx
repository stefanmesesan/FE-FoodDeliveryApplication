import { useEffect, useState } from "react";
import * as client from "../clients/restaurant";
import "../style/restaurant-list.css";
import "../style/global.css";
import loading from "../assets/loading.gif";
import defaultImage from "../assets/cardImage.png";
import Navbar from "../components/navbar";
import { useSearchParams } from "react-router-dom";
import { AiOutlineStar, AiFillStar, AiFillCaretDown } from "react-icons/ai";
import { VscSettings } from "react-icons/vsc";

const RestaurantSearch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [restaurants, setRestaurants] = useState([]);

    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("q");

    useEffect(() => {
        setIsLoading(true);
        client.search(query).then((response) => {
            setRestaurants(response.data);
            setIsLoading(false);
        });
    }, [query]);

    return (
        <div className="restaurant-list-main-container">
            <Navbar />
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
                                            {/* <p>{rating} <AiOutlineStar/></p> */}
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

export default RestaurantSearch;
