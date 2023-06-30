import { useEffect, useState } from "react";
import * as client from "../clients/orders";
import loading from "../assets/loading.gif";
import "../style/global.css";
import Navbar from "../components/navbar-customer";
import "../style/comenzile-mele.css";
import { useParams } from "react-router-dom";

export default function ComenzileMele() {
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState("");
    const [orders, setOrders] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        client.getMyOrders().then((response) => {
            setOrders(response.data);
        });
    }, []);

    const cancelOrder = async (orderId) => {
        setIsLoading(true);

        try {
            await client.updateOrder(orderId);
            client.getMyOrders().then((response) => {
                setOrders(response.data);
            });
        } catch (error) {
            console.error("Error cancelling order:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="comenzile-mele-container">
            <Navbar />
            <div className="comenzile-mele-content">
                <h2>Comenzile mele</h2>
                <div className="comenzi-wrapper">
                    {orders.map((order) => (
                        <li key={order.id}>
                            <div className="comanda-card">
                                <div>
                                    <p>ID comanda: {order.id}</p>
                                    <p>PRET: {order.totalPrice} </p>
                                    <p>STATUS: {order.orderStatus}</p>
                                    <p>DATA PLASARII: {order.createdAt}</p>
                                    <div className="comanda-btn">
                                        <button
                                            onClick={() =>
                                                cancelOrder(order.id)
                                            }
                                        >
                                            Anulează comanda
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </div>
            </div>
        </div>
    );
}
