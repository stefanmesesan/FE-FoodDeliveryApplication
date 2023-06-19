import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as restaurantClient from "../clients/restaurant";
import * as menuItemClient from "../clients/menu-item";
import Navbar from "../components/navbar";
import "../style/restaurant-detail.css";
import loading from "../assets/loading.gif";
import defaultImage from "../assets/cardImage.png";
import { BsTelephone } from "react-icons/bs";
import { GrMap } from "react-icons/gr";
import pizza from "../assets/pizza.jpg";

const RestaurantDetail = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [restaurant, setRestaurant] = useState({});
    const [menuItems, setMenuItems] = useState([]);
    const [selectedMenuItem, setSelectedMenuItem] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        setIsLoading(true);
        Promise.all([
            restaurantClient.getById(id),
            menuItemClient.getAllForRestaurant(id),
        ]).then(([restaurantResponse, menuItemsResponse]) => {
            setRestaurant(restaurantResponse.data);
            setMenuItems(menuItemsResponse.data);
            setIsLoading(false);
        });
    }, [id]);

    return (
        <div className="restaurant-detail-main-container">
            <Navbar />
            <div className="restaurant-detail-content">
                {isLoading ? (
                    <img src={loading} alt="Loading..." />
                ) : (
                    <div className="restaurant-detail">
                        <img src={defaultImage} alt="image" />
                        <div className="restaurant-detail-info">
                            <p className="restaurant-detail-name">
                                {restaurant.name}
                            </p>
                            <div className="restaurant-contact">
                                <p>
                                    <GrMap />
                                    {restaurant.address}
                                </p>
                                <p>
                                    <BsTelephone />
                                    {restaurant.phoneNumber}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="restaurant-food">
                <p className="restaurant-food-title">Food</p>
                <div className="restaurant-food-content">
                    {isLoading ? (
                        <img src={loading} alt="Loading..." />
                    ) : (
                        <div className="restaurant-food-cards">
                            {menuItems.map((menuItem) => (
                                <li key={menuItem.id} onClick={() => setSelectedMenuItem(menuItem)}>
                                    <div className="restaurant-food-card">
                                        <div className="restaurant-food-card-details">
                                            <p>{menuItem.name}</p>
                                            <p className="restaurant-food-card-description">
                                                {menuItem.description}
                                            </p>
                                            <p className="restaurant-food-card-price">
                                                {menuItem.price} Lei
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {!!selectedMenuItem && (
                <div className="menuItemModal">
                    <h1>{selectedMenuItem.name}</h1>
                    <p>{selectedMenuItem.description}</p>
                    <button onClick={() => setSelectedMenuItem(null)}>
                        Close modal
                    </button>
                </div>
            )}
        </div>
    );
};

export default RestaurantDetail;
