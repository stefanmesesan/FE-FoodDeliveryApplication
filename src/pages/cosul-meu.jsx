import { useState } from "react";
import "../style/cos.css";
import { MdDelete } from "react-icons/md";
import Navbar from "../components/navbar";
import Home from "../components/home";
import Logo from "../components/logo";

export default function Cos() {
    const [counter, setCounter] = useState(1);

    function increaseQuantity() {
        setCounter((counter) => counter + 1);
    }
    function decreaseQuantity() {
        if (counter > 1) {
            setCounter((counter) => counter - 1);
        }
    }

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
                    <div className="items-content">
                        <div className="item">
                            <p className="item-text">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Impasd fas dfas dfas dfasd
                                fasd fsad fasd fedit minima debiasd fasd fasdf
                                asdf asf asdftis architecfedit minima debiasd
                                fasd fasdf asdf asf asdftis architecfedit minima
                                debiasd fasd fasdf asdf asf asdftis architecto
                                qusimus commodi. Nulla, qui expedita!
                            </p>

                            <div className="quantity-price-remove">
                                <div className="quantity-price">
                                    <div className="quantity-container">
                                        <div
                                            onClick={decreaseQuantity}
                                            className="quantity-btn"
                                        >
                                            -
                                        </div>
                                        <div>{counter}</div>
                                        <div
                                            onClick={increaseQuantity}
                                            className="quantity-btn"
                                        >
                                            +
                                        </div>
                                    </div>
                                    <div className="price">
                                        <p>32 </p>
                                        <p>Lei</p>
                                    </div>
                                </div>
                                <MdDelete className="remove-item" />
                            </div>
                        </div>
                    </div>
                    <div className="cos-info">
                        <div className="total-price">
                            <p>Total comanda:</p>
                            <div className="price">
                                <p>200</p>
                                <p>Lei</p>
                            </div>
                        </div>
                        <a href="/comandaPlasata">
                            <button className="cart-btn">
                                Trimite comanda
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
