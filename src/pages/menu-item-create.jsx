import "../style/restaurant-create.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { AiTwotonePhone } from "react-icons/ai";
import * as menuItem from "../clients/menu-item";
import Navbar from "../components/navbar";

export default function MenuItemCreate() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [spicy, setSpicy] = useState(false);
    const [vegan, setVegan] = useState(false);
    const [vegetarian, setVegetarian] = useState(false);
    const navigate = useNavigate();

    const emptyFields = async () => {
        if (
            name.trim() === "" ||
            description.trim() === "" ||
            price.trim() === "" ||
            spicy.trim() === "" ||
            vegan.trim() === "" ||
            vegetarian.trim() === ""
        ) {
            alert("Please fill in all fields before submitting.");
            return;
        }
        const response = await menuItem.create({
            name,
            description,
            price,
            spicy,
            vegan,
            vegetarian,
        });
        const menuItemId = response.data.id;

        navigate("/menuItems/" + menuItemId);
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
                                placeholder="Description"
                                value={description}
                                onChange={(event) =>
                                    setDescription(event.currentTarget.value)
                                }
                            />
                        </div>
                    </div>
                    <div className="restaurant-create-input restaurant-create-item restaurant-create-phone-number">
                        <div className="info-icon">
                            <AiTwotonePhone />
                            <input
                                type="number"
                                placeholder="price"
                                value={price}
                                onChange={(event) =>
                                    setPrice(event.currentTarget.value)
                                }
                            />
                        </div>
                    </div>
                    <div className="restaurant-create-input restaurant-create-item restaurant-create-phone-number">
                        <div className="info-icon">
                            <AiTwotonePhone />
                            <label>
                                <input
                                    type="checkbox"
                                    checked={spicy}
                                    onChange={() => setSpicy(!spicy)}
                                />
                                Spicy
                            </label>
                        </div>
                    </div>
                    <div className="restaurant-create-input restaurant-create-item restaurant-create-phone-number">
                        <div className="info-icon">
                            <AiTwotonePhone />
                            <label>
                                <input
                                    type="checkbox"
                                    checked={vegan}
                                    onChange={() => setVegan(!vegan)}
                                />
                                Vegan
                            </label>
                        </div>
                    </div>
                    <div className="restaurant-create-input restaurant-create-item restaurant-create-phone-number">
                        <div className="info-icon">
                            <AiTwotonePhone />
                            <label>
                                <input
                                    type="checkbox"
                                    checked={vegetarian}
                                    onChange={() => setVegetarian(!vegetarian)}
                                />
                                Vegetarian
                            </label>
                        </div>
                    </div>

                    <button type="submit" onClick={emptyFields}>
                        Create Menu Item
                    </button>
                </div>
            </div>
        </div>
    );
}
