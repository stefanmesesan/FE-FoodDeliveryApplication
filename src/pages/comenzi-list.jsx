import { useEffect, useState } from "react";
import * as client from "../clients/users.js";
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

const OrderList = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        client.getAll().then((response) => {
            setOrders(response.data);
            setIsLoading(false);
        });
    }, []);

    return (
        <div className="accounts-list-main-container">
            <Navbar />
            <div className="accounts-list">
                <div className="accounts-list-title">
                    <h1>Orders list</h1>
                </div>
            </div>
            <div className="accounts-list-content">
                {isLoading ? (
                    <img src={loading} alt="Loading..." />
                ) : (
                    <div className="accounts-cards">
                        {orders.map((order) => (
                            <li key={order.id}>
                                <div className="accounts-card">
                                    <img src={defaultImage} alt="image" />
                                    <p>{order.status}</p>
                                    <p>{order.totalPrice}</p>
                                    <p>{order.createdAt}</p>
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
