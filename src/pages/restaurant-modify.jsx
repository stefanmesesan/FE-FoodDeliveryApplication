import React, { useState } from "react";
import axios from "axios";
import { BiPencil } from "react-icons/bi";

const RestaurantModify = () => {
    const [isEditingName, setIsEditingName] = useState(false);
    const [isEditingAddress, setIsEditingAddress] = useState(false);
    const [isEditingPhoneNumber, setIsEditingPhoneNumber] = useState(false);

    const handleUpdateRestaurant = () => {
        const updatedRestaurant = {
            name: restaurantName,
            address: address,
            phoneNumber: phoneNumber,
        };

        // Efectuăm cererea PUT către server
        axios
            .put(BASE_URL + "/restaurants/" + restaurantId, updatedRestaurant, {
                headers: {
                    Authorization:
                        "Bearer " + localStorage.getItem("accessToken"),
                },
            })
            .then((response) => {
                console.log("Restaurant updated successfully:", response.data);
                // Adăugați aici orice acțiuni suplimentare după actualizarea restaurantului
            })
            .catch((error) => {
                console.error("Error updating restaurant:", error);
                // Tratați eroarea în mod corespunzător
            });
    };

    const handleEditName = () => {
        setIsEditingName(true);
    };

    const handleEditAddress = () => {
        setIsEditingAddress(true);
    };

    const handleEditPhoneNumber = () => {
        setIsEditingPhoneNumber(true);
    };

    return (
        <div className="restaurant-create-container">
            <div className="restaurant-create-navbar">
                <Logo />
                <Home />
                <CosulMeu />
            </div>
            <div className="restaurant-create-content">
                <div className="restaurant-create-info-container">
                    <div className="restaurant-create-item restaurant-create-name">
                        <div className="info-icon">
                            {isEditingName ? (
                                <input
                                    type="text"
                                    value={restaurantName}
                                    onChange={(e) =>
                                        setRestaurantName(e.target.value)
                                    }
                                />
                            ) : (
                                <span>{restaurantName}</span>
                            )}
                        </div>
                        {isEditingName ? (
                            <BiPencil onClick={handleUpdateRestaurant} />
                        ) : (
                            <BiPencil onClick={handleEditName} />
                        )}
                    </div>
                    <div className="restaurant-create-item restaurant-create-address">
                        <div className="info-icon">
                            {isEditingAddress ? (
                                <input
                                    type="text"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            ) : (
                                <span>{address}</span>
                            )}
                        </div>
                        {isEditingAddress ? (
                            <BiPencil onClick={handleUpdateRestaurant} />
                        ) : (
                            <BiPencil onClick={handleEditAddress} />
                        )}
                    </div>
                    <div className="restaurant-create-item restaurant-create-phone-number">
                        <div className="info-icon">
                            {isEditingPhoneNumber ? (
                                <input
                                    type="text"
                                    value={phoneNumber}
                                    onChange={(e) =>
                                        setPhoneNumber(e.target.value)
                                    }
                                />
                            ) : (
                                <span>{phoneNumber}</span>
                            )}
                        </div>
                        {isEditingPhoneNumber ? (
                            <BiPencil onClick={handleUpdateRestaurant} />
                        ) : (
                            <BiPencil onClick={handleEditPhoneNumber} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantModify;
