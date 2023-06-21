import { useEffect, useState } from "react";
import * as client from "../clients/restaurant";
import "../style/restaurant-list.css";
import "../style/global.css";
import loading from "../assets/loading.gif";
import defaultImage from "../assets/cardImage.png";
import Navbar from "../components/navbar";
import { AiOutlineStar, AiFillStar, AiFillCaretDown } from "react-icons/ai";
import { VscSettings } from "react-icons/vsc";

{
    /* npm install react-icons */
}

const RestaurantList = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [restaurants, setRestaurants] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const [rating, setRating] = useState(0);
    const [star, setStar] = useState(0);

    useEffect(() => {
        setIsLoading(true);
        client.getAll().then((response) => {
            setRestaurants(response.data);
            setIsLoading(false);
        });
    }, []);

    function handleFilterClick() {
        setIsActive(!isActive);
        setStar(0);
    }

    const handleStarHover = (index) => {
        setRating(index + 1);
    };

    const handleStarClick = (index) => {
        setStar(index + 1);
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
                                        <img src={defaultImage} alt="image" />
                                    </a>
                                    <div className="restaurant-card-title-rating">
                                        <a
                                            href={`/restaurants/${restaurant.id}`}
                                        >
                                            {restaurant.name}
                                        </a>
                                        {/* <p>{rating} <AiOutlineStar/></p> */}
                                        <p>
                                            {restaurant.rating} <AiFillStar />
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default RestaurantList;
