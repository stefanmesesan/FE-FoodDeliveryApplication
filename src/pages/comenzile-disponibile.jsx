import { useState, useEffect } from "react";
import * as ordersClient from "../clients/orders";
import NavbarDelivery from "../components/navbar-delivery";
import "../style/comenzile-mele.css";

export default function ComenzileMele() {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        ordersClient.getOrdersToDeliver().then((response) => {
            setOrders(response.data);
        });
    }, []);

    const pickUpOrder = id => {
        ordersClient.pickupOrder(id).then(() => {
            ordersClient.getOrdersToDeliver().then((response) => {
                setOrders(response.data);
            });
        })
    }

    const deliverOrder = id => {
        ordersClient.deliverOrder(id).then(() => {
            ordersClient.getOrdersToDeliver().then((response) => {
                setOrders(response.data);
            });
        })
    }

    return (
        <div className="comenzile-mele-container">
            <NavbarDelivery />
            <div className="comenzile-mele-content">
                <h2>Comenzile disponibile</h2>
                {orders.map((order) => (
                    <div className="comenzi-disponibile-wrap" key={order.id}>
                        <div className="comanda-card">
                            <p>ID: {order.id}</p>
                            <p>Pret: {order.totalPrice}</p>
                            <p>Status: {order.orderStatus}</p>
                        </div>
                        <div className="comanda-btn">
                            <button onClick={() => pickUpOrder(order.id)}>Preia comanda</button>
                            <button onClick={() => deliverOrder(order.id)}>Comanda livrata</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
