import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../style/cos.css";
import { MdDelete } from "react-icons/md";
import Navbar from "../components/navbar-customer";
import Home from "../components/home";
import Logo from "../components/logo";
import * as orderClient from "../clients/order";
import { CartContext } from "../contexts/cart";

export default function Cos() {
    const {
        cartItems,
        increaseQuantity,
        decreaseQuantity,
        deleteFromCart,
        clearCart,
        totalPrice,
    } = useContext(CartContext);

    const navigate = useNavigate();

    const placeOrder = () => {
        if (cartItems.length == 0) {
            alert("Cart is empty.");
            return;
        }

        const menuItemIds = cartItems.map((cartItem) => cartItem.menuItem.id);
        const quantities = cartItems.map((cartItem) => cartItem.quantity);

        const restaurantId = cartItems[0].menuItem.restaurantId;

        orderClient
            .placeOrder(restaurantId, menuItemIds, quantities)
            .then(() => {
                clearCart();
                navigate("/comandaPlasata");
            })
            .catch((error) => alert(error));
    };

    return (
        <div className="cos-container">
            <div className="cos-navbar">
                <Navbar />
            </div>
            <div className="cos-content">
                <div className="cos-header">
                    <h2>Produsele tale</h2>
                </div>
                <div className="items-container">
                    {cartItems.map((cartItem) => (
                        <div
                            className="items-content"
                            key={cartItem.menuItem.id}
                        >
                            <div className="item">
                                <p className="item-text">
                                    {cartItem.menuItem.name}
                                </p>

                                <p className="item-text">
                                    {cartItem.menuItem.description}
                                </p>

                                <div className="quantity-price-remove">
                                    <div className="quantity-price">
                                        <div className="quantity-container">
                                            <div
                                                onClick={() =>
                                                    decreaseQuantity(
                                                        cartItem.menuItem.id
                                                    )
                                                }
                                                className="quantity-btn"
                                            >
                                                -
                                            </div>
                                            <div>{cartItem.quantity}</div>
                                            <div
                                                onClick={() =>
                                                    increaseQuantity(
                                                        cartItem.menuItem.id
                                                    )
                                                }
                                                className="quantity-btn"
                                            >
                                                +
                                            </div>
                                        </div>
                                        <div className="price">
                                            <p>{cartItem.menuItem.price}</p>
                                            <p>Lei</p>
                                        </div>
                                    </div>
                                    <MdDelete
                                        className="remove-item"
                                        onClick={() =>
                                            deleteFromCart(cartItem.menuItem.id)
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="cos-info">
                        <div className="total-price">
                            <p>Total comanda:</p>
                            <div className="price">
                                <p>{Math.round(totalPrice * 100) / 100}</p>
                                <p>Lei</p>
                            </div>
                        </div>
                        <button
                            className="cart-btn"
                            onClick={() => placeOrder()}
                        >
                            Trimite comanda
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
