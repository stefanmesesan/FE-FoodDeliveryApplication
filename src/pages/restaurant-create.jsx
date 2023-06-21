import "../style/restaurant-create.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { AiTwotonePhone } from "react-icons/ai";
import * as restaurantClient from "../clients/restaurant";
import Navbar from "../components/navbar";

export default function RestaurantCreate() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const navigate = useNavigate();

    const emptyFields = async () => {
        if (
            name.trim() === "" ||
            address.trim() === "" ||
            phoneNumber.trim() === ""
        ) {
            alert("Please fill in all fields before submitting.");
            return;
        }
        const response = await restaurantClient.create({
            name,
            address,
            phoneNumber,
        });
        const restaurantId = response.data.id;

        navigate("/restaurants/" + restaurantId);
    };

    return (
        <div className="restaurant-create-container">
            <Navbar />
            <div className="restaurant-create-content">
                <h2>Add your restaurant</h2>
                <div className="restaurant-create-info-container">
                    <div className="restaurant-create-input restaurant-create-item restaurant-create-name">
                        <div className="info-icon">
                            <BsFillPersonFill />
                            <input
                                placeholder="Name"
                                value={name}
                                onChange={(event) =>
                                    setName(event.currentTarget.value)
                                }
                            />
                        </div>
                    </div>
                    <div className="restaurant-create-input restaurant-create-item restaurant-create-address">
                        <div className="info-icon">
                            <MdLocationOn />
                            <input
                                placeholder="Address"
                                value={address}
                                onChange={(event) =>
                                    setAddress(event.currentTarget.value)
                                }
                            />
                        </div>
                    </div>
                    <div className="restaurant-create-input restaurant-create-item restaurant-create-phone-number">
                        <div className="info-icon">
                            <AiTwotonePhone />
                            <input
                                type="number"
                                placeholder="PhoneNumber"
                                value={phoneNumber}
                                onChange={(event) =>
                                    setPhoneNumber(event.currentTarget.value)
                                }
                            />
                        </div>
                    </div>

                    <button type="submit" onClick={emptyFields}>
                        Create restaurant
                    </button>
                </div>
            </div>
        </div>
    );
}
