import { useEffect, useState } from "react";
import * as client from "../clients/users.js";
import "../style/restaurant-list.css";
import "../style/global.css";
import loading from "../assets/loading.gif";
import defaultImage from "../assets/cardImage.png";
import Navbar from "../components/navbar";
import { AiOutlineStar, AiFillStar, AiFillCaretDown } from "react-icons/ai";
import { VscSettings } from "react-icons/vsc";

const AccountList = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        client.getAll().then((response) => {
            setUsers(response.data);
            setIsLoading(false);
        });
    }, []);

    return (
        <div className="accounts-list-main-container">
            <Navbar />
            <div className="accounts-list">
                <div className="accounts-list-title">
                    <h1>Accounts list</h1>
                </div>
            </div>
            <div className="accounts-list-content">
                {isLoading ? (
                    <img src={loading} alt="Loading..." />
                ) : (
                    <div className="accounts-cards">
                        {users.map((user) => (
                            <li key={user.id}>
                                <div className="accounts-card">
                                    <img src={defaultImage} alt="image" />
                                    <p>{user.firstName}</p>
                                    <p>{user.lastName}</p>
                                    <p>{user.email}</p>
                                    <p>{user.phoneNumber}</p>
                                    <p>{user.address}</p>
                                    <p>{user.role}</p>
                                </div>
                            </li>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AccountList;
