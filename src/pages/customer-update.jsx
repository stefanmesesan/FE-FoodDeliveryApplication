import "../style/restaurant-create.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { AiTwotonePhone } from "react-icons/ai";
import * as usersClient from "../clients/users";
import Navbar from "../components/navbar-customer";

export default function CustomerUpdate() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        usersClient.getById(id).then((response) => {
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setAddress(response.data.address);
            setPhoneNumber(response.data.phoneNumber);
            setPassword(response.data.password);
        });
    }, [id]);

    const updateCustomer = async () => {
        if (
            firstName.trim() === "" ||
            address.trim() === "" ||
            phoneNumber.trim() === "" ||
            lastName.trim() === "" ||
            password.trim() === ""
        ) {
            alert("Please fill in all fields before submitting.");
            return;
        }
        await usersClient.updateUser(id, {
            firstName,
            lastName,
            address,
            phoneNumber,
            password,
        });

        navigate("/restaurants");
    };

    return (
        <div className="restaurant-create-container">
            <Navbar />
            <div className="restaurant-create-content">
                <h2>Update your account</h2>
                <div className="restaurant-create-info-container">
                    <div className="restaurant-create-input restaurant-create-item restaurant-create-name">
                        <div className="info-icon">
                            <BsFillPersonFill />
                            <input
                                placeholder="FirstName"
                                value={firstName}
                                onChange={(event) =>
                                    setFirstName(event.currentTarget.value)
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
                    <div className="restaurant-create-input restaurant-create-item restaurant-create-address">
                        <div className="info-icon">
                            <MdLocationOn />
                            <input
                                placeholder="LastName"
                                value={lastName}
                                onChange={(event) =>
                                    setLastName(event.currentTarget.value)
                                }
                            />
                        </div>
                    </div>
                    <div className="restaurant-create-input restaurant-create-item restaurant-create-address">
                        <div className="info-icon">
                            <MdLocationOn />
                            <input
                                placeholder="password"
                                value={password}
                                onChange={(event) =>
                                    setPassword(event.currentTarget.value)
                                }
                            />
                        </div>
                    </div>

                    <button type="submit" onClick={updateCustomer}>
                        Update account
                    </button>
                </div>
            </div>
        </div>
    );
}
