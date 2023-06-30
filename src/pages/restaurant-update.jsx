import "../style/restaurant-create.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { AiTwotonePhone } from "react-icons/ai";
import * as restaurantClient from "../clients/restaurant";
import Navbar from "../components/navbar-customer";

export default function RestaurantUpdate() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        restaurantClient.getById(id).then((response) => {
            setName(response.data.name);
            setAddress(response.data.address);
            setPhoneNumber(response.data.phoneNumber);
        });
    }, [id]);

    const updateRestaurant = async () => {
        if (
            name.trim() === "" ||
            address.trim() === "" ||
            phoneNumber.trim() === ""
        ) {
            alert("Please fill in all fields before submitting.");
            return;
        }
        await restaurantClient.updateRestaurant(id, {
            name,
            address,
            phoneNumber,
        });

        navigate("/restaurants/myRestaurant");
    };

    return (
        <div className="restaurant-create-container">
            <Navbar />
            <div className="restaurant-create-content">
                <h2>Update your restaurant</h2>
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

                    <button type="submit" onClick={updateRestaurant}>
                        Update restaurant
                    </button>
                </div>
            </div>
        </div>
    );
}
