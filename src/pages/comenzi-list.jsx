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
    const [orders, setOrders] = useState([]);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        client.getAllOrders().then((response) => {
            setOrders(response.data);
            setIsLoading(false);
        });
    }, []);

    return (
        <div className="order-list-main-container">
            {/* navbar */}
            <Navbar />
            {/* navbar */}
            <div className="order-list">
                <div className="order-list-title">
                    <h1>Order list</h1>
                </div>
                <div className="order-list-content">
                    {isLoading ? (
                        <img src={loading} alt="Loading..." />
                    ) : (
                        <div className="order-cards">
                            {orders.map((order) => (
                                <li key={order.id}>
                                    <div className="order-card">
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
                                                href={`/restaurants/${order.id}`}
                                            >
                                                {order.name}
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

export default RestaurantList;
