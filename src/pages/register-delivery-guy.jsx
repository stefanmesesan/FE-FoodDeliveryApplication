import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterDeliveryGuy() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (
            firstName.trim() === "" ||
            lastName.trim() === "" ||
            email.trim() === "" ||
            password.trim() === "" ||
            phoneNumber.trim() === "" ||
            address.trim() === ""
        ) {
            alert("Please fill in all fields");
            return;
        }
        navigate("/restaurants");
    };
    return (
        <div className="user-register-container">
            <div className="user-register-form">
                <p className="register-role">Delivery Guy</p>
                <form onSubmit={handleSubmit}>
                    <div className="user-register-inputs">
                        <div>
                            <p>first name</p>
                            <input
                                type="text"
                                placeholder="ex: Andrei"
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div>
                            <p>last name</p>
                            <input
                                type="text"
                                placeholder="ex: Popescu"
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div>
                            <p>email</p>
                            <input
                                type="email"
                                placeholder="ex: andreipopescu@gmail.com"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <p>password</p>
                            <input
                                type="password"
                                placeholder="********"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <p>phonenumber</p>
                            <input
                                type="tel"
                                placeholder="ex: 071234567"
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="role-select role-select-register">
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
